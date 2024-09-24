import data from "../data.json";
import Image from "next/image";

function LinkCard({
  title,
  url,
  icon,
}: {
  title: string;
  url: string;
  icon?: string;
}) {
  return (
    <a
      href={url}
      className="flex items-center p-1 w-full rounded-md
   hover:scale-105 transition-all border border-gray-300 bg-gray-50 duration-300 mb-3"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {icon && (
            <Image
              alt={title}
              src={icon}
              width={40}
              height={40}
              className="rounded-sm"
            />
          )}
        </div>
        <h2 className="flex font-semibold justify-center items-center w-full ">
          {title}
        </h2>
      </div>
    </a>
  );
}

function SocialCard({
  platform,
  username,
  icon,
}: {
  platform: string;
  username: string;
  icon: string;
}) {
  return (
    <a href={username} className="">
      <Image
        alt={platform}
        src={icon}
        width={40}
        height={40}
        className="rounded-sm"
      />
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div
        className="flex flex-col items-center justify-center 
    mx-auto w-full mt-16 px-8 mb-10 "
      >
        <Image
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
          className="rounded-full"
        />
        <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4 pt-20">
        {data.socials.map((social) => (
          <SocialCard key={social.username} {...social} />
        ))}
      </div>
    </div>
  );
}
