import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className='card-content'>
                <span className="card-title">Project Title {id}</span>
                <p>orem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab volupt</p>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: a Real Nigga</div>
                    <div>September 19, 2am</div>
                </div>

            </div>
        </div>
        </div>

    )
}

export default ProjectDetails