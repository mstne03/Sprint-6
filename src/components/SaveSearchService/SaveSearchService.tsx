import useSearchService from '../../hooks/useSearchService'
import useCurrentService from '../../hooks/useCurrentService'
import { createApplication, searchApplicationByQuery, orderAlphabetically } from '../../utils/ApplicationUtils'
import Div from '../Div/Div'
import PendingServices from './PendingServices/PendingServices'
import type { SaveSearchServiceProps, Application, SavedServices } from '../../utils/Types'

const SaveSearchService= ({}:SaveSearchServiceProps) => {

  const {
    services,
    setServices,
    filteredServices,
    setFilteredServices,
    isFiltering,
    setIsFiltering,
  } = useSearchService();

  const {
    languageAddon,
    pagesAddon,
    checked,
    price
  } = useCurrentService();

  return (
    <Div>
      <div className="flex gap-10">
        <PendingServices
          services={
            isFiltering ?
              filteredServices
              : services
          }
        />
        <div className="flex flex-col gap-10">
          <div>
            <form action={(formData: FormData) => 
              createApplication(
                formData,
                price,
                checked,
                pagesAddon,
                languageAddon,
                setServices,
                setFilteredServices,
                setIsFiltering
              )} 
              id="applicationForm"
            >
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
            <form className="flex flex-col" action={(formData:FormData) => 
                searchApplicationByQuery(
                  formData,
                  setIsFiltering,
                  services,
                  setFilteredServices
                )
              } 
              id="searchForm"
            >
              <label htmlFor="searchForm">
                Search for an application
              </label>
              <div className="flex gap-5 mt-5">
                <button
                  className="
                    text-[15px] 
                    hover:scale-110 
                    transition 
                    duration-300 
                    ease-in-out 
                    will-change-transform 
                    cursor-pointer
                  "
                  onClick={() => setIsFiltering(false)}
                >
                  Reset filters
                </button>
                
                <button
                  className="
                    text-[15px] 
                    hover:scale-110 
                    transition 
                    duration-300 
                    ease-in-out 
                    will-change-transform 
                    cursor-pointer
                  "
                  onClick={() => setServices(orderAlphabetically(services))}
                >
                  A-Z
                </button>
              </div>
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
        </div>
      </div>
    </Div>
  )
};

export default SaveSearchService;
