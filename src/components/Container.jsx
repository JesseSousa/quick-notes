import { motion } from 'framer-motion';

const Container = ({ children, className }) => {
  return (
    <motion.div
      className={`
        md:container 
        md:mx-auto p-4 
        md:rounded 
        text-gray-700 
        bg-zinc-50 
        md:shadow-xl 
        h-full ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
