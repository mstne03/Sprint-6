import type { SavedServices } from '../../../utils/Types'
import useCurrentService from '../../../hooks/useCurrentService'

type PendingServicesProps = {
    services:SavedServices
}

const PendingServices = ({services}:PendingServicesProps) => {

    return (
        <div className="flex flex-col gap-5 max-h-[630px] overflow-y-auto">
            {services.length !== 0 &&
            services.map((service, i) => {
                return (
                    <div key={i} className="border-2 inset-shadow-2xs rounded-[10px] p-10">
                        <h1 className="font-bold text-[20px]">
                            {service.client}
                        </h1>

                        <p>e-mail: <span className="font-bold">{service.eMail}</span></p>

                        <p>phone number: <span className="font-bold">{service.phone}</span></p>

                        <p>hired services:</p>
                        {service.services.map((s, i) => (
                            <li key={i}>
                                {s.service}
                            
                                {s.addOns && (
                                    s.addOns.languages.quantity>0 || s.addOns.pages.quantity>0) && (
                                    <ul>
                                        {s.addOns.pages.quantity > 0 && (
                                            <li>
                                                {`${s.addOns.pages.quantity} ${s.addOns.pages.name}`}
                                            </li>
                                        )}
                                        
                                        {s.addOns.languages.quantity > 0 && (
                                            <li>
                                                {`${s.addOns.languages.quantity} ${s.addOns.languages.name}`}
                                            </li>
                                        )}
                                    </ul>
                                    
                                )}
                            </li>
                        ))}

                        <div className="flex gap-5 items-baseline">
                            <p>Total:</p>
                            <div className="flex gap-0 font-bold items-baseline">
                                <p className="text-[20px]">{service.price}</p>
                                <span>€</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PendingServices
