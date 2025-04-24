import React from "react";
import { Clipboard, Briefcase, Users, User } from "lucide-react";
import workDataLogo from "../assets/WorkDataID logo 2.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-16">
          <div className="flex items-center">
            <img src={workDataLogo} alt="Work Data ID" className="h-16" />
          </div>
          <div className="flex items-center space-x-6 flex-row">
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
              <a href="#features" className="hover:text-blue-600">
                Features
              </a>
            </nav>
            <button
              type="button"
              className="hidden md:inline-block px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className=" bg-[#8DC5FF]/40 ">
          <div className="container mx-auto py-20 flex flex-col md:flex-row items-center space-x-12 px-16">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 text-[#061BB0]/90">
                Build Trust and <br /> Transparency in Hiring <br /> with Work
                Data
              </h1>
              <p className="text-lg mb-6">
                Streamline recruitment, verify employment history, and make
                informed hiring decisions—all in one place.
              </p>
              <button className="px-6 py-3 bg-[#061BB0]/90 text-white rounded-lg mb-4 hover:bg-blue-700">
                Get Started Today
              </button>
              <p className="flex items-center text-gray-600">
                <span className="flex -space-x-2 mr-2">
                  <img
                    src={image1}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Avatar 1"
                  />
                  <img
                    src={image2}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Avatar 2"
                  />
                  <img
                    src={image3}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Avatar 3"
                  />
                  <img
                    src={image4}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Avatar 2"
                  />
                  <img
                    src={image5}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Avatar 2"
                  />
                </span>
                Joined by{" "}
                <span className="font-semibold ml-1">10,000 professionals</span>
              </p>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 rounded-lg">
              {/* Profile Card */}
              <div className=" bg-white rounded-lg  mb-4">
                <div className="bg-[#061BB0] p-2 rounded-t-lg">
                  <h2 className="text- font-semibold m-4 text-white">
                    Work Data Profile
                  </h2>
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      JD
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-gray-500">
                        Work Data ID: WD-29481
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm text-gray-500">Current Position</p>
                      <p className="font-medium">
                        Senior Developer at TechCorp{" "}
                        <span className="text-blue-600">
                          {" "}
                          <br /> ✓ Verified
                        </span>
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm text-gray-500">
                        Previous Employment
                      </p>
                      <p className="font-medium">
                        Developer at InnoTech (2018-2022){" "}
                        <span className="text-blue-600">
                          <br />✓ Verified
                        </span>
                      </p>
                    </li>
                    <li className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm text-gray-500">References</p>
                      <p className="font-medium">
                        3 Professional References Available
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="container px-16 space-x-6 mx-auto py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 ">
            <span className="bg-[#8DC5FF]/50 rounded-full px-4 py-1">
              Seamless verification
            </span>
            <h2 className="text-3xl text-[#061BB0] font-bold mt-4">
              Revolutionizing Workforce Verification
            </h2>
            <p className="text-gray-600">
              Welcome to Work Data, the revolutionary platform transforming how
              employers and employees connect in the workforce. At Work Data,
              we've created a powerful tool that allows companies to easily
              verify job candidates' employment history, references, and current
              engagements. By using a unique Work Data, employers can instantly
              see where a potential hire is working, what positions they've hels
              in the past, and even gather direct references from past
              employers.
            </p>
          </div>
          <div className="md:w-1/2 md:mt-0">
            {/* Verification Card */}
            <div className="max-w-md w-full mx-auto p-4 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Work Data Verification
                </h2>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  Premium
                </span>
              </div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Work Data ID
              </label>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter Work Data ID"
                  className="flex-grow px-3 py-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  className="px-4 bg-gray-100 border-t border-r border-b border-gray-300 rounded-r-md hover:bg-gray-200 cursor-pointer"
                  title="Copy Work Data ID"
                >
                  <Clipboard className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-lg font-semibold text-white">
                    JD
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      John Doe
                    </h3>
                    <p className="text-sm text-blue-600">Software Engineer</p>
                    <p className="text-xs text-gray-500">WD-29481</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-md shadow-sm mb-3 border border-blue-100">
                  <div className="flex items-center mb-1 text-sm font-medium text-gray-700">
                    <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                    Current Position
                  </div>
                  <p className="text-sm text-blue-700">
                    Senior Developer at TechCorp
                  </p>
                  <p className="text-xs text-blue-500 mt-1">Verified</p>
                </div>

                <div className="bg-white p-3 rounded-md shadow-sm border border-blue-100">
                  <div className="flex items-center mb-1 text-sm font-medium text-gray-700">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    Employment History
                  </div>
                  <p className="text-sm text-blue-700">
                    Lead Developer at InnoTech
                  </p>
                  <p className="text-xs text-gray-500">2018 - 2022</p>
                  <p className="text-xs text-blue-500 mt-1">
                    3 References Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-[#123E73] text-white py-12 ">
          <div className="container mx-auto px-40 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center mb-6 md:mb-0">
              <p className="text-4xl font-bold">5,000+</p>
              <p>Companies</p>
            </div>
            <div className="text-center mb-6 md:mb-0">
              <p className="text-4xl font-bold">100,000+</p>
              <p>Verified Profiles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">75%</p>
              <p>Time Saved</p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="bg-green-50 py-10 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employer Card */}
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <div className="flex items-start mb-4 flex-col">
                <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">
                  For Employer
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                As an employer, you understand how crucial it is to make
                data-driven decisions when hiring. With our innovative platform,
                the hiring process becomes seamless, transparent, and more
                efficient. Work Data gives you all the tools to quickly assess
                your candidates' credibility, build trust, and save valuable
                time.
              </p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                Sign up for free
              </button>
            </div>

            {/* Job Seeker Card */}
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <div className="flex items-start mb-4 flex-col">
                <User className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-700">
                  For Job Seekers
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                For job seekers, Work Data offers a unique opportunity to
                showcase your work history and professional references in a
                verified format that employers can trust. Our platform provides
                a level of transparency that is essential in today's competitive
                job market.
              </p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                Sign up for free
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#0B6BD0] text-white py-16 text-center px-64">
          <p className="mb-6">
            With Work Data, you can streamline your employee verification
            process, reduce fraud risk, and enhance digital recruitment
            strategies. By using work history tracking and work data IDs, you
            can make informed decisions on new hires.
          </p>
          <button className="px-8 py-3 border border-white rounded-lg bg-white text-blue-800">
            Sign up for free
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={workDataLogo} alt="Work Data ID" className="h-16" />
            </div>
            <p>
              Building trust and transparency in the hiring process through
              verified work data and employment history.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 border-t border-gray-700">
          <p>© 2025 Work Data. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
