import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulProgram: { nodes: program },
  } = data
  return (
    <Layout>
      <section>
        <pre>{JSON.stringify(program, null, 4)}</pre>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProgram {
      nodes {
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
`

export default ComponentName
