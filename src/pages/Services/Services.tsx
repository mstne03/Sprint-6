import ServiceSection from '../../components/ServiceSection/ServiceSection'
import SaveSearchService from '../../components/SaveSearchService/SaveSearchService'
import CurrentServiceContext from '../../context/ServicesContext'
import useServiceSection from '../../hooks/useServiceSection'


const Services = () => {

    return (
        <CurrentServiceContext
            value={useServiceSection()}
        >
            <div className="relative flex justify-evenly">
                <ServiceSection/>

                <SaveSearchService/>
            </div>
        </CurrentServiceContext>
        
    )

}

export default Services;
