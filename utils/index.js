import {
  MdHome,
  MdOutlineShoppingCart,
  MdStackedBarChart,
  MdTask,
  MdViewKanban,
} from "react-icons/md";

export const routes = [
  {
    name: "Dashboard",
    layout: "/dashboard",
    icon: <MdHome className="h-12 w-12" />,
  },
  {
    name: "Reports",
    layout: "/reports",
    icon: <MdOutlineShoppingCart className="h-12 w-12" />,
  },
  {
    name: "Tasks",
    layout: "/tasks",
    icon: <MdTask className="h-12 w-12" />,
  },
  {
    name: "Kanban",
    layout: "/kanban",
    icon: <MdViewKanban className="h-12 w-12" />,
  },
  {
    name: "Charts",
    layout: "/charts",
    icon: <MdStackedBarChart className="h-12 w-12" />,
  },
];
