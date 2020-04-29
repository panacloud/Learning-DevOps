import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulTextBook: { nodes: textBook },
  } = data
  return (
    <Layout>
      <section>
        <pre>{JSON.stringify(textBook, null, 4)}</pre>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulTextBook {
      nodes {
        url
        title
        authors
      }
    }
  }
`
export default ComponentName
