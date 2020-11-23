import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content">
                    <h2>
                        All Rights Reserved &copy; {new Date().getFullYear()}
                    </h2>
                    <h3>
                        created By :- Rahul Singh Tomar
                    </h3>

                </div>
            </div>
            
        </footer>
    )
}
