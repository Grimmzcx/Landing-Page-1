import { motion } from "framer-motion";
import { Settings, UserRoundCog, Bus, } from "lucide-react";



const industries = [
  { icon: <Settings size={40} />, title: "Research and development", desc: "Custom manufacturing involves producing specialized products tailored to a client’s specifications. This service includes contract manufacturing, prototyping, and mass production of unique components or finished goods. Companies offer expertise in material selection, precision engineering, and quality control to ensure that products meet industry standards. Custom manufacturing is widely used in industries such as automotive, aerospace, electronics, and medical devices." },
  { icon: <UserRoundCog size={40} />, title: "Product maintenance", desc: "Manufacturing companies provide maintenance and support services to ensure the longevity and efficiency of machinery and equipment. This includes installation, routine servicing, troubleshooting, and repairs. Some companies also offer predictive maintenance solutions using advanced diagnostics to prevent downtime. By keeping equipment in optimal condition, businesses can improve productivity and reduce operational costs." },
  { icon: <Bus size={40} />, title: "Installation    ", desc: "This service focuses on the efficient movement of raw materials, components, and finished goods. It includes warehousing, inventory management, transportation, and just-in-time delivery solutions. By optimizing logistics and supply chain processes, manufacturing companies help businesses reduce costs, improve efficiency, and maintain a steady production flow. These services are crucial for industries that rely on timely delivery and lean manufacturing principles." },
];

const IndustriesServed = () => {
  return (
    <>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Industries We Serve</h2>
        <p className="text-gray-600 mt-2">Empowering businesses across multiple sectors.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <div className="text-emerald-600">{industry.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{industry.title}</h3>
              <p className="text-gray-600 mt-2">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default IndustriesServed