import projects from '../assets/data/projects.json';

export const getProjectsNames = () => {
  let projectsNames = [];
  for (const project of projects) {
    projectsNames.push(project.name);
  }
  return projectsNames;
};