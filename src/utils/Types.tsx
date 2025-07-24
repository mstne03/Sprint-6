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

export type cardMap = Service[];