import { FiBookOpen, FiMapPin } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";
import {
  BsFillPersonBadgeFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
export const routes = [
  {
    to: "/",
    title: "سفرنامه",
    icon: <FiBookOpen size={"1.5rem"} color={"#a1a3a8"} />,
  },
  {
    to: "/",
    title: "کجابرم؟",
    icon: <FiMapPin size={"1.5rem"} color={"#a1a3a8"} />,
  },
  {
    to: "/",
    title: "تعطیلات",
    dropDown: [
      {
        to: "/",
        title: "تور",
      },
      {
        to: "/",
        title: "هتل و اقامتگاه",
      },
      {
        to: "/",
        title: "طبیعت",
      },
      {
        to: "/",
        title: "هیجان",
      },
      {
        to: "/",
        title: "فرهنگ و هنر",
      },
      {
        to: "/",
        title: "بازار",
      },
    ],
    icon: <FaCarSide size={"1.5rem"} color={"#a1a3a8"} />,
  },
  {
    to: "/",
    title: "کسب و کار",
    icon: <BsFillPersonBadgeFill size={"1.5rem"} color={"#a1a3a8"} />,
  },
  {
    to: "/",
    title: "درباره ما",
    icon: <BsFillQuestionCircleFill size={"1.5rem"} color={"#a1a3a8"} />,
  },
];
