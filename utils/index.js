
import {
  MdHome,
  MdOutlineShoppingCart,
  MdTask,
  MdViewKanban,
  MdStackBarChart,  
} from "react-icons/md";

export const routes = [
  {
    name: "Dashboard",
    layout: "/dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Reports",
    layout: "/reports",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  },
  {
    name: "Tasks",
    layout: "/reports",
    icon: <MdTask className="h-6 w-6" />,
  },
  {
    name: "Kanban",
    layout: "/kanban",
    icon: <MdViewKanban className="h-6 w-6" />,
  },
  {
    name: "Charts",
    layout: "/charts",
    icon: <MdStackBarChart className="h-6 w-6" />,
  },
];
