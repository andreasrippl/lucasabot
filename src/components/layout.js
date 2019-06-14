/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Container = styled.div`
  display: flex;
`
const Content = styled.div`
  width: 70%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1rem 0 1rem;
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 6rem 1rem 0 1rem;
  }
`
const Main = styled.main`
  min-height: calc(100vh - 10rem);
`
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-bottom: ;
  padding: 0 1rem 1.5rem 1rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            <Main>{children}</Main>
          </Content>
        </Container>
        <Footer>
          <div>© {new Date().getFullYear()}, Luca Sabot</div>
          <div>
            Website by <a href="https://rippl.at">Andreas Rippl</a>
          </div>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
