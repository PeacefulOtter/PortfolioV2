
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
    { 
        repo: 'SelfDrivingCar', 
        desc: '2D car simulation that learns to drive around a track using a neural network and genetic algorithm. This project has been built from scratch using the least libraries possible (JavaFX).', 
        tags: ['machine-learning', 'neural-network', 'genetic-algorithm'], 
        links: [] 
    },
    { 
        repo: '3DGameEngine', 
        desc: '3D Game Engine built from scratch using LWJGL (OpenGL) in Java. It is capable of loading and rendering 3D objects with textures, normals and height maps. The engine also supports multiple shaders as well as ambient, directional, point and spot lights.', 
        tags: ['game-engine', 'lwjgl', 'opengl', 'shaders', '3d-game'], 
        links: [] 
    },
    { 
        repo: 'ForceFeedback', 
        desc: 'A force feedback controller sending inputs to a steering wheel through a web interface. The frontend requests a Java backend made with Spring and connected to a controller.', 
        tags: ['force-feedback', 'steering-wheel', 'react', 'java-spring'], 
        links: [] 
    },
    { 
        repo: 'Mintel', 
        desc: 'A 5-stage pipelined RISC microprocessor written in Scala using Chisel. Data dependencies are resolved using data forwarding and stalling occurs on a branch / jump. Mintel can be programmed on any FPGA and supports IOs', 
        tags: ['risc', 'mips', 'pipeline', 'chisel', 'microprocessor', 'fpga'], 
        links: [] 
    },
    { 
        repo: 'Weaver', 
        desc: 'A spotify like app with an improved UI / UX, made in NextJS', 
        tags: ['spotify', 'nextjs', 'ui', 'ux'], 
        links: [] 
    },
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
                    <a className={styles.link} href={`https://www.github.com/PeacefulOtter/${repo}`} target="_blank"><FiGithub /></a>
                    { links.map( (link, i) => 
                        <a key={`link${i}`} href={link} className={styles.link} target="_blank">{link}</a>
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