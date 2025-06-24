import Heading from './shared/Heading';
import { motion } from 'framer-motion';
import { MdSummarize } from 'react-icons/md';

const ProfessionalSummary = () => {
  return (
    <motion.div
      className="p-6 mt-6 bg-[#f8fafc] rounded-xl shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 text-blue-700 mb-3">
        <MdSummarize className="text-xl" />
        <Heading text="Professional Summary" className="!text-xl font-bold" />
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        Results-driven and detail-oriented <strong>Software Engineer</strong> with over <strong>3 years</strong> of hands-on experience developing robust full-stack web and desktop applications. Proficient in modern JavaScript technologies including <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Electron.js</strong>. Proven track record in building scalable and high-performance systems for drone mapping, educational platforms, and banking automation. Strong advocate of <strong>clean code</strong>, <strong>secure APIs</strong>, <strong>modular design</strong>, and <strong>Agile workflows</strong>.
      </p>
    </motion.div>
  );
};

export default ProfessionalSummary;
