export default function PurchaseOptions() {
  // --> REFACTORIZAR, CÓDIGO REPETIDO <--
  return (
    <div className="grid gap-3">
      <span className="font-bold text-sm">Tipo de compra</span>
      <fieldset>
        <div className="p-2.5 rounded-t-lg border border-slate-300">
          <input type="radio" id="unique" checked className="mr-2.5" />
          <label htmlFor="unique">Compra única</label>
        </div>
        <div className="p-2.5 rounded-b-lg border-b border-l border-r border-slate-300">
          <input
            type="radio"
            id="subscription"
            className="mr-2.5 accent-black"
          />
          <label htmlFor="subscription">Suscribirme y ahorrar</label>
        </div>
      </fieldset>
    </div>
  );
}
