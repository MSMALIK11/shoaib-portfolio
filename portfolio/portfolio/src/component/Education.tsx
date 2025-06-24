import { educations } from './data';
import Heading from './shared/Heading';
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { FaDotCircle } from "react-icons/fa";

interface WorkProp {
  id: number;
  title: string;
  designation: string;
  date: string;
}

const EduCard = ({ id, title, designation, date }: WorkProp) => {
  return (
    <motion.div
      id={`edu-item-${id}`}
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-10 border-l-2 border-blue-300/30 pb-6"
    >
      <FaDotCircle className="absolute left-[-9px] top-[2px] text-blue-600 bg-white rounded-full" />

      <div className="glass-card">
        <Heading text={title} className="!text-lg font-semibold text-blue-800" />
        <div className="mt-1 mb-2">
          <Heading text={designation} variant="secondary" className="text-sm text-gray-600" />
          <Heading text={date} variant="secondary" className="text-xs text-gray-400" />
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="p-6 mt-6 bg-[#f8fafc] rounded-xl shadow">
      <div className="flex gap-3 items-center mb-4 text-blue-700">
        <FaGraduationCap className="text-xl" />
        <Heading text="Education" className="!text-xl font-bold" />
      </div>

      <div className="space-y-6">
        {educations.map((item) => (
          <EduCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
