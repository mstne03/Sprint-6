type AddOns = {
    pages: {
        name:string,
        price:number,
    },
    languages: {
        name:string,
        price:number,
    },
}

type Service = {
    key:number,
    service:string,
    description:string,
    pricing:number,
    addOns?: AddOns,
}

type WebAddonsProps = {
    quantity:number,
    setQuantity:(any:any) => void,
    addon:string,
}

type ServiceCheckboxProps = {
    service:string,
    id:number,
    checked:boolean,
}

type DivProps = {
    children:React.ReactNode,
    isNotHeader?:string,
    isClickable?:string,
    isInline?:string,
    isNotInline?:string,
    fun?:(prev:number|any) => number|any,
}

type ServiceObject = {
    [key: number]: boolean
}

type ServiceCardProps = {
  id:number,
  onClickFun:React.Dispatch<React.SetStateAction<ServiceObject>>,
  isNotHeader:string,
  isClickable:string,
  isNotInline:string,
  service:string,
  description:string,
  pricing:number,
  isChecked:boolean,
}

export type cardMap = Service[];
export type { WebAddonsProps, ServiceCheckboxProps, DivProps, ServiceCardProps, ServiceObject };