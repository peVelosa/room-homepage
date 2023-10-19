import { useEffect, useState } from 'react';
import { MoveRight } from 'lucide-react';
import { slides } from '../utils/slides';

import { ChevronRight, ChevronLeft } from 'lucide-react';
import useWindowScreen from '../hooks/useWindowScreen';

const fetchSlides = new Promise((resolve) => {
  resolve(slides);
});

const Hero = () => {
  const [heroSlide, setHeroSlide] = useState<typeof slides | []>([]);
  const [slideActive, setSlideActive] = useState<number>(0);
  const { screenSize } = useWindowScreen();

  useEffect(() => {
    fetchSlides.then((res) => setHeroSlide(res as typeof slides));
  }, []);

  function nextSlide() {
    if (slideActive === heroSlide.length - 1) return setSlideActive(0);
    setSlideActive((old) => old + 1);
  }

  function prevSlide() {
    if (slideActive === 0) return setSlideActive(heroSlide.length - 1);
    setSlideActive((old) => old - 1);
  }

  const size = !screenSize ? 'mobile' : screenSize < 600 ? 'mobile' : 'desktop';

  return (
    <section className="grid grid-rows-[minmax(0,22rem)_1fr] lg:grid-cols-3 lg:grid-rows-1 lg:place-content-center">
      <div className="relative isolate z-10 lg:col-span-2">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-in-out"
            style={{ transform: `translateX(-${slideActive * 100}%)` }}
          >
            {heroSlide?.map((slide) => (
              <img
                key={slide.title}
                src={slide?.img[size]}
                className="h-full max-h-full w-full max-w-full shrink-0 object-cover"
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-20 flex text-zinc-200 lg:hidden">
          <button
            onClick={prevSlide}
            className="bg-black px-5 py-4"
          >
            <ChevronLeft size={25} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black px-5 py-4"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      </div>
      <div className="relative isolate z-10 h-full">
        <div className=" mx-auto grid h-full max-w-md place-content-center gap-4 px-4 py-10">
          <h1 className="text-3xl font-bold">
            {heroSlide[slideActive]?.title}
          </h1>
          <p>{heroSlide[slideActive]?.description}</p>
          <a
            href={heroSlide[slideActive]?.href}
            className="inline-flex gap-4 font-bold uppercase tracking-[0.45em] hover:opacity-50"
          >
            shop now <MoveRight />
          </a>
        </div>
        <div className="left-0-0 absolute bottom-0 z-20 hidden text-zinc-200 lg:flex">
          <button
            onClick={prevSlide}
            className="bg-black px-5 py-4"
          >
            <ChevronLeft size={25} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black px-5 py-4"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
