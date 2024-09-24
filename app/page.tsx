import data from "../data.json";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center mx-auto w-full mt-16">
      <Image
        alt={data.name}
        src={data.avatar}
        width={80}
        height={80}
        className="rounded-full"
      />
      <h1>{data.name}</h1>
    </div>
  );
}
