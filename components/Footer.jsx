export default function Footer() {
  return (
    <div className="mb-20 mt-8 p-4  md:w-full mx-auto md:flex justify-around">
      <h1 className="text-7xl font-semibold max-w-[400px]">
        Built to empower businesses everywhere.
      </h1>
      <div className="mx-w-[560px]">
        <p className="text-primary mt-3 text-2xl text-center font-roboto">
          Run a store or own a business?
        </p>
        <button className="w-full mt-1 py-3 bg-primary rounded-lg font-roboto text-2xl text-white">
          <span className="font-thin">Start selling on</span>{" "}
          <span className="font-bold">Baazaar</span>
        </button>
        <div className="mt-8 text-light text-xl font-roboto">
          <p className="space-x-1">
            <span> Made in </span>{" "}
            <img
              className="h-5 inline-block"
              src="/india.jpeg"
              alt="indian flag"
            />{" "}
            <span>with</span>{" "}
            <img
              className="h-5 inline-block"
              src="/heart.png"
              alt="indian flag"
            />
            <span>{"&"} sleepless nights</span>{" "}
          </p>
          <p className="mt-1">Baazaar HQ,Mumbai</p>
          <p className="mt-8">Be a part of this journy. Follow us on</p>
          <li className="list-none flex space-x-4 mt-2 items-center">
            <a href="">
              <img src="/facebook.png" alt="facebook" />
            </a>
            <a href="">
              <img src="/insta.png" alt="instagram" />
            </a>
            <a href="">
              <img src="/ytb.png" alt="youtube" />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
