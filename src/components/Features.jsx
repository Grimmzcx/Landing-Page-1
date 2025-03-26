import calam from "../assets/calam.jpg";
import lemon from "../assets/lemon.jpg";
import conditioner from "../assets/conditioner.jpg";
import phase from "../assets/phase.jpg";

function Features() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-16">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-6 text-emerald-600"
          >
            Our Features
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600 text-lg"
          >
            We offer high-quality, effective cleaning products for all your
            needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {/* Laundry Detergent */}
          <div
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              className="w-full h-64 object-cover"
              src={calam}
              alt="Laundry Detergent"
            />
            <div className="p-6 text-center flex-grow">
              <h3 className="text-2xl font-bold text-gray-800">
               Calamansi Dishwashing liquid
              </h3>
              <p className="text-gray-600 mt-2">
                Deep cleaning with a long-lasting fresh scent.
              </p>
            </div>
          </div>

          {/* Dishwashing Liquid */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              className="w-full h-64 object-cover"
              src={lemon}
              alt="Dishwashing Liquid"
            />
            <div className="p-6 text-center flex-grow">
              <h3 className="text-2xl font-bold text-gray-800">
                Lemon Dishwashing liquid
              </h3>
              <p className="text-gray-600 mt-2">
                Powerful grease removal for spotless dishes.
              </p>
            </div>
          </div>

          {/* Fabric Softener */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              className="w-full h-64 object-cover"
              src={conditioner}
              alt="Fabric Softener"
            />
            <div className="p-6 text-center flex-grow">
              <h3 className="text-2xl font-bold text-gray-800">
                Anti Fabric conditioner
              </h3>
              <p className="text-gray-600 mt-2">
                Keeps clothes soft and fresh all day.
              </p>
            </div>
          </div>

          {/* Multi-Purpose Cleaner */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <img
              className="w-full h-64 object-cover"
              src={phase}
              alt="Multi-Purpose Cleaner"
            />
            <div className="p-6 text-center flex-grow">
              <h3 className="text-2xl font-bold text-gray-800">
                Calamansi dishwashing paste
              </h3>
              <p className="text-gray-600 mt-2">
                Cleans all surfaces with powerful action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
