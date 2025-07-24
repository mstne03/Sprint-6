import Div from '../../Div/Div'

type WebAddonsProps = {
  quantity:number,
  setQuantity:(any:any) => void,
  addon:string,
}

const WebAddons = ({quantity, setQuantity, addon}:WebAddonsProps) => (
  <div className="flex flex-col items-center mt-5">
    <div className="text-green-200/70 font-bold text-2xl">
      <p>{addon}</p>
    </div>
    <div className="flex justify-evenly items-baseline">
      <Div
        isClickable={true}
        isInline={true}
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
        isClickable={true}
        isInline={true}
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
