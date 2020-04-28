import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  // Destructuring to get the data from franchisee node
  const {
    allContentfulFranchisee: { nodes: franchisee },
  } = data
  return (
    <section>
      {franchisee.map(data => {
        return (
          <article key={data.id}>
            <h1>{data.companyName}</h1>
          </article>
        )
      })}
    </section>
  )
}

export const query = graphql`
  {
    allContentfulFranchisee {
      nodes {
        companyName
        id
      }
    }
  }
`

export default ComponentName
