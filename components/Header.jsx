import Image from "next/image";

export default function Header() {
  return (
    <div className="md:flex md:flex-row-reverse items-center">
      <div className="w-screen h-[480px] relative md:flex-1 md:overflow-hidden md:shadow">
        <Image
          src="/headerImg.jpg"
          alt="baazaar"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="py-3 absolute top-0 left-0 flex justify-between h-full flex-col w-full">
          <h2 className=" text-center">
            <span className="text-4xl font-bold text-white">baazaar</span>
            <span className="text-white text-xs">.io</span>
          </h2>

          <h3 className="text-3xl font-bold max-w-xs mx-auto text-white text-center">
            Eternis Community, Welcome to Baazaar
          </h3>
        </div>
      </div>
      <div className="px-3 md:flex-1 md:flex md:flex-col  h-full">
        <div className="md:order-3 flex text-center justify-center md:justify-start md:mx-12 md:mt-3 mt-3  font-roboto">
          <img className="h-6" src="/india.jpeg" alt="indian flag" />
          <h2 className="text-xl text-light font-semibold">
            &#39;s first open commerce platform
          </h2>
        </div>
        {/*  */}
        <div className="md:order-2 bg-gray-100 max-w-[430px] mx-auto md:mx-12 rounded-xl p-4 mt-8 md:mt-4 font-roboto">
          <p className="text-center text-xl font-semibold leading-10">
            Get{" "}
            <span className="text-primary">
              {" "}
              flat 10% off {"&"} free delivery{" "}
            </span>{" "}
            on all order from businesses around you
          </p>
        </div>
        {/*  */}
        <div className="md:order-1 flex flex-col justify-center md:text-start text-center mt-10 max-w-[430px] md:max-w-full mx-auto md:mx-12">
          <h3 className="text-3xl md:text-6xl mx-auto md:mx-0 font-bold leading-10 md:leading-[63px]">
            <span className="text-primary block">Apka Baazaar</span>{" "}
            <span>Ab Online</span>
          </h3>
          <div className="px-6 md:px-0 mt-2">
            <h5 className="text-xl md:text-2xl text-center md:text-start md:max-w-md">
              Discover businesses around you. Click on any store and place your
              first order
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
