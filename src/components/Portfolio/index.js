import React from 'react'

function Portfolio() {

    const projects = [
        {
            id: 'id2',
            title: 'Personal Pervious work website',
            github: 'https://github.com/HandsomeDingor/homework2',
            live: 'https://handsomedingor.github.io/homework2/',
            text: 'Potential employee’s previous work',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id2.png'
        },
        {
            id: 'id4',
            title: 'Quiz App',
            github: 'https://github.com/HandsomeDingor/homework4',
            live: 'https://handsomedingor.github.io/homework4/',
            text: 'I WANT to take a timed quiz on JavaScript fundamentals that stores high scores. SO THAT I can gauge my progress compared to my peers',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id4.png'
        },
        {
            id: 'id6',
            title: 'Weather App ',
            github: 'https://github.com/HandsomeDingor/Weather-Dashboard-HW6',
            live: 'https://handsomedingor.github.io/Weather-Dashboard-HW6/',
            text: 'Weather app that provides current and future weather forecasts in cities',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id6.png'
        },
        {
            id: 'id7',
            title: 'The-Food-Conch',
            github: 'https://github.com/HandsomeDingor/Group7Project',
            live: 'https://alessandrob96.github.io/The-Food-Conch',
            text: 'A collaborative front-end application utilizing a CSS framework, 2 server-side APIs, and  local storage. Whether you are indecisive on what recipe to cook at home or what restaurant to eat  at, the Food Conch will help!',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id7.png'
        },    
        {
            id: 'id14',
            title: 'Tech Blog ',
            github: 'https://github.com/HandsomeDingor/Tech-Blog-HW14',
            live: 'https://floating-bayou-84682.herokuapp.com/',
            text: 'To build a CMS-style blog site like a WordPress site, where developers can publish  their blog posts and comment on other developers’ posts as well. ',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id14.png'
        },    
        {
            id: 'id16',
            title: 'Restaurant Rater',
            github: 'https://github.com/HandsomeDingor/restaurant-rater',
            live: 'https://hidden-anchorage-87241.herokuapp.com/',
            text: 'The Restaurant Rater is an application designed for users to publish reviews and  ratings of their favorite (and least favorite) places to eat. In the app, users can search restaurants by  User ID, rating, cuisine, and price point.',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id16.png'
        },       
        {
            id: 'id24',
            title: 'Your coffee tracker',
            github: 'https://github.com/HandsomeDingor/your-coffee-tracker',
            live: 'https://yakattak-coffee1.herokuapp.com',
            text: 'AS A coffee lover looking for a coffee tracker app. I WANT to manage  my coffee history. SO THAT I can keep tracking my coffee history',
            image:'https://raw.githubusercontent.com/HandsomeDingor/React-Portfolio-20/main/src/assets/img/id24.png'
        }
    ]


    return (
        <section >
            <div className='d-flex justify-content-center p-4'>
                <h1>Project</h1>
            </div>
            <div className='row p-5'>
                {projects.map((e) => (
                    <div className='col-sm-6 p-5'>
                        <div className='border border-dark p-2'>
                            <div className={e.id}>
                            <img className="card-img-top" src={e.image} alt={e.id} />
                                <h5 className="card-header">{e.title}</h5>
                                <p className='card-text'>{e.text}</p>
                                <a href={e.github} className='btn btn-primary' target="_blank" rel="noreferrer">Github</a>
                                <a href={e.live} className='btn btn-primary' target="_blank" rel="noreferrer">Live</a>                   
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Portfolio