import HeaderSection from './components/HeaderSection/HeaderSection'
import ServiceSection from './components/ServiceSection/ServiceSection'
import BlobCircle from './components/BlobCircle/BlobCircle'

function App() {
  return (
    <div className="relative">
      <HeaderSection/>

      <ServiceSection/>

      <BlobCircle/>
      <BlobCircle leftSide={true}/>
      <BlobCircle rightSide={true}/>
    </div>
  )
}

export default App
