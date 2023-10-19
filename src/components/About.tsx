const About = () => {
  return (
    <section className="grid grid-rows-[minmax(0,22rem)_1fr_minmax(0,22rem)] lg:grid-cols-3 lg:grid-rows-1">
      <div>
        <img
          src="/generic/image-about-dark.jpg"
          className="h-full max-h-full w-full max-w-full object-cover"
        />
      </div>
      <div>
        <div className="mx-auto grid h-full place-content-center gap-4 px-4 py-10 lg:px-12">
          <h1 className="text-lg font-bold tracking-[0.2em] md:text-xl lg:text-2xl">
            About our furniture
          </h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/generic/image-about-light.jpg"
          className="h-full max-h-full w-full max-w-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
