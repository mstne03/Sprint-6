import type { DivProps } from '../../utils/Types'

const Div = ({
    children, 
    isNotHeader="", 
    isClickable="", 
    isInline="",
    isNotInline="", 
    fun=undefined,
}:DivProps) => (
    <div 
        onClick={fun}

        className={`
            ${isNotHeader}
            ${isClickable}
            ${isInline}
            ${isNotInline}
            transform-gpu
            will-change-transform
            mt-4
            p-4
            shadow-2xl 
            inset-shadow-gray-950 
            border-2 
            text-green-200/70 
            border-white/20 
            rounded-md 
            space-x-32
            transition
            duration-400 
            ease-in-out 
            bg-white/10  
            hover:bg-white/30
            backdrop-blur-[600px] 
            hover:backdrop-blur-lg
            z-20
        `}
    >
        {children}
    </div>
);

export default Div;
