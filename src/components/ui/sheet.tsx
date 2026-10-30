"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTitle = DialogPrimitive.Title;
const SheetDescription = DialogPrimitive.Description;

/** Panel that slides from the bottom on mobile and from the right on desktop */
function SheetContent({ className, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-agesci-violet-deep/50 backdrop-blur-[2px]" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col bg-background shadow-2xl outline-none duration-300",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          // mobile: bottom sheet
          "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-2xl",
          "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
          // desktop: right drawer
          "md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[460px] md:rounded-none md:border-l",
          "md:data-[state=open]:[--tw-enter-translate-y:0] md:data-[state=closed]:[--tw-exit-translate-y:0]",
          "md:data-[state=open]:slide-in-from-right md:data-[state=closed]:slide-out-to-right",
          className,
        )}
        {...props}
      >
        {/* drag handle hint on mobile */}
        <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-muted-foreground/30 md:hidden" />
        {/* first in DOM order, so it receives the initial focus */}
        <DialogPrimitive.Close className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring outline-none">
          <XIcon className="size-4" />
          <span className="sr-only">Chiudi</span>
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export { Sheet, SheetContent, SheetTitle, SheetDescription };
