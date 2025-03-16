export function Card({ children }) {
    return <div className="p-6 bg-white shadow-md rounded-lg">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="mt-2 text-gray-700">{children}</div>;
  } 