export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center w-20 h-10 ml-10">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-row items-center justify-end p-3 mr-10 space-x-10">
        <span className="slide-indicator absolute bottom-0 left-0 h-1 bg-white w-full transform scale-x-0 transition-transform duration-200 ease-out"></span>
        <div
          className="flex flex-row ms-4 items-center justify-center p-2 hover:bg-[--secondary-2] fill-[--text-brown] hover:text-white
      hover:fill-white hover:rounded-lg"
        >
          <p className="text-orange-500 font-bold">Home</p>
        </div>
        <div
          className="flex flex-row ms-4 items-center justify-center p-2 hover:bg-[--secondary-2] fill-[--text-brown] hover:text-white 
    hover:fill-white hover:rounded-lg"
        >
          <p className="text-orange-500 font-bold">Product</p>
        </div>
        <div
          className="flex flex-row ms-4 items-center justify-center p-2 hover:bg-[--secondary-2] fill-[--text-brown] hover:text-white
       hover:fill-white hover:rounded-lg"
        >
          <p className="text-orange-500 font-bold">Features</p>
        </div>
        <div
          className="flex flex-row ms-4 items-center justify-center p-2 hover:bg-[--secondary-2] fill-[--text-brown] hover:text-white
       hover:fill-white hover:rounded-lg"
        >
          <p className="text-orange-500 font-bold">Testimonial</p>
        </div>
      </div>
    </div>
  );
};
