import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Movie titles array - MOVED OUTSIDE THE COMPONENT for stable reference
const tamilMovieTitles = [
  "Retro", "Thug Life", "Tourist Family", "Sabdham", "Niram Marum Ulagil",
  "Ten Hours", "Kadhalikka Neramillai", "Kudumbasthan", "Madha Gaja Raja (MGR)",
  "Vanangaan", "Kuzhanthaigal Munnetra Kazhagam (KMK)", "Bottle Radha",
  "Mr House Keeping", "Rajabheema", "Ring Ring", "Tharunam", "Padai Thalaivan",
  "Kudumbasthan", "Vallan", "Madras Matinee", "Kuberaa", "Maargan", "3BHK",
  "Love Insurance Kompany", "Idly Kadai", "Kantara A Legend Chapter-1",
  "Jana Nayagan", "Peranbum Perungobamum", "Phoenix", "Ghatikachalam",
  "Love Karu Yaaa Shaadi 1.5", "Sister Midnight 3.0", "Karate Kid: Legends 3.5",
  "Chidiya 3.5", "Tomchi", "Simple Manusan", "Idhayam Murali", "Kannappa",
  "Thevar Magan 2", "Oh God Beautiful", "Rekkai Mulaithen", "Kumaara Sambavam",
  "LIK", "Dragon", "DD Next Level", "Gangers", "Asthram", "Varunan",
  "Peranbum Perungobamum", "Madras Matinee", "Captain America: Brave New World",
  "Retro", "Vallamai", "Sumo", "C4 Cinta", "Nesippaya", "Gangers", "Asthram",
  "Varunan", "Peranbum Perungobamum", "Graduation Trip: Mallorca", "Mountainhead",
  "Love Therapy", "Moonwalk", "Manidhargal", "School", "Thug Life",
  "Paramasivan Fathima", "Peranbum Perungobamum", "Phoenix", "Ghatikachalam",
  "Love Karu Yaaa Shaadi 1.5", "Sister Midnight 3.0", "Karate Kid: Legends 3.5",
  "Chidiya 3.5", "Tomchi", "English", "Thug Life", "Paramasivan Fathima",
  "Peranbum Perungobamum", "Phoenix", "Ghatikachalam", "Kingdom",
  "Karate Kid: Legends 3.5", "Chidiya 3.5", "Tomchi", "English", "Thug Life",
  "Paramasivan Fathima", "Peranbum Perungobamum", "Phoenix", "Ghatikachalam",
  "Kingdom", "Jane Austen Wrecked My ...", "Karate Kid: Legends 3.5",
  "Chidiya 3.5", "Tomchi", "Bengali", "Thug Life", "Paramasivan Fathima",
  "Peranbum Perungobamum", "Phoenix", "Ghatikachalam", "Kingdom",
  "Jane Austen Wrecked My ...", "Karate Kid: Legends 3.5", "Chidiya 3.5",
  "Tomchi", "Gujarati", "Peranbum Perungobamum", "Thug Life", "Phoenix",
  "Ghatikachalam", "Kingdom", "Jane Austen Wrecked My ...",
  "Karate Kid: Legends 3.5", "Chidiya 3.5", "Tomchi", "Oriya", "Thug Life",
  "Paramasivan Fathima", "Peranbum Perungobamum", "Phoenix", "Ghatikachalam",
  "Love Karu Yaaa Shaadi 1.5", "Sister Midnight 3.0", "Karate Kid: Legends 3.5",
  "Chidiya 3.5", "Tomchi", "Tulu", "Thug Life", "Paramasivan Fathima",
  "Peranbum Perungobamum", "Phoenix", "Ghatikachalam",
  "Love Karu Yaaa Shaadi 1.5", "Sister Midnight 3.0", "Karate Kid: Legends 3.5",
  "Chidiya 3.5", "Tomchi", "Assamese", "Thug Life", "Paramasivan Fathima",
  "Peranbum Perungobamum", "Phoenix", "Ghatikachalam",
  "Love Karu Yaaa Shaadi 1.5", "Sister Midnight 3.0", "Karate Kid: Legends 3.5",
  "Chidiya 3.5",
];


const Tamilmovies = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state for loading
  const slideRef = useRef(null);
  const navigate = useNavigate();

  const cardWidth = 220; // Card width + margin approx

  const apiKey = "b80a4cc3";

  // Fetch posters on mount
  useEffect(() => {
    async function fetchPosters() {
      setIsLoading(true); // Set loading to true before fetch
      try {
        const fetchedImages = await Promise.all(
          tamilMovieTitles.map(async (title) => {
            const res = await fetch(
              `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`
            );
            const data = await res.json();
            return data.Poster && data.Poster !== "N/A" ? { poster: data.Poster, title } : null;
          })
        );
        setImages(fetchedImages.filter(Boolean));
      } catch (error) {
        console.error("Error fetching posters:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch, regardless of success or error
      }
    }
    fetchPosters();
  }, []); // Empty dependency array is correct

  // Move to next slide (with wrap-around)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Move to previous slide (with wrap-around)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Autoplay slider every 3 seconds, pause on hover
  useEffect(() => {
    // Only run autoplay if not loading and there are images
    if (!isPaused && images.length > 0 && !isLoading) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide, images.length, isLoading]); // Add isLoading to dependencies

  // Handle hover to pause autoplay
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Handle image click to navigate to Displaymovie.jsx with movie title
  const handleImageClick = (title) => {
    navigate("/displaymovie", { state: { movieName: title } });
  };

  return (
    <section className=" bg-black py-10 select-none w-full overflow-hidden">
      <h1 className="text-white text-4xl mb-8 ml-10 font-semibold">
        Tamil New Movies
      </h1>

      {isLoading ? (
        // Loading Animation/Text
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          {/* You can use a spinner from a library like Font Awesome or just simple text */}
          <p className="ml-4 text-white text-xl">Loading movies...</p>
        </div>
      ) : (
        // Render slider content once loading is complete and images are available
        images.length > 0 ? (
          <div
            className="relative mx-auto max-w-[100%] overflow-hidden rounded-xl shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Slides container */}
            <div
              ref={slideRef}
              className="flex slider-container overflow-hidden w-full px-0 ml-0"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                width: images.length * cardWidth,
              }}
            >
              {images.map(({ poster, title }, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-2 cursor-pointer"
                  style={{ width: 200, height: 300 }}
                  onClick={() => handleImageClick(title)}
                  title={title} // show title on hover
                >
                  <img
                    src={poster}
                    alt={`Movie poster: ${title}`}
                    className="w-full h-full rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white bg-opacity-80 p-3 shadow hover:bg-opacity-100 transition"
              style={{ userSelect: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white bg-opacity-80 p-3 shadow hover:bg-opacity-100 transition"
              style={{ userSelect: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ) : (
            // Handle case where no images are fetched after loading
            <div className="flex justify-center items-center h-64">
                <p className="text-white text-xl">No movies found.</p>
            </div>
        )
      )}
    </section>
  );
};

export default Tamilmovies;