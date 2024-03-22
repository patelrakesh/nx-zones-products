import React from "react";
import { NavLink } from "./types/interfaces";

const page = () => {
  const links: NavLink[] = [
    { text: "Exercise 1", route: "exercise1", color: "blue" },
    { text: "Exercise 2", route: "exercise2", color: "red" },
    { text: "Exercise 3", route: "exercise3", color: "lime" },
    { text: "Exercise 4", route: "exercise4", color: "fuchsia" },
  ];
  return (
    <>
      <div className="flex align-middle justify-center p-10">
        <p className="text-3xl">Exercises</p>
      </div>
      <div className="flex align-middle justify-center">
        <ul>
          {links.map((link, i) => (
            <li className="my-4 ex_links" key={i}>
              <a
                style={{ textDecoration: "underline" }}
                className={`text-${link.color}-500`}
                href={`/productlist/${link.route}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default page;
