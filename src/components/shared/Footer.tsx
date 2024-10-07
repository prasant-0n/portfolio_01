const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
      {/* Updated margin layout */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-[12rem] xl:px-[15rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Logo & Contact Information */}
          <div className="col-span-2">
            <h2 className="text-white text-2xl font-semibold mb-4">Jobpilot</h2>
            <p>
              Call now:{" "}
              <a href="tel:(319) 555-0115" className="text-white">
                (637) 278-6212
              </a>
            </p>
            <p className="mt-2">
              AECS B Block, Wellington Paradise, Begur,South Bengaluru ,
              <br /> Bengaluru, Bharat
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Candidate Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Candidate</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Browse Employers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Candidate Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Employers Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Employers</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Browse Candidates
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Employers Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Applications
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2021 Jobpilot - Job Portal. All rights reserved. &copy;
            Prashant
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163C6.49 2.163 2 6.653 2 12.164c0 4.991 3.657 9.128 8.432 9.876v-6.997H7.39v-2.88h3.043V9.126c0-3.01 1.791-4.668 4.528-4.668 1.312 0 2.687.235 2.687.235v2.967h-1.512c-1.489 0-1.944.923-1.944 1.868v2.235h3.287l-.524 2.88h-2.763v6.997C18.343 21.292 22 17.155 22 12.164 22 6.653 17.51 2.163 12 2.163z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 2H4.384A2.383 2.383 0 002 4.384v15.231A2.383 2.383 0 004.384 22h15.231A2.383 2.383 0 0022 19.615V4.384A2.383 2.383 0 0019.615 2zm-7.615 16.076a5.692 5.692 0 110-11.384 5.692 5.692 0 010 11.384zm5.692-10.769a1.077 1.077 0 11-2.154 0 1.077 1.077 0 012.154 0zm-5.692 1.846a3.846 3.846 0 100 7.692 3.846 3.846 0 000-7.692z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.46 6.003c-.83.37-1.72.617-2.66.727a4.603 4.603 0 002.01-2.532 9.221 9.221 0 01-2.92 1.115 4.595 4.595 0 00-7.826 4.187A13.04 13.04 0 013.15 4.725a4.587 4.587 0 001.422 6.125 4.566 4.566 0 01-2.08-.575v.058a4.596 4.596 0 003.683 4.506 4.604 4.604 0 01-2.072.078 4.596 4.596 0 004.292 3.193 9.224 9.224 0 01-5.71 1.97c-.37 0-.73-.022-1.088-.064a13.014 13.014 0 007.046 2.064c8.457 0 13.08-7.006 13.08-13.08 0-.198-.005-.396-.014-.592a9.343 9.343 0 002.29-2.382z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
