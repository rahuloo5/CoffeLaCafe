/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './bootstrap.min.css'
import Nav from '../components/Global/Nav'
import Footer from './Global/Footer'





const Layout = ({ children }) => {
  

  return (
    <>
     <Nav/>
    {children}
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
