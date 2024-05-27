import { FaPersonRays } from "react-icons/fa6";
import { LuFileHeart } from "react-icons/lu";
export const sidebarLinks = [
    {
        id: 1,
        name: "Summary",
        icons: <FaPersonRays />,
        path: '/my-profile'
    },
    {
        id: 2,
        name: "My CVs",
        icons: <LuFileHeart />,
        path: '/my-cv'
    },
]