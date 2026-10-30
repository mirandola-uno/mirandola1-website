"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Search, SearchX, X } from "lucide-react";
import { Branca, CocaMember } from "@/lib/coca";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";

const BRANCHE: Record<
  Branca,
  { label: string; short: string; age?: string; accent: string; text: string; ring: string }
> = {
  coca: {
    label: "Capi Gruppo e Comunità Capi",
    short: "Co.Ca.",
    accent: "bg-agesci-violet",
    text: "text-white",
    ring: "data-[active=true]:border-agesci-violet",
  },
  lc: {
    label: "Branca Lupetti e Coccinelle",
    short: "L/C",
    age: "8 – 11 anni",
    accent: "bg-agesci-yellow",
    text: "text-agesci-violet-deep",
    ring: "data-[active=true]:border-agesci-yellow",
  },
  eg: {
    label: "Branca Esploratori e Guide",
    short: "E/G",
    age: "11 – 16 anni",
    accent: "bg-agesci-green",
    text: "text-white",
    ring: "data-[active=true]:border-agesci-green",
  },
  rs: {
    label: "Branca Rover e Scolte",
    short: "R/S",
    age: "16 – 21 anni",
    accent: "bg-agesci-red",
    text: "text-white",
    ring: "data-[active=true]:border-agesci-red",
  },
};

const BRANCHE_ORDER: Branca[] = ["coca", "lc", "eg", "rs"];

// lowercase and strip accents, so "nicolo" matches "Nicolò"
const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

const UnitBadge = ({ member, className }: { member: CocaMember; className?: string }) => (
  <span
    className={cn(
      "w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold",
      BRANCHE[member.branca].accent,
      BRANCHE[member.branca].text,
      className,
    )}
  >
    {member.unita}
  </span>
);

