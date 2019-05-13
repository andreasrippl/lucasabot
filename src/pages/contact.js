import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
    render() {
        const {
            data: { contact },
        } = this.props
        return (
            <Layout>
                <SEO title="Contact" />
                <h1>Contact</h1>
                <div dangerouslySetInnerHTML={{ __html: contact.data.content.html }} />
            </Layout>
        )
    }
}
export default Contact
export const pageQuery = graphql`
query ContactQuery {
  contact: prismicContact {
		id
		data {
		  content {
			  html
      }
    }
  }
}`