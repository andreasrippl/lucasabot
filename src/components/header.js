import { StaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
            <header
                style={{
                    marginBottom: "1.45rem",
                }}
            >
                <div
                    style={{
                        margin: "0 auto",
                        maxWidth: 960,
                        padding: "1.45rem 1.0875rem",
                    }}
                >
                    <h1 style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: "black",
                                textDecoration: "none",
                            }}
                        >
                            {data.prismicHomepage.data.title.text}                        
                        </Link>
                    </h1>
                </div>
            </header>
        )}
    />
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: "",
}

export default Header
