import React from "react"
import { StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  color: black;
  margin-top: 2.5rem;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 0.8rem;
  }
  ul li a {
    margin: 0;
    padding: 0.5rem 1rem;
  }
  label.hamburg {
    cursor: pointer;
    display: none;
    width: 50px;
    height: 50px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
  }

  input#hamburg {
    display: none;
  }
  .line {
    position: absolute;
    left: 10px;
    height: 4px;
    width: 30px;
    mix-blend-mode: difference;
    background: #000;
    border-radius: 2px;
    display: block;
    transition: 0.5s;
    transform-origin: center;
  }

  .line:nth-child(1) {
    top: 12px;
  }
  .line:nth-child(2) {
    top: 24px;
  }
  .line:nth-child(3) {
    top: 36px;
  }

  #hamburg:checked + .hamburg .line:nth-child(1) {
    transform: translateY(12px) rotate(-45deg);
  }

  #hamburg:checked + .hamburg .line:nth-child(2) {
    opacity: 0;
  }

  #hamburg:checked + .hamburg .line:nth-child(3) {
    transform: translateY(-12px) rotate(45deg);
  }
  @media only screen and (max-width: 800px) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    justify-content: flex-end;
    margin-top: -1rem;
    margin-bottom: 2rem;
    background: #fff;
    ul li a {
      padding: 0.5rem 0rem;
    }
    label.hamburg {
      display: block;
      position: fixed;
      top: 0.3rem;
      right: 0.3rem;
    }
    .not-displayed {
      flex-direction: column;
      display: none;
    }
    li {
      margin: 1rem;
      text-align: right;
    }
    .displayed {
      display: block;
    }
  }
`

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menu: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      menu: !this.state.menu,
    })
  }
  render() {
    const { data } = this.props
    return (
      <StyledNav>
        <div className="row">
          <input type="checkbox" id="hamburg" onClick={this.handleClick} />
          <label for="hamburg" className="hamburg">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </label>
        </div>
        <ul className={this.state.menu ? "displayed" : "not-displayed"}>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          {data.allPrismicProjects.edges.map(project => (
            <li key={project.node.id}>
              <Link to={project.node.uid}>{project.node.data.title.text}</Link>
            </li>
          ))}
        </ul>
      </StyledNav>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        allPrismicProjects {
          edges {
            node {
              id
              uid
              data {
                title {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props} />}
  />
)
