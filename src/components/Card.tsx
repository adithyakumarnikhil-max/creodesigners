import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      className={`bg-white dark:bg-black/20 rounded-2xl p-6 shadow-lg border border-foreground/10 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}