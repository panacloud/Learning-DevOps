import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { MaterialUi } from "mdi-material-ui";
import useCompanyName from "../hooks/useCompanyNameData";

const Header = (props) => {
  const companyName = useCompanyName();
  //console.log("NNNNNNNNNNNNNN " + companyName);
  return (
    <div>
      <AppBar id="appBar">
        <Toolbar>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={8}
          >
            <Grid item>
              <Chip
                avatar={
                  <Avatar id="logoIcon">
                    <MaterialUi />
                  </Avatar>
                }
                id="logo"
                label={<Link to="/">{companyName}</Link>}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Hidden smDown>
                <Typography component="span" variant="caption">
                  <Menu />
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <MenuMobile />
              </Hidden>
            </Grid>
          </Grid>
          <Grid item />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
