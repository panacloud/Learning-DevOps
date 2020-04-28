import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulCourse: { nodes: quarter },
  } = data
  return (
    <Layout>
      <section>
        <pre>{JSON.stringify(quarter, null, 4)}</pre>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulCourse {
      nodes {
        title
        quarter
        courseNumber
        description {
          description
        }
        textBooks {
          title
          authors
          url
        }
        certification {
          title
          offeringCompany
          url
        }
      }
    }
  }
`

export default ComponentName
