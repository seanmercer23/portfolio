import React from 'react'
import blackjack from './Assets/Screens/Blackjack.png'
import gifapalooza from './Assets/Screens/Gifapalooza.png'
import iterator from './Assets/Screens/Iterator.png'
import surf from './Assets/Screens/ChannelSurfin.png'

function Projects () {
    return (
        <div className="projects" id="projects">
            <div className="row2 column2">
                <a className="p-link" href="https://seanmercer23.github.io/blackjack/">
                    <img className="screen" src={blackjack} alt="blackjack"/>
                </a>
                <p className="bj">
                    This project is a single player Blackjack game built in
                    vanilla JavaScript with HTML and CSS, it 
                    includes DOM fired animations and sounds
                </p>
            </div>
            <div className="row2 column1">
                <a className="p-link" href="https://sm-gifapalooz.herokuapp.com">
                    <img className="screen" src={gifapalooza} alt="gifapalooza"/>
                </a>
                <p className="gp">
                    Gifapolooza is a gif app built in React leveraging the Tenor Gif API 
                    to allow users to search gifs by term or spin a wheel customly 
                    created in CSS for a random gif
                </p>
            </div>
            <div className="row1 column2">
                <a className="p-link" href="https://iterator.surge.sh/">
                    <img className="screen" src={iterator} alt="iterator"/>
                </a>
                <p className="it">
                    Iterator is a full stack app with a back end server and database 
                    built in Express with Sequelize and a front end built in React. 
                    It is a coding ideas and solutions platform focused on letting 
                    developers share ideas and solutions in order to tackle the 
                    most difficult challenges faced in today's world.
                </p>
            </div>
            <div className="row1 column1">
                <a className="p-link" href="https://channel-surfin-usa.surge.sh/">
                    <img className="screen" src={surf} alt="channel surfin"/>
                </a>
                <p className="cs">
                    Channel Surfin USA is a full stack app built with a React 
                    front end and a Rails back end with a Postgres database. 
                    The purpose of this app is to recapture the nostalgic value of 
                    flipping through channels to see what's on and maybe being surprised 
                    by what you find. The hope is that ultimately this app will 
                    be able to bring some nostalgic value to users with a 
                    new age spin.
                </p>
            </div>
        </div>
    )
}

export default Projects