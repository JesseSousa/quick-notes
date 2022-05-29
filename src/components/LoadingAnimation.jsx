import { motion } from 'framer-motion';

const childrenVariants = {
  start: {
    y: '0%',
    opacity: 0,
  },
  end: {
    y: '100%',
    opacity: 1,
  },
};

const loadingTransition = (delay) => ({
  delay,
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
});

const LoadingAnimation = () => {
  // array of dots, containing its respective transition delay values
  const dots = [0, 0.25, 0.5];

  return (
    <div className="flex justify-between bg-transparent w-20 h-10">
      {dots.map((delay) => (
        <motion.span
          className="bg-teal-800 inline-block w-[20px] h-[20px] rounded-full"
          initial="start"
          animate="end"
          variants={childrenVariants}
          transition={loadingTransition(delay)}
          key={delay}
        />
      ))}
    </div>
  );
};

export default LoadingAnimation;
