import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export const navs = [
  {
    id: 0,
    to: "/",
    label: "Thao Phung",
    icon: (<EmojiEmotionsIcon />)
  },
  {
    id: 1,
    to: "/education",
    label: "Education",
    icon: (<MenuBookIcon />)
  },
  {
    id: 2,
    to: "/experience",
    label: "Experience",
    icon: (<BusinessCenterIcon />)
  },
  {
    id: 3,
    to: "/projects",
    label: "Projects",
    icon: (<EmojiObjectsIcon />)
  }
]