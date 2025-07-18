import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type ServiceCheckboxProps = {
  service:string,
  id:number,
  checked:boolean,
}

const ServiceCheckbox = ({service,id,checked}:ServiceCheckboxProps) => {
  
  return (
    <label htmlFor={`${service}`}
      className="relative flex items-center"
    >
      <input 
        type="checkbox" 
        name={service} 
        id={`${id}`}
        checked={checked}
        className="
          cursor-pointer
          appearance-none
          w-5 
          h-5
          border-2 
          border-gray-300
          rounded
          checked:border-green-500
          focus:outline-none
          transition 
          duration-200
          active:scale-90
      "/>
      <FontAwesomeIcon 
        icon={faCheck}
        className={`
        ${checked ?  "text-green-500" : "opacity-0"}
          absolute 
          right-[2.5px] 
          top-[1.5px]
          pointer-events-none
          transition
          duration-700
          ease-in-out
      `}/>
    </label>
  );
};

export default ServiceCheckbox;
