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
        src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/283309026_1347374212422320_1321803210194100279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG2qdwfBfvtnhj2EbqGgF96qhBVm7rqFEaqEFWbuuoURkiqwzapcCdCa2hYUCqm_a7JbXQbyTMuQfg44hrZ8R6X&_nc_ohc=jpIsOqjdyTgAX_OCpNh&_nc_ht=scontent.fdac24-2.fna&oh=00_AT8_FzNf-8ExapHfAmy9XAXuNtksqGYN02jcgWrm1dcpng&oe=62E2C2BA"
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
