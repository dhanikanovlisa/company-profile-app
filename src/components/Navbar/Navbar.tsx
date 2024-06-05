
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-10">
      <div className="flex justify-center items-center w-20 h-10">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-row items-center space-x-10">
        <span className="slide-indicator absolute bottom-0 left-0 h-1 bg-white w-full transform scale-x-0 transition-transform duration-200 ease-out"></span>
        {["Home", "Product", "Features", "Testimonial"].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center p-2 cursor-pointer hover:bg-orange-500 text-orange-500 font-bold hover:text-white hover:bg-[--secondary-2] rounded-lg transition-colors duration-200 ease-in-out"
            onClick={() => console.log(`${item} clicked`)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
