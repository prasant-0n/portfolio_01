import React from "react";

type TestimonialCardProps = {
  image: string;
  name: string;
  position: string;
  content: string;
  isHighlighted?: boolean; // Optional to handle special styling for the 3rd card
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  position,
  content,
  isHighlighted = false, // Defaults to false
}) => {
  return (
    <div
      className={`flex flex-col items-center px-6 py-10  ${
        isHighlighted ? "bg-blue-600 text-white" : "bg-white"
      } rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
        isHighlighted ? "" : "border border-gray-300"
      } w-full max-w-[300px] mx-4 min-h-[450px] max-h-[450px]`} // Fixed height settings
    >
      {/* Testimonial Image */}
      <img
        loading="lazy"
        src={image}
        alt={`${name}'s portrait`}
        className="object-cover rounded-full w-[120px] h-[120px] mb-4 shadow-md"
      />

      {/* Star Ratings */}
      <div className="flex gap-1 justify-center items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd996cd9e5981f60c11328210688cc22751759abb3fce16dfc55d931a1ffef08?placeholderIfAbsent=true&apiKey=9d6cee3ec6664143a398762bb3c0315c"
            alt="Star"
            className="object-contain w-[22px] h-[22px]"
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-center text-base leading-relaxed mb-4 max-w-[250px] overflow-hidden">
        {content}
      </p>

      {/* Testimonial Name and Position */}
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg uppercase tracking-wide">
          {name}
        </span>
        <span
          className={`text-sm ${
            isHighlighted ? "opacity-80" : "text-gray-500"
          }`}
        >
          {position}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
