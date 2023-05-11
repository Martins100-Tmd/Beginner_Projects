var Footer = function () {
  return (
    <footer className="w-full bg-black sm:p-20 flex sm:flex-row justify-between sm:items-stretch flex-col items-start relative p-5">
      <div className="flex flex-col items-start scale-95">
        <div className="flex flex-row items-center">
          <i style={{ fontSize: "30px" }} className="fa text-white text-center">
            &#xf174;
          </i>
          <h1 className="font-pop font-semibold text-2xl text-white uppercase ml-3">
            Tailwing
          </h1>
        </div>
        <p className="text-sm font-pop text-left text-white mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic ut
          cupiditate ab sit odit natus deleniti perspiciatis inventore in?
        </p>
        <div className="flex flex-row items-center mt-2">
          <i style={{ fontSize: "24px" }} className="fa text-gray-400">
            &#xf16d;
          </i>
          <i style={{ fontSize: "24px" }} className="fa text-gray-400 mx-4">
            &#xf232;
          </i>
          <i style={{ fontSize: "24px" }} className="fa text-gray-400 mr-4">
            &#xf081;
          </i>
          <i style={{ fontSize: "24px" }} className="fa text-gray-400">
            &#xf230;
          </i>
        </div>
      </div>
      <div className="flex flex-col items-start w-full scale-95">
        <h1 className="text-2xl font-pop font-semibold text-white mb-2 uppercase">
          Resources
        </h1>
        <ul className="flex flex-col items-start text-white">
          <li className="font-pop text-base list-none">Appointment</li>
          <li className="font-pop text-base list-none">About Us</li>
          <li className="font-pop text-base list-none">Service</li>
          <li className="font-pop text-base list-none">Latest Blog</li>
          <li className="font-pop text-base list-none">Our portfolio</li>
          <li className="font-pop text-base list-none">Contact</li>
        </ul>
      </div>
      <div className="flex flex-col items-start w-full scale-95">
        <h1 className="text-2xl font-pop font-semibold text-white mb-2 uppercase">
          Instagram
        </h1>
        <div className="grid grid-cols-2 w-full gap-3">
          <img src={require("./Haircut1.jpg")} className="w-full" alt="img" />
          <img src={require("./Haircut1.jpg")} className="w-full" alt="img" />
          <img src={require("./Haircut1.jpg")} className="w-full" alt="img" />
          <img src={require("./Haircut1.jpg")} className="w-full" alt="img" />
          {/* <img src={require("./Haircut1.jpg")} className="w-full" alt="img" />
          <img src={require("./Haircut1.jpg")} className="w-full" alt="img" /> */}
        </div>
      </div>
      <div className="flex flex-col items-start text-white w-full scale-90">
        <h1 className="text-2xl font-pop font-semibold mb-2 uppercase">
          Opening Hours
        </h1>
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Monday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Teusday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Wednesday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Thursday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Friday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Saturday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p className="font-pop  text-sm">Sunday</p>
            <p className="font-pop  text-sm">10.00AM - 5.00PM</p>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 bg-orange-700 p-3 text-center left-0 sm:flex sm:flex-row sm:justify-between">
        <p className="font-pop text-center text-white text-sm">
          Tailwing,&copy;Copyright 2022
        </p>
        <ul className="sm:flex flex-row justify-between items-center text-white gap-10 hidden">
          <li className="font-pop text-base list-none">Home</li>
          <li className="font-pop text-base list-none">About</li>
          <li className="font-pop text-base list-none">Service</li>
          <li className="font-pop text-base list-none">Contact</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
