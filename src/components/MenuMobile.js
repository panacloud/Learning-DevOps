import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import IconButton from "@material-ui/core/IconButton";
import { DotsVertical } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";
import { MenuItem, Menu } from "@material-ui/core";
import "../css/menu.css";

const styles = {
  dotsVerticalIcon: {
    color: "#706aaf",
  },
  menuItem: {
    color: "black !important",
  },
};

class MenuMobile extends React.Component {
  url = typeof window !== "undefined" ? window.location.pathname : "";

  state = {
    anchorEl: null,
  };

  handleOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      classes,
      data: {
        site: {
          siteMetadata: { menuLinks },
        },
      },
    } = this.props;

    return (
      <React.Fragment>
        <IconButton onClick={this.handleOpen}>
          <DotsVertical
            className={this.url === "/" ? "dotHome" : "dotsVerticalIcon"}
          />
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={this.handleClose}
          open={Boolean(this.state.anchorEl)}
        >
          {menuLinks.map((link) => (
            <Link key={link.name} to={link.link}>
              <MenuItem className="linkBtnsHomeMobile">{link.name}</MenuItem>
            </Link>
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

const StyledMenuMobile = withStyles(styles)(MenuMobile);

export default (props) => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={(data) => <StyledMenuMobile active={props.active} data={data} />}
  />
);
