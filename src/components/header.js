import { StaticQuery, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Menu from "./menu"
const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1rem;
  color: black;
  a{
      color: black;
      text-decoration: none;

  }
`
const StyledHeader = styled.header`
  position: fixed;
`
const Header = () => (
    <StaticQuery
        query={graphql`
      query HeadingQuery {
         prismicHomepage {
			  id
        data{
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
                    <Link to="/">
                        {data.prismicHomepage.data.title.text}                        
                    </Link>
                </Heading>
                <Menu/>
            </StyledHeader>
        )}
    />
)

export default Header
