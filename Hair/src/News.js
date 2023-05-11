let New = function () {
  return (
    <div className="sm:w-1/2 mx-auto my-5 flex flex-col items-center gap-5 w-90">
      <h1 className="text-3xl font-pop font-semibold text-center">
        Suscribe to our newletter
      </h1>
      <p className="text-sm font-pop text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic ut
        cupiditate ab sit odit natus deleniti perspiciatis inventore in? Lorem
        ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="flex flex-row items-center">
        <input
          type="input"
          className="px-5 py-2 rounded-tl rounded-bl font-pop font-semibold bg-slate-50 shadow border-2 border-orange-800 outline-none"
          name="name"
        />
        <input
          type="submit"
          className="px-4 py-3 text-sm font-pop bg-orange-800 text-white rounded-tr rounded-br"
        ></input>
      </div>
    </div>
  );
};
export default New;
