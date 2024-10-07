import { BriefcaseBusiness, PhoneCall } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState, useCallback } from "react";
import SearchBar from "./dropdown-country";
import { Button } from "../ui/Button";

const LANGUAGE_OPTIONS = ["English", "हिंदी", "ଓଡିଆ", "ಕನ್ನಡ", "اردو"] as const;
type Language = (typeof LANGUAGE_OPTIONS)[number];

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("English");

  const handleLanguageChange = useCallback((newLanguage: Language) => {
    setSelectedLanguage(newLanguage);
  }, []);

  return (
    <header className=" shadow-sm">
      {/* Top Navigation */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-[12rem] xl:px-[15rem]">
        <div className="flex flex-col md:flex-row justify-between items-center py-1 border-b border-gray-300">
          <nav className="flex justify-center md:justify-start space-x-2 md:space-x-4 text-sm md:text-base">
            {["Home", "Find Job", "Pricing Plans", "Customer Support"].map(
              (item) => (
                <a
                  key={item}
                  href="/"
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="flex justify-center md:justify-end items-center space-x-4 mt-2 md:mt-0">
            <div className="flex items-center space-x-2 text-xs md:text-base">
              <PhoneCall />
              <span>+91 8989893429</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-xs md:text-base cursor-pointer focus:outline-none">
                {selectedLanguage}
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {LANGUAGE_OPTIONS.map((language) => (
                  <DropdownMenuItem
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className={`${
                      selectedLanguage === language
                        ? "bg-blue-100 text-blue-800"
                        : "hover:bg-gray-100"
                    } px-4 py-2 cursor-pointer`}
                  >
                    {language}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white mx-auto px-4 sm:px-6 md:px-8 lg:px-[12rem] xl:px-[15rem]">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center gap-4 md:gap-8 font-bold text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={24} color="#0f50db" strokeWidth={2} />
              <span>Job Portal</span>
            </div>
            <div className="w-full md:w-auto mt-2 md:mt-0">
              <SearchBar />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
            <Button
              variant="outline"
              className="border-[#2769f5] w-[6rem] md:w-[8rem] hover:border-[#427bf5] transition duration-300 ease-in text-xs md:text-base"
            >
              SignUp
            </Button>
            <Button className="bg-[#2769f5] w-[6rem] md:w-[8rem] hover:bg-[#427bf5] transition duration-300 ease-in text-xs md:text-base">
              Post A Job
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
    </header>
  );
};

export default Navbar;
