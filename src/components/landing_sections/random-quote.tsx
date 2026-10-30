"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  {
    quote: "Lascia il mondo un po’ migliore di come l’hai trovato.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "La felicità non deriva dal possedere, ma dal dare.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Un sorriso è la chiave segreta che apre molti cuori.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Un esploratore sorride e fischietta in ogni difficoltà.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Il vero modo di essere felici è procurare felicità agli altri.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "La vera ricchezza consiste nell’essere contenti con poco.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Cerca di lasciare dietro di te un ricordo che valga la pena.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Il successo nella formazione dipende dal gioco e non dalla lezione.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "La vita scout è la vita stessa, vissuta al massimo.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Una difficoltà cessa di esistere nel momento in cui ci si ride sopra e la si affronta con il sorriso.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Non esiste cattivo tempo, ma solo cattivo equipaggiamento.",
    author: "Proverbio scout",
  },
  {
    quote: "Ogni giorno compi una buona azione: non sai mai quanto bene possa generare.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Un uomo che non ha mai imparato a obbedire non potrà mai comandare.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "La legge scout non è un vincolo, ma una guida alla libertà.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Il più grande successo per un capo scout è vedere un ragazzo diventare uomo nel vero senso della parola.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "L’arte di essere felici sta nel rendere felici gli altri.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Sii sempre pronto, perché non sai mai quando il tuo aiuto potrà fare la differenza.",
    author: "Motto scout",
  },
  {
    quote: "Lo scout è amico di tutti e fratello di ogni altro scout.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Il gioco dello scoutismo non è un gioco da ragazzi, ma un gioco con i ragazzi.",
    author: "Robert Baden-Powell",
  },
  {
    quote: "Quando pensi a te stesso, ricorda anche gli altri.",
    author: "Robert Baden-Powell",
  },
];

export const RandomQuoteSection = () => {
  // pick the quote after mount, so server and client render the same markup
  const [index, setIndex] = useState<number | null>(null);
  useEffect(() => setIndex(Math.floor(Math.random() * QUOTES.length)), []);
  const randomQuote = QUOTES[index ?? 0];

  return (
    <section className="relative overflow-hidden bg-agesci-violet text-white">
      <div className="agesci-stripe absolute inset-x-0 top-0 h-1" />
      <div className="container-page flex flex-col items-center gap-6 py-16 md:py-20 text-center">
        <span aria-hidden className="font-serif text-7xl leading-none text-agesci-yellow">
          &ldquo;
        </span>
        <blockquote
          className="max-w-3xl font-serif text-2xl md:text-4xl italic leading-snug transition-opacity duration-500 data-[ready=false]:opacity-0"
          data-ready={index !== null}
        >
          {randomQuote.quote}
        </blockquote>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{randomQuote.author}</div>
      </div>
    </section>
  );
};
