import Div from '../../Div/Div'
import useCurrentService from '../../../hooks/useCurrentService'
import type { WebAddonsProps } from '../../../utils/Types'
import DivVariants from '../../../data/DivVariants'

const WebAddons = ({addon}:WebAddonsProps) => {
  const {
    pagesAddon,
    setPagesAddon,
    languageAddon,
    setLanguageAddon,
  } = useCurrentService();

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="text-green-200/70 font-medium text-[15px]">
        <p>{addon}</p>
      </div>
      <div className="flex justify-evenly items-baseline">
        <Div
          isClickable={DivVariants.isClickable}
          isInline={DivVariants.isInline}
          fun={() => addon === "Languages" 
                    ? setLanguageAddon(prev => prev+1) 
                    : setPagesAddon(prev => prev+1)
          }
        >
          <p>
            +
          </p>
        </Div>
        <p className="text-green-200/70 font-bold text-[20px] px-5">
          {addon === "Languages" ? languageAddon : pagesAddon}
        </p>
        <Div
          isClickable={DivVariants.isClickable}
          isInline={DivVariants.isInline}
          fun={() => addon === "Languages" 
                    ? setLanguageAddon(prev => {
                      if (prev===0) return prev;

                      return prev-1;
                    }) 
                    : setPagesAddon(prev => {
                      if (prev===0) return prev;

                      return prev-1;
                    })
          }
        >
          <p>
            -
          </p>
        </Div>
      </div>
    </div>
  )
} 

export default WebAddons;
