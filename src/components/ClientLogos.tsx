import React from "react";
import "../index.css"; // Ensure your global styles are here.

type ClientLogosProps = {
  logos: string[];
};

const ClientLogos: React.FC<ClientLogosProps> = ({ logos }) => {
  return (
    <section className="relative flex overflow-hidden items-center py-12 bg-stone-50 mt-2">
      {/* Logo Container */}
      <div className="flex animate-infinite-scroll">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            loading="lazy"
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="object-contain transition-transform duration-300 transform hover:scale-105 min-w-[150px] w-[200px] max-md:w-[120px]"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
