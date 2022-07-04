import Image from "next/image";
export default function Campaign1() {
  return (
    <div className="mt-8  p-4 flex-1">
      <h3 className="text-3xl font-bold max-w-[280px] mx-auto text-center">
        <span className="block">Benefits of</span>{" "}
        <span className="text-primary">Downloading the app</span>
      </h3>
      <div className="relative h-[640px] -mt-16 lg:mt-4">
        <Image src="/aboutImg.jpg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

{
  /*   */
}
