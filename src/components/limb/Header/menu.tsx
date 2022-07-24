import { Grid, HomeIcon, Geming, Group, Store, Watch } from "../../../icon";
const topMenus = [
  {
    link: "/",
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
  { link: "/", icon: <Grid className="mx-auto" width={20} height={20} /> },
  { link: "/", icon:  <i className="fab fa-facebook-messenger icon mx-auto"></i> },
  { link: "/", icon: <i className="fas fa-bell icon mx-auto"></i> },
  {
    link: "/profile",
    icon: (
      <img
        src="https://picsum.photos/200"
        className="w-full h-full rounded-full"
        alt="dp"
      />
    ),
  },
];

export { topMenus, bottomMenus };
