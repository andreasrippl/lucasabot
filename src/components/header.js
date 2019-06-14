import { StaticQuery, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Menu from "./menu"
const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1rem;
  color: black;
  a {
    color: black;
    text-decoration: none;
  }
  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`
const StyledHeader = styled.header`
  z-index: 10
  border-bottom: 1px solid black;
  @media only screen and (max-width: 700px) {
    position: fixed;
    background: #fff;
  }
`
const Header = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        prismicHomepage {
          id
          data {
            title {
              text
            }
          }
        }
      }
    `}
    render={data => (
      <StyledHeader>
        <Heading>
          <Link to="/">{data.prismicHomepage.data.title.text}</Link>
        </Heading>
        <Menu />
      </StyledHeader>
    )}
  />
)

export default Header
