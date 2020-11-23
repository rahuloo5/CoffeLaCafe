import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Background from '../components/Global/Background'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Products from '../components/Products'
import Contact from '../components/Contact'




const IndexPage = ({data}) => (
  <Layout>
   
    <SEO title="Home" />
    <Background img={data.imgg.childImageSharp.fluid}
    
    classStyle="Coffe-Back"/>
    <Home/>
    <Menu items = {data.menu}/>
    <Products/>
    <Contact/>
    
</Layout>
)


export const query = graphql`{
 imgg: file(relativePath: {eq:"coffeback.jpg"})
  {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  menu:allContentfulCoffeItems{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        images{
          description
          fixed(width:50 , height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
      
    }
  }
  
  
  }`
export default IndexPage
