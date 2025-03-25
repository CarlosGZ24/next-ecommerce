import { FaBars, FaCartShopping } from "react-icons/fa6";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="p-5 flex justify-between items-center">
      <a href="#">
        <FaBars size={32} />
      </a>
      <a href="#">
        <Image
          src={"/logo.png"}
          width={126}
          height={71}
          alt="Lumina Botanical's logo"
        />
      </a>
      <a href="#">
        <FaCartShopping size={32} />
      </a>
    </div>
  );
}
