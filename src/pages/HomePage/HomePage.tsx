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
            <BlobCircle leftSide={true}/>
            <BlobCircle rightSide={true}/>
            <BlobCircle interactive={true}/>
        </div>
    )
}

export default HomePage;