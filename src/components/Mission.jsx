import React from "react";

function MissionVision() {
  return (
    <section className="bg-gray-100 py-12">
      <div data-aos="fade-up" className="max-w-md mx-auto space-y-10 px-4">
        {/* Mission (Top) */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            Our mission is to deliver innovative and safe cleaning products
            that meet industry standards and contribute to a healthier
            environment.
          </p>
          
        </div>

        {/* Vision (Bottom) */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            Our vision is to create a future where sustainable and eco-friendly
            cleaning solutions not only deliver outstanding performance but also
            help preserve our planet for generations to come.
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
