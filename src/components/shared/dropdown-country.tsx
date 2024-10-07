import React, { useState } from "react";
import Flag from "react-world-flags";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu"; // Ensure the correct path based on your setup
// import { Button } from "../ui/Button";
import { Search } from "lucide-react";

interface CountryOption {
  value: string;
  label: string;
  code: string;
}

const countryOptions: CountryOption[] = [
  { value: "IN", label: "India", code: "IN" },
  { value: "US", label: "United States", code: "US" },
  { value: "GB", label: "United Kingdom", code: "GB" },
  // Add more countries as needed
];

const SearchBar: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    countryOptions[0]
  );

  const handleCountryChange = (country: CountryOption) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm w-full max-w-4xl mx-auto p-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 text-sm">
          <Flag
            code={selectedCountry.code}
            alt={selectedCountry.label}
            className="mr-2"
            width={20}
            height={16}
          />
          <span className="text-sm">{selectedCountry.value}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mt-3 ml-[6.5rem]">
          <DropdownMenuLabel>Select Country</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {countryOptions.map((country) => (
            <DropdownMenuItem
              key={country.value}
              onClick={() => handleCountryChange(country)}
              className={
                selectedCountry.value === country.value
                  ? "bg-accent text-accent-foreground"
                  : ""
              }
            >
              <div className="flex flex-row items-center text-sm">
                <Flag
                  code={country.code}
                  alt={country.label}
                  className="mr-2"
                  width={20}
                  height={16}
                />
                {country.label} ({country.code})
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex-1 relative ml-4 pr-20 ">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder=""
          className="bg-transparent py-[3px] pr-10 text-[14px] focus:outline-none w-full"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-700 transition ease-in"
          >
            <span className="sr-only">Search</span>
            <Search className="h-5 w-5" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
