type BlobCircleProps = {
  rightSide?:boolean,
  leftSide?:boolean,
  interactive?:boolean
}

const BlobCircle = ({rightSide=false, leftSide=false, interactive=false}:BlobCircleProps) => {

  return (
    <div 
        className={`
          ${
            interactive ? `hidden`
            : rightSide ? "absolute left-[700px] -top-[300px]" 
            : leftSide ? "absolute right-[900px] top-[100px]" 
            : "fixed"
          }
          ${interactive ? "" : "pointer-events-none"} 
          z-10 
          rounded-full 
          inset-0 
          m-auto 
          ${
            interactive ? "max-w-[100px] max-h-[100px]"
            : rightSide ? "max-w-[300px] max-h-[300px]" 
            : leftSide ? "max-w-[200px] max-h-[200px]" 
            : "w-[500px] h-[500px]"
          }
          ${
            interactive ? ""
            : rightSide ? "animate-radial-gradient-alt" 
            : leftSide ? "animate-radial-gradient-alt-2" 
            : ""
          }
          overflow-hidden 
          blur-[40px]
    `}>
      <div className={`
            w-[100vw] 
            h-[100vh] 
            inset-0 
            m-auto 
            bg-radial 
            ${
              interactive ? "bg-fuchsia-300"
              : rightSide ? "from-purple-500 via-blue-700 to-green-300" 
              : leftSide ? "from-pink-950 via-orange-300 to-green-600" 
              : "from-yellow-600 via-red-400 to-pink-600"
            }
            ${
              interactive ? ""
              : leftSide ? "" 
              : rightSide ? "" 
              : "animate-radial-gradient"
            }
      `}
      >

      </div>
    </div>
  )
};

export default BlobCircle;
