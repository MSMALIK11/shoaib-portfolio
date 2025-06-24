import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
 const scrollToTop = () => {
  const content = document.getElementById('content-wraper'); // Make sure ID is correct!
  content?.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <>
      {/* Footer */}
      <div className="mt-12 px-6 py-8 bg-[#f0f4f8] text-center rounded-t-xl shadow-inner border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Made with ❤️ by <span className="font-semibold text-blue-600">Shoaib</span> • © {new Date().getFullYear()}
        </p>
      </div>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all"
      >
        <FaArrowUp />
      </motion.button>
    </>
  );
};

export default Footer;
