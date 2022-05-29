import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
  },
};

const containerTransition = {
  duration: 0.5,
  ease: 'easeIn',
};

const Container = ({ children, className, disabled = false }) => {
  return (
    <motion.div
      className={`
        relative  
        md:container 
        md:mx-auto p-4 
        md:rounded 
        text-gray-700 
        bg-zinc-50 
        md:shadow-xl 
        h-full ${className}
      `}
      initial="start"
      animate="end"
      transition={containerTransition}
      variants={containerVariants}
      exit="start"
    >
      {children}

      <AnimatePresence>
        {disabled && (
          <motion.div
            className="absolute top-0 left-0 md:rounded backdrop-blur-sm bg-gray-600 bg-opacity-20 h-full w-full"
            initial="start"
            animate="end"
            transition={containerTransition}
            variants={containerVariants}
            exit="start"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Container;
