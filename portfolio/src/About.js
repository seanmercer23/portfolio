import React from 'react'
import Skills from './Skills'
import Portrait from './Assets/Portrait.png'

function About () {
    return (
        <div className="about" id="about">
            <img className="portrait" src={Portrait}></img>
            <p className="bio">
                I am a detail-driven, energetic Software Engineer 
                who leverages my five-years of experience in video production
                to develop effective solutions that exceed client’s needs 
                in time-sensitive situations. </p>
                
                <p> As a developer, I take a solutions-driven approach 
                believing that any problem can be solved by breaking down 
                issues into smaller, manageable components. </p>
                
                <p> I crave opportunities to be part of a team that encourages 
                its members to learn from one-another 
                and grow both professionally and personally.</p>

                <Skills />
        </div>
    )
}

export default About