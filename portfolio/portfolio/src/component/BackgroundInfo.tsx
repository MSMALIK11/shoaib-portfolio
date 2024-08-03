import Heading from "./shared/Heading";
import myImage from '../assets/img1.jpg'
import flagImage from '../assets/flag.svg'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
const BackgroundInfo = () => {
    return (
        <div>
            <div id="bg-info"></div>
            <div>
                {/* <div className="flex gap-2 items-center mt-4">
                    <FaPersonShelter />
                    <Heading text="Background Info" className="!text-md" />
                </div> */}
                <div className="fle ms-10 gap-6 mt-[-100px]">
                    <div className="w-[150px]  h-[150px] border-4 border-white rounded-full overflow-hidden">
                        <img className="rounded-full" width={150} src={myImage} alt="" />
                    </div>
                    <div className="flex justify-between flex-col mt-2">
                        <div className="space-y-1">
                            <Heading text="Mohd. Shoaib" className="!text-xl" />
                            <Heading text="Software Engineer" variant="secondary" />

                        </div>
                        <div className="flex gap-4 items-center mt-2">
                            <a target="_blank" href="https://www.linkedin.com/in/mohd-shoaib-4400b61a0/" className="flex items-center gap-2 text-linkColor cursor-pointer hover:text-blue-400"><FaLinkedin /> Linkedin</a>
                            <a target="_blank" href="https://github.com/MSMALIK11" className="flex items-center gap-2 text-linkColor cursor-pointer hover:text-blue-400"><FaGithubSquare /> Github</a>
                            <a><IoIosLink /></a>
                        </div>

                    </div>

                </div>

            </div>
            <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2 gap-y-8 mt-6 bg-secondary p-4 rounded-md shadow-lg">
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
                    <Heading text="Liberin Technologies" />
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
                    <div className="flex gap-1 items-center">
                        <img width={16} className="rounded-full" src={flagImage} alt="" />
                        <span>+91 |</span>
                        <Heading text="7300519548" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Heading text="Spoken Language(s)" variant="secondary" />
                    <div className="bg-badge inline-block px-4 rounded-lg py-1">

                        <Heading text="English" variant="secondary" />
                    </div>
                </div>

            </div>

        </div >
    )
}

export default BackgroundInfo