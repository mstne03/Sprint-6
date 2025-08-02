import ServiceMap from '../../../data/SavedServices'

const PendingServices = () => {
    
    
    return (
        <div>
            {ServiceMap.length !== 0 &&
            ServiceMap.map(service => {
                return (
                    <div className="border-2 inset-shadow-2xs rounded-[10px] p-10 overflow-auto">
                        <h1 className="font-bold text-[20px]">
                            {service.client}
                        </h1>

                        <div className="flex flex-col">
                            <p>Total:</p>
                            <div>
                                <p>{service.price}</p>
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
