import { useState } from 'react'
import Div from '../Div/Div'
import PendingServices from './PendingServices/PendingServices'
import useCurrentService from '../../hooks/useCurrentService'
import type { SaveSearchServiceProps, Application, SavedServices } from '../../utils/Types'
import CardArray from '../../data/ServiceSectionData'
import ServiceMap from '../../data/SavedServices'

const SaveSearchService= ({}:SaveSearchServiceProps) => {

  const [services, setServices] = useState<SavedServices>([])

  const {
    languageAddon,
    pagesAddon,
    checked,
    price
  } = useCurrentService();

  const createApplication = (application: FormData) => {
    const newApplication:Application = {
      client: application.get("name")! as string,
      phone: parseInt(application.get("phone")! as string),
      eMail: application.get("e-mail")! as string,
      price: price,
      services: [],
    }

    Object.entries(checked).map(([key, isChecked], i) => {
      if (isChecked) {

        const selectedService = CardArray[i];

        if (selectedService.addOns) {
          newApplication.services.push({...selectedService, 
            addOns: {
              pages: {
                ...selectedService.addOns.pages,
                quantity:pagesAddon,
              },
              languages: {
                ...selectedService.addOns.languages,
                quantity:languageAddon,
              }
            }
          })
        } else {
          newApplication.services.push({...selectedService})
        }
        
      }
    })
  
    ServiceMap.push(newApplication);

    setServices(prev => [...prev, newApplication])
  }

  const searchApplication = (data: FormData) => {
    const name = data.get("name")! as string;
    const phone = parseInt(data.get("phone")! as string);
    const eMail = data.get("e-mail")! as string;
    
    const applications = ServiceMap.filter(application => {
        if (!(application.client === name ||
              application.phone === phone ||
              application.eMail === eMail)) 
          return alert("No applications with this parameters")
        
        return application;
      }
    )

    
  }

  return (
    <Div>
      <div className="flex gap-10">
        <PendingServices
          services={services}
        />
        <div className="flex flex-col gap-10">
          <div>
            <form action={createApplication} id="applicationForm">
              <label htmlFor="applicationForm">Apply for a budget</label>
              <div className="mt-5 flex flex-col">
                <div className="flex flex-col gap-5 mb-5">
                  <input 
                    className="py-2"
                    type="text" 
                    name="name" 
                    placeholder="name" 
                  />
                  <input 
                    className="py-2"
                    type="text" 
                    name="phone" 
                    placeholder="phone" 
                  />
                  <input 
                    className="py-2"
                    type="text" 
                    name="e-mail" 
                    placeholder="e-mail" 
                  />
                </div>
                <button className="
                          border-2 
                          px-5 
                          py-2 
                          rounded 
                          hover:cursor-pointer 
                          hover:scale-110
                          active:scale-90
                          transition
                          duration-400
                          ease-in-out
                        " 
                        type="submit"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>

          <div>
            <form className="flex flex-col" action={searchApplication} id="searchForm">
              <label htmlFor="searchForm">
                Search for an application
              </label>
              <div className="flex flex-col gap-5 mt-5">
                <input className="py-2" type="text" name="search" placeholder="search" />
                <button className="
                          border-2 
                          px-5 
                          py-2 
                          rounded 
                          hover:cursor-pointer 
                          hover:scale-110 
                          active:scale-90
                          transition
                          duration-400
                          ease-in-out
                        "
                        type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </Div>
  )
};

export default SaveSearchService;
