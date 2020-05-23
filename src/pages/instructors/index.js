import withRoot from "../../utils/withRoot"
import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/SEO"
import Page from "../../components/Page"
import useInstructorsData from "../../hooks/useInstructorsData"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Instructors = props => {
  const instructors = useInstructorsData()
  console.log(instructors)
  return (
    <Page title="Instructors">
      {/* <SEO title="Instructors" /> */}
      {instructors.map((ins, index) => {
        return (
          <div>
            <img
              src={ins.picture.file.url}
              alt="Profile Picture"
              width="75"
              height="75"
            ></img>
            <div>
              <Link to={"/instructors/" + ins.slug}>{ins.name}</Link>
            </div>
            <article>{documentToReactComponents(ins.description.json)}</article>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/0drwxwvVIx8"
            ></iframe>
            <br />
            <br />
          </div>
        )
      })}
    </Page>
  )
}

export default withRoot(Instructors)
