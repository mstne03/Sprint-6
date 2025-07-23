type DivProps = {
    children:React.ReactNode,
    isHeader?:boolean,
    isClickable?:boolean,
    isInline?:boolean,
}

const Div = ({children, isHeader=true, isClickable=false, isInline=false}:DivProps) => (
    <div className={`
            cursor-pointer 
            ${isHeader ? "": "max-w-[100px] hover:scale-105"}
            ${isClickable ? "active:scale-90" : ""}
            ${isInline ? "inline-block text-center max-w-[80px]" : "min-w-[250px]"}
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
    `}>
        {children}
    </div>
);

export default Div;
