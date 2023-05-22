import React from "react";

function About() {
  return (
    <>
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-2xl  font-mono tracking-widest font-semibold text-[#171717] text-center mb-8">
            Our Story
          </h2>
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2">
              <img
                src="/images/veganhof foy activity.png"
                alt="About veganHof"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="sm:w-1/2 sm:pl-8 mt-8 sm:mt-0">
              <p className="text-base md:text-lg leading-relaxed mb-6">
                veganHof is a brand that offers a wide range of organic protein
                smoothie powders. We are committed to providing high-quality and
                nutritious plant-based products for individuals who value a
                healthy and sustainable lifestyle.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Our protein smoothie powders are made from carefully selected
                ingredients, sourced from organic farms. They are vegan, free
                from artificial additives, and packed with essential nutrients
                to support your health and fitness goals.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                veganHof is proudly manufactured by Musclestadt Sporternährung
                GmbH, a trusted German company known for its commitment to
                quality. We adhere to strict manufacturing standards to ensure
                that every product meets the highest level of excellence.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Experience the goodness of veganHof protein smoothie powders and
                embark on a delicious and nourishing journey to a healthier you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
