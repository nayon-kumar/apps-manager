import Image from "next/image";
import MyContainer from "./MyContainer";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white pt-8.75 pb-7.5 ">
      <MyContainer>
        <div className="flex gap-5 flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={logo}
              alt="Logo"
              height={40}
              width={40}
              className="h-10 w-10"
            />
            <h3 className="font-bold ">Apps Manager</h3>
          </Link>
          <div>
            <h3 className="font-medium text-xl">Social Links</h3>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-white text-black rounded-full inline-block p-1.5 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
                <FaXTwitter />
              </div>
              <div className="bg-white text-black rounded-full inline-block p-1.5 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
                <FaLinkedinIn />
              </div>
              <div className="bg-white text-black rounded-full inline-block p-1.5 cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-7.5 border-t mt-8.75 border-[#E5E7EB]/50">
          <p className="text-[#FAFAFA]">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
