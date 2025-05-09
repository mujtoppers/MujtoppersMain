import CardWithSelect from "@/components/CardSelectComponent";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ branch: string; yearBranch: string }>;
}) {
  const { branch, yearBranch } = await params;

  const subjectsYearWise: Record<
    string,
    Record<
      string,
      {
        name: string;
        image: string;
        pyqLink: string;
        notesLink: string;
        playlistLink: string;
        roadmap: string;
        pptLink: string;
      }[]
    >
  > = {
    PhysicsCycle: {
      first: [
        {
          name: "Engineering Materials & Mechanics",
          image: "https://drive.google.com/uc?export=view&id=12e0p9vdgKLn3fa6POShm92SNTlS3D1FT",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1w54A2Vd87DQtFwEoUuy8m0nX9rANb4RA",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1nxBvjZVxG2QL4W_B8skkg4z-VYibmF7n",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6RcutYOUEk_7Je8K-Z3ixz_4TS&si=lrOP6_OjoMmUWZR3",
          roadmap:
            "https://drive.google.com/uc?export=view&id=1fjGChZpP3rbzVkZ0paTMR6RGLOpsg7OH",
            pptLink:"https://drive.google.com/drive/folders/1WonGMHUbrQ_LnZrF024GMbiYZxuNUk_Z"
        },
        {
          name: "Biology For Engineers",
          image: "https://drive.google.com/uc?export=view&id=1ZC2Q_LIjyqc2127GWSszCdZ7_Z8S17_t",
          pyqLink: "https://drive.google.com/drive/u/0/folders/1kNkblB1RDznXNJmehDohPTvMGckCHAfY",
          notesLink: "https://drive.google.com/drive/folders/178MPsfJrZA6TSfvdAbdpcjww1KFAeXiL",
          playlistLink: "https://youtube.com/playlist?list=PLB_MQaW6RcuukNazriXq2TZYTyq8D_5uR&si=miKXCJcM_Ao8uesi",
          roadmap: "https://drive.google.com/uc?export=view&id=1T5zICF1dFnYApzuu1nyw1vW_LbgAUasf",
          pptLink: "https://drive.google.com/drive/folders/1Pso9gArXWDPQm_6TCxTjaZ_d5sW1nT3-"
        },
        {
          name: "Engineering Physics",
          image: "https://drive.google.com/uc?export=view&id=1smxlz3-_44JZygqzQqdAmE2SPGg6PjHf",
          pyqLink: "https://drive.google.com/drive/u/0/folders/1cdiHPynlmRHmneEPs7P6EV1DB7wzQGsh",
          notesLink: "https://drive.google.com/drive/u/0/folders/17txyc5ZmKvQepWdVK1TCnJQgxaoou6Ke",
          playlistLink: "https://youtube.com/playlist?list=PLuAADu3OvBt495Awir13ZNM-gv5IwLGQy&si=1BSh9BoCqXFGAWei",
          roadmap: "https://drive.google.com/uc?export=view&id=1tMWeeRZ-9qhmQ0hoMlngzVmXSei-wotk",
          pptLink: "https://drive.google.com/drive/folders/1vLEnibhuw07qeEWdmO3hHFX2VIqULpvh"
        },
        {
          name: "Computational Mathematics",
          image: "https://drive.google.com/uc?export=view&id=1mKNfhI6zU-vNbVnkF55NFMAU-b1Jii4p",
          pyqLink: "https://drive.google.com/drive/u/0/folders/1wE3l2pM-frCwyFS8DaRIW13-XCbmnAmv",
          notesLink: "https://drive.google.com/drive/u/0/folders/17PMTzl-T1TOhnpWUxlVwIkY7OGhDM7TO",
          playlistLink: "https://youtube.com/playlist?list=PLDh_nHdEw3KPPjngTAmQgcYY8zBA6kkX8&feature=shared",
          roadmap: "https://drive.google.com/uc?export=view&id=1LA8-hkDjSbpyNv7B4r8714hQXdXXzRnf",
          pptLink: "https://drive.google.com/drive/folders/16VmBA-chzfPISVOTn_lIT8fdsOPCjuSL"
        },
        {
          name: "MATLAB",
          image: "https://drive.google.com/uc?export=view&id=11PYA8Fxu2SwQZQjwPNUQoLCQGxEBmRkE",
          pyqLink: "https://drive.google.com/drive/u/0/folders/1d75bxh_L7JvAKNheNZ3c6YOeqikO1CTB",
          notesLink: "https://drive.google.com/drive/u/0/folders/1VVt2FfnbjhGTebrL7ditH--K_BfWMJZa",
          playlistLink: "https://youtube.com/playlist?list=PLB_MQaW6Rcut-VLlP29zTzka8hs24bqJ9&si=K7xlUK78s8e2TC3V",
          roadmap: "https://drive.google.com/uc?export=view&id=1Z5iIhj5j7em8VY-FNC9xkQUMJl5kX-ld",
          pptLink: "https://drive.google.com/drive/folders/1A6qZYx7bSjd2DpnLz4XRFOkA0YajIaDm"
        },
      ],
    },
    ChemistryCycle: {
      first: [
        {
          name: "Calculus & Matrices",
          image: "https://drive.google.com/uc?export=view&id=1r7JY2enZKDsHwPeJNG3B8iJhxcWSbQI_",
          pyqLink: "https://drive.google.com/drive/folders/1Pr_H4-fb_80Jo6Du96qIIpa6FIVEDTNm",
          notesLink: "https://drive.google.com/drive/folders/1sC2cCnpEBGosunT4snNZf2Y8pUj5-uqV",
          playlistLink: "https://www.youtube.com/watch?v=p5rBJj5CKCg&list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc",
          roadmap: "https://drive.google.com/uc?export=view&id=1Z5iIhj5j7em8VY-FNC9xkQUMJl5kX-ld",
          pptLink: ""
        },
        {
          name: "Electrical & Electronics System",
          image: "https://drive.google.com/uc?export=view&id=1aYcS7gt8soSOo0NGy9DIyg0YAa5qsrxF",
          pyqLink: "https://drive.google.com/drive/folders/1T2KhOCchylff1UyLZ2jyipmGmHtDx1Sd",
          notesLink: "https://drive.google.com/drive/folders/1JnVhkK5vg93hTzYq11Cr7NE8seneqdU1",
          playlistLink: "https://www.youtube.com/watch?v=Vd2UJiIPbag&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc",
          roadmap: "https://drive.google.com/uc?export=view&id=1v04EQEAuaP--i8Ax42NnpQxrLRhjOY8O",
          pptLink: "https://drive.google.com/drive/folders/1S7DJykfKHTnETHV4ABmaJ0g7H9vCoZbp"
        },
        {
          name: "Engineering Chemistry",
          image: "https://drive.google.com/uc?export=view&id=168b1gT3F4p6unOvraw4FQO_142aD7voY",
          pyqLink: "https://drive.google.com/drive/folders/1pP4zpZHNyD9Zp1peFPRYePpMXvwEWZCV",
          notesLink: "https://drive.google.com/drive/folders/1hER7WzvapxKzG4i3pIayLRU3ICTYwjSF",
          playlistLink: "https://www.youtube.com/watch?v=XCZakSI-M0I&list=PLLf6O8XdGj03gLo6znlqJbMzgIgt8tSU1",
          roadmap: "https://drive.google.com/uc?export=view&id=10H0SK2Ds-Ds7AOq1c0Jnx_yQlcE3-xcT",
          pptLink: "https://drive.google.com/drive/folders/1xuQFW0faBSTQdQw5nzJoi646hlLdoysw"
        },
        {
          name: "Problem Solving using Computers",
          image: "https://drive.google.com/uc?export=view&id=12XnZ9NYxhznQJkrKKUo4bxUA1FPFTd9M",
          pyqLink: "https://drive.google.com/drive/folders/14E0SRP4X0EbccxY9jMo44E7_zlUEARJb",
          notesLink: "https://drive.google.com/drive/folders/1nj16NcCCIgI3kmmkT-eisrKg_BKN2yKA",
          playlistLink: "https://www.youtube.com/watch?v=aZb0iu4uGwA&t=8493s&pp=ygUdYyBsYW5ndWFnZSBmb3IgYnRlY2ggMXN0IHllYXI%3D",
          roadmap: "https://drive.google.com/uc?export=view&id=1z157mHPpnqS9nuAURS0gR14bUGUt7Cap",
          pptLink: "https://drive.google.com/drive/folders/1RDgE5dQQh7m6MiM3He8eBJAgu0mpd6ax"
        },
        {
          name: "Technical Writing using Computers",
          image: "https://drive.google.com/uc?export=view&id=1INe2wYg489SO-kYD3Q41ntMakcNtBOCH",
          pyqLink: "https://drive.google.com/drive/folders/1Ka7AT18HKHu_WjIBSoloGI_9VHm-ar5t",
          notesLink: "https://drive.google.com/drive/folders/1y-t8alIoH2J7w_f1vBWYTWKcYkpHAIDV",
          playlistLink: "",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1EJvTLXLNNGXs26FfqDtPMg-oAJxVFyX_"
        },
      ],
    },
    IT: {
      second: [
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1NTLC89Ma4eU6yJSyD9dGymJSoXDYuobo",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1vZPXAJwd7K2ApdvADnwA_lhsV43OyptC",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Communication",
          image: "https://drive.google.com/uc?export=view&id=1hRgn8Xxk1IFIjULySimcNPV7vCRS29RQ",
          pyqLink: "https://drive.google.com/drive/folders/1Q1BE5wr50TUNoOwyxVY8219tVtETQV0y",
          notesLink: "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "https://youtube.com/playlist?list=PLrjkTql3jnm9xaVXzOGH5Z_xvvBguUSat&si=ViHHBjtAZUf7hYSR",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer System Architecture",
          image: "https://drive.google.com/uc?export=view&id=1e76rXlmOE_IKHwDV09ByVxl98pk0ti0q",
          pyqLink: "https://drive.google.com/drive/folders/11NekAzIeiLGry2Am0m5qfuEUtEYgtCRR",
          notesLink: "https://drive.google.com/drive/folders/10wjhn9aGixqaIa2BQGGZ-yOAEqcTZKHq",
          playlistLink: "https://youtu.be/DsK35f8wyUw?si=aEQyCkYhVlPywhka",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/16MvJzoUA1CyivRESx9_4sMbREdIq1WXt",
          notesLink: "https://drive.google.com/drive/folders/1RwavgM2xKSw0sD_d-kn8IOOODB1UpKuX",
          playlistLink: "https://youtube.com/playlist?list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&si=F-0hNBoIf8qkYMPA",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Python Programming Fundamentals",
          image: "https://drive.google.com/uc?export=view&id=1ln75TGSJuPmmJXcdcN4XPAc0O5bUF4-j",
          pyqLink: "https://drive.google.com/drive/folders/1FvpViDiDzYpMOXFjndtWl4H8JsitzkZn",
          notesLink: "https://drive.google.com/drive/folders/15fxrBDM0CuvMzPa__-Csln-quVsxUvLh",
          playlistLink: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=WAD-IymtA0OJpgIJ",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/14hlQxQdNilqy6K3TXzXq1uz7Mud9jT2g",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1LDmfiAajgHOsTUq8_xKqDAqGDcJY-0ov",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Web Technologies",
          image: "https://drive.google.com/uc?export=view&id=14XpYyVFh79y8OWG2KC0ziBu5XUGLgJce",
          pyqLink: "https://drive.google.com/drive/folders/1tviFmvyke62MyBjrlhcH2IGP1GTbEXp8",
          notesLink: "https://drive.google.com/drive/folders/1fz3nzYRiFbXVceq-8GUrfP2hHL9vm_dI",
          playlistLink: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=DdiAPPaTivOx16SM",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1fTlbkE4JHBuJniK8GK0npv5AYaEtRvK3",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1cTALhsY_zFL883HTrRJBOhx671LO2jmb",
          notesLink: "https://drive.google.com/drive/folders/1SaleDZd8IjgQLHerSXnn6MjdFyimEdaC",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "https://drive.google.com/uc?export=view&id=1jR0rI5zCdI71_94KujRlxEkAde6JL7vx",
          pyqLink: "https://drive.google.com/drive/folders/1PrIucd4gtsNaTNKBdU6J5KcrTgxASCio",
          notesLink: "https://drive.google.com/drive/folders/1g8wLoBupfl2KdSSYuAmf1eToQJm5Ukt1",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Software Engineering",
          image: "https://drive.google.com/uc?export=view&id=1wD-Ic035J4HYLh_oAyTu36WQIxtmKUU8",
          pyqLink: "https://drive.google.com/drive/folders/1jzqaXTv75hX_BrBy2tnS8lFoI6GQr7h1",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1Y61tOWcnCOuDX0sPZ77rEzHfXy0soYDq",
          pyqLink: "https://drive.google.com/drive/folders/1E_WJSuhC628od_vEIB3zH-4-fTxqJruS",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=1KdRA2HnaY5D3Fg1F37znSf-b01Cft347",
          pyqLink: "https://drive.google.com/drive/folders/1NVbTT_qmguxOASC6hLdClvpVx0yujONv",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=17REIE-n83P6mvJkOQT_WrGq9tMdjopy_",
          pyqLink: "https://drive.google.com/drive/folders/1oe4JzD_y_Iylz0EbkzW3UFCPOWHsielN",
          notesLink: "https://drive.google.com/drive/folders/186JTWqITq4A3losWMRdc2mtM9QNxdOo5",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Automata & Compiler Design",
          image: "https://drive.google.com/uc?export=view&id=1hKAgxZSwTpb6vbesBJjWIi4aHgX0K96l",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "CIS",
          image: "https://drive.google.com/uc?export=view&id=1s3C_Q5ebbLi2ME7WXXSUz3P7XNIgRfcU",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1S4rZu_oRw-Bt6KNiRzrl_pIPvjdytl_9",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
    },

    CSE: {
      second: [
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1kKgdwQ89xpnIqFrbByKshn8Vip_go4eP",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/12-TXQdBFhqm1naalasMZMw9rdcxSAZIs"
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1nWO2ZZrpitIAZxO3qgfBlrQA3i3Z03FF",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Design & Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1_zFuTffVpiHR3e4e9E2HLA1Xj2P3kWaE",
          pyqLink: "https://drive.google.com/drive/folders/1ffgA8RffUbY8VmSa4TMkcVtXMhwqU9VU",
          notesLink: "http://drive.google.com/drive/folders/187KV-bondddfwbTRSSFItzWwV0kpZJuf",
          playlistLink: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1VWSsefJLW2Gr-hZqneSYUUc5niR7WAmD"
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1lIiSdvmFYj7D2w-zcQwOI7tB-hHYlCAU",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/1gggoJjbAVzQkPW-BNP8NBeCnp00EY-lN",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1Lq0hQV52f4iyLWPZ72haeU2l__cnUBOx"
        },
        {
          name: "RDBMS",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1VEZE6kbEXQSTxqFFZ76DljXxZJk78oCf",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://www.youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Organization and Architecture",
          image: "https://drive.google.com/uc?export=view&id=1NDmq2few7tqIjZQP9bpwYTJeD-a_BDve",
          pyqLink: "https://drive.google.com/drive/folders/1Rz9fB5QEbMz2_jCbapalm8AKAMvYjvx5",
          notesLink: "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e7XZXcFujMw--IDZ2nnsXNT",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Cryptography",
          image: "https://drive.google.com/uc?export=view&id=16pCF7QcjMTGWcwAmW8nZwLo4e5eydV7a",
          notesLink: "https://drive.google.com/drive/folders/1HBeISehoI9nR6HTIu5YHuJe0cueRUCh0",
          playlistLink: "https://www.youtube.com/playlist?list=PL9FuOtXibFjV77w2eyil4Xzp8eooqsPp8",
          roadmap: "",
          pyqLink: "https://drive.google.com/drive/folders/1GhfJBD036iUIJBaFPo6JRdy8_n22d2fx",
          pptLink: "https://drive.google.com/drive/folders/1cVMijymJdEF3_RgSCzDCIs2klipOOryg"
        },
        {
          name: "ACD",
          image: "https://drive.google.com/uc?export=view&id=10jatMHYKtSGdlKcM7FjULzcSytg0oElj",
          pyqLink: "https://drive.google.com/drive/folders/1Sxocdt8c71BfwJeDJbnz2ABt5FOHLQg2",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/14aWaZ3WEZjvAFcEVmUDrlik1L8-0-v3b"
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1o_RQnX3eAGIA14-JiRsiqcnxpBWXI5ee",
          notesLink: "https://drive.google.com/drive/folders/1SaleDZd8IjgQLHerSXnn6MjdFyimEdaC",
          playlistLink: "",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/17rwHqOiXnw8Nf8dZzYsfUsNyr6pwpRiy"
        },
        {
          name: "CSA",
          image: "https://drive.google.com/uc?export=view&id=1e76rXlmOE_IKHwDV09ByVxl98pk0ti0q",
          pyqLink: "https://drive.google.com/drive/folders/1Rz9fB5QEbMz2_jCbapalm8AKAMvYjvx5",
          notesLink: "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "https://youtu.be/DsK35f8wyUw?si=aEQyCkYhVlPywhka",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "OOP",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/1BrbJkAWIKlss0Azby6z3W7QKVMMI-D3R",
          notesLink: "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
          roadmap: "",
          pptLink: ""
        },
      ],
      third: [
        {
          name: "AISC",
          image: "https://drive.google.com/uc?export=view&id=1WJ24ToesdEgUWjAzcdHgYUBq-Onf9Nxl",
          pyqLink: "https://drive.google.com/drive/folders/1im02vRTo0uXT180Pguu7Hu8mkmO0XVa6",
          notesLink: "https://drive.google.com/drive/folders/1zU470hOIIIGRx1u3WhPB370AHIsqJzSt",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Design & Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1Y61tOWcnCOuDX0sPZ77rEzHfXy0soYDq",
          pyqLink: "https://drive.google.com/drive/folders/1-2qokPmfLDs2tvbEB6e2k2sUb7GRXk9d",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Automata & Compiler Design",
          image: "https://drive.google.com/uc?export=view&id=1hKAgxZSwTpb6vbesBJjWIi4aHgX0K96l",
          pyqLink: "https://drive.google.com/drive/folders/1nDlLF44yvaJ6_Gf1ZQeSE6sO3k-YBUd3",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=1KdRA2HnaY5D3Fg1F37znSf-b01Cft347",
          pyqLink: "https://drive.google.com/drive/folders/1npItudoofzWfIo-XnDyGEe2IC1qw-fF7",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Software Engineering",
          image: "https://drive.google.com/uc?export=view&id=1wD-Ic035J4HYLh_oAyTu36WQIxtmKUU8",
          pyqLink: "https://drive.google.com/drive/folders/19eu_8cShgL90QmT7VprO03r1tE911pBj",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "ISS",
          image: "https://drive.google.com/uc?export=view&id=1qCLJUCs20Ob1UVMiHmDy0VOJMmqtAQsl",
          pyqLink: "https://drive.google.com/drive/folders/11lhy9hIC0Vcxa3mSvsHydvuTmn7m1bGM",
          notesLink: "https://drive.google.com/drive/folders/1ND8pHgOUOVSfHow38ytP6LvEvRisYdz3",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Science & ML",
          image: "https://drive.google.com/uc?export=view&id=1Uk5oQY7KtQMDJd9KaqinKnkj-sRULA9F",
          pyqLink: "https://drive.google.com/drive/folders/10Wwm_K-yeBv5IAeBVg8-6W4reho90w1s",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
    },
    CCE: {
      second: [
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1Toe49CDQBseML7mU0F-p64b8cZoBOKpY",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1a9BhYz5xvqqjBv_gataPm3tae025uT3f",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Communication",
          image: "https://drive.google.com/uc?export=view&id=1hRgn8Xxk1IFIjULySimcNPV7vCRS29RQ",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "https://youtube.com/playlist?list=PLrjkTql3jnm9xaVXzOGH5Z_xvvBguUSat&si=ViHHBjtAZUf7hYSR",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "https://drive.google.com/uc?export=view&id=19SJqK70KSNErfSgX0ACjL5DG7KGNav3q",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/15igdh33pd0Ii7ZBAl1V_yT6wERNCTn-d",
          notesLink: "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/1ziHBNfrJ1155bG6k5PdK9RSaQJ1BEZXh",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1-j_wC0Yr-iuAGISOuDslMOYUrWlqiZPa",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=18kippQ9qVzI61j6CuDMySmL3GFneFWZ9",
          pyqLink: "https://drive.google.com/drive/folders/1_YUkRcdWCclDdg4vJFMe9Pm_Zb1zCkag",
          notesLink: "https://drive.google.com/drive/folders/1nMZ3yYzp9rYiGDb0f3lqL0jqqz-dNtg0",
          playlistLink: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=e3p8n480ABME9G8d",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1h9xstZEW8k-6My9DyKVE05D49xkm__X9",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Management and Organizational Theory",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1UJblblj9dCg6GMKO5-CZh7rpupZ4xyrt",
          notesLink: "https://drive.google.com/drive/folders/1SaleDZd8IjgQLHerSXnn6MjdFyimEdaC",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "https://drive.google.com/uc?export=view&id=1jR0rI5zCdI71_94KujRlxEkAde6JL7vx",
          pyqLink: "https://drive.google.com/drive/folders/1xddaS8pXxUVaCmRuYfcII2dp8NlexkwRhttps://drive.google.com/drive/folders/1x_5CR-Z12iasyk2InCKzDpq-kkxCroi2",
          notesLink: "https://drive.google.com/drive/folders/1g8wLoBupfl2KdSSYuAmf1eToQJm5Ukt1",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Software Engineering",
          image: "https://drive.google.com/uc?export=view&id=1wD-Ic035J4HYLh_oAyTu36WQIxtmKUU8",
          pyqLink: "https://drive.google.com/drive/folders/1cOnLh-gi2kVRGp25tXQk7JcfDmr2yoEv",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1Y61tOWcnCOuDX0sPZ77rEzHfXy0soYDq",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Automata and Compiler Design",
          image: "https://drive.google.com/uc?export=view&id=1hKAgxZSwTpb6vbesBJjWIi4aHgX0K96l",
          pyqLink: "https://drive.google.com/drive/folders/1oKqE8f1UMKN3KpXgDZ2kCXBie2PdH_4o",
          roadmap: "",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
          pptLink: ""
        },
        {
          name: "Wirless Communication",
          image: "https://drive.google.com/uc?export=view&id=1ENxgJhG7CTbyqkA-HN_7CdHRv3NtRcKz",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Aritificial Intelligence & Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=17REIE-n83P6mvJkOQT_WrGq9tMdjopy_",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/186JTWqITq4A3losWMRdc2mtM9QNxdOo5",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
    },
    AIML: {
      second: [
        {
          name: "Design and Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1_zFuTffVpiHR3e4e9E2HLA1Xj2P3kWaE",
          pyqLink: "https://drive.google.com/drive/folders/12XTPn-zlRQTVsm1qr_Ldouzz8K-7etkX",
          notesLink: "https://drive.google.com/drive/folders/187KV-bondddfwbTRSSFItzWwV0kpZJuf",
          playlistLink: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1Icej6svAbgd-RSzxY-_5y2EO6L1arocw"
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/1do4sEQSQj6J1-7u41mfcR2fpgV3TaGCf",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1c-XsoiYxvwBuhfSSAZnuH8zUw8Z-ht33"
        },
        {
          name: "Agile Software Development",
          image: "https://drive.google.com/uc?export=view&id=1cAgk_G_Yvx3nb5gzgswSOgQM3P_gN-HU",
          pyqLink: "https://drive.google.com/drive/folders/1f8RLDUOrvM_UvJXxB3OBFKv1cRTI8g-G",
          notesLink: "https://drive.google.com/drive/folders/1I8iTLlUGsFOHupmEG0wYw2f_aN_KQy1J",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Cloud Computing",
          image: "https://drive.google.com/uc?export=view&id=1GqsOXOnDFcz0-H4_EjUiPthZx8ApIRM0",
          pyqLink: "https://drive.google.com/drive/folders/1NNK82Zs2_FJtDTP0OLVzuFMhuGWiRIQX",
          notesLink: "https://drive.google.com/drive/folders/1TdrgiDukGedsPSjYRxMSwQsZOsamh9dC",
          playlistLink: "",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1MJl4ZiIwmqSugWA7uysu1Pimxj57Ydoq"
        },
        {
          name: "Statistics and Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1x1swB_m4TRA8caHbYFyMaiO05s4588nD",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1dor9PUWEgRIHD7PRqOJT3m1o4JFhFpiW",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/15aGWyaUOA7H27CVgLSGIKB8C2UUUAN5g"
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1eW0n3LgA4_uMULhJD-bUFj8dXI7d8Wis",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1QXEJq36UDhlCQbDgI4yu0CO7J-n4crUN"
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/1kG0km0W1nqwj2TUTW8_BNLUJrBKxYdZY",
          notesLink: "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1p5AggBXr9_h_I70wU3o9rAm5BWu82PLz"
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1A-cszL6CulRBg_a5iam_hTKvfDGY0zc6",
          notesLink: "https://drive.google.com/drive/folders/1SaleDZd8IjgQLHerSXnn6MjdFyimEdaC",
          playlistLink: "",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/17rwHqOiXnw8Nf8dZzYsfUsNyr6pwpRiy"
        },
        {
          name: "Principles of Artificial Intelligence",
          image: "https://drive.google.com/uc?export=view&id=1vLlhr9l8R5k9eIR5K1RfedhyNovoBLsh",
          pyqLink: "https://drive.google.com/drive/folders/1mBDWiUGOuVsTtU61f6u_9sBlN1CDhqzV",
          notesLink: "https://drive.google.com/drive/folders/1_oHSfPFD4LhROOjC_bLDSkdlwCKv-sd8",
          playlistLink: "https://youtube.com/playlist?list=PLDh_nHdEw3KOFxIcKyzynJHOp_6bjCYLs&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1QrFM4r4ofNBKTf84zHBc2qZOET-_wubf"
        },
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1HQ7PvlCVg8xPPh5osHzmBDs-CmU1JvVn",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Software Engineering & Product Management",
          image: "https://drive.google.com/uc?export=view&id=1Oxhz6bwMHYgvhMonK_1OKCIGdunRTfoF",
          pyqLink: "https://drive.google.com/drive/folders/1FczsoM7e9epwuIJUa5-x_smhiwz750rn",
          notesLink: "https://drive.google.com/drive/folders/1IxtYO4TgClezalvYz_C3JmFOI56BoNa4",
          playlistLink: "https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1l2Y42E3i-RM8e6b_adLpLCUSFH3Vc3w0"
        },
        {
          name: "Computer Organization and Architecture",
          image: "https://drive.google.com/uc?export=view&id=1NDmq2few7tqIjZQP9bpwYTJeD-a_BDve",
          pyqLink: "https://drive.google.com/drive/folders/1lPY54VJlApc2udMfh0ELJI5ol2wTQjfp",
          notesLink: "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e7XZXcFujMw--IDZ2nnsXNT",
          roadmap: "",
          pptLink: ""
        },
      ],
      third: [
        {
          name: "Soft Computing Methods",
          image: "https://drive.google.com/uc?export=view&id=1-Q0_WEELfJRNu-2kEJAbSzViAq8b-2Wx",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1Y61tOWcnCOuDX0sPZ77rEzHfXy0soYDq",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=1KdRA2HnaY5D3Fg1F37znSf-b01Cft347",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Foundation of Data Science",
          image: "https://drive.google.com/uc?export=view&id=1jR0rI5zCdI71_94KujRlxEkAde6JL7vx",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1g8wLoBupfl2KdSSYuAmf1eToQJm5Ukt1",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Game Theory",
          image: "https://drive.google.com/uc?export=view&id=13OguxYlppwJG2TkEEx8NH6tUWKD4WLw6",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=16T-aMZChOXgxOmRD2h5XF2mfkR5zhfbV",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1OQuVLErNef2wpx6zjF2LhNbinlaeIy8a",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Vision",
          image: "https://drive.google.com/uc?export=view&id=1D3fNWDBB0VZ4qiz8H3dhlbaYsGxv_I7L",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Natural Language Processing",
          image: "https://drive.google.com/uc?export=view&id=1caQ_pI1NPeeaYIIudj8sIEwUPVSc93iU",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Mining",
          image: "https://drive.google.com/uc?export=view&id=1fJmZn9OezOmt8nnzbvYCD8tWtP6Bi0ai",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1w0o1JlIOp5kcQLhfv19cBHmLzWZye6Te",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Fundamentals of Automobile Engineering",
          image: "https://drive.google.com/uc?export=view&id=1hH6Xfo70buxfexfHdgXQOwcT9GhjkbJh",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
    },
    IOT: {
      second: [
        {
          name: "Wireless Communication",
          image: "https://drive.google.com/uc?export=view&id=1MMusmcvQmCMVUCWU8c8yAklpjZbzDfT_",
          pyqLink: "https://drive.google.com/drive/folders/1_C5exQDvj0CC79dQY1kxAZKwMzRKvmdk",
          notesLink: "",
          playlistLink: "https://youtube.com/playlist?list=PLCyR4nKNLRkFTER9ohRBnbRFK0pWe0Qtf&si=8OjFKkqbFPDSGPnP",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Cryptography and Network Security",
          image: "https://drive.google.com/uc?export=view&id=1V9W_5lx2iPOxng09xKbqjIXj_uGEfx2k",
          pyqLink: "https://drive.google.com/drive/folders/1WEo2jkNHVuhPUFhYG_xc1hLz4EvubB5w",
          notesLink: "https://drive.google.com/drive/folders/1HBeISehoI9nR6HTIu5YHuJe0cueRUCh0",
          playlistLink: "https://www.youtube.com/playlist?list=PL9FuOtXibFjV77w2eyil4Xzp8eooqsPp8",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/19aSCkXjm-WtmKocDxD9ggS7ievPTEXN3",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/12hJMGwwRhd3zDzajvaiAzIh251Jk71Zp"
        },
        {
          name: "Data Communication",
          image: "https://drive.google.com/uc?export=view&id=1hRgn8Xxk1IFIjULySimcNPV7vCRS29RQ",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "https://youtube.com/playlist?list=PLrjkTql3jnm9xaVXzOGH5Z_xvvBguUSat&si=ViHHBjtAZUf7hYSR",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1Eytdpjed6E8jMvqTlSEA3G0ATQ5jb1EM"
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1j7kDOuheIXygQgzLsgc3lYddE1kEEpuF",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1Qn8JEKBRf5lHMPotjAvzJEHBHplSIbiT"
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/13fG6fVa7S3GF0U37LGaolb_rPPi5z6Iz",
          notesLink: "https://drive.google.com/drive/folders/1RwavgM2xKSw0sD_d-kn8IOOODB1UpKuX",
          playlistLink: "https://youtube.com/playlist?list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&si=F-0hNBoIf8qkYMPA",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1toN4HmgOG_h_H5vIJu5sh5Ti9XfCxJwN"
        },
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1oFPfDat-fIjSweamjiJQmnYcdrGfdMMx",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1xuVr2GGD7GW3fvSHWSeb_MImS1zC0I6p"
        },
        {
          name: "Data Communications and Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=1OTAshwV0rp2pqXPD8YlZ3S6NL_ylNFnE",
          pyqLink: "",
          notesLink: "",
          playlistLink: "https://youtube.com/playlist?list=PLZQgf2pQtimlhO3UY6UJzIC7JVBzSbXXQ&si=LGbz4TviSIGpqFxI",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Foundation of Data Science",
          image: "https://drive.google.com/uc?export=view&id=1h3QNFa-LVRigJJocOsAkidWcbErCPNxT",
          pyqLink: "https://drive.google.com/drive/folders/1oLISuYWCpLi6o42eVWNuXvvQp5zU32ys",
          notesLink: "",
          playlistLink: "https://youtu.be/ua-CiDNNj30?si=_bOi7foMkcoYAVqe",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/12O05c2VgSa1L3McyaXehJeH1CRZtyLz7",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1LuZrj5gbZ4Y58mrYSbC3qf1ZWuZA3YYx"
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1o2gQl1gakSQ_K49tY-Q5fhxo2ISUjKpq",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1i4PKFcyiqz5vWU0xA7Mg_1XlDYlPmV7j"
        },
        {
          name: "Web Technologies",
          image: "https://drive.google.com/uc?export=view&id=14XpYyVFh79y8OWG2KC0ziBu5XUGLgJce",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1fz3nzYRiFbXVceq-8GUrfP2hHL9vm_dI",
          playlistLink: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=DdiAPPaTivOx16SM",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1Bn0SjURytEKtv-Ve-Wb2wrMChIQQpCZf"
        },
        {
          name: "Web Programming",
          image: "https://drive.google.com/uc?export=view&id=17Ub1xspHJuvGplgfW-y7Pj_UKGVYto7q",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1-alSRoq5Y_Tv_NA2WJkQGlkPErE4ZlyS",
          playlistLink: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=DdiAPPaTivOx16SM",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1mV0AmSDn16G6UJLutkEpoxTKBNurEAt3",
          notesLink: "https://drive.google.com/drive/folders/1SaleDZd8IjgQLHerSXnn6MjdFyimEdaC",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=1o8M_v5Q1AS8J0rNMwTPzJ7BFVcezwYkZ",
          pyqLink: "https://drive.google.com/drive/folders/1jZ15d1FbGUK4MedHkGs9lFSzFdzCw_T3",
          notesLink: "https://drive.google.com/drive/folders/1_87ctDdlSxHR5BHQEByY09qxDh7fFgTj",
          playlistLink: "https://youtube.com/playlist?list=PLEiEAq2VkUULyr_ftxpHB6DumOq1Zz2hq&si=YJ1TCE331tf6nVHk",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Automata and Compiler Design",
          image: "https://drive.google.com/uc?export=view&id=10jatMHYKtSGdlKcM7FjULzcSytg0oElj",
          pyqLink: "https://drive.google.com/drive/folders/1DOEzK9xCoDVV6rAOQMJ3BFS8zZEfEeiz",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1LYIc4ZFqvuRZxRWG3Db_YgICrptWV8Y3"
        },
      ],
      third: [
        {
          name: "Design and Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1Y61tOWcnCOuDX0sPZ77rEzHfXy0soYDq",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=17REIE-n83P6mvJkOQT_WrGq9tMdjopy_",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/186JTWqITq4A3losWMRdc2mtM9QNxdOo5",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Sensors and Microcontrollers",
          image: "https://drive.google.com/uc?export=view&id=10DEoaPD9tHBf-W80Nqx9LelRpvI0MzRK",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "IoT Architecture & Its Protocols",
          image: "https://drive.google.com/uc?export=view&id=1WdHJizyT5h5F5WbARPEnCOpGoP5JdgC-",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Software Engineering",
          image: "https://drive.google.com/uc?export=view&id=1wD-Ic035J4HYLh_oAyTu36WQIxtmKUU8",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Cyber and Information Security",
          image: "https://drive.google.com/uc?export=view&id=1s3C_Q5ebbLi2ME7WXXSUz3P7XNIgRfcU",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1S4rZu_oRw-Bt6KNiRzrl_pIPvjdytl_9",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "IoT Design",
          image: "https://drive.google.com/uc?export=view&id=1mNCVdyHIRsjbXAYRt4WWj6pVupNwS_ef",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Deep Learning",
          image: "https://drive.google.com/uc?export=view&id=1aIwlF4MOd1aRobztaWR2X6_Yy4k5YL2P",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=1KdRA2HnaY5D3Fg1F37znSf-b01Cft347",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
    },
    DSE: {
      second: [
        {
          name: "Finance & Econometrics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1dD3PkXiVbJys8UiDPM4PppnjVirFlmdV",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/1fSsR_bYR7uTHgeKLXW3szgfTQRamhHCh",
          notesLink: "https://drive.google.com/drive/folders/1dDwjgCXib5prviOhnfvg__E625750iZb",
          playlistLink: "https://youtube.com/playlist?list=PLsyeobzWxl7oa1WO9n4cP3OY9nOtUcZIg&si=B4TquaHpOkdOaRZQ",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1fEiCL0_OhMKc8Fe6Qh6_BW8GaW7HuJPh"
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1GzvVOLPFHyyf9F9QSSm_fyAc0fnw2NNi",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1VE8TqaxwQnboaqJU29uLrE_cGvflvHfA"
        },
        {
          name: "Computer System Architecture",
          image: "https://drive.google.com/uc?export=view&id=1e76rXlmOE_IKHwDV09ByVxl98pk0ti0q",
          pyqLink: "https://drive.google.com/drive/folders/1QgzcuxcdBobmtUH8WiXrTpvPLJm6ZPnB",
          notesLink: "https://drive.google.com/drive/folders/10wjhn9aGixqaIa2BQGGZ-yOAEqcTZKHq",
          playlistLink: "https://youtu.be/DsK35f8wyUw?si=aEQyCkYhVlPywhka",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1tg5DjbkjRQ_qYeSO6hKT7pJPlWlNC51R"
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1mQFPW-VmQ2dU62D88Au74QjFPzI4qLs-",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1w8UCf8pp-rFrI94WtuywN52i5VVqsY76"
        },
        {
          name: "Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=137697YbBXPXvGpyGnjeMn0KvcA9xx41q",
          pyqLink: "https://drive.google.com/drive/folders/1znUZwOclqeAqbQtfCEH7xXYK9cdj7TOc",
          notesLink: "https://drive.google.com/drive/folders/1_87ctDdlSxHR5BHQEByY09qxDh7fFgTj",
          playlistLink: "https://youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ&si=1NcBPhGTXB8JSJDJ",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1eyjUPDVgKtsQkvS57NN7SOcaSDLSsnfv"
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1dtNb_TINiJWITIGQzb1E0_CPxNyQMhF1",
          notesLink: "https://drive.google.com/drive/folders/1SaleDZd8IjgQLHerSXnn6MjdFyimEdaC",
          playlistLink: "",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1WhUiosJFJ0iU1jVUIrzOHTA3ej6PRZ7d"
        },
        {
          name: "Data Mining",
          image: "https://drive.google.com/uc?export=view&id=1HYvGRUHa8gX5MLqqtDsV-D4ceAs9aMAE",
          pyqLink: "https://drive.google.com/drive/folders/1AlSkKYEhw4RTMBHntYtdMHYhC40oBv7h",
          notesLink: "https://drive.google.com/drive/folders/1mRX4TG5ChKT6NtPt5jNp0TVEDy7IMWMm",
          playlistLink: "https://youtube.com/playlist?list=PLYwpaL_SFmcChP0xiW3KK9elNuhfCLVVi&si=yJX07Jz2Wb06aR6b",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Cloud Computing",
          image: "https://drive.google.com/uc?export=view&id=1GqsOXOnDFcz0-H4_EjUiPthZx8ApIRM0",
          pyqLink: "https://drive.google.com/drive/folders/1HlGiv6cUPJFBHqoJ20cAyQj97IzH9aAT",
          notesLink: "https://drive.google.com/drive/folders/1TdrgiDukGedsPSjYRxMSwQsZOsamh9dC",
          playlistLink: "",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1gZkOV7xmG7Vf48qGSRGNJriWUNfyzsWN"
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=18kippQ9qVzI61j6CuDMySmL3GFneFWZ9",
          pyqLink: "https://drive.google.com/drive/folders/1Hz1SjFLmiVUzp52DIIIDrwlANzsn7hPo",
          notesLink: "https://drive.google.com/drive/folders/1nMZ3yYzp9rYiGDb0f3lqL0jqqz-dNtg0",
          playlistLink: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=e3p8n480ABME9G8d",
          roadmap: "",
          pptLink: "https://drive.google.com/drive/folders/1zG-BWmiewwlHDg353J4toFNLmqzPWkby"
        },
        {
          name: "Statistics and Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/18L9Ch_ji_IFe3h99WxIUjmxErQ0knxUM",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
          pptLink: ""
        },
      ],
      third: [
        {
          name: "MFDS-3",
          image: "https://drive.google.com/uc?export=view&id=1KsMxjB13BFV14JIFV4ELDlr9pUY1Bvyh",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Deep Learning",
          image: "https://drive.google.com/uc?export=view&id=1aIwlF4MOd1aRobztaWR2X6_Yy4k5YL2P",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=1Vp8q0d1mUsX1urdyqsQ-tvXEmo41puSC",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1OyXy5-wtHfrhJw4efeOFaZGcLsiYKa4V",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Natural Language Processing",
          image: "https://drive.google.com/uc?export=view&id=1caQ_pI1NPeeaYIIudj8sIEwUPVSc93iU",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Cloud Computing",
          image: "https://drive.google.com/uc?export=view&id=1fQexXyH2rlWuC87MLZ0LYFuhATZc-H4X",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Operations Research",
          image: "https://drive.google.com/uc?export=view&id=1hFc0DHHPqkEcQsrd7mJTUspmxxLwreli",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Artificial Intelligence",
          image: "https://drive.google.com/uc?export=view&id=17REIE-n83P6mvJkOQT_WrGq9tMdjopy_",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Parallel Programming",
          image: "https://drive.google.com/uc?export=view&id=1rZRBxMKBqNAtRrVNYUHVL64Fem-aa3QO",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Big Data Analytics",
          image: "https://drive.google.com/uc?export=view&id=1REsoHM7Uf17hokQpyYKnJs2z9hiVBKHK",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
        {
          name: "Data Privacy and Security",
          image: "https://drive.google.com/uc?export=view&id=1adGQqazQRKa2N2sf87jlDo4Xg-F0-R-Z",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pptLink: ""
        },
      ],
    },
  };
  
  const subjects = subjectsYearWise[branch]?.[yearBranch];

  const renderSubjects = (
    subjects:
      | {
          name: string;
          image: string;
          pyqLink: string;
          notesLink: string;
          playlistLink: string;
          roadmap: string;
          pptLink: string;
        }[]
      | undefined
  ) => {
    if (!subjects) return <div>No subjects found</div>;
    return (
      <div className="min-h-screen px-4 py-4  bg-cover bg-center mt-12">
        <div
          className="p-6 sm:p-8 md:p-10 text-black 
             grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             gap-6 justify-items-center"
        >
          {subjects.map(
            ({ name, image, pyqLink, notesLink, playlistLink, roadmap, pptLink }) => (
              <div key={name} className="w-full flex justify-center">
                <CardWithSelect
                  subjectName={name}
                  subjectImage={image}
                  pyqLink={pyqLink}
                  notesLink={notesLink}
                  playlistLink={playlistLink}
                  roadmap={roadmap}
                  pptLink={pptLink}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center mt-12">
      {renderSubjects(subjects)}
    </div>
  );
}
