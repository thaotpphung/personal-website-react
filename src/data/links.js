import SchoolIcon from '@material-ui/icons/School';
import RoomIcon from "@material-ui/icons/Room";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export const link1 = [
  {
    id: 1,
    href: "",
    icon: (<SchoolIcon/>),
    title: "Truman State University",
    content: "",
  },
  {
    id: 2,
    href: "mailto:thao.tp.phung@gmail.com",
    icon: (<RoomIcon/>),
    title: "",
    content: "Kirksville, MO",
  },
  {
    id: 3,
    href: "https://en.wikipedia.org/wiki/Hanoi",
    icon: (<FlightTakeoffIcon/>),
    title: "From:",
    content: "Hanoi, Vietnam",
  },
];

export const link2 = [
  {
    id: 1,
    href: "mailto:thao.tp.phung@gmail.com",
    icon: (<MailIcon/>),
    title: "",
    content: "thao.tp.phung@gmail.com",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/thaotpphung/",
    icon: (<LinkedInIcon />),
    title: "",
    content: "linkedin.com/in/thaotpphung",
  },
  {
    id: 3,
    href: "https://github.com/thaotpphung",
    icon: (<GitHubIcon/>),
    title: "",
    content: "github.com/thaotpphung",
  }
];
