    import React from "react";
    import { Card } from "./ui/card";
    import { Factory, Leaf, Tags, Waves } from "lucide-react";
    import { motion } from "framer-motion";

    const services = [
    { icon: Factory, title: "Custom Bulk Production", desc: "Large-scale detergent and soap manufacturing." },
    { icon: Leaf, title: "Eco-Friendly & Organic Products", desc: "Plant-based, biodegradable formulations." },
    { icon: Tags, title: "Private Label & Branding", desc: "Custom packaging and branding for businesses." },
    { icon: Waves, title: "High-Efficiency Detergents", desc: "Designed for modern water-efficient washing machines." },
    ];

    const Services = () => {
    return (
        <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Services & Capabilities</h2>
            <p className="text-gray-600 mb-12">We provide cutting-edge solutions to elevate your business.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="h-full">
                <Card className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center h-auto min-h-[240px]">   
                <div className="flex items-center justify-center rounded-full mb-4">
                    <service.icon size={40} className="text-emerald-600 " />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-500">{service.desc}</p>
                </Card>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Services;
