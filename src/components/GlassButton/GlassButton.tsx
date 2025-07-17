type GlassButtonProps = {
  text:string
}

const GlassButton = ({text}:GlassButtonProps) => (
  <button className="
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
  </button>
);

export default GlassButton;
