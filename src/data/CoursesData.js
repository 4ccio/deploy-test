import stockIntro from "../assets/stockIntro.svg";
import cryptoIntro from "../assets/cryptoIntro.svg";
import realEstateIntro from "../assets/realEstateIntro.svg";

import stockIcon from "../assets/stockIcon.svg";
import bondsIcon from "../assets/bondsIcon.svg";
import etfIcon from "../assets/etfIcon.svg";

import whatIsCrypto from "../assets/whatIsCrypto.jpg";
import blockchain from "../assets/blockchain.jpg";
import howCryptoMade from "../assets/cryptomade.jpg";
import significantCrypto from "../assets/significantCrypto.jpg";

import stockCards from "./StocksCards";
import bondCards from "./BondsCards";
import etfCards from "./EtfCards";
import cryptoCards from "./CryptoCards";
import realEstateCards from "./RealEstateCards";

import tinkoff from "../assets/tinkoff.png";
import sber from "../assets/sber.png";
import alfa from "../assets/alfa.png";
import handshake from "../assets/handshake.png";
import bybit from "../assets/bybit.png";
import oxk from "../assets/OKX.png";
import gateio from "../assets/gateio.png";
import cian from "../assets/cian.jpg";
import domclick from "../assets/domclick.png";
import pik from "../assets/pik.png";

const coursesData = [
  {
    id: "stock-market",
    title: "Фондовый рынок",
    description: [
      `Это место, где происходит обмен активами, аналогично
        торговым площадкам. Здесь встречаются спрос и предложение
        на акции, облигации, валюты и другие ценные бумаги.`,
    ],
    imageIntro: stockIntro,
    assets: [
      {
        id: "stocks",
        name: "Акции",
        image: stockIcon,
        details:
          "Акция — это доля в компании, приобретая которую инвестор становится совладельцем бизнеса и может разделить его успехи и неудачи.",
        cards: stockCards,
      },
      {
        id: "bonds",
        name: "Облигации",
        image: bondsIcon,
        details:
          "Облигация — долговая расписка, которую выпускает компания или государство. Приобретая ее, инвестор получает в будущем сумму долга плюс проценты.",
        cards: bondCards,
      },
      {
        id: "etf",
        name: "Биржевые фонды",
        image: etfIcon,
        details:
          "Биржевые фонды — готовые портфели разных ценных бумаг или других активов. Инвесторы могут купить доли в таких портфелях — паи фонда.",
        cards: etfCards,
      },
    ],
    partners: [
      {
        title: "Тинькоф Инвестиции",
        image: tinkoff,
        link: "https://www.tinkoff.ru/invest/",
      },
      {
        title: "Сбер Инвестиции",
        image: sber,
        link: "http://www.sberbank.ru/ru/person/investments/broker_service",
      },
      {
        title: "Альфа-Инвестиции",
        image: alfa,
        link: "https://alfabank.ru/make-money/investments/brokerskij-schyot/",
      },
      {
        title: "Ваша реклама",
        image: handshake,
        link: "https://github.com/4ccio",
      },
    ],
  },
  {
    id: "crypto",
    title: "Криптовалюта",
    description: [
      `Криптовалюты стали одной из наиболее обсуждаемых тем в последние годы. Мы все видели, как биткоин, начиная с непонятной концепции, в течение недолгого времени превратился в ценный финансовый актив, который привлекает внимание инвесторов, трейдеров, специалистов в области информационных технологий и бизнесменов.`,
    ],
    imageIntro: cryptoIntro,
    assets: [
      {
        id: "what_is_crypto",
        name: "Что такое криптовалюта",
        image: whatIsCrypto,
        cards: cryptoCards,
      },
      {
        id: "blockchain",
        name: "Что такое блокчейн",
        image: blockchain,
        cards: cryptoCards,
      },
      {
        id: "how_crypto_made",
        name: "Как появляется криптовалюта",
        image: howCryptoMade,
        cards: cryptoCards,
      },
      {
        id: "significant_crypto",
        name: "Значимые криптовалюты",
        image: significantCrypto,
        cards: cryptoCards,
      },
    ],
    partners: [
      {
        title: "Bybit",
        image: bybit,
        link: "https://www.bybit.com/ru-RU",
      },
      {
        title: "OKX",
        image: oxk,
        link: "https://www.okx.com/ru",
      },
      {
        title: "Gate.io",
        image: gateio,
        link: "https://www.gate.io/ru",
      },
      {
        title: "Ваша реклама",
        image: handshake,
        link: "https://github.com/4ccio",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Недвижимость",
    description: [
      `В последние годы вложение средств в недвижимость стало одним из наиболее надежных и доходных способов инвестирования. С учетом постоянного увеличения стоимости жилья и развития рынка недвижимости, многие инвесторы обращают внимание на этот сектор экономики.`,
    ],
    imageIntro: realEstateIntro,
    assets: [
      {
        id: "realEstate_intro",
        name: "Введение",
        cards: realEstateCards,
      },
      {
        id: "realEstate_aspects",
        name: "Финансовые аспекты",
        cards: realEstateCards,
      },
      {
        id: "realEstate_earn",
        name: "Как заработать",
        cards: realEstateCards,
      },
    ],
    partners: [
      {
        title: "Циан",
        image: cian,
        link: "https://cian.ru/",
      },
      {
        title: "Домклик",
        image: domclick,
        link: "https://domclick.ru/",
      },
      {
        title: "ПИК",
        image: pik,
        link: "https://www.pik.ru/",
      },
      {
        title: "Ваша реклама",
        image: handshake,
        link: "https://github.com/4ccio",
      },
    ],
  },
];

export default coursesData;
