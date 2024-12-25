import Head from "next/head";   

export default function ARVR() {
    const projects = [
        {
            title: "Project 1",
            description: "Description for project 1",
            imageUrl: "/images/project1.jpg",
            link: "/projects/arvr/project1"
        },
        {
            title: "Project 2",
            description: "Description for project 2",
            imageUrl: "/images/project2.jpg",
            link: "/projects/arvr/project2"
        }
    ];

    return (
        <>
            <Head>
                <title>AR/VR Projects</title>
            </Head>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <a href={project.link}>
                            <img src={project.imageUrl} alt={project.title} />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}