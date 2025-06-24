import { skillsList } from './data';
import Heading from './shared/Heading';
import { GiSkills } from "react-icons/gi";
import Badge from './ui/Badge';
import { motion } from 'framer-motion';

const ExpertiseAndSkills = () => {
  return (
    <div className="p-6 mt-6 bg-[#f0f4f8] rounded-xl shadow-sm">
      <div className="flex items-center gap-2 text-blue-800 mb-6">
        <GiSkills className="text-2xl" />
        <Heading text="Expertise & Skills" className="!text-xl font-semibold" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Experience Card */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card hover-glass w-full lg:w-[250px]"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <Heading text="Experience" className="text-blue-800 !text-base" />
            <Heading text="3" className="text-4xl font-bold text-[#1e293b]" />
            <Heading text="Years" variant="secondary" className="text-sm text-gray-500" />
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card flex-1"
        >
          <Heading text="Top Technical Skills" className="text-blue-800 !text-base mb-4" />
          <div className="flex flex-wrap gap-3">
            {skillsList.map((item, idx) => (
              <Badge key={idx} icon={item.icon} label={item.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertiseAndSkills;
