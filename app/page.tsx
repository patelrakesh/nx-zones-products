import React from "react";
import { LandingLinks } from "./utils/constant";

const page = () => {
  return (
    <>
      <div className="flex align-middle justify-center p-10">
        <p className="text-3xl" data-testid="pageTitle">Exercises</p>
      </div>
      <div className="flex align-middle justify-center">
        <ul>
          {LandingLinks.map((link, i) => (
            <li className="my-4 ex_links" key={i}>
              <a
                style={{ textDecoration: "none" }}
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
