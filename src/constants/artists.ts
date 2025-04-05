// import InstagramIcon from "../components/icon/instagram.vue";
// import XIcon from "../components/icon/x.vue";

import TAHAUI_PHOTO from "../assets/images/IMG_1065.webp?url";
import DAU from "../assets/images/IMG_2.webp?url";

export default [
    {
        id: 0,
        name: "ARShAT",
        tag: "arshat",
        socials: [
            // {
            //   name: "instagram",
            //   icon: InstagramIcon,
            //   link: "https://www.instagram.com/PartyNextdoor",
            // },
            // {
            //   name: "x",
            //   icon: XIcon,
            //   link: "https://www.twitter.com/PartyNextdoor",
            // },
        ],
        profile_image: "/artists/arshat_photo.WEBP",
        playlists: [
            {
                name: "ARShAT — TUNDE (album)",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "ARShAT — QUMSAGAT (album)",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "ARShAT — IZDE (album)",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
        ],
        other_image: null,
        youtube: null as { link: string; image: string } | null,
        artist_images: [],
    },
    {
        id: 1,
        name: "TAHAUI",
        tag: "tahaui",
        socials: [],
        profile_image: TAHAUI_PHOTO,
        playlists: [],
        other_image: null,
        youtube: null,
        artist_images: [
            {
                image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…4a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg",
                ref: "artistImage1",
                x: 1,
                y: 50,
                distance: 250,
                zIndex: -10,
                width: 180,
            },
            {
                image: "https://cdn-p.smehost.net/sites/96c064c84a7a469c91…4a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg",
                ref: "artistImage2",
                x: 50,
                y: 40,
                distance: 280,
                zIndex: -10,
                width: 200,
            },
        ],
    },
    {
        id: 2,
        name: "DAU",
        tag: "dau",
        socials: [],
        profile_image: DAU,
        playlists: [
            {
                name: "DAU — Pikir",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU — ULAID",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU & ARShAT — Meiram",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU & ARShAT — Shagala",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU & ARShAT — Qora",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU & Kuanyshbek Nurgazy — \nNe ushin",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU & iAQASTY — Esalań",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
            {
                name: "DAU & Kuanyshbek Nurgazy — ÓMIR",
                year: null,
                image: "",
                link: "https://www.youtube.com/playlist?list=PLgL5E784247896B881",
            },
        ],
        other_image: null,
        youtube: {
            link: "https://www.youtube.com/embed/_w2ZqoZTVJ8?si=MEUg_SXbrdEXSMu_",
            image: "https://i.ytimg.com/vi_webp/_w2ZqoZTVJ8/maxresdefault.webp",
        },
        artist_images: [],
    },
];
