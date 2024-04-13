import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";


export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "Project 1",
        category: "Backend",
        link:'http://www.github.com'
    },
    {
        id: 2,
        image: Project2,
        title: "Project 2",
        category: "Frontend",
        link:'http://www.facebook.com',
        link1:'http://www.linkedin.com'


    },
    {
        id: 3,
        image: Project3,
        title: "Project 3",
        category: "FullStack",
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Backend",
    },
    {
        name: "Frontend",
    },
    {
        name: "FullStack",
    },
];