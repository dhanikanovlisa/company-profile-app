interface SliderButtonProps {
    length:number,
    currentSlide: number,
    onClick?: (index:number) => void,
  }
  export function SliderButton({ length, currentSlide, onClick}: SliderButtonProps) {
    return (
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: length }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={currentSlide === i ? "w-3 h-3 rounded-full bg-white shadow-white shadow-md" : "w-3 h-3 rounded-full bg-neutral-800"}
            onClick={() => onClick && onClick(i)}
            />
        ))}
      </div>
    );
  }
  