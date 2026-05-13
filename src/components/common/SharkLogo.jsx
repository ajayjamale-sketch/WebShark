import { motion } from 'framer-motion';

const SharkLogo = ({ className = "h-10 w-10", animated = false, hideText = false }) => {
  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative h-full aspect-square flex items-center justify-center bg-primary-blue rounded-none p-1.5"
        whileHover={animated ? { scale: 1.05 } : {}}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          <path
            d="M2 12C2 12 5 7 12 7C19 7 22 12 22 12C22 12 19 17 12 17C5 17 2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            fill="currentColor"
          />
          <path
            d="M12 4L15 7H9L12 4Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
      
      {!hideText && (
        <span className="font-display text-2xl font-bold tracking-tighter text-foreground hidden sm:block uppercase">
          Web<span className="text-primary-blue">Shark</span>
        </span>
      )}
    </div>
  );
};

export default SharkLogo;
