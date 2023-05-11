import "./style.css";
let Vid = function () {
  return (
    <div className="w-90 rounded-3xl mx-auto relative" id="vid">
      <div className="w-1/2 items-center flex flex-col mx-auto absolute sm:top-1/2 left-1/4 top-1/4">
        <h1 className="text-4xl font-pop font-semibold text-white">
          Our Presentation Video
        </h1>
        <i
          style={{
            fontSize: "50px",
            margin: "0 auto",
            alignSelf: "center",
            width: "15%",
            color: "white",
          }}
          className="fa self-center"
        >
          &#xf144;
        </i>
        <p className="text-lg font-pop font-semibold text-center text-white">
          Watch Video
        </p>
      </div>
    </div>
  );
};

export default Vid;
