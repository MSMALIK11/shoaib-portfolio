// import { motion } from "framer-motion";
// import codeCloseImg from "../assets/codeBracket.svg";
// import codeOpenImg from "../assets/openBracket.svg";

// const letters = ["S", "h", "o", "a", "i", "b"];

// const BrandLogo = () => {
//   return (
//     <motion.div
//       className="flex items-center gap-2 select-none"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Animated Left Bracket */}
//       <motion.img
//         src={codeOpenImg}
//         alt="open"
//         width={24}
//         animate={{ y: [0, -6, 0, 6, 0] }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="drop-shadow-glow"
//       />

//       {/* Animated Name */}
//       <motion.div
//         className="text-2xl font-extrabold flex gap-[2px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 tracking-tight"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.12,
//             },
//           },
//         }}
//       >
//         {letters.map((char, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//               },
//             }}
//             transition={{ type: "spring", stiffness: 200, damping: 10 }}
//           >
//             {char}
//           </motion.span>
//         ))}
//       </motion.div>

//       {/* Animated Right Bracket */}
//       <motion.img
//         src={codeCloseImg}
//         alt="close"
//         width={26}
//         animate={{ y: [0, 6, 0, -6, 0] }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="drop-shadow-glow"
//       />
//     </motion.div>
//   );
// };

// export default BrandLogo;

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import codeCloseImg from "../assets/codeBracket.svg";
import codeOpenImg from "../assets/openBracket.svg";

const letters = ["S", "h", "o", "a", "i", "b"];

const BrandLogo = () => {
  const cardRef = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 100], [15, -15]);
  const rotateY = useTransform(x, [0, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;

    x.set(xVal);
    y.set(yVal);
  };

  return (
    <motion.div
      ref={cardRef}
      className="flex items-center gap-2 select-none"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        x.set(50); // Reset center
        y.set(50);
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Bracket */}
      <motion.img
        src={codeOpenImg}
        alt="open"
        width={24}
        className="drop-shadow-glow"
        animate={{
          y: isHover ? [0, -5, 0] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Name */}
      <div className="text-2xl font-extrabold flex gap-[2px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 tracking-tight">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Bracket */}
      <motion.img
        src={codeCloseImg}
        alt="close"
        width={26}
        className="drop-shadow-glow"
        animate={{
          y: isHover ? [0, 5, 0] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default BrandLogo;

