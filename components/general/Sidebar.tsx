"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiSolidFilePdf, BiGroup, BiSolidDashboard } from "react-icons/bi";
import { FaUserGear } from "react-icons/fa6";

function ItemList({
  title,
  Icon,
  id,
}: {
  title: string;
  Icon?: React.ComponentType;
  id: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={`/${id}`}
      className="m-auto w-[95%] bg-[#f5f4f8] rounded-2xl p-3 mb-3 flex items-center hover:border hover:border-orange-100 transition-all duration-300"
    >
      <div className="text-2xl p-3 text-orange-100"> {Icon && <Icon />}</div>

      {title}
    </Link>
  );
}

const Sidebar = () => {
  return (
    <div className="bg-white rounded-2xl p-5 lg:flex-1 w-[20%] h-full hidden lg:block">
      <ItemList title="Dashboard" id="dashboard" Icon={BiSolidDashboard} />
      <ItemList title="My Resources" id="resources" Icon={BiSolidFilePdf} />
      <ItemList title="My Forums" id="forums" Icon={BiGroup} />
      <ItemList title="Settings" id="settings" Icon={FaUserGear} />
    </div>
  );
};

export default Sidebar;
