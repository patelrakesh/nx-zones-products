import { NavLinkText, NavLink } from "../types/interfaces";

export const links: NavLinkText[] = [
    { text: "Static and dynamic rendering", route: "exercise1" },
    { text: "Caching and Revalidating", route: "exercise2" },
    { text: "Server component with streaming", route: "exercise3" },
    { text: "Tanstack Query", route: "exercise4" },
  ];

  export const LandingLinks: NavLink[] = [
    { text: "Exercise 1", route: "exercise1", color: "blue" },
    { text: "Exercise 2", route: "exercise2", color: "red" },
    { text: "Exercise 3", route: "exercise3", color: "lime" },
    { text: "Exercise 4", route: "exercise4", color: "fuchsia" },
  ];