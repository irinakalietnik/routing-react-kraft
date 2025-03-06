const products = [
  {
    id: 1,
    size: "0.3 л",
    name: "Isaac",
    price: 56,
    category: "Пшеничне",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 2,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 3,
    size: "0.3 л",
    name: "Hefeweizen",
    price: 48,
    category: "Темне",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 4,
    size: "0.5 л",
    name: "Ottakringer Helles",
    price: 56,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 5,
    size: "0.5 л",
    name: "Ottakringer Vienna Lager",
    price: 146,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/30/169x240l85nn0/98836377807663.webp",
  },
  {
    id: 6,
    size: "0.5 л",
    name: "Hefeweizen",
    price: 132,
    category: "Темне",
    image:
      "https://eliteko.com.ua/content/images/3/135x240l85nn0/60686269528333.webp",
  },
  {
    id: 7,
    size: "0.3 л",
    name: "Andechser Weissbier Hell",
    price: 167,
    category: "Пшеничне",
    image:
      "https://eliteko.com.ua/content/images/3/135x240l85nn0/60686269528333.webp",
  },
  {
    id: 8,
    size: "0.5 л",
    name: "California IPA",
    price: 140,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/3/135x240l85nn0/60686269528333.webp",
  },
  {
    id: 9,
    size: "0.3 л",
    name: "Stone Delicious Hazy IPA",
    price: 130,
    category: "Темне",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 10,
    size: "0.5 л",
    name: "Neverending Haze",
    price: 156,
    category: "Пшеничне",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 11,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 12,
    size: "0.5 л",
    name: "Delicious IPA",
    price: 132,
    category: "Темне",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 13,
    size: "0.3 л",
    name: "BrewDog Punk IPA",
    price: 156,
    category: "Пшеничне",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 14,
    size: "0.3 л",
    name: "Andechser Weissbier",
    price: 178,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 15,
    size: "0.3 л",
    name: "Andechser Hell",
    price: 145,
    category: "Темне",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 16,
    size: "0.3 л",
    name: "Vollbier Hell",
    price: 160,
    category: "Пшеничне",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
  {
    id: 17,
    size: "0.3 л",
    name: "Ayinger Celebrator",
    price: 178,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
  {
    id: 18,
    size: "0.3 л",
    name: "BrewDog Wingman",
    price: 133,
    category: "Темне",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
  {
    id: 20,
    size: "0.3 л",
    name: "Isaac",
    price: 56,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
  {
    id: 21,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/19/158x240l85nn0/81325999328114.webp",
  },
  {
    id: 22,
    size: "0.3 л",
    name: "Hefeweizen",
    price: 48,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/19/158x240l85nn0/81325999328114.webp",
  },
  {
    id: 23,
    size: "0.5 л",
    name: "Ottakringer Helles",
    price: 56,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/16/169x240l85nn0/31767017892492.webp",
  },
  {
    id: 24,
    size: "0.5 л",
    name: "Ottakringer Vienna Lager",
    price: 146,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/16/169x240l85nn0/31767017892492.webp",
  },
  {
    id: 25,
    size: "0.5 л",
    name: "Hefeweizen",
    price: 132,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/37/173x240l85nn0/78834249310898.webp",
  },
  {
    id: 26,
    size: "0.3 л",
    name: "Andechser Weissbier Hell",
    price: 167,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/37/173x240l85nn0/78834249310898.webp",
  },
  {
    id: 8,
    size: "0.5 л",
    name: "California IPA",
    price: 140,
    category: "Крафтове",
    image:
      "https://eliteko.com.ua/content/images/3/135x240l85nn0/60686269528333.webp",
  },
  {
    id: 27,
    size: "0.3 л",
    name: "Stone Delicious Hazy IPA",
    price: 130,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
  {
    id: 28,
    size: "0.5 л",
    name: "Neverending Haze",
    price: 156,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/3/135x240l85nn0/60686269528333.webp",
  },
  {
    id: 29,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
  {
    id: 30,
    size: "0.5 л",
    name: "Delicious IPA",
    price: 132,
    category: "Безалкогольне",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 31,
    size: "0.3 л",
    name: "BrewDog Punk IPA",
    price: 156,
    category: "Світле",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 32,
    size: "0.3 л",
    name: "Andechser Weissbier",
    price: 178,
    category: "Світле",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 33,
    size: "0.3 л",
    name: "Andechser Hell",
    price: 145,
    category: "Світле",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 34,
    size: "0.3 л",
    name: "Vollbier Hell",
    price: 160,
    category: "Світле",
    image:
      "https://eliteko.com.ua/content/images/6/135x240l85nn0/83486690678624.webp",
  },
  {
    id: 35,
    size: "0.3 л",
    name: "Ayinger Celebrator",
    price: 178,
    category: "Світле",
    image:
      "https://eliteko.com.ua/content/images/4/172x240l85nn0/36344921511314.webp",
  },
  {
    id: 36,
    size: "0.3 л",
    name: "BrewDog Wingman",
    price: 133,
    category: "Світле",
    image:
      "https://eliteko.com.ua/content/images/7/135x240l85nn0/40725990404039.webp",
  },
];
export { products };
