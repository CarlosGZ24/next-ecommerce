import Image from "next/image";

export default function ProductImage() {
  return (
    <Image
      src={"/product-photo.png"}
      width={1280}
      height={1280}
      alt="Product photo"
      className="py-1.5 rounded-3xl"
    ></Image>
  );
}
