import MyContainer from "@/components/Shared/MyContainer";
import Image from "next/image";
import not from "@/assets/error-404.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="pt-30 pb-10 bg-[#F1F5E8]">
      <MyContainer className="text-center">
        <Image src={not} alt="Not found" className="mx-auto" />
        <h2 className="mt-4 text-3xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-transparent bg-clip-text ">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600 mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-full shadow  transition"
        >
          Go Back Home
        </Link>
      </MyContainer>
    </div>
  );
};

export default NotFound;
