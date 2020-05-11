import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//https://www.gatsbyjs.org/docs/use-static-query/

const UseProgramsData = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFranchisee {
        edges {
          node {
            courseCatalog {
              programsAvailable {
                slug
                title
                shortDescription {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node.courseCatalog.programsAvailable;
}

export default UseProgramsData;


