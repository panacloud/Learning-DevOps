import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//https://www.gatsbyjs.org/docs/use-static-query/

const UseCompanyNameData = () => {
  const data = useStaticQuery(graphql`
    {
        allContentfulFranchisee {
            edges {
              node {
                companyName
              }
            }
          }
    }
  `)
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node.companyName;
}

export default UseCompanyNameData;