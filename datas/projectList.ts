import AscentGear from "@/public/assets/projects/AscentGear.png";
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
    cover: AscentGear,
    tags: [
      "#TS",
      "#responsive",
      "#Next",
      "#MongoDB",
      "#Express",
      "#Mongoose",
      "#SASS",
    ],
    name: "AscentGear Next",
    blabla:
      "In this project, I leveraged the powerful combination of Next.js and TypeScript to develop AscentGear, a full-featured E-Commerce application. The backend is built on MongoDB with Mongoose for seamless data management, ensuring performance and scalability. This application stands out for its authentication system, allowing users to seamlessly create, manage, and delete shopping carts, place orders, and securely complete transactions via PayPal API integration. Furthermore, the platform enriches the shopping experience by enabling users to post reviews and rate products, enhancing community engagement and trust. For administrative ease, a dedicated Admin Dashboard is incorporated, providing administrators with the tools to manage product and user databases, as well as upload images directly through Cloudinary.",
    demo: "https://ascent-gear.vercel.app/",
    git: "https://github.com/Meysow/AscentGear",
  },
  {
    id: 18,
    cover: SocialPro,
    tags: ["#JS", "#responsive", "#Next", "#MongoDB", "#Express", "#Tailwind"],
    name: "Social Network",
    blabla:
      "In this project, I used the synergy of Next.js, MongoDB, and Tailwind CSS to engineer Social Network application. This platform is designed with a responsive interface, enabling users to engage in an online community environment effortlessly. At its core, the application features a robust authentication system, empowering users to securely create, manage, and delete posts. Each post supports both text and image content, allowing for rich, expressive communication among users.",
    demo: "https://social-media-pro.vercel.app/",
    git: "https://github.com/Meysow/Social-Media-Pro",
  },
  {
    id: 17,
    cover: MediumClone,
    tags: ["#TS", "#responsive", "#Next", "#Sanity", "#Tailwind"],
    name: "Medium Clone",
    blabla:
      "In this initiative, I embraced the powerful blend of Next.js, TypeScript, Tailwind CSS, and Sanity to create a clone of Medium. Leveraging the capabilities of Sanity for content management, the application offers an intuitive interface for creating, managing, and displaying blog posts with ease. Tailored with Tailwind CSS, the design is not only responsive but also aesthetically pleasing, ensuring a seamless reading and writing experience across all devices.",
    demo: "http://medium-clone-kappa.vercel.app",
    git: "https://github.com/Meysow/Medium-Clone",
  },
  {
    id: 16,
    cover: InfoCrypto,
    tags: ["#JS", "#responsive", "#React", "#SASS"],
    name: "InfoCrypto",
    blabla:
      "In the InfoCrypto project, I used the dynamic capabilities of React alongside SASS to develop an interactive application dedicated to cryptocurrency enthusiasts. This application stands as a comprehensive resource, providing detailed insights into the world's leading cryptocurrencies through engaging, real-time data visualizations and charts. Central to this application is its live data feature, which tracks the performance of major cryptocurrencies, offering users up-to-the-minute information on market trends. Complementing this, the application features a robust news aggregation service, delivering the latest cryptocurrency-related news. A sophisticated filter system enhances user experience by allowing for personalized news feeds based on specific cryptocurrencies or topics of interest.",
    demo: "https://meysow.github.io/Info-Crypto/",
    git: "https://github.com/Meysow/Info-Crypto",
  },
];
