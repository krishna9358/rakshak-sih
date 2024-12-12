import { IconCash, IconClockRecord, IconMoneybag } from "@tabler/icons-react";
import {
  Key,
  DollarSign,
  Box,
  Clipboard,
  Home,
  Table2Icon,
  BaggageClaim,
  WrenchIcon,
  ShoppingCart,
  BarcodeIcon,
} from "lucide-react";

// Menu items.
export const items = {
  user: {
    name: "Krishna Mohan",
    email: "krishanmohank974@gmail.com",
    avatar: "/profile.jpeg",
  },
  titles: {
    department: "Department",
    stations: "Stations",
    admin: "Admin",
    gps: "GP  Store",
  },
  department: [
    {
      title: "Create ID",
      url: "#",
      icon: Key,
    },
    {
      title: "Budget Predictions",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "Self Inventory",
      url: "#",
      icon: Box,
    },
    {
      title: "GPS's Record",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "Budget Allocation",
      url: "#",
      icon: IconMoneybag,
    },
  ],
  stations: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Resource Records",
      url: "#",
      icon: Box,
    },
    {
      title: "Repair & Replacement",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "Resource Requests",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "Inter-Station Records",
      url: "#",
      icon: IconClockRecord,
    },
  ],
  admin: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Credentials Generation",
      url: "#",
      icon: Key,
    },
    {
      title: "Tickets",
      url: "#",
      icon: Clipboard,
    },
  ],
  gps: [
    {
      title: "Add Items",
      url: "#",
      icon: BarcodeIcon,
    },
    {
      title: "Budget Prediction",
      url: "#",
      icon: IconCash,
    },
    {
      title: "Station Record",
      url: "#",
      icon: Table2Icon,
    },
    {
      title: "Item Distribution",
      url: "#",
      icon: BaggageClaim,
    },
    {
      title: "Repair & Replacement",
      url: "#",
      icon: WrenchIcon,
    },
    {
      title: "Self Inventory",
      url: "#",
      icon: Box,
    },
    {
      title: "Purchase List",
      url: "#",
      icon: ShoppingCart,
    },
  ],
};
