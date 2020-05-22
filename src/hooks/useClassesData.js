import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//https://www.gatsbyjs.org/docs/use-static-query/

const UseClassesData = () => {
  const data = useStaticQuery(graphql`
    {
        allContentfulFranchisee {
            edges {
              node {
                classes {
                  courseNumber
                  classNumber
                  quarterCredits
                  startDate
                  endDate
                  admissionsOpen
                  quarterCredits
                  childrenContentfulClassDaysJsonNode {
                    content
                  }
                  childContentfulClassStartTimeJsonNode {
                    h
                    m
                  }
                  childContentfulClassEndTimeJsonNode {
                    h
                    m
                  }
                  course {
                    courseNumber
                    title
                    description {
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                  instructors {
                    name
                    slug
                  
                  }
                  
                  
                }
              }
            }
          }
    }
  `)
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node.classes;
}

export default UseClassesData;