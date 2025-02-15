import Setting from "./Settings";

const Main = () => {
  return (
    <div className="lg:w-[80%] lg:p-10 overflow-x-hidden overflow-y-scroll no-scrollbar">
      <h1 className="text-4xl py-5 font-montserrat">Settings</h1>
      <Setting />
    </div>
  );
};

export default Main;
