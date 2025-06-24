import Heading from './shared/Heading';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from './data';


const ExperienceSection = () => {
  return (
    <div className="p-6 mt-6 bg-[#f8fafc] rounded-xl shadow">
      <div className="flex items-center gap-2 text-blue-700 mb-4">
        <FaBriefcase className="text-xl" />
        <Heading text="Experience" className="!text-xl font-bold" />
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-5 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between flex-wrap gap-2 text-blue-800 font-semibold">
              <span>{exp.company}</span>
              <span className="text-sm text-gray-500 font-normal">{exp.duration}</span>
            </div>

            <Heading text={exp.role} variant="secondary" className="mt-1 mb-3 text-gray-700" />

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              {exp.highlights.map((point, i) => (
                <li key={i}>
                  <span className="font-semibold">{point.split(':')[0]}:</span>
                  {point.includes(':') ? ` ${point.split(':').slice(1).join(':')}` : point}
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 mt-4">
              <strong>Tech Stack:</strong> {exp.techStack}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
