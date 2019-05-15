import React from 'react'
import css from './Assets/icons/css.png'
import express from './Assets/icons/express.png'
import Git from './Assets/icons/Git.png'
import GitHub from './Assets/icons/GitHub.png'
import html5 from './Assets/icons/HTML.png'
import JS from './Assets/icons/javascript.png'
import json from './Assets/icons/JSON.png'
import njs from './Assets/icons/nodejs.png'
import pg from './Assets/icons/Postgresql.png'
import rails from './Assets/icons/Rails.png'
import rjs from './Assets/icons/React.png'
import ruby from './Assets/icons/Ruby.png'

function Skills () {
    return (
        <div className="skills">
            <h3>{`Skills & Languages`}</h3>
        <div className="icons">
            <img className="icon row1 column1" src={html5} alt="HTML icon" />
            <img className="icon row1 column2" src={css} alt="CSS icon" />
            <img className="icon row1 column3" src={JS} alt="JS icon" />
            <img className="icon row1 column4" src={rjs} alt="React icon" />
            <img className="icon row2 column1" src={express} alt="Express icon" />
            <img className="icon row2 column2" src={pg} alt="PostgreSQL icon" />
            <img className="icon row2 column3" src={njs} alt="NodeJS icon" />
            <img className="icon row2 column4" src={json} alt="JSON icon" />
            <img className="icon row3 column1" src={ruby} alt="Ruby icon" />
            <img className="icon row3 column2" src={rails} alt="Rails icon" />
            <img className="icon row3 column3" src={Git} alt="Git icon" />
            <img className="icon row3 column4" src={GitHub} alt="GitHub icon" />
        </div>
        </div>
    )
}

export default Skills