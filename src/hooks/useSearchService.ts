import { useState } from 'react'
import type { SavedServices } from '../utils/Types'

export default function useSearchService () {
    const [services, setServices] = useState<SavedServices>([])
    const [filteredServices, setFilteredServices] = useState<SavedServices>([])
    const [isFiltering, setIsFiltering] = useState(false);

    return {
        services,
        setServices,
        filteredServices,
        setFilteredServices,
        isFiltering,
        setIsFiltering,
    }
}
