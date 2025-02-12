const products = [
  {
    id: 1,
    size: "0.3 л",
    name: "Isaac",
    price: 56,
    category: "Пшеничне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/1/6/16643_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 2,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/3/23876.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    id: 3,
    size: "0.3 л",
    name: "Hefeweizen",
    price: 48,
    category: "Темне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/3/23867.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    id: 4,
    size: "0.5 л",
    name: "Ottakringer Helles",
    price: 56,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/1/r1902.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 5,
    size: "0.5 л",
    name: "Ottakringer Vienna Lager",
    price: 146,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/7/r7347.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 6,
    size: "0.5 л",
    name: "Hefeweizen",
    price: 132,
    category: "Темне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/0/r0804_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 7,
    size: "0.3 л",
    name: "Andechser Weissbier Hell",
    price: 167,
    category: "Пшеничне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/9/r9993.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 8,
    size: "0.5 л",
    name: "California IPA",
    price: 140,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/Q/1/Q1642_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 9,
    size: "0.3 л",
    name: "Stone Delicious Hazy IPA",
    price: 130,
    category: "Темне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/s/3/s3605.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 10,
    size: "0.5 л",
    name: "Neverending Haze",
    price: 156,
    category: "Пшеничне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/9/1/91033_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 11,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/3/23876.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    id: 12,
    size: "0.5 л",
    name: "Delicious IPA",
    price: 132,
    category: "Темне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/9/1/91036.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 13,
    size: "0.3 л",
    name: "BrewDog Punk IPA",
    price: 156,
    category: "Пшеничне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/1/5/15639.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 14,
    size: "0.3 л",
    name: "Andechser Weissbier",
    price: 178,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/9/r9996.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 15,
    size: "0.3 л",
    name: "Andechser Hell",
    price: 145,
    category: "Темне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/9/r9989.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 16,
    size: "0.3 л",
    name: "Vollbier Hell",
    price: 160,
    category: "Пшеничне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/8/28673_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 17,
    size: "0.3 л",
    name: "Ayinger Celebrator",
    price: 178,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/5/r5234_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 18,
    size: "0.3 л",
    name: "BrewDog Wingman",
    price: 133,
    category: "Темне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/t/9/t9470.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 20,
    size: "0.3 л",
    name: "Isaac",
    price: 56,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/1/6/16643_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 21,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/3/23876.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    id: 22,
    size: "0.3 л",
    name: "Hefeweizen",
    price: 48,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/3/23867.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    id: 23,
    size: "0.5 л",
    name: "Ottakringer Helles",
    price: 56,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/1/r1902.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 24,
    size: "0.5 л",
    name: "Ottakringer Vienna Lager",
    price: 146,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/7/r7347.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 25,
    size: "0.5 л",
    name: "Hefeweizen",
    price: 132,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/0/r0804_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 26,
    size: "0.3 л",
    name: "Andechser Weissbier Hell",
    price: 167,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/9/r9993.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 8,
    size: "0.5 л",
    name: "California IPA",
    price: 140,
    category: "Крафтове",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/Q/1/Q1642_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 27,
    size: "0.3 л",
    name: "Stone Delicious Hazy IPA",
    price: 130,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/s/3/s3605.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 28,
    size: "0.5 л",
    name: "Neverending Haze",
    price: 156,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/9/1/91033_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 29,
    size: "0.3 л",
    name: "Heller Weizenbock",
    price: 78,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/3/23876.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    id: 30,
    size: "0.5 л",
    name: "Delicious IPA",
    price: 132,
    category: "Безалкогольне",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/9/1/91036.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 31,
    size: "0.3 л",
    name: "BrewDog Punk IPA",
    price: 156,
    category: "Світле",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/1/5/15639.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 32,
    size: "0.3 л",
    name: "Andechser Weissbier",
    price: 178,
    category: "Світле",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/9/r9996.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 33,
    size: "0.3 л",
    name: "Andechser Hell",
    price: 145,
    category: "Світле",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/9/r9989.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 34,
    size: "0.3 л",
    name: "Vollbier Hell",
    price: 160,
    category: "Світле",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/2/8/28673_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 35,
    size: "0.3 л",
    name: "Ayinger Celebrator",
    price: 178,
    category: "Світле",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/r/5/r5234_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
  {
    id: 36,
    size: "0.3 л",
    name: "BrewDog Wingman",
    price: 133,
    category: "Світле",
    image:
      "https://goodwine.com.ua/media/catalog/product/cache/6fcc3261ae04eb835842842bdcf655db/t/9/t9470.png?auto=webp&format=png&width=960&height=1200&fit=cover",
  },
];
export { products };
