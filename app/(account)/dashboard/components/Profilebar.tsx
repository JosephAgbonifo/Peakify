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
        <Link href="/settings" className="rounded-2xl bg-gray-200 p-4 px-10">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profilebar;
