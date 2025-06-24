import Heading from "./shared/Heading";
import myImage from '../assets/img1.jpg';
import flagImage from '../assets/flag.svg';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const BackgroundInfo = () => {
  return (
      <div className="relative overflow-hidden rounded-xl">

    <div className="bg-[#f8fafc] text-[#1e293b] p-6 rounded-xl shadow-sm">
      {/* Profile Header Section */}
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="w-[150px] mt-4 h-[150px] border-4 border-blue-200 rounded-full overflow-hidden shadow-md">
          <img src={myImage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-between mt-2">
          <div className="space-y-1">
            <Heading text="Mohd. Shoaib" className="!text-2xl font-bold text-blue-700" />
            <Heading text="Software Engineer" variant="secondary" />
          </div>

          <div className="flex gap-4 items-center mt-4 text-blue-600 text-sm">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mohd-shoaib-757178371/"
              className="flex items-center gap-2 hover:text-blue-800 transition"
            >
              <FaLinkedin /> Linkedin
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MSMALIK11"
              className="flex items-center gap-2 hover:text-blue-800 transition"
            >
              <FaGithubSquare /> Github
            </a>
            <a className="text-gray-500 hover:text-blue-600 cursor-pointer transition">
              <IoIosLink />
            </a>
          </div>
        </div>
      </div>

      {/* Info Grid Section */}
      <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-y-8 mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="space-y-2">
          <Heading text="Full Name" variant="secondary" />
          <Heading text="Mohd Shoaib" />
        </div>
        <div className="space-y-2">
          <Heading text="Email" variant="secondary" />
          <Heading text="msm76441@gmail.com" />
        </div>
        <div className="space-y-2">
          <Heading text="Job Role" variant="secondary" />
          <Heading text="Software Engineer" />
        </div>
        <div className="space-y-2">
          <Heading text="Company" variant="secondary" />
          <Heading text="Botlab Dynamics (IIT Delhi)" />
        </div>
        <div className="space-y-2">
          <Heading text="Country" variant="secondary" />
          <Heading text="India" />
        </div>
        <div className="space-y-2">
          <Heading text="City" variant="secondary" />
          <Heading text="Noida" />
        </div>
        <div className="space-y-2">
          <Heading text="Phone No." variant="secondary" />
          <div className="flex gap-2 items-center">
            <img width={16} className="rounded-full" src={flagImage} alt="Flag" />
            <span className="text-sm text-gray-600">+91 |</span>
            <Heading text="7300519548" />
          </div>
        </div>
        <div className="space-y-2">
          <Heading text="Spoken Language(s)" variant="secondary" />
          <div className="bg-blue-100 text-blue-800 inline-block px-4 rounded-lg py-1">
            <Heading text="English" variant="secondary" />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default BackgroundInfo;
