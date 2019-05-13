import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = ({ data: { prismicProjects } }) => {
    const { data } = prismicProjects
    return (
        <Layout>
            <React.Fragment>
                <SEO title={data.title.text} />
                <h1>{data.title.text}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.description.html }} />
            </React.Fragment>
        </Layout>
    )
}

export default Project

export const pageQuery = graphql`
query ProjectBySlug($uid: String!) {
  prismicProjects(uid: { eq: $uid }) {
      id
      uid
      data {
        title {
          text
        }
        thumbnail {
            alt
            url
        }
        description {
          html
        }
      }
    }
  }
  `