export const CocaDirectory = ({ members }: { members: CocaMember[] }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [branca, setBranca] = useState<Branca | null>(null);
  const [unita, setUnita] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // kept separate from selectedId, so the drawer content stays visible while it animates out
  const [drawerOpen, setDrawerOpen] = useState(false);

  // when filtering from the sticky toolbar, bring the results back into view
  const scrollToResults = () => {
    if ((rootRef.current?.getBoundingClientRect().top ?? 0) < 0) {
      rootRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filtered = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    return members.filter((member) => {
      if (branca && member.branca !== branca) return false;
      if (unita && member.unita !== unita) return false;
      const haystack = normalize(`${member.nome} ${member.cognome} ${member.ruolo} ${member.unita}`);
      return terms.every((term) => haystack.includes(term));
    });
  }, [members, branca, unita, query]);

  // units of a branca, in the order they appear in the data
  const unitsOf = (value: Branca) => [
    ...new Set(members.filter((member) => member.branca === value).map((member) => member.unita)),
  ];
  const brancaUnits = branca ? unitsOf(branca) : [];

  const openMember = (id: string) => {
    setSelectedId(id);
    setDrawerOpen(true);
  };

  const renderCard = (member: CocaMember, showUnit: boolean) => (
    <button
      key={member.id}
      type="button"
      onClick={() => openMember(member.id)}
      className="group flex flex-col overflow-hidden rounded-xl border bg-card text-left shadow-sm outline-none transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={member.imageSrc}
          alt={`${member.nome} ${member.cognome}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="font-sans text-base font-semibold leading-tight group-hover:text-primary">
          {member.nome} {member.cognome}
        </h4>
        <p className="text-sm text-muted-foreground">{member.ruolo}</p>
        {showUnit && <UnitBadge member={member} className="mt-auto" />}
      </div>
    </button>
  );

  const selected = members.find((member) => member.id === selectedId);
  const sameUnit = selected
    ? members.filter((member) => member.unita === selected.unita && member.id !== selected.id)
    : [];

  const filters: { value: Branca | null; label: string; count: number }[] = [
    { value: null, label: "Tutti", count: members.length },
    ...BRANCHE_ORDER.map((value) => ({
      value,
      label: BRANCHE[value].short,
      count: members.filter((member) => member.branca === value).length,
    })),
  ];

  return (
    <div ref={rootRef} className="flex flex-col gap-10 scroll-mt-20 md:scroll-mt-32">
      {/* TOOLBAR */}
      <div className="sticky top-[4.25rem] md:top-[7.5rem] z-30 -mx-4 flex flex-col gap-3 border-y bg-background/90 px-4 py-3 backdrop-blur md:mx-0 md:rounded-xl md:border md:px-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0" role="group" aria-label="Filtra per branca">
            {filters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                data-active={branca === filter.value}
                aria-pressed={branca === filter.value}
                onClick={() => {
                  setBranca(filter.value);
                  setUnita(null);
                  scrollToResults();
                }}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border-2 border-transparent bg-muted px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                  "data-[active=true]:bg-card data-[active=true]:shadow-sm",
                  filter.value ? BRANCHE[filter.value].ring : "data-[active=true]:border-foreground/70",
                )}
              >
                {filter.value && <span className={cn("size-2.5 rounded-full", BRANCHE[filter.value].accent)} />}
                {filter.label}
                <span className="text-xs text-muted-foreground tabular-nums">{filter.count}</span>
              </button>
            ))}
          </div>

          <label className="relative flex items-center md:w-72">
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            <span className="sr-only">Cerca</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                scrollToResults();
              }}
              placeholder="Cerca per nome, ruolo o unità"
              className="h-10 w-full rounded-full border bg-card pl-9 pr-9 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 flex size-6 items-center justify-center rounded-full hover:bg-muted"
                aria-label="Cancella ricerca"
              >
                <X className="size-3.5" />
              </button>
            )}
          </label>
        </div>

        {/* UNIT SUB-FILTER */}
        {branca && brancaUnits.length > 1 && (
          <div
            className="flex gap-1.5 overflow-x-auto border-t pt-3 animate-in fade-in slide-in-from-top-1"
            role="group"
            aria-label="Filtra per unità"
          >
            {[null, ...brancaUnits].map((value) => (
              <button
                key={value ?? "all"}
                type="button"
                data-active={unita === value}
                aria-pressed={unita === value}
                onClick={() => {
                  setUnita(value);
                  scrollToResults();
                }}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                  "data-[active=true]:text-foreground data-[active=true]:bg-accent",
                )}
              >
                {value ?? "Tutte le unità"}
                <span className="ml-1.5 text-xs tabular-nums opacity-70">
                  {members.filter((member) => member.branca === branca && (!value || member.unita === value)).length}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RESULTS */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-center">
          <SearchX className="size-8 text-muted-foreground" />
          <div className="font-medium">Nessun capo trovato</div>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setBranca(null);
              setUnita(null);
            }}
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            Azzera i filtri
          </button>
        </div>
      ) : (
        BRANCHE_ORDER.map((value) => {
          const group = filtered.filter((member) => member.branca === value);
          if (!group.length) return null;
          return (
            <section key={value} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className={cn("h-8 w-1.5 rounded-full", BRANCHE[value].accent)} />
                <h2 className="text-2xl font-semibold">{BRANCHE[value].label}</h2>
                <span className="text-sm text-muted-foreground tabular-nums">{group.length}</span>
              </div>
              {unitsOf(value).length > 1 ? (
                unitsOf(value).map((unit) => {
                  const unitGroup = group.filter((member) => member.unita === unit);
                  if (!unitGroup.length) return null;
                  return (
                    <div key={unit} className="flex flex-col gap-4 md:pl-5">
                      <div className="flex items-center gap-2.5">
                        <span className={cn("size-2.5 rounded-full", BRANCHE[value].accent)} />
                        <h3 className="font-sans text-lg font-semibold">{unit}</h3>
                        <span className="text-sm text-muted-foreground tabular-nums">{unitGroup.length}</span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {unitGroup.map((member) => renderCard(member, false))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {group.map((member) => renderCard(member, true))}
                </div>
              )}
            </section>
          );
        })
      )}

      {/* DETAIL DRAWER */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent>
          {selected && (
            <div className="flex flex-col overflow-y-auto">
              <div className="relative mx-4 mt-3 aspect-[4/3] shrink-0 overflow-hidden rounded-xl bg-muted md:mx-0 md:mt-0 md:aspect-[4/5] md:max-h-[60dvh] md:w-full md:rounded-none">
                <Image
                  src={selected.imageSrc}
                  alt={`${selected.nome} ${selected.cognome}`}
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className={cn("absolute inset-x-0 bottom-0 h-1.5", BRANCHE[selected.branca].accent)} />
              </div>

              <div className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-2">
                  <UnitBadge member={selected} />
                  <SheetTitle className="font-serif text-3xl font-semibold tracking-tight">
                    {selected.nome} {selected.cognome}
                  </SheetTitle>
                  <SheetDescription className="text-lg text-muted-foreground">{selected.ruolo}</SheetDescription>
                </div>

                <dl className="grid grid-cols-2 gap-px [&>*:last-child:nth-child(odd)]:col-span-2 overflow-hidden rounded-xl border bg-border">
                  {[
                    {
                      label: "Branca",
                      value: BRANCHE[selected.branca].label.replace("Branca ", ""),
                    },
                    { label: "Unità", value: selected.unita },
                    {
                      label: "Età ragazzi",
                      value: BRANCHE[selected.branca].age,
                    },
                  ]
                    .filter((item) => item.value)
                    .map((item) => (
                      <div key={item.label} className="flex flex-col gap-1 bg-card p-3">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="text-sm font-medium">{item.value}</dd>
                      </div>
                    ))}
                </dl>

                {sameUnit.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Insieme a {selected.nome} in {selected.unita}
                    </div>
                    <div className="flex flex-col gap-1">
                      {sameUnit.map((member) => (
                        <button
                          key={member.id}
                          type="button"
                          onClick={() => setSelectedId(member.id)}
                          className="flex items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-accent"
                        >
                          <Image
                            src={member.imageSrc}
                            alt=""
                            width={40}
                            height={40}
                            className="size-10 rounded-full bg-muted object-cover"
                          />
                          <span className="flex flex-col">
                            <span className="text-sm font-medium">
                              {member.nome} {member.cognome}
                            </span>
                            <span className="text-xs text-muted-foreground">{member.ruolo}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};
