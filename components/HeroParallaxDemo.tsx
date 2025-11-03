"use client";
import React, { useMemo } from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Aanya Singh",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1eRVEjtSzj9Qm-Iklh45v1hiw5W2yvsnA",
  },
  {
    title: "Ambika Sethi",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1nYj9mawzZJhNt-Gf6d3_xCbhruxxfIYr",
  },
  {
    title: "Avichal Khanna",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1BjUUCSwuJXoYgghgWFSF27O0tRtKl7c_",
  },
  {
    title: "Bhumija",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1heOD9n0fZZxKGIZH0uP4HbymSbi2ZS0M",
  },
  {
    title: "Gauransh Singh",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=19xQTU7rIWF3RVzoLVkoIz2RDi-W3IUwC",
  },
  {
    title: "Gaurav Suthar",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1TsH57BDNPy4GRwKXxGgy1FFTiZavRGIT",
  },
  {
    title: "Kanishk Satyajit Das",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=19-rmdmypFvGLCb7-R9t4Hb1S2-qhKKAC",
  },
  {
    title: "Mahak Jain",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1k44hR3Du6nsEYq1w-cWD_HyXZIOfcrfh",
  },
  {
    title: "Mayank Goyal",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1zCC3J7iHmg-6WCrtLpa7SHKsXaj3he6R",
  },
  {
    title: "Prakriti Mathur",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1z-0y1MvHtZVE9FZiZNXTEefN6yBXk7eJ",
  },
  {
    title: "Suyash Pandey",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1XKSSvtx89OmLg3xviNm7SPmeYJ6Vc8XK",
  },
  {
    title: "Vedant Srivastava",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=15d0qtKu8STr_GCs6IgesTMCcGGev1sPX",
  },
  {
    title: "Ambika Sethi",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1nYj9mawzZJhNt-Gf6d3_xCbhruxxfIYr",
  },
  {
    title: "Suyash Pandey",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1XKSSvtx89OmLg3xviNm7SPmeYJ6Vc8XK",
  },
  {
    title: "Mahak Jain",
    link: "",
    thumbnail:
      "https://drive.google.com/uc?export=view&id=1k44hR3Du6nsEYq1w-cWD_HyXZIOfcrfh",
  },
];
