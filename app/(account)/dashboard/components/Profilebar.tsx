import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profilebar = () => {
  return (
    <div className="bg-white rounded-2xl p-5 my-10 flex items-center">
      <div>
        <Image
          src="/default.svg"
          width="100"
          height="100"
          alt="Profile"
          className="rounded-full border border-orange-100"
        />
      </div>
      <div className="flex-1 p-3 pl-5 border-l-2 ml-5 border-orange-100">
        <h2>
          <strong>Joseph Agbonifo</strong>
        </h2>
        <p>
          joesefair@gmail.com <br />
          09035078430
        </p>
      </div>
      <div>
        <Link
          href="/settings"
          className="hidden lg:block lg:rounded-2xl lg:bg-gray-200 lg:p-4 lg:px-10 hover:bg-gray-300"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profilebar;
