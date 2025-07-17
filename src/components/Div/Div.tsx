type DivProps = {
    children:React.ReactNode,
    isHeader?:boolean,
}

const Div = ({children, isHeader=true}:DivProps) => (
    <div className={`
            min-w-[250px]
            ${isHeader ? "": "max-w-[100px]"}
            transform-gpu
            will-change-transform
            mt-4
            p-4
            cursor-pointer 
            shadow-2xl 
            inset-shadow-gray-950 
            border-2 
            text-green-200/70 
            border-white/20 
            rounded-md 
            space-x-32
            transition
            duration-700 
            ease-in-out 
            bg-white/30  
            backdrop-blur-sm 
            hover:backdrop-blur-lg
            hover:scale-105
    `}>
        {children}
    </div>
);

export default Div;
