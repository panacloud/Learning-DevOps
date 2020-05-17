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
            <Link to="/"><img src="https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white" alt="Smiley face" height="43.2" width="72"/></Link>
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
