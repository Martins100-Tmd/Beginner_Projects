import "./style.css";
let Demo = function () {
  return (
    <div className="flex flex-row items-center overflow-x-auto w-full gap-3 mt-5">
      <div className="text-center j relative">
        <div className="flex flex-col items-center t absolute top-2/3 left-1/2">
          <p className="text-2xl font-pop font-semibold text-white mb-3">
            Grooming
          </p>
          <button className="text-sm font-pop font-semibold p-3 rounded-lg text-orange-800">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-center j relative">
        <div className="flex flex-col items-center t absolute top-2/3 left-1/2">
          <p className="text-2xl font-pop font-semibold text-white mb-3">
            Stylish Haircut
          </p>
          <button className="text-sm font-pop font-semibold p-3 rounded-lg text-orange-800">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-center j relative m">
        <div className="flex flex-col items-center t absolute top-2/3 left-1/2">
          <p className="text-2xl font-pop font-semibold text-white mb-3">
            Beard Shaving
          </p>
          <button className="text-sm font-pop font-semibold p-3 rounded-lg text-orange-800">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-center j relative">
        <div className="flex flex-col items-center t absolute top-2/3 left-1/2">
          <p className="text-2xl font-pop font-semibold text-white mb-3">
            Makeover
          </p>
          <button className="text-sm font-pop font-semibold p-3 rounded-lg text-orange-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Demo;
