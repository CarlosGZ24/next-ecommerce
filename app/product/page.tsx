import ProductImage from "../components/product/ProductImage";
import ProductInfo from "../components/product/ProductInfo";

export default function Page() {
  return (
    <main className="px-5 py- md:px-16 h-screen">
      <ProductImage />
      <ProductInfo />
    </main>
  );
}
