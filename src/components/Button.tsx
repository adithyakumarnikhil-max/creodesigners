import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  children?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary/90 text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
  };
  
  const disabledClasses = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  return (
    <motion.button
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      disabled={isLoading}
      {...(props as MotionProps)}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
}