type SetState<T> = React.Dispatch<React.SetStateAction<T>>

type AddOns = {
    pages: {
        name:string,
        price:number,
        quantity:number,
    },
    languages: {
        name:string,
        price:number,
        quantity:number,
    },
}

type Service = {
    key:number,
    service:string,
    description:string,
    pricing:number,
    addOns?: AddOns,
}

type cardMap = Service[]

type WebAddonsProps = {
    price:number,
    addon:string,
}

type ServiceCheckboxProps = {
    service:string,
    id:number,
    checked:boolean,
    onChange:SetState<ServiceObject>,
}

type DivProps = {
    children:React.ReactNode,
    isNotHeader?:string,
    isClickable?:string,
    isInline?:string,
    isNotInline?:string,
    fun?:() => void,
}

type ServiceObject = {
    [key: number]: boolean
}

type UseService = {
    checked:ServiceObject,
    setChecked:SetState<ServiceObject>,
    pagesAddon:number,
    setPagesAddon:SetState<number>,
    languageAddon:number,
    setLanguageAddon:SetState<number>,
    price:number,
}

type ServiceCardProps = {
  id:number,
  isNotHeader:string,isNotInline:string,
  service:string,
  description:string,
  pricing:number,
}

type PendingServicesProps = {
    services:SavedServices
}

type FunctionReturn<T, U> = ({}:T) => U;

type BlobCircleProps = {
    [key: string]:boolean,
}

type BlobCircleReturn = {
    [key: string]: string,
}

type HomeProps = {
    changePage:SetState<number>,
}

type HeaderSectionProps = {
    changePage:SetState<number>,
}

type SaveSearchServiceProps = {

}

type Application = {
    client:string,
    phone:number,
    eMail:string,
    price:number,
    services:Service[] | any[],
}

type SavedServices = Application[]

export type { 
    cardMap,
    WebAddonsProps, 
    ServiceCheckboxProps, 
    DivProps, 
    ServiceCardProps, 
    ServiceObject,
    SetState,
    FunctionReturn,
    BlobCircleReturn,
    BlobCircleProps,
    HomeProps,
    HeaderSectionProps,
    SaveSearchServiceProps,
    SavedServices,
    Application,
    UseService,
    PendingServicesProps,
};
