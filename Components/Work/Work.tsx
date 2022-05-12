

import { useState } from 'react';
import { FiNavigation2 } from 'react-icons/fi';

import styles from './Work.module.css'

interface IWork {
    title: string;
    company: string;
    description: string[];
    date: string;
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

const works: IWork[] = [
    { title: 'Student Programmer', company: 'LiRA', date: '02/2022 - 07/2022', description: [lorem, lorem]},
    { title: 'IT Group Work', company: 'CESI', date: '2018 & 2019', description: [lorem, lorem, lorem]},
    { title: 'Observation Internship', company: 'Finquest', date: 'May 2017', description: [lorem, lorem, lorem, lorem]},
]


const WorkBtn = ( { work, active, onClick }: any ) => {

    const className = styles.workBtn + ' ' + 
        (active ? styles.activeWorkBtn : '') 

    return (
        <div className={className} onClick={onClick}>
            {work.company}
        </div>
    )
}

const Work = () => {

    const [index, setIndex] = useState<number>(0)

    const onClick = (i: number) => () => setIndex(i)

    const work = works[index]

    return (
        <>
        <div className={styles.workContainer + ' ' + styles.workHeader}>
           <div className='title'>Work</div>
           <div className={styles.workSecond}>💼 Experiences</div>
        </div>
        <div className={styles.workContainer}>
            <div className={styles.workBtns}>
                { works.map( (work: IWork, i: number) => 
                    <WorkBtn key={`workbtn${i}`} work={work} active={i === index}onClick={onClick(i)}/>
                ) }
           </div>
           <div className={styles.workContent}>
               <div className={styles.workDetails}>
                    <div className={styles.workTitle}>
                        {work.title} - <span>@ {work.company}</span>
                    </div>
                   <div className={styles.workDates}>
                        {work.date} 
                   </div>
               </div>
               <div className={styles.workDescs}>
                    { work.description.map( (desc: string, i: number) => 
                        <div 
                            key={`workdesc${i}`} 
                            className={styles.workDesc}
                        >
                            <span><FiNavigation2 className={styles.workItem}/></span>
                            <div>{desc}</div>
                        </div>
                    )}
               </div>
           </div>
        </div>
        </>
    )
}

export default Work;