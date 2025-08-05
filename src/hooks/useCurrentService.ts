import { useContext } from 'react'
import CurrentServiceContext from '../context/ServicesContext'
import type { UseService } from '../utils/Types'

export default function useCurrentService(): UseService {
    const context = useContext(CurrentServiceContext);

    if (!context) {
        throw new Error("useCurrentService must be used within <CurrentServiceContext>");
    }

    return context;
}
