import Image from "next/image";
export default function Campaign2() {
  return (
    <div className="p-4 -mt-16 lg:mt-8 font-roboto flex-1">
      <h3 className="text-2xl font-bold mx-auto text-center">
        <span className="block">Discover {"&"} Shop directly from</span>
        <span className="text-primary">businesses around you</span>
      </h3>
      <div className="relative h-[640px] ">
        <Image src="/screen1.jpg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
