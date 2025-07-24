import type { BlobCircleProps } from '../../utils/Types'
import BlobCircleFunction from '../../data/BlobValues'

const BlobCircle = ({rightSide=false, leftSide=false}:BlobCircleProps) => {
  
  const Values = BlobCircleFunction({rightSide, leftSide});

  return (
    <div 
        className={`
          ${Values.positioning} 
          ${Values.width}
          ${Values.animation}
          z-10 
          rounded-full 
          inset-0 
          m-auto 
          overflow-hidden 
          blur-[40px]
    `}>
      <div className={`
            w-[100vw] 
            h-[100vh] 
            inset-0 
            m-auto 
            bg-radial 
            ${Values.gradientColors}
            ${Values.animateCenterGradient}
      `}>
      </div>
    </div>
  )
};

export default BlobCircle;
