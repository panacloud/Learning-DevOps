import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/styles/withStyles";
import useCompanyName from "../hooks/useCompanyNameData";


const styles = (theme) => ({
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
  },
  footer: {
    marginBottom: theme.spacing(3),
    whiteSpace: "nowrap",
  },
});


const Footer = withStyles(styles)((props) => {
  const companyName = useCompanyName();
  //console.log("NNNNNNNNNNNNNN " + companyName);
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone },
        },
      },
    },
  } = props;
  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <span>
          <Typography component="span" variant="caption">
             {"Franchisee of Zenoit"}
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
          </Typography>
        </span>
      </footer>
    </>
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
