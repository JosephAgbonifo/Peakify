import Main from "./components/Main";
import Sidebar from "../../../components/general/Sidebar";

const page = () => {
  return (
    <div className="lg:flex w-full h-[100vh] bg-[#f5f4f8]">
      <Sidebar />
      <Main />
    </div>
  );
};

export default page;
