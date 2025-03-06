"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  // Replace API calls with constant data
  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      category: "SMC",
      image: "/bg1.jpg",
      video: "https://www.youtube.com/embed/video1",
      type: "SMC",
    },
    {
      id: 2,
      title: "Project 2",
      category: "Catalogue",
      image: "/bg2.jpg",
      video: "https://www.youtube.com/embed/video2",
      type: "Catalogue",
    },
    {
      id: 3,
      title: "Project 3",
      category: "Advertisements",
      image: "/bg3.jpg",
      video: "https://www.youtube.com/embed/video3",
      type: "Advertisements",
    },
    // Add more mock data as needed
  ];

  const categories = [
    "All",
    "SMC",
    "Catalogue",
    "Advertisements",
    "Caption",
    "Anime",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [tempImages, setTempImages] = useState([]);

  const itemsPerPage = 6;

  useEffect(() => {
    // Filter and paginate items on category change
    setCurrentPage(1);
    setTempImages(filteredItems.slice(0, itemsPerPage));
  }, [selectedCategory]);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === selectedCategory);

  const handleThumbnailClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setTempImages(filteredItems.slice(0, (currentPage + 1) * itemsPerPage));
  };

  return (
    <div className="text-white pb-12 px-4 md:px-12 w-full lg:px-16">
      <>
        {/* Categories */}
        <div className="flex w-full overflow-x-auto space-x-2 mb-8 md:space-x-8 md:mb-12 animate-fadeIn scrollbar-hide">
          <div className="flex flex-nowrap justify-center space-x-2 md:space-x-10 mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative group py-1 `}
              >
                {category}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[1.4px] bg-gray-300 transition-all duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "w-full"
                      : "group-hover:w-full"
                  }`}
                  aria-hidden="true"
                ></span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 animate-fadeIn transition-all duration-300">
          {tempImages.map((item) => (
            <div
              key={item.id}
              className="relative blur-load group overflow-hidden rounded-lg animate-popIn transition-all duration-300 hover:cursor-pointer"
              onClick={() => handleThumbnailClick(item.video)}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full inner-div">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[40vh] sm:h-[40vh] md:h-[35vh] lg:h-[30vh] object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center px-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {tempImages.length < filteredItems.length && (
          <div className="flex justify-center mt-8 animate-fadeIn">
            <button
              onClick={handleLoadMore}
              className="relative group text-white font-bold py-2 px-4"
            >
              Load More
              <span
                className="absolute left-0 bottom-0 w-0 h-[1.4px] bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 sm:p-8">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-4xl p-4 sm:p-6 bg-black rounded-lg">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              <iframe
                className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
                src={currentVideo}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Portfolio;
