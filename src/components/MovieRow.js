import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cards from "./Cards";

function MovieRow({ title, movies, type }) {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [movies]);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4 px-8">{title}</h2>
        <div className="relative">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 h-full px-2 bg-black bg-opacity-60 hover:bg-opacity-75 text-white"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div ref={scrollRef} className="flex gap-4 overflow-hiddenflex gap-4 overflow-hidden scroll-smooth scrollbar-hide px-8">
          {movies.map((movie) => 
            <Cards key={movie.id} movie={movie} type={type}/>
          )}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-0 z-10 h-full px-2 bg-black bg-opacity-60 hover:bg-opacity-75 text-white"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

export default MovieRow;
