type BlobCircleProps = {
  rightSide?:boolean,
  leftSide?:boolean
}

const BlobCircle = ({rightSide=false, leftSide=false}:BlobCircleProps) => {
  const positioning = () => (
    rightSide ? "absolute -left-[10%] -top-[20%] md:left-[600px] md:-top-[200px]" 
      : leftSide ? "absolute md:right-[600px] md:-bottom-[200px]" 
        : "fixed"
  )

  const width = () => (
    rightSide ? "max-w-[300px] max-h-[300px]" 
      : leftSide ? "max-w-[200px] max-h-[200px]" 
        : "w-[500px] h-[500px]"
  )

  const animation = () => (
    rightSide ? "animate-radial-gradient-alt" 
      : leftSide ? "animate-radial-gradient-alt-2" 
        : ""
  )

  const gradientColors = () => (
    rightSide ? "from-purple-500 via-blue-700 to-green-300" 
      : leftSide ? "from-pink-950 via-orange-300 to-green-600" 
        : "from-yellow-600 via-red-400 to-pink-600"
  )

  const animateCenterGradient = () => (
    leftSide ? "" 
      : rightSide ? "" 
        : "animate-radial-gradient"
  )


  return (
    <div 
        className={`
          ${positioning()} 
          z-10 
          rounded-full 
          inset-0 
          m-auto 
          ${width()}
          ${animation()}
          overflow-hidden 
          blur-[40px]
    `}>
      <div className={`
            w-[100vw] 
            h-[100vh] 
            inset-0 
            m-auto 
            bg-radial 
            ${gradientColors()}
            ${animateCenterGradient()}
      `}>
      </div>
    </div>
  )
};

export default BlobCircle;
