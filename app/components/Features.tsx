import FeaturesCards from "./FeaturesCards";

export default function Features() {
  return (
    <section
      aria-label="Características de TaskFlow"
      className="bg-white py-20 lg:py-28"
      aria-describedby="features-desc"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="heading-primary text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Everything
          <br /> You Need to Stay <br />
          Organized
        </h2>

        <p
          id="features-desc"
          className="max-w-2xl mx-auto text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Powerful features designed to help you manage tasks efficiently and
          boost your productivity.
        </p>

        <div className="">
          {/* Ideal: FeaturesCards recibe un array de features y renderiza las cards */}
          <FeaturesCards />
        </div>
      </div>
    </section>
  );
}
