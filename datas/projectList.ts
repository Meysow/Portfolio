import Amazona from "@/public/assets/projects/Amazona.png";
import InfoCrypto from "@/public/assets/projects/InfoCrypto.png";
import MediumClone from "@/public/assets/projects/Medium.png";
import SocialPro from "@/public/assets/projects/SocialPro.png";
import { StaticImageData } from "next/image";

export type projectType = {
  id: number;
  cover: StaticImageData;
  tags: string[];
  name: string;
  blabla: string;
  demo: string;
  git: string;
};

export const projectList: projectType[] = [
  {
    id: 19,
    cover: Amazona,
    tags: [
      "#TS",
      "#responsive",
      "#Next",
      "#MongoDB",
      "#Express",
      "#Mongoose",
      "#SASS",
    ],
    name: "Amazona Next",
    blabla:
      "In this project, I work with Next.js, Typescript, MongoDB and Mongoose to create a full stack E-Commerce type Application. This application is really complete, with authentification system, and permits the user to create/manage/delete a cart, to order, and even to pay with the Paypal API. Add reviews, give a note to products. Admin Users have access to the Admin Dashboard. They can create, update, delete products/users, Upload images with cloudinary.",
    demo: "http://amazona-next-five.vercel.app",
    git: "https://github.com/Meysow/Amazona-Next",
  },
  {
    id: 18,
    cover: SocialPro,
    tags: ["#JS", "#responsive", "#Next", "#MongoDB", "#Express", "#Tailwind"],
    name: "Social Network",
    blabla:
      "In this project, I worked with Next.js, MongoDB and  Tailwind to create a Social Network type Application. This application implement a authentification system, and permits the user to create/manage/delete a Post with text and image.",
    demo: "https://social-media-pro.vercel.app/",
    git: "https://github.com/Meysow/Social-Media-Pro",
  },
  {
    id: 17,
    cover: MediumClone,
    tags: ["#TS", "#responsive", "#Next", "#Sanity", "#Tailwind"],
    name: "Medium Clone",
    blabla:
      "In this project, I work with Next.js, Typescript, Tailwind and Sanity to implement a Blog type Application.",
    demo: "http://medium-clone-kappa.vercel.app",
    git: "https://github.com/Meysow/Medium-Clone",
  },
  {
    id: 16,
    cover: InfoCrypto,
    tags: ["#JS", "#responsive", "#React", "#SASS"],
    name: "InfoCrypto",
    blabla:
      "In this project, I work with React to create an interactive App that gives various informations about the biggest Crypto-Currencies. I implemented a chart with live data of each Currencies. It also delivers news related to the cryptocurrencies with a filter system.",
    demo: "https://meysow.github.io/Info-Crypto/",
    git: "https://github.com/Meysow/Info-Crypto",
  },
];
