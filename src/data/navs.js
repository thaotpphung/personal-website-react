import PersonIcon from "@material-ui/icons/Person";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export const navs = [
  {
    to: "/",
    label: "Thao Phung",
    icon: (<PersonIcon />)
  },
  {
    to: "/education",
    label: "Education",
    icon: (<MenuBookIcon />)
  },
  {
    to: "/experience",
    label: "Experience",
    icon: (<BusinessCenterIcon />)
  },
  {
    to: "/projects",
    label: "Projects",
    icon: (<EmojiObjectsIcon />)
  }
]