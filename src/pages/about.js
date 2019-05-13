import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {
        const {
            data: { about },
        } = this.props
        return (
            <Layout>
                <SEO title="Page two" />
                <h1>About Me</h1>
                <div dangerouslySetInnerHTML={{ __html: about.data.content.html }} />
            </Layout>
        )
    }
}

export default About

export const pageQuery = graphql`
query About2Query {
  about: prismicAbout {
		id
		data {
		  content {
			  html
      }
    }
  }
}`
