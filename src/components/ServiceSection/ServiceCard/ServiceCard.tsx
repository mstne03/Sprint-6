import Div from '../../Div/Div'
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox'
import type { ServiceCardProps } from '../../../utils/Types'


const ServiceCard = ({
  id,
  onClickFun,
  isNotHeader,
  isClickable,
  isNotInline,
  service,
  description,
  pricing,
  isChecked,
}:ServiceCardProps) => (
  <Div 
    isNotHeader={isNotHeader} 
    isClickable={isClickable}
    isNotInline={isNotInline}
  >
    <div className="
            min-h-[150px] 
            flex 
            flex-col 
            items-center
            justify-between
            gap-5
          "
    >
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">
          {service}
        </h1>
        <p>{description}</p>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-0 items-baseline">
          <p className="font-bold text-2xl">
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
  </Div>
);

export default ServiceCard;
