// import { workHistory } from './data';
// import Heading from './shared/Heading';
// import { motion } from 'framer-motion';
// import { FaDotCircle } from 'react-icons/fa';

// interface WorkProp {
//   id: number;
//   title: string;
//   designation: string;
//   date: string;
// }

// const WorkCard = ({ title, designation, date }: WorkProp) => {
//   return (
//     <motion.div
//       initial={{ x: -40, opacity: 0 }}
//       whileInView={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="relative pl-10 border-l-2 border-blue-300/30 pb-6"
//     >
//       <FaDotCircle className="absolute left-[-9px] top-[2px] text-blue-600 bg-white rounded-full" />

//       <div className="glass-card">
//         <Heading text={title} className="!text-lg font-semibold text-blue-800" />
//         <div className="mt-1 mb-2">
//           <Heading text={designation} variant="secondary" className="text-sm text-gray-600" />
//           <Heading text={date} variant="secondary" className="text-xs text-gray-400" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const WorkHistory = () => {
//   return (
//     <div className="p-6 mt-6 bg-[#f8fafc] rounded-xl shadow">
//       <Heading text="Work History" className="!text-xl text-blue-700 font-bold mb-4" />

//       <div className="space-y-6">
//         {workHistory.map((item) => (
//           <WorkCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkHistory;


import { motion } from 'framer-motion';
import { workHistory } from './data';
import Heading from './shared/Heading';
import { FaDotCircle } from 'react-icons/fa';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const WorkCard = ({ title, designation, date }: any) => {
  return (
    <motion.div variants={item} className="relative pl-10 border-l-2 border-blue-300/30 pb-6">
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

const WorkHistory = () => {
  return (
    <motion.div
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="p-6 mt-6 bg-[#f8fafc] rounded-xl shadow"
    >
      <Heading text="Work History" className="!text-xl text-blue-700 font-bold mb-4" />
      <div className="space-y-6">
        {workHistory.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkHistory;

