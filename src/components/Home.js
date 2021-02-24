import React from 'react'
import Title from '../components/Global/Title'
import {Link} from 'gatsby'
import './Home.css'

export default function Home() {
    return (
        <div className="home_container">
            <h1 className="title">
                <Title title="Our Story"/>

            </h1>
            <p className="ourstory">
            The Coffee la Cafe is about the “stories” that define people’s lives and value system, often shared over a cup of coffee.. The vistors for our Cafe is anyone who wants to taste a coffe and share his/her stories with moms and daughters, friends, casual acquaintances or just a moment alone in a beautiful setting where they share over a cup of anything, usually coffee! The show will cover special one on one moments, coffee history, coffee health benefits, recipes, great coffee houses of the world, coffee movie moments and stories of how the coffee phenomena permeates all of our lives in some way.
            </p>
            <Link to = "/about">
                <button className="about_button">
                    About

                </button>
                </Link>

            
        </div>
    )
}
