import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PropertyGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="h-[600px] w-full bg-gray-100">
        <Image
          width={1200}
          height={600}
          src={images[currentIndex]}
          alt={`Property view ${currentIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
      >
        <FiChevronRight size={24} />
      </button>
      <div className="absolute right-0 bottom-4 left-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};
export default PropertyGallery;
