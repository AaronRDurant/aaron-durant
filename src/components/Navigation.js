import React from "react";
import { Link } from "gatsby";

import { slugify } from "../utilities/helpers";

const pages = [
  {
    label: "Home",
    url: "/",
    mobileOnly: true,
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Writing",
    url: "/writing",
  },
];

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="item name">
            <span
              role="img"
              aria-label="Hand making horns sign"
              className="emoji"
            >
              🤘🏻
            </span>
            <span>Aaron Durant</span>
          </Link>
          <nav>
            {pages.map((page) => (
              <div className="nav-item-outer" key={page.url}>
                <Link
                  to={page.url}
                  key={page.url}
                  activeClassName="active"
                  className={`item ${slugify(page.label)} ${
                    page.mobileOnly ? "mobile-only" : ""
                  }`}
                >
                  <span>{page.label}</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
