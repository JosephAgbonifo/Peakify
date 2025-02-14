import { items } from "@/data/sidebar";

function ItemList({
  title,
  icon,
  id,
}: {
  title: string;
  icon?: string;
  id: string;
}) {
  return (
    <div id={id} className="m-auto w-[95%] bg-[#f5f4f8] rounded-2xl p-3 mb-3">
      wow
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="bg-white rounded-2xl p-5 lg:flex-1 w-[20%] h-full hidden lg:block">
      <ItemList title="wow" id="wow" icon="wow" />
      <ItemList title="wow" id="wow" icon="wow" />
      <ItemList title="wow" id="wow" icon="wow" />
    </div>
  );
};

export default Sidebar;
