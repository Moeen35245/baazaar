import Link from "next/link";
import Image from "next/image";

export default function Playstore() {
  return (
    <div className="relative h-24 mt-6 cursor-pointer">
      <Link href="/">
        <Image src="/playstore.png" layout="fill" objectFit="contain" />
      </Link>
    </div>
  );
}
