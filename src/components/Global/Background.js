import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './Background.css'

const  Background =({img , title ,classStyle})=> {
    return (
        <>
        <BackgroundImage
      Tag="section"
      className={classStyle}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      <h2 style={{fontSize:"25", color:"white" , textAlign:"center" , paddingTop:"550px"}}>{title}</h2>
      
    </BackgroundImage>
    </>
    )
}

export default Background
