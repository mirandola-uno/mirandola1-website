export const FooterSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 items-center bg-agesci-violet text-white p-4">
      <div className="flex flex-col gap-1 text-sm">
        <div className="font-boldx">AGESCI - Gruppo Scout Mirandola 1</div>
        <div>C.F. / P.IVA 91027610368</div>
        <div>Via Posta, 55 - 41037 Mirandola (MO)</div>
        <div>Sede Legale: Via Cavour, 2 - 41037 Mirandola (MO)</div>
        <div className="text-muted-foreground">© {new Date().getFullYear()} - Tutti i diritti riservati</div>
      </div>

      <div className="text-3xl font-delius">
        Del nostro meglio, <br /> per essere pronti a servire.
      </div>
    </div>
  );
};
