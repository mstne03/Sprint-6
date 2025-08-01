import { createContext } from 'react';
import type { UseService } from '../utils/Types'

const CurrentServiceContext = createContext<UseService | undefined>(undefined);

export default CurrentServiceContext;
