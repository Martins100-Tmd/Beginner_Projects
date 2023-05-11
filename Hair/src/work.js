var Work = function () {
  return (
    <div className="flex flex-col sm:w-5/6 mx-auto w-full p-2 sm:mt-0 mt-20">
      <div className="flex flex-col items-start sm:w-2/5 w-full">
        <h1 className="text-3xl font-pop">Our Working Process</h1>
        <p className="text-sm font-pop text-left text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          enim repellendus repellat unde it.
        </p>
      </div>
      <div className="flex flex-col items-center w-full mt-3">
        <div
          className="flex sm:flex-row flex-col items-stretch justify-between sm:w-90 gap-5 w-full sm:shadow-none sm:rounded-none
          sm:p-0 p-3 shadow rounded"
        >
          <img
            src={require("./main.jpg")}
            className="sm:w-1/2 w-full sm:rounded-3xl rounded"
            alt="img"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-pop text-black text-left">
              Stylish Hair cuts
            </h1>
            <p className="text-sm font-pop text-left leading-5 my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              enim repellendus repellat unde perferendis quia Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam, enim repellendus
              repellat unde perferendis quia Lorem, ipsum Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam, enim repellendus
              repellat unde perferendis quia Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam, enim repellendus repellat
              unde perferendis quia Lorem, ipsum is quia Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam, enim repellendus
              repellat unde perferendis quia Lorem, ipsum
            </p>
            <button
              className="px-4 py-2 rounded-t-lg rounded-bl-3xl  border border-orange-800 text-sm
                 text-black font-pop font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="flex sm:flex-row flex-col-reverse items-stretch justify-between sm:w-90 gap-5 w-full mt-4 sm:bg-none bg-white
           rounded shadow-lg p-3 sm:rounded-none sm:shadow-none sm:p-0"
        >
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-pop text-black text-left">
              Face Grooming
            </h1>
            <p className="text-sm font-pop text-left leading-5 my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              enim repellendus repellat unde perferendis quia Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam, enim repellendus
              repellat unde perferendis quia Lorem, ipsum Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam, enim repellendus
              repellat unde perferendis quia Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam, enim repellendus repellat
              unde perferendis quia Lorem, ipsum is quia Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam, enim repellendus
              repellat unde perferendis quia Lorem, ipsum
            </p>
            <button
              className="px-4 py-2 rounded-t-lg rounded-br-3xl border border-orange-800 text-sm
                 text-black font-pop font-semibold"
            >
              Learn More
            </button>
          </div>
          <img
            src={require("./main.jpg")}
            className="sm:rounded-3xl sm:w-1/2 w-full rounded"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
