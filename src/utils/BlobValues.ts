import type { FunctionReturn, BlobCircleProps, BlobCircleReturn } from './Types' 

const BlobCircleFunction:FunctionReturn<BlobCircleProps, BlobCircleReturn> = ({rightSide, leftSide}:BlobCircleProps) => (
    {
        positioning: rightSide 
                        ? "absolute -left-[10%] -top-[20%] md:left-[600px] md:-top-[200px]" 
                        : leftSide 
                        ? "absolute md:right-[600px] md:-bottom-[200px]" 
                        : "fixed",
        width: rightSide 
                ? "max-w-[300px] max-h-[300px]" 
                : leftSide 
                ? "max-w-[200px] max-h-[200px]" 
                : "w-[500px] h-[500px]",
        animation: rightSide 
                    ? "animate-radial-gradient-alt" 
                    : leftSide 
                    ? "animate-radial-gradient-alt-2" 
                    : "",
        gradientColors: rightSide 
                            ? "from-purple-500 via-blue-700 to-green-300" 
                            : leftSide 
                            ? "from-pink-950 via-orange-300 to-green-600" 
                            : "from-yellow-600 via-red-400 to-pink-600",
        animateCenterGradient: leftSide 
                                ? "" 
                                : rightSide 
                                ? "" 
                                : "animate-radial-gradient"
    }
);

export default BlobCircleFunction;
