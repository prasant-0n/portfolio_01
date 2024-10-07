import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  learnMoreUrl,
  index,
}) => {
  const isFirstCard = index === 0;

  return (
    <div
      className={`flex overflow-hidden flex-col p-8 mx-auto w-full h-[22rem] ${
        isFirstCard
          ? "bg-blue-600 text-white"
          : "bg-white border border-solid border-zinc-300"
      } rounded-xl max-md:px-5 max-md:mt-8`}
    >
      <div className="flex flex-col items-start pb-5 max-w-full w-[331px] max-md:pr-5">
        <img
          alt="img"
          loading="lazy"
          src={
            isFirstCard
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/49351c814f8373724d0e188f1f3104c469ede1e91e5ff967a55a67dc8633645d?placeholderIfAbsent=true&apiKey=9d6cee3ec6664143a398762bb3c0315c"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/517174943a8116a252705d73cf1a4d81ffb8a6253ede0014910cfcc3563ac0b3?placeholderIfAbsent=true&apiKey=9d6cee3ec6664143a398762bb3c0315c"
          }
          className="object-contain aspect-square w-[75px]"
        />
      </div>
      <div
        className={`mt-2.5 text-lg md:text-2xl font-bold tracking-normal leading-8 ${
          isFirstCard ? "text-white" : "text-black"
        }`}
      >
        {title}
      </div>
      <div
        className={`mt-2.5 text-sm md:text-lg tracking-normal leading-7 ${
          isFirstCard ? "text-white" : "text-zinc-800"
        }`}
      >
        {description}
      </div>
      <div
        className={`flex gap-2.5 justify-center items-center self-start mt-2.5 text-lg tracking-normal leading-loose ${
          isFirstCard ? "text-white" : "text-blue-600"
        }`}
      >
        {learnMoreUrl ? (
          <a href={learnMoreUrl} className="self-stretch my-auto">
            Learn more
          </a>
        ) : (
          <div className="self-stretch my-auto">Learn more</div>
        )}
        <img
          loading="lazy"
          src={
            isFirstCard
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/009418a07a7139122a546a73f4bcfb0b8ab1b451925dd1ec1f246eaec18d464b?placeholderIfAbsent=true&apiKey=9d6cee3ec6664143a398762bb3c0315c"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/bec62da0da2843e0b6d44ea85db589de13758e5ceb3d9eefb7367408dd35f52f?placeholderIfAbsent=true&apiKey=9d6cee3ec6664143a398762bb3c0315c"
          }
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.86] w-[26px]"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
