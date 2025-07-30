type SetState<T> = React.Dispatch<React.SetStateAction<T>>

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

type cardMap = Service[]

type WebAddonsProps = {
    quantity:number,
    setQuantity:SetState<number>,
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

type HasAddons = {
  objectNamePage: string;
  objectNameLanguage: string;
  statePages: number;
  stateLanguages: number;
  setStatePage: SetState<number>;
  setStateLanguage: SetState<number>;
}

type ServiceCardProps = {
  id:number,
  onClickFun:SetState<ServiceObject>,
  isNotHeader:string,isNotInline:string,
  service:string,
  description:string,
  pricing:number,
  isChecked:boolean,
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
};
