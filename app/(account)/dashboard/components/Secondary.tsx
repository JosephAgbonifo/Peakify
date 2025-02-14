"use client";

function changeSecondaryItem(item: string) {}
function Secondary() {
  return (
    <>
      <button
        onClick={() => changeSecondaryItem("resources")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        My Resources
      </button>
      <button
        onClick={() => changeSecondaryItem("resources")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        My Forums
      </button>
      <button
        onClick={() => changeSecondaryItem("resources")}
        className="hover:bg-gray-200 p-10 rounded-t-2xl m-2 transition-all duration-300"
      >
        Uploaded Resources
      </button>

      <div className="bg-white rounded-2xl p-5 h-52 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-montserrat">Empty :)</h2>
          <p>You have no item here</p>
        </div>
      </div>
    </>
  );
}

export default Secondary;
