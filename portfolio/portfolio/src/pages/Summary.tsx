import { motion } from 'framer-motion';
import BackgroundInfo from "../component/BackgroundInfo";
import ExpertiseAndSkills from "../component/ExpertiseAndSkills";
import WorkHistory from "../component/WorkHistory";
import Education from "../component/Education";
import CertificateAndAward from "../component/CertificateAndAward";
import Project from "../component/Project";
import ProfessionalSummary from "../component/ProfessionalSummary";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Summary = () => {
  return (
    <div className="w-full flex-1 space-y-8">
      <motion.div id="profile" {...fadeUp}>
        <BackgroundInfo />
      </motion.div>

      <motion.div id="summary" {...fadeUp}>
        <ProfessionalSummary />
      </motion.div>

      <motion.div id="skills" {...fadeUp}>
        <ExpertiseAndSkills />
      </motion.div>

      <motion.div id="experience" {...fadeUp}>
        <WorkHistory />
      </motion.div>

      <motion.div id="certificates" {...fadeUp}>
        <CertificateAndAward />
      </motion.div>

      <motion.div id="projects" {...fadeUp}>
        <Project />
      </motion.div>

      <motion.div id="education" {...fadeUp}>
        <Education />
      </motion.div>
    </div>
  );
};

export default Summary;
