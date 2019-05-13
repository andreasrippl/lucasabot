import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
    render() {
        const {
            data: { homepage, projects },
        } = this.props
        return(
            <Layout>
                <SEO title="Luca Sabot" keywords={["Luca Sabot", "Artist", "Machines"]} />
                <div>
                    {projects.edges.map(project => (
                        <div key={project.node.id}>
                            <Link to={project.node.uid}>
                                <img src={project.node.data.thumbnail.url} />
                            </Link>
                        </div>
                    ))}
                </div>
            </Layout>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  homepage: prismicHomepage {
		id
		data {
		  title {
			  text
		  }
		  description {
			  text
      }
    }
  }
  projects: allPrismicProjects {
    edges {
      node {
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

      }
    }
  }
}}
`