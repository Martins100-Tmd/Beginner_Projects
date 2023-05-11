var Mainbox = function (Props) {
  return (
    <div className="flex flex-col items-center p-5 rounded-2xl shadow-xl bg-white sm:mx-2 my-5">
      <i style={{ fontSize: "24px" }} className="fa text-orange-800">
        &#xf0c4;
      </i>
      <h1 className="text-lg font-pop font-semibold text-center text-slate-900">
        {Props.text}
      </h1>
      <p className="font-pop text-sm text-center my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic ut
        cupiditate ab sit odit natus deleniti perspiciatis inventore in?
      </p>
      <button className="px-4 py-2 text-sm bg-orange-700 text-white font-pop rounded">
        Learn More
      </button>
    </div>
  );
};
export default Mainbox;
