import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Background from '../components/Global/Background'
import Home from '../components/Home'
import Profile from '../images/golu.jpg';

import coffecup from '../images/coffee-cup.png'




const About = ({data}) => (
  <Layout>
   
    <SEO title="Home" />
    <Background img={data.imgg.childImageSharp.fluid}
    title="About Us"
    classStyle="coffe-about"/>
    <div  style={{display:"flex"}}>
      <img src ={Profile} alt ="profile"></img>
     <span style={{marginLeft:"15px"}}>
      <p style={{fontFamily:"Comic Sans MS", fontStretch:"expanded",fontWeight:"bolder", fontSize:"25px" ,fontStyle:'italic' , textAlign:'center'}}>
      The Coffe la Cafe  is about the “stories” that define people’s lives and value system, often shared
       over a cup of coffee. The audience for our Cafe is anyone who has a treasured memory from their past be 
       it; moms and daughters, friends, casual acquaintances or just a moment alone in a beautiful setting where 
       they share over a cup of anything, usually coffee! The Cafe will cover special one on one moments,
        coffee history, coffee health benefits, recipes, great coffee houses of the world, coffee movie moments
         and stories of how the coffee phenomena permeates all of our lives in some way.
         </p>
         <br/>
         <br/>
      <p  style={{fontFamily:"Comic Sans MS", fontStretch:"expanded",fontWeight:"bolder", fontSize:"25px" , textJustify:'center', fontStyle:'oblique'}}>
       I have spent most of my career in high tech and working at Wipro mainly in New Delhi. I always enjoyed investing in various
        startups and have founded several startups on our own. 
       I always had the dream to have a coffee Caffe and that has become our latest venture.
        My first date with my girlfriend happened at coffe shop , where she  introduce me to
         delicious espresso coffee .
        I still remember those moments that we shared with wonderful coffee aromas in the cafe.
        
      </p>
      </span>

      <img src ={coffecup} alt="coffe cup" style={{height:"400px" , marginTop:"370px", marginLeft:'10px', paddingLeft:"10px"}}/>

    </div>
  
    
</Layout>
)


export const query = graphql`{
 imgg: file(relativePath: {eq:"about.jpg"})
  {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }}`
export default About
