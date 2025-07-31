import Div from '../../Div/Div'
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox'
import type { ServiceCardProps } from '../../../utils/Types'

const ServiceCard = ({
  id,
  onClickFun,
  isNotHeader,
  isNotInline,
  service,
  description,
  pricing,
  isChecked,
}:ServiceCardProps) => (
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
            checked={isChecked}
            onChange={onClickFun}
          />
        </div>
      </div>
      
    </div>
  </Div>
);

export default ServiceCard;
