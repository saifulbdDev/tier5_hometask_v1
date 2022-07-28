import React from "react";
import { Grid, HomeIcon, Home,Plus, Messenger, Find, Love,  Geming, Group, Store, Watch } from "../../../icon";

const topMenus = [
  {
    link: "/facebook",
    icon: <HomeIcon className="y" width={28} height={28} />,
    notification: 0,
  },
  {
    link: "/watch",
    icon: <Watch className="y" width={28} height={28} />,
    notification: 9,
  },
  {
    link: "/marketplace",
    icon: <Store className="y" width={28} height={28} />,
    notification: 9,
  },
  {
    link: "/groups",
    icon: <Group className="y" width={28} height={28} />,
    notification: 9,
  },
  {
    link: "/gaming",
    icon: <Geming className="y" width={28} height={28} />,
    notification: 0,
  },
];
const bottomMenus = [
  { link: "/facebook", icon: <Grid className="mx-auto" width={20} height={20} /> },
  { link: "/facebook", icon:  <i className="fab fa-facebook-messenger icon mx-auto"></i> },
  { link: "/facebook", icon: <i className="fas fa-bell icon mx-auto"></i> },
  {
    link: "/facebook",
    icon: (
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLRgAQRfHqh4ZNJ-nMiG916vPpWrdxQZaKs2yOzllA=s900-c-k-c0x00ffffff-no-rj"
        className="w-full h-full rounded-full"
        alt="dp"
      />
    ),
  },
];

const instagramMenus = [
  { link: "/", icon: <Home className="mx-auto" width={24} height={24} /> },
  { link: "/", icon: <Messenger className="mx-auto" width={24} height={24} /> },
  { link: "/", icon: <Plus className="mx-auto" width={24} height={24} /> },
  { link: "/", icon: <Find className="mx-auto" width={24} height={24} /> },
  { link: "/", icon: <Love className="mx-auto" width={24} height={24} /> },

]

export { topMenus, bottomMenus, instagramMenus };
