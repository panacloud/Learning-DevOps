import withRoot from "../../utils/withRoot"
import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/SEO"
import Page from "../../components/Page"
//import List from "../../components/List";
import ListOfPrograms from "../../components/ListOfPrograms"
import useCoursesData from "../../hooks/useCoursesData"
import { Link } from "gatsby"

const Programs = props => {
  const programsAvailable = useCoursesData()
  let courses = []

  programsAvailable.map((p, index) => {
    courses = courses.concat(p.technicalTrack.courses)
    if (index == programsAvailable.length - 1) {
      courses = courses.concat(p.appDevelopmentTrack.courses)
      courses = courses.concat(p.innovationTrack.courses)
    }
  })

  //console.log("Programs: " + JSON.stringify(programsAvailable));
  return (
    <Page title="Course Catalog">
      {/* <SEO title="Course Catalog" /> */}
      {courses.map((c, index) => {
        return (
          <div>
            <Link to={"/programs/tracks/courses/" + c.courseNumber}>
              {c.courseNumber + " " + c.title}
            </Link>

            <div
              dangerouslySetInnerHTML={{
                __html: c.description.childMarkdownRemark.html,
              }}
            ></div>
            <br />
            <br />
          </div>
        )
      })}
    </Page>
  )
}

export default withRoot(Programs)
