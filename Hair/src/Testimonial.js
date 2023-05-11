var Testimonial = function () {
  return (
    <>
      <h1 className="text-3xl font-pop font-semibold text-center mt-3 uppercase">
        What Our Clients Say
      </h1>
      <div className="flex sm:flex-row items-center flex-col mx-auto sm:w-5/6 w-90 mt-5">
        <div className="flex flex-col items-center w-full shadow-lg">
          <img
            src={require("./B.jpg")}
            className="w-full rounded-t"
            alt="img"
          />
          <div className="bg-white flex flex-col items-start w-full rounded-b p-3">
            <p className="text-xl font-pop font-semibold text-left mb-3">
              Micheal B.Jordan
            </p>
            <p className="font-pop sm:text-sm text-left text-xs">
              It looks fabulous and it makes me feel beautiful. I have gotten a
              lot of compliments. Raffaele has a great eye for what looks good
              on you. He is a very talented stylist and I recommend him to
              anyone that wants a change for the better.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full shadow-lg sm:mx-5 my-5">
          <img
            src={require("./Beard.jpg")}
            className="w-full rounded-t"
            alt="img"
          />
          <div className="bg-white flex flex-col items-start w-full rounded-b p-3">
            <p className="text-xl font-pop font-semibold text-left mb-3">
              Richard Jefferson
            </p>
            <p className="font-pop sm:text-sm text-left text-xs">
              It looks fabulous and it makes me feel beautiful. I have gotten a
              lot of compliments. Raffaele has a great eye for what looks good
              on you. He is a very talented stylist and I recommend him to
              anyone that wants a change for the better.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full shadow-lg">
          <img
            src={require("./Haircut1.jpg")}
            className="w-full rounded-t"
            alt="img"
          />
          <div className="bg-white flex flex-col items-start w-full rounded-b p-3">
            <p className="text-xl font-pop font-semibold text-left mb-3">
              Tommy Hailford
            </p>
            <p className="font-pop sm:text-sm text-left text-xs">
              It looks fabulous and it makes me feel beautiful. I have gotten a
              lot of compliments. Raffaele has a great eye for what looks good
              on you. He is a very talented stylist and I recommend him to
              anyone that wants a change for the better.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
