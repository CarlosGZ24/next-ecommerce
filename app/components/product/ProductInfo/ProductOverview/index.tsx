import Button from "@/app/components/ui/Button";
import Display from "./Display";
import Price from "./Price";
import PurchaseOptions from "./PurchaseOptions";
import Quantity from "./Quantity";

export default function ProductOverview() {
  return (
    <div>
      <Display />
      <Price />
      <PurchaseOptions />
      <Quantity />
      <hr />
    </div>
  );
}
