import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "✅",
      title: "High-Quality Standards",
      description:
        "We adhere to strict quality control processes and industry-leading certifications (ISO 9001, ISO 13485, etc.), ensuring every product meets the highest standards.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing & Efficiency",
      description:
        "Our optimized production processes and bulk material sourcing allow us to provide cost-effective solutions without compromising quality.",
    },
    {
      icon: "🔧",
      title: "Advanced Technology & Innovation",
      description:
        "We leverage state-of-the-art machinery, automation, and cutting-edge manufacturing techniques to ensure precision, reliability, and scalability.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround Times",
      description:
        "With streamlined workflows and efficient production planning, we deliver high-quality products on time to keep your business running smoothly.",
    },
    {
      icon: "🌱",
      title: "Sustainability Efforts",
      description:
        "We prioritize eco-friendly manufacturing practices, waste reduction, and energy-efficient production to support a greener future.",
    },
  ];

  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {feature.icon} {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
