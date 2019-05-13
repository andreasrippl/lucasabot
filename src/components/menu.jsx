import React from "react"
import { StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  color: black;
  margin-top: 2.5rem;
  ul{
    list-style: none;
		display: flex;
		flex-direction: column;
		margin: 0;
		font-size: 0.8rem;
  }
  ul li a{
    margin: 0;
    padding:0.5rem 1rem ;
  }
`
const Menu = () => (
    <StaticQuery
        query={graphql`
      query MenuQuery {
         allPrismicProjects {
	  edges {
	    node {
	      id
        uid
        data{
          title {
            text
          }
        }
	    }
	  }
	}
      }
    `} render={data => (
            <StyledNav>
                <ul>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                    {data.allPrismicProjects.edges.map(project => (
                        <li key={project.node.id}>                            
                            <Link to={project.node.uid}>
                                {project.node.data.title.text}                            
                            </Link>
                        </li> 
                    ))} 
                </ul>
            </StyledNav>
        )}
    />
)


export default Menu
