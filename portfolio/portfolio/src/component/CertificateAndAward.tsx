import Heading from './shared/Heading';
import { certificates } from './data';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { motion } from 'framer-motion';

const CertificateAndAward = () => {
  return (
    <div className="mt-12 p-6 bg-[#f8fafc] rounded-xl shadow">
      <div className="flex items-center gap-2 text-blue-700 mb-4">
        <AiFillSafetyCertificate className="text-xl" />
        <Heading text="Licenses & Certifications" className="!text-xl font-bold" />
      </div>

      <div className="space-y-6">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-4 rounded-lg border border-gray-200 flex items-start gap-4"
          >
            <img src={item.icon} alt="Cert Icon" className="w-10 h-10 object-contain" />

            <div className="flex flex-col gap-1 text-sm">
              <Heading text={item.title} className="text-blue-800 !text-base font-semibold" />
              <Heading text={item.from} variant="secondary" className="text-gray-600" />
              <Heading text={`Issued ${item.issueDate}`} variant="secondary" className="text-gray-500" />

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm bg-blue-600 hover:bg-blue-700 transition text-white px-3 py-1 rounded-md shadow hover:scale-105"
                >
                  Show Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificateAndAward;
