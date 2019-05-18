import React from 'react'
import blackjack from './Assets/Screens/Blackjack.png'
import gifapalooza from './Assets/Screens/Gifapalooza.png'
import iterator from './Assets/Screens/Iterator.png'
import surf from './Assets/Screens/ChannelSurfin.png'
import GitHub from './Assets/icons/GitHub.png'

function Projects () {
    return (
    <div className="container" id="projects">
        <h3 className="projects-header">Recent Projects</h3>
        <div className="projects">
            <div className="row2 column2 m-row4">
                <a className="p-link" href="https://seanmercer23.github.io/blackjack/">
                    <img className="screen" src={blackjack} alt="blackjack"/>
                </a>
                <p className="bj">
                    This project is a single player Blackjack game built in
                    vanilla <strong>JavaScript</strong> with <strong>HTML</strong> and <strong>CSS</strong>, it 
                    includes <strong>DOM</strong> event fired animations and sounds.
                </p>
                <a className="r-link" href="https://github.com/seanmercer23/blackjack">
                    <img alt="github" src={GitHub} className="icon repo" />
                </a>
            </div>
            <div className="row2 column1 m-row3">
                <a className="p-link" href="https://sm-gifapalooz.herokuapp.com">
                    <img className="screen" src={gifapalooza} alt="gifapalooza"/>
                </a>
                <p className="gp">
                    Gifapolooza is a gif app built in <strong>React</strong> leveraging the <strong>Tenor Gif 
                    API</strong> to allow users to search gifs by term or spin a 
                    wheel customly created in <strong>CSS</strong> for a random gif.
                </p>
                <a className="r-link" href="https://github.com/seanmercer23/gifapalooza">
                    <img alt="github" src={GitHub} className="icon repo" />
                </a>
            </div>
            <div className="row1 column2 m-row2">
                <a className="p-link" href="https://iterator.surge.sh/">
                    <img className="screen" src={iterator} alt="iterator"/>
                </a>
                <p className="it">
                    Iterator is a <strong>full stack</strong> app with a back end server and database 
                    built in <strong>Express</strong> with <strong>Sequelize</strong>  
                    &nbsp;and a front end built in <strong>React</strong>. 
                    It is a coding ideas and solutions platform focused on letting 
                    developers share ideas and solutions in order to tackle the 
                    most difficult challenges faced in today's world.
                </p>
                <a className="r-link" href="https://github.com/seanmercer23/Iterator">
                    <img alt="github" src={GitHub} className="icon repo" />
                </a>
            </div>
            <div className="row1 column1 m-row1">
                <a className="p-link" href="https://channel-surfin-usa.surge.sh/">
                    <img className="screen" src={surf} alt="channel surfin"/>
                </a>
                <p className="cs">
                    Channel Surfin USA is a <strong>full stack</strong> app built with a&nbsp;
                    <strong>React</strong> front end and a <strong>Rails</strong> back end 
                    with a <strong>Postgres database</strong>. The aim of this app is to 
                    recapture the nostalgia of flipping through channels and maybe being surprised 
                    by what you find, but with a new age spin.
                </p>
                <a className="r-link" href="https://github.com/seanmercer23/ChannelSurfinUSA">
                    <img  alt="github"className="icon repo" src={GitHub}/>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Projects