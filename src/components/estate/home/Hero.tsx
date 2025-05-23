import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div
      className="relative h-[600px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/estate/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Find Your Dream Property
        </h1>
        <p className="mb-8 max-w-2xl text-center text-xl text-white">
          Discover thousands of properties for sale and rent with immersive
          virtual tours and intelligent search
        </p>
        <SearchBar />
      </div>
    </div>
  );
}
