import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export const CreditsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto p-0 text-xs text-white/60 hover:text-white">
          Credits
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Credits</DialogTitle>
          <DialogDescription>
            Il codice sorgente del sito web che stai leggendo è disponibile su{" "}
            <Link
              href="https://github.com/mirandola-uno/mirandola1-website"
              target="_blank"
              className="text-primary underline underline-offset-4"
            >
              GitHub
            </Link>
            . Essendo open-source, chiunque può leggere il codice e migliorarlo.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
