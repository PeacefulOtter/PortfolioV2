
import { FiGithub } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer';


import styles from './Projects.module.css'

interface IProject {
    repo: string;
    desc: string;
    tags: string[];
    links: string[];
}

const projects: IProject[] = [
    { repo: 'SelfDrivingCar', desc: '2D car simulation that learns to drive around a track using a neural network and genetic algorithm. This project has been built from scratch using the least libraries possible (JavaFX). ', tags: ['machine-learning', 'neural-network', 'genetic-algorithm'], links: [] },
    { repo: 'Weaver', desc: 'A spotify like app with an improved UI / UX, made in NextJS ', tags: ['Spotify', 'NextJS', 'React', 'UI / UX'], links: [] }
]

const img = (repo: string) => `https://raw.githubusercontent.com/PeacefulOtter/${repo}/main/showcase.png`

const Project = ( { repo, desc, tags, links }: IProject ) => {
    return (
        <div className={styles.project}>
            <div className={styles.img} style={{backgroundImage: `url(${img(repo)})`}}></div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.title}>{repo}</div>
                    <div className={styles.desc}>{desc}</div>
                    <div className={styles.tags}>
                        { tags.map( (tag, i) => 
                            <div key={`tag${i}`} className={styles.tag}>{tag}</div>
                        ) }
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.link}><FiGithub /></div>
                    { links.map( (link, i) => 
                        <div key={`link${i}`} className={styles.link}>{link}</div>
                    ) }
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [ref, inView] = useInView();


    return (
        <>
            <div ref={ref} className={styles.header}>
                <div className={`emoji  ${inView ? 'inView' : ''}`}>✨</div>
                <div className='title'>Projects</div>
            </div>
            <div className={styles.container}>
                { projects.map( ( project, i )  =>
                    <Project {...project} key={`project${i}`} />
                ) }
            </div>
        </>
    )
}

export default Projects;