import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom'

const ProjectList = (props) => {
    const {projects} = props;
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                console.log(project);
                
                return (
                        <Link key={project.id} to={`/project/${project.id}`}>
                            <ProjectSummary project={project}  />
                        </Link>
                )
            })}
        </div>
    );
};

export default ProjectList;