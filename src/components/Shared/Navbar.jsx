import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="py-5 px-5">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src={logo} height={40} width={40} alt="Logo" />
        </Link>
        <Link
          href="/"
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-transparent bg-clip-text "
        >
          Apps Manager
        </Link>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Navbar;
