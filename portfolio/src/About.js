import React from 'react'
import Skills from './Skills'
import Portrait from './Assets/Portrait.png'
import GitHub from './Assets/icons/GitHub.png'
import LinkedIn from './Assets/icons/LinkedIn.png'

function About () {
    return (
        <div className="about" id="about">
            <h3>About Me</h3>
            <img alt="headshot" className="portrait" src={Portrait}></img>
            <div className="iconContainer">
                <a href="https://github.com/seanmercer23">
                    <img alt="github" className="icon github" src={GitHub} />
                </a>
                &nbsp;
               <a href="https://www.linkedin.com/in/sean-mercer/">
                <img alt="linkedin" className="icon linkedin" src={LinkedIn} />
               </a>
            </div>
            <p className="bio">
                I am a detail-driven, energetic Software Engineer 
                who leverages my five-years of experience in video production
                to develop effective solutions that exceed clients' needs 
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