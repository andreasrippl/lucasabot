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

const Content = styled.div`
  margin: 0 auto;
  max-Width: 960px;
  padding: 6.4rem 1rem 0 1rem;
`
const Main = styled.main`
  min-height: calc(100vh - 10rem);
`
const Footer = styled.footer`
display: flex;
justify-content: space-between;
padding-bottom: 1.5rem;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
            <Main>{children}</Main>
            <Footer>
                <div>© {new Date().getFullYear()}, Luca Sabot</div>
                <div>Website by <a href="https://www.gatsbyjs.org">Andreas Rippl</a></div>
            </Footer>
        </Content>
      </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
