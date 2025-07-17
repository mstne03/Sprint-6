type GlassButtonProps = {
  text:string
}

const GlassButton = ({text}:GlassButtonProps) => (
  /*<button className="
          cursor-pointer
          inline-block
          transition 
          duration-700
          ease-in-out
          p-3
          rounded-2xl 
          border-2 
          border-transparent 
          hover:border-white/10 
          hover:shadow-2xs
          hover:text-green-100/90
          hover:scale-115
          active:scale-90
  ">
    {text}
  </button>*/

  <button className="
    cursor-pointer
    inline-block
    p-3
    rounded-2xl 
    border-2 
    border-transparent 
    hover:border-white/25 
    hover:shadow-2xs
    hover:text-green-100/90
    transform
    transform-gpu
    will-change-transform
    transition 
    duration-700 
    ease-in-out
    hover:scale-105
    active:scale-95
  ">
    <span className="block">{text}</span>
  </button>
);

export default GlassButton;
