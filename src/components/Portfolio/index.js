import React from 'react'

function Portfolio() {
    const projects = [
        {
            id: 'id1',
            title: 'title1',
        },
        {
            id: 'id2',
            title: 'title3',
        },
        {
            id: 'id3',
            title: 'title3',
        }
    ]


    return (
        <section >
            {projects.map((e) => (
                <card classname="">
                    <div className={e.project_number}>
                        <p className="">{e.title}</p>
                    </div>
                </card>
            ))}
        </section>
    )
}

export default Portfolio