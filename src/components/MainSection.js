import React from "react"
import { Typography } from "@material-ui/core"

// import Header from "./Header";
import "../css/home.css"

const MainSection = ({ title }) => {
  const scroll = () => {
    if (typeof window !== "undefined") {
      window.scrollBy(0, window.innerHeight)
    }
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
      <img
        src={require("../assets/global.jpeg")}
        className="background"
        alt="title"
      />

      <Typography
        variant="h4"
        className="title"
        data-aos="fade-down"
        data-aos-delay="1000"
      >
        {title}
        <div className="subTitle">
          <p>Find out more</p>
          <img onClick={scroll} src={require("../assets/chevron.jpeg")} />
        </div>
      </Typography>
    </React.Fragment>
  )
}

export default MainSection
