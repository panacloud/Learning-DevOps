import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulFranchisee: { nodes: franchisee },
  } = data
  return (
    <Layout>
      <section>
        <pre>{JSON.stringify(franchisee, null, 4)}</pre>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulFranchisee {
      nodes {
        companyName
        courseCatalog {
          title
        }
        mission {
          mission
        }
      }
    }
  }
`

export default ComponentName
