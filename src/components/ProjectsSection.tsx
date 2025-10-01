import ProjectImg from '../assets/project-1-img.png'

export default function ProjectsSection() {
    return (
        <section className="content-container" id="projects">
            <h2>Projects</h2>
            <div className="project--item">
                <img src={ProjectImg} alt="Project image" />
                <div className="project--item--description">
                    <h3>SSSS Website v2</h3>
                    <p>The official website of the Software Systems Student Society (SSSS). Created alongside the SSSS website committee.</p>
                    <div className="project--item--actions">
                        <a href="#" className="btn">View Project</a>
                        <a href="#" className="btn secondary">View Site</a>
                    </div>
                </div>
            </div>
        </section>
    )
}