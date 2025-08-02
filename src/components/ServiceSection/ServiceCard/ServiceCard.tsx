import Div from '../../Div/Div'
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox'
import useCurrentService from '../../../hooks/useCurrentService'
import type { ServiceCardProps } from '../../../utils/Types'

const ServiceCard = ({
  id,
  isNotHeader,
  isNotInline,
  service,
  description,
  pricing,
}:ServiceCardProps) => {

  const {
    checked,
    setChecked,
  } = useCurrentService();

  return (
    <Div 
      isNotHeader={isNotHeader}
      isNotInline={isNotInline}
    >
      <div className="flex gap-7">
        <div className="
                min-h-[90px]
                max-w-[300px]
                flex  
                items-center
                justify-between
                gap-16
              "
        >
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">
              {service}
            </h1>
            <p className="text-[15px] font-semibold">{description}</p>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex gap-0 items-baseline">
              <p className="font-bold text-[20px]">
                {pricing}
              </p>
              <span className="text-[15px]">€</span>
            </div>
            <ServiceCheckbox 
              service={service}
              id={id}
              checked={checked[id]}
              onChange={setChecked}
            />
          </div>
        </div>
        
      </div>
    </Div>
  )
}

export default ServiceCard;
