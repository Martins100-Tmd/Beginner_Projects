import "./style.css";
import Mainbox from "./Mainbox";
var Main = function () {
  return (
    <>
      <main
        className="bg-cover bg-center bg-no-repeat sm:w-90 sm:rounded-t-3xl w-full 
            sm:rounded-b-3xl mx-auto sm:my-1 sm:pt-32 pt-16"
        id="main"
      >
        <div className="flex flex-col items-center sm:w-2/5 mx-auto w-90">
          <h1 className="text-4xl font-pop font-semibold text-center text-white mb-4">
            Men's haircut and hairstyles
          </h1>
          <p className="font-pop font-medium text-base text-center text-white mb-3">
            Tailwing is a long established hair salon focused mainly on
            improving and innovating new hair treatments and styles for men
          </p>
          <button className="px-4 py-2 my-4 text-sm font-pop font-semibold bg-orange-800 rounded text-white">
            Sign In
          </button>
        </div>
      </main>
      <div className="flex sm:flex-row items-center sm:w-3/4 mx-auto relative sm:-top-20 flex-col w-90 top-5">
        <Mainbox text="Haircut" />
        <Mainbox text="Beard Trim" />
        <Mainbox text="Face wash" />
      </div>
    </>
  );
};
export default Main;
