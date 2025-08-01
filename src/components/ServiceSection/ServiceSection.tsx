import Div from '../Div/Div'
import useCurrentService from '../../hooks/useCurrentService'
import cardArray from '../../data/ServiceSectionData'
import DivVariants from '../../data/DivVariants'
import ServiceCard from './ServiceCard/ServiceCard'
import WebAddons from './WebAddons/WebAddons'
import { motion, AnimatePresence } from 'motion/react'

const ServiceSection = () => {

  const {
      checked,
      setChecked,
      price
  } = useCurrentService();

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="
            flex
            flex-col
            justify-center
            items-center
            gap-3
            pb-20
            z-20
      ">
        {cardArray.map(object => (
            <div className="flex min-h-[100px] items-center relative" key={object.key}>
              <ServiceCard
                id={object.key}
                onClickFun={setChecked}
                isNotHeader={DivVariants.isNotHeader}
                isNotInline={DivVariants.isNotInline}
                service={object.service}
                description={object.description}
                pricing={object.pricing}
                isChecked={checked[object.key]}
              />

              <AnimatePresence>
                {
                  (object.addOns != undefined && checked[object.key]) &&
                  <motion.div  className="flex flex-col justify-center items-center absolute -right-40">
                    {Object.entries(object.addOns).map(([key, value]) => (
                      <WebAddons
                        key={key}
                        addon={value.name}
                        price={value.price}
                      />
                    )) }
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          )
        )}
        
      </div>
      <div className="absolute top-[550px] z-15 md:fixed">
        <Div>
          <div className="flex gap-5 items-baseline justify-center">
            <h3 className="font-bold text-2xl">TOTAL PRICE:</h3>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold">{price}</p>
              <span>€</span>
            </div>
          </div>
        </Div>
      </div>
    </div>
  )
};

export default ServiceSection;
