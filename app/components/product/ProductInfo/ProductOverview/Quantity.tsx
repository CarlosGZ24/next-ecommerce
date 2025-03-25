import Button from "@/app/components/ui/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Quantity() {
  return (
    <div className="grid gap-3">
      <span className="font-bold text-sm">Cantidad</span>
      <div className="flex gap-2">
        <Button isDisabled={true}>
          <FaMinus size={14} />
        </Button>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className="border rounded-lg border-slate-300 w-10 p-2.5 text-center"
        />
        <Button>
          <FaPlus size={14} />
        </Button>
      </div>
    </div>
  );
}
