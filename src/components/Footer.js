import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = (theme) => ({
  footer: {
    marginTop: "50px",
    height: "60px",
  },
});

const Footer = withStyles(styles)((props) => {
  return (
    <div className={props.classes.footer}>
      <Divider />
      <footer id="footer">
        <span>
          <br />
          <Typography component="span" variant="caption">
            ©{new Date().getFullYear()} {"Panacloud LLC, USA "}
          </Typography>
          <br />
        </span>
      </footer>
    </div>
  );
});

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} />}
  />
);
