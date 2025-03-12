export function Card({ children, className }) {
    return <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`text-center ${className}`}>{children}</div>;
  }
  