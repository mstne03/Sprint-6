import type { cardMap } from '../utils/Types'

const cardArray:cardMap= [
    {
      key: 0, 
      service: "SEO",
      description: "Optimize your website's SEO for better positioning",
      pricing: 300,
    },
    {
      key: 1, 
      service: "ADS",
      description: "Use ads to get people to know you",
      pricing: 400,
    },
    {
      key: 2, 
      service: "WEB",
      description: "Complete responsive web programming",
      pricing: 500,
      addOns: {
        pages: {
          name: "Pages",
          price: 30,
          quantity:0,
        },
        languages: {
          name: "Languages",
          price: 30,
          quantity: 0,
        },
      },
    }
];

export default cardArray;