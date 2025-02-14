import React from "react";

const Menuitem = ({ link, content }: { link: string; content: string }) => {
  return (
    <>
      <a
        href={link}
        className="block bg-green w-[80%] p-2 rounded hover:w-[70%] transition-all duration-300 mb-3"
      >
        {content}
      </a>
    </>
  );
};

export default Menuitem;
