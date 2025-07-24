import { useState, useEffect } from 'react'
import cardArray from '../data/ServiceSectionData'
import type { ServiceObject } from '../utils/Types'

export default function useServiceSection () {
    const [checked, setChecked] = useState<ServiceObject>(
        {
            0:false, 
            1:false, 
            2:false
        } as ServiceObject);
    const [pagesAddon, setPagesAddon] = useState(0);
    const [languageAddon, setLanguageAddon] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const webAddOns = (pagesAddon + languageAddon) * 30;

        const newPrice = cardArray.reduce((acc, item) => {
            if (checked[item.key]) {
                if (item.service === "WEB") {
                    return acc + item.pricing + webAddOns;
                }
                return acc + item.pricing;
            }
            
            return acc;
        }, 0);

        setPrice(newPrice);
    }, [checked, pagesAddon, languageAddon]);

    return {
        checked,
        setChecked,
        pagesAddon,
        setPagesAddon,
        languageAddon,
        setLanguageAddon,
        price
    }
}

