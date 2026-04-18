"use client";

import MyContainer from "@/components/Shared/MyContainer";
import Image from "next/image";
import error from "@/assets/App-Error.png";
import Link from "next/link";

const Error = () => {
  return (
    <div className="pt-35 pb-10 bg-[#F1F5E8]">
      <MyContainer className="text-center">
        <Image src={error} alt="Error" className="mx-auto" />
        <h1 className="text-4xl mt-4 md:text-6xl font-bold text-red-600">
          Oops!
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Something went wrong
        </h2>

        <p className="mt-2 text-gray-600">
          An unexpected error has occurred. Please try again.
        </p>

        <div className="mt-6 flex gap-4 items-center justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition cursor-pointer"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-full shadow"
          >
            Go Home
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default Error;
