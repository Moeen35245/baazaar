import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
export default function Item({ name, img }) {
  return (
    <div className="p-4 rounded-xl shadow-lg flex flex-col justify-between">
      <div className="w-full relative rounded-xl overflow-hidden h-40">
        <Image src={img} layout="fill" objectFit="cover" />
        <div className="absolute top-2 right-2 h-10 w-10 rounded-full shadow bg-white flex justify-center items-center cursor-pointer">
          <ArrowRightIcon className="font-bold text-primary h-6 w-6" />
        </div>
      </div>
      <h4 className="text-lg font-bold text-center mt-2">{name}</h4>
    </div>
  );
}
