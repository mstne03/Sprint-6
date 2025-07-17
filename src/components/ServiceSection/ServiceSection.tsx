import Div from '../Div/Div'

type ServiceSectionProps = {

}

const ServiceSection = ({}:ServiceSectionProps) => {
  const cardMap = [
    {
      key: 1, 
      service: "SEO",
      description: "Optimize your website's SEO for better positioning",
      pricing: 300
    },
    {
      key: 2, 
      service: "ADS",
      description: "Use ads to get people to know you",
      pricing: 400
    },
    {
      key: 3, 
      service: "WEB",
      description: "Complete responsive web programming",
      pricing: 500
    }
  ]

  return (
    <div className="flex justify-center items-center gap-1 md:gap-10 mt-30 sticky z-10">
      {cardMap.map(object => (
          <Div key={object.key} isHeader={false}>
            <div className="
                    min-h-[150px] 
                    flex 
                    flex-col 
                    items-center
                    justify-between
                    gap-5
            ">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold">
                  {object.service}
                </h1>
                <p>{object.description}</p>
              </div>
              <div className="flex gap-10 items-center">
                <div className="flex gap-0 items-baseline">
                  <p className="font-bold text-2xl">
                    {object.pricing}
                  </p>
                  <span className="text-[15px]">€</span>
                </div>
                <input 
                  type="checkbox" 
                  name={`${object.service}`} 
                  id={`${object.key}`}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </Div>
        )
      )}
    </div>
  )
};

export default ServiceSection;
