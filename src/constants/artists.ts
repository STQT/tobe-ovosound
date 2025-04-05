import InstagramIcon from "../components/icon/instagram.vue";
import XIcon from "../components/icon/x.vue";

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
        playlists: [],
        other_image:
            "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg",
        youtube: {
            link: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
            image: "https://img.youtube.com/vi/qWsk-kp8g7E/maxresdefault.jpg",
        },
        artist_images: [],
    },
    {
        id: 1,
        name: "TAHAUI",
        tag: "tahaui",
        socials: [],
        profile_image: TAHAUI_PHOTO,
        playlists: [],
        other_image:
            "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/DVSN-FLYER4-sm.jpg",
        youtube: {
            link: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
            image: "https://img.youtube.com/vi/qWsk-kp8g7E/maxresdefault.jpg",
        },
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
        playlists: [],
        other_image:
            "https://cdn-p.smehost.net/sites/96c064c84a7a469c910b34452a5404a0/wp-content/uploads/2024/04/majidjordangoodpeopletour2.jpg",
        youtube: {
            link: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
            image: "https://img.youtube.com/vi/qWsk-kp8g7E/maxresdefault.jpg",
        },
        artist_images: [],
    },
];
