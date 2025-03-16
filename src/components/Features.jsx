import calam from "../assets/calam.jpg";
import lemon from "../assets/lemon.jpg";
import conditioner from "../assets/conditioner.jpg";
import phase from "../assets/phase.jpg";

function Features() {
  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6 text-gray-800">
          Our Features
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-gray-600 mb-12">
          We offer high-quality, effective cleaning products for all your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {/* Laundry Detergent */}
        <div data-aos="fade-up" className="bg-white shadow-lg p-6 rounded-lg">
          <img className="p-8 rounded-t-lg h-64 mx-auto" src={calam} alt="Laundry Detergent" />
          <h3 className="text-xl font-bold text-gray-800">Laundry Detergent</h3>
          <p className="text-gray-600 mt-2">Deep cleaning with a long-lasting fresh scent.</p>
        </div>

        {/* Dishwashing Liquid */}
        <div data-aos="fade-up" data-aos-delay="200" className="bg-white shadow-lg p-6 rounded-lg">
          <img className="p-8 rounded-t-lg h-64 mx-auto" src={lemon} alt="Dishwashing Liquid" />
          <h3 className="text-xl font-bold text-gray-800">Dishwashing Liquid</h3>
          <p className="text-gray-600 mt-2">Powerful grease removal for spotless dishes.</p>
        </div>

        {/* Fabric Softener */}
        <div data-aos="fade-up" data-aos-delay="400" className="bg-white shadow-lg p-6 rounded-lg">
          <img className="p-8 rounded-t-lg h-64 mx-auto" src={conditioner} alt="Fabric Softener" />
          <h3 className="text-xl font-bold text-gray-800">Fabric Softener</h3>
          <p className="text-gray-600 mt-2">Keeps clothes soft and fresh all day.</p>
        </div>

        {/* Multi-Purpose Cleaner */}
        <div data-aos="fade-up" data-aos-delay="600" className="bg-white shadow-lg p-6 rounded-lg">
          <img className="p-8 rounded-t-lg h-64 mx-auto" src={phase} alt="Multi-Purpose Cleaner" />
          <h3 className="text-xl font-bold text-gray-800">Multi-Purpose Cleaner</h3>
          <p className="text-gray-600 mt-2">Cleans all surfaces with powerful action.</p>
        </div>
      </div>
    </>
  );
}

export default Features;
