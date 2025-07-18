import HeaderSection from '../../components/HeaderSection/HeaderSection'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import BlobCircle from '../../components/BlobCircle/BlobCircle'

type HomePageProps = {

}

const HomePage = ({}:HomePageProps) => {

    return (
        <div className="relative">
            <HeaderSection/>

            <ServiceSection/>

            <BlobCircle/>
        </div>
    )
}

export default HomePage;