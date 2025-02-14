import Alerts from "./Alerts";
import Profilebar from "./Profilebar";
import Secondary from "./Secondary";

const Main = () => {
  return (
    <div className="lg:w-[80%] lg:p-10 overflow-x-hidden overflow-y-scroll">
      <Alerts />
      <h1 className="text-4xl py-5 font-montserrat">My Dashboard</h1>
      <Profilebar />
      <Secondary />
    </div>
  );
};

export default Main;
