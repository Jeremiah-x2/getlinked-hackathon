import Criteria from "./Criteria";
import FAQ from "./FAQ";

const itemsData = [
  {
    id: 0,
    image: "/bigIdea",
    head: { top: "Introduction to getlinked", bottom: "tech Hackathon 1.0" },
    mainContent:
      "Our tech hackathon is a melting pot of visionaries, and its purpose is asclear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundariesof technology, and creating solutions that can change the world, that's what we're all about!",
  },
  {
    id: 1,
    image: "/rules",
    head: {
      top: "Rules and",
      bottom: "Guidelines",
    },
    mainContent:
      "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!",
  },
  {
    id: 2,
    image: "/judging-criteria",
    head: {
      top: "Judging Criteria",
      bottom: "Key attributes",
    },
    mainContent: <Criteria />,
  },
  {
    id: 3,
    image: "/faq",
    head: {
      top: "Frequently Ask",
      bottom: "Question",
    },
    mainContent: <FAQ />,
  },
];

export default itemsData;
