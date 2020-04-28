import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulTrack: { nodes: track },
  } = data
  return (
    <Layout>
      <section>
        <pre>{JSON.stringify(track, null, 4)}</pre>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulTrack {
      nodes {
        title
        description {
          description
        }
        courses {
          title
          certification {
            url
            title
          }
        }
        objective {
          objective
        }
        certifications {
          title
        }
      }
    }
  }
`

export default ComponentName
