import Div from '../../Div/Div'
import type { WebAddonsProps } from '../../../utils/Types'
import { DivVariants } from '../../../data/DivVariants'

const WebAddons = ({quantity, setQuantity, addon}:WebAddonsProps) => (
  <div className="flex flex-col items-center mt-5">
    <div className="text-green-200/70 font-bold text-2xl">
      <p>{addon}</p>
    </div>
    <div className="flex justify-evenly items-baseline">
      <Div
        isNotHeader={DivVariants.isNotHeader}
        isClickable={DivVariants.isClickable}
        isInline={DivVariants.isInline}
        fun={() => setQuantity((prev:number) => prev+1)}
      >
        <p>
          +
        </p>
      </Div>
      <p className="text-green-200/70 font-bold text-2xl px-5">
        {quantity}
      </p>
      <Div
        isNotHeader={DivVariants.isNotHeader}
        isClickable={DivVariants.isClickable}
        isInline={DivVariants.isInline}
        fun={() => setQuantity((prev:number) => {
          if (prev===0) return prev;
          
          return prev-1;
        })}
      >
        <p>
          -
        </p>
      </Div>
    </div>
  </div>
);

export default WebAddons;
