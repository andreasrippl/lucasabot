import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  color: black;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Project = styled.div`
  margin-bottom: 2rem;
`
const StyledImg = styled(Img)``
class IndexPage extends React.Component {
  render() {
    const {
      data: { homepage, projects },
    } = this.props
    return (
      <Layout>
        <SEO
          title="Luca Sabot"
          keywords={["Luca Sabot", "Artist", "Machines"]}
        />
        <Container>
          {projects.edges.map(project => (
            <Project key={project.node.id}>
              <Link to={project.node.uid}>
                <Heading>{project.node.data.title.text}</Heading>
                <StyledImg
                  fluid={
                    project.node.data.thumbnail.localFile.childImageSharp.fluid
                  }
                  objectFit="contain"
                />
              </Link>
            </Project>
          ))}
        </Container>
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
