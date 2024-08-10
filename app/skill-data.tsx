import { link } from "fs";
import { Component } from "react";

// data used in skill & experience section

export const data = [
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "OSKM 2024 ",
    imageComp: "",
    image: "/oskm2024.jpg",
    p1Comp: "font-mono mb-2",
    p1: "IT-Information",
    p2Comp: "",
    p2: "Back-end Developer",
    p3Comp: "",
    p3: " ",
    p4Comp: "",
    p4: " ",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "GIM",
    imageComp: "",
    image: "/GIM.jpeg",
    p1Comp: "font-mono mb-2",
    p1: "Member",
    p2Comp: "",
    p2: "2 game project",
    p3Comp: "",
    p3: " ",
    p4Comp: "",
    p4: " ",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "GDSC ITB",
    imageComp: "object-center mt-4",
    image: "/gdsc.svg",
    p1Comp: "font-mono mb-2 ",
    p1: "Member",
    p2Comp: "   ",
    p2: "Flutter seminar",
    p3Comp: "",
    p3: " ",
    p4Comp: "",
    p4: " ",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "STEI-K 23 ",
    imageComp: "",
    image: "/steik.jpeg",
    p1Comp: "font-mono mb-2",
    p1: "member",
    p2Comp: "",
    p2: "Aksang Back-end Developer",
    p3Comp: "",
    p3: " ",
    p4Comp: "",
    p4: " ",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "Tales Of Nusantara ",
    imageComp: "ml-8 h-[250px] w-[250px] ",
    image: "/talesofnusantara.png",
    link: "https://yotsuba4.itch.io/tales-of-nusantara",
    p1Comp: "font-mono mb-4",
    p1: "(programmer)",
    p2Comp: "font-mono ",
    p2: "- Godot",
    p3Comp: "font-mono mb-4",
    p3: "- GD Script",
    p4Comp: "font-mono  mt-4",
    p4: "“Explore your way through the world of the legends with perilous obstacles, unique enemies, and intriguing bosses.” (𝘱𝘭𝘢𝘺? 𝘤𝘭𝘪𝘤𝘬 𝘪𝘮𝘢𝘨𝘦!)",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "Breaking Bunny",
    link: "https://yotsuba4.itch.io/breaking-bunny",
    imageComp: "ml-8 h-[250px] w-[250px] ",
    image: "/breakingbunny.jpg",
    p1Comp: "font-mono mb-4",
    p1: "(game designer)",
    p2Comp: "font-mono ",
    p2: "- microsoft word",
    p3Comp: "font-mono mb-4",
    p3: "- communication",
    p4Comp: "font-mono  mt-4",
    p4: "“A hyper-casual endless run game set in a bustling cityscape where mischievous bunnies are on the run from the law ” (𝘱𝘭𝘢𝘺? 𝘤𝘭𝘪𝘤𝘬 𝘪𝘮𝘢𝘨𝘦!)",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "Simple Pokemon Game",
    link: "",
    imageComp: "ml-8 h-[250px] w-[250px] ",
    image: "/tubesDaspro.png",
    p1Comp: "font-mono mb-4",
    p1: "(Tubes Dasar Pemrograman)",
    p2Comp: "font-mono ",
    p2: "- python",
    p3Comp: "font-mono mb-4",
    p3: "- procedural",
    p4Comp: "font-mono  mt-4",
    p4: "“This project utilizes several key concepts from Dasar Pemrograman, focusing on reading and writing CSV files and procedural programming ” ",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl mt-4",
    head: "BE mini project",
    link: "https://github.com/AlfianHanifFY/mini-project-be-information.git",
    imageComp: "ml-8 h-[250px] w-[250px] ",
    image: "/be-information.png",
    p1Comp: "font-mono mb-4",
    p1: "(OSKM)",
    p2Comp: "font-mono ",
    p2: "- tRPC",
    p3Comp: "font-mono mb-4",
    p3: "- drizzle",
    p4Comp: "font-mono  mt-4",
    p4: "“This project features a simple CRUD (Create, Read, Update, Delete). It was created to fulfill the IT-OSKM-Information assignment requirements.” (𝘴𝘰𝘶𝘳𝘤𝘦? 𝘤𝘭𝘪𝘤𝘬 𝘪𝘮𝘢𝘨𝘦!)",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "",
    image: "/haskell.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "h-[99px] ml-1",
    image: "/typescript.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "duration-1000 h-[99px] ml-1",
    image: "/dart.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "h-[99px]",
    image: "/flutter.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/tailwind.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-2",
    image: "/laravel.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/trpc.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "",
    image: "/mongo.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/next.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/node.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/php.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/postgre.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/postman.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/python.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/react.png",
  },
  {
    headComp: "font-mono font-bold  md:text-2xl text-xl text-center",
    head: "",
    imageComp: "ml-1",
    image: "/supabase.png",
  },
];
