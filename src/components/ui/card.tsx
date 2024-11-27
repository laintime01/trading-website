// src/components/ui/card.tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }
  
  export function Card({ children, className = '', ...props }: CardProps) {
    return (
      <div 
        className={`bg-white rounded-lg shadow p-4 ${className}`} 
        {...props}
      >
        {children}
      </div>
    );
  }