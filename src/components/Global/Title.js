import React from 'react'

export default function Title({title}) {
    return (
        <h1 style={{textTransform:"capitalize" ,color:"red" , fontStyle:"oblique"}}>
            {title}
        </h1>
    )
}
