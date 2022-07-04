import Image from "next/image";
export default function Campaign3() {
  return (
    <div className="p-4 mt-8 font-roboto max-w-[400px] mx-auto">
      <h3 className="text-2xl font-bold mx-auto text-center">
        <span className="block">Create your store</span>
        <span className="text-primary">and start selling on baazaar</span>
      </h3>
      <div className="flex">
        <div className="relative h-96 w-full -rotate-[30deg] z-20">
          <Image
            src="/screen3.png"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative h-96 w-full rotate-[30deg]">
          <Image
            src="/screen2.png"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
      </div>
      {/* <div className="relative w-full">
        <div className="absolute w-full top-0 left-0 ">
          <div className="relative flex justify-start h-96 bg-transparent">
            <Image
              src="/screen2.png"
              layout="fill"
              objectFit="contain"
              className="bg-red-100"
            />
          </div>
        </div>
        <div className="absolute w-full top-0 right-0 bg-transparent">
          <div className="relative  h-96">
            <Image src="/screen3.png" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
