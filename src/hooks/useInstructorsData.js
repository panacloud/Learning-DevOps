import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//https://www.gatsbyjs.org/docs/use-static-query/

const UseClassesData = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFranchisee {
        edges {
          node {
            instructors {
              name
              slug
              description {
                json
              }
              url
              youTubeVideo
              picture {
                file {
                  url
                }
              }
              
            }
          }
        }
      }
    }
  `)
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node.instructors;
}

export default UseClassesData;