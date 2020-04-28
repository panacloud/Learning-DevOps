import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulProgramCatalog: { nodes: courseCatalog },
  } = data
  return (
    <Layout>
      <section>
        <pre>{JSON.stringify(courseCatalog, null, 4)}</pre>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProgramCatalog {
      nodes {
        title
        description {
          description
        }
        programsAvailable {
          title
          technicalTrack {
            title
          }
          shortDescription {
            shortDescription
          }
          longDescription {
            longDescription
          }
        }
      }
    }
  }
`

export default ComponentName
