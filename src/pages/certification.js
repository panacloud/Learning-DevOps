import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const ComponentName = ({ data }) => {
  const {
    allContentfulCertification: { nodes: certification },
  } = data
  return (
    <Layout>
      <section>
        {certification.map(product => {
          return (
            <article key={product.id}>
              <h3>
                {product.title} <span>{product.offeringCompany}</span>
              </h3>
              {/* <Link to={`/products/${product}`}>more details</Link> */}
            </article>
          )
        })}
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulCertification {
      nodes {
        title
        id
        offeringCompany
        url
      }
    }
  }
`

export default ComponentName
