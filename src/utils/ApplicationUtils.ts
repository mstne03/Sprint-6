import type { Application, SavedServices, ServiceObject, SetState } from '../utils/Types'
import CardArray from '../data/ServiceSectionData'
import ServiceMap from '../data/SavedServices'

const createApplication = (
    application: FormData, 
    price:number, 
    checked:ServiceObject,
    pagesAddon:number,
    languageAddon:number,
    setServices:SetState<SavedServices>,
    setFilteredServices:SetState<SavedServices>,
    setIsFiltering:SetState<boolean>
) => {
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
    setFilteredServices(prev => [...prev, newApplication])
    setIsFiltering(false);
}

const searchApplicationByQuery = (
    data: FormData, 
    setIsFiltering:SetState<boolean>,
    services:SavedServices,
    setFilteredServices:SetState<SavedServices>
) => {
    const query = data.get("search")! as string;
    
    if (!query.trim()) {
      setIsFiltering(false);
      return;
    }

    const filteredServices = services.filter(application => (
            application.client.toLowerCase().includes(query.toLowerCase()) ||
            application.phone.toString().toLowerCase().includes(query.toLowerCase()) ||
            application.eMail.toLowerCase().includes(query.toLowerCase())
    ))

    if (filteredServices.length === 0) {
      setIsFiltering(false);
      return alert("No applications with this parameters");
    }

    setFilteredServices(filteredServices);
    setIsFiltering(true);
}

const orderAlphabetically = (services:SavedServices):SavedServices => {
    return [...services].sort((a,b) => 
      a.client.localeCompare(
        b.client, 'es', {sensitivity: 'base'}
      )
    )
}

export { createApplication, searchApplicationByQuery, orderAlphabetically }
