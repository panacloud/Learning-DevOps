import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import "../css/menu.css";

const Menu = (props) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const {
    data: {
      site: {
        siteMetadata: { menuLinks },
      },
    },
  } = props;
  return (
    <div>
      {menuLinks.map((link) => (
        <Link key={link.name} to={link.link}>
          <Button className={url === "/" ? "linkBtnsHome" : "linkBtns"}>
            {link.name}
          </Button>
        </Link>
      ))}
      <a
        href="https://github.com/bluepeter/gatsby-material-ui-business-starter"
        rel="noopener noreferrer"
        target="_blank"
      ></a>
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => <Menu data={data} />}
  />
);
