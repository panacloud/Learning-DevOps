import React from "react";
import { useStaticQuery, graphql } from "gatsby";

//https://www.gatsbyjs.org/docs/use-static-query/

const UseCoursesData = () => {
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
                    image {
                      file {
                        url
                      }
                    }
                    longDescription {
                      json
                    }
                    technicalTrack {
                      title
                      slug
                      objective {
                        childMarkdownRemark {
                          html
                        }
                      }
                      certifications {
                        title
                        url
                      }
                      description {
                        json
                      }
                      courses {
                        courseNumber
                        title
                        description {
                          childMarkdownRemark {
                            html
                          }
                        }
                        certification {
                          title
                          url
                        }
                        textBooks{
                          title
                          authors
                          url
                        }
                        referenceBooks{
                          title
                          authors
                          url
                        }
                        sections{
                          title
                          serialNumber
                          weeks
                          quiz{
                            title
                            week
                          }
                          lineItem{
                            title
                            shortDescription {
                              childMarkdownRemark {
                                html
                              }
                            }
                          }
                        }
                        quarter
                        track {
                          courses {
                            quarter
                          }
                        }
                      }
                    }
    
                    innovationTrack {
                      title
                      slug
                      objective {
                        childMarkdownRemark {
                          html
                        }
                      }
                      certifications {
                        title
                        url
                      }
                      description {
                        json
                      }
                      courses {
                        courseNumber
                        title
                        description {
                          childMarkdownRemark {
                            html
                          }
                        }
                        certification {
                          title
                          url
                        }
                        textBooks{
                          title
                          authors
                          url
                        }
                        referenceBooks{
                          title
                          authors
                          url
                        }
                        sections{
                          title
                          serialNumber
                          weeks
                          quiz{
                            title
                            week
                          }
                          lineItem{
                            title
                            shortDescription {
                              childMarkdownRemark {
                                html
                              }
                            }
                          }
                        }
                        quarter
                        track {
                          courses {
                            quarter
                          }
                        }
                      }
                    }
    
                    appDevelopmentTrack {
                      title
                      slug
                      objective {
                        childMarkdownRemark {
                          html
                        }
                      }
                      certifications {
                        title
                        url
                      }
                      description {
                        json
                      }
                      courses {
                        courseNumber
                        title
                        description {
                          childMarkdownRemark {
                            html
                          }
                        }
                        certification {
                          title
                          url
                        }
                        textBooks{
                          title
                          authors
                          url
                        }
                        referenceBooks{
                          title
                          authors
                          url
                        }
                        sections{
                          title
                          serialNumber
                          weeks
                          quiz{
                            title
                            week
                          }
                          lineItem{
                            title
                            shortDescription {
                              childMarkdownRemark {
                                html
                              }
                            }
                          }
                        }
                        quarter
                        track {
                          courses {
                            quarter
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    
  `);
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node.courseCatalog
    .programsAvailable;
};

export default UseCoursesData;
