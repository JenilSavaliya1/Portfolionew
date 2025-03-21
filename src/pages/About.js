import React, { useState } from 'react';

function About() {
    const skills = ["Python", "Java", "DAX", "SQL", "HTML", "CSS", "JavaScript", "React", "React Native", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Microsoft Power BI", "Tableau"];
    const[search, setSearch] = useState('');
    const[filter, setFilter] = useState();
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
        if (value === '') {
            setFilter();
        } else {
            const filtered = skills.filter(skill => skill.toLowerCase().includes(value.toLowerCase()));
            setFilter(filtered);
        }
    };
    return (
        <div className="container">
            <h1>About</h1>
            <p>My name is Jenil and i am a 4th year Applied Computer Science student currently studying in Dalhousie university. My passion lies in working with Data and insights to covert it into a meaningful inofrmation to work with
                and make decisions. I have also completed my certification in Microsoft Power Bi for businness analytics and data visualization. My skills include Python, Java, DAX , SQL, HTML, CSS, JavaScript, React, React Native, Node.js, Express.js, MongoDB, Git, GitHub, Microsoft Power Bi, Tableau, and many more.
                I have also completed my first coop term as a junior Node.js developer where i learned and worked with experienced people of this industry and also had a chance to have Hands-on experience in working with Node.js and do a project on that.
                Even when my passion lies somewhere else i believe in grabbing all the opportunities coming my way since that will just help me improve and develop new skills in this competitive world.
            </p>
            <input className='my-5 pt-5 p-2 align' type="text" value={search} onChange={handleSearch} placeholder="Search skills using keywords..." />
            <ul>
                {filter ? filter.map(skill => (
                    <li style={{ fontSize: '18px', margin: '10px auto', display: 'block' }} key={skill}>{skill}</li>
                )) : null}
            </ul>
        
        </div>
    );
}
export default About;