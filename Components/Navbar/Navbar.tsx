
import Link from 'next/link';
import { FC } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

import { Page } from '../../models/models';

import styles from './Navbar.module.css'


interface INav {
    index: number;
    pages: Page[];
}


const NavBtn = ( { page, i, active, onClick }: any ) => {

    const { id, name } = page;
    const className = styles.navbarBtn + ' ' 
        + (active ? styles.navActive : '')

    return (
        <div 
            className={className}
            onClick={onClick(id)}
        >
            <span>0{i + 1}.</span>
            {name}
        </div>
    )
}

const NavBar: FC<INav> = ( { pages, index } ) => {

    const onClick = (id: string) => () => {
        window.scrollTo( {
            top: (document.getElementById(id) as any).offsetTop,
            behavior: 'smooth',
        } );
    }
    
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbarContainer}>
                { pages.map( (page: Page, i: number) => 
                    <NavBtn key={`navbtn${i}`} page={page} i={i} active={i === index} onClick={onClick}/>
                ) }
            </div>
            <div className={styles.navbarContainer + ' ' + styles.navbarSocials}>
                <a target="_blank" href="https://github.com/PeacefulOtter/" rel="noopener noreferrer" className={styles.navbarSocial}><FiGithub /></a>
                <a target="_blank" href="https://www.linkedin.com/in/natmai/" rel="noopener noreferrer" className={styles.navbarSocial}><FiLinkedin /></a>
                <a target="_blank" href="https://www.instagram.com/ssh.nathan/" rel="noopener noreferrer" className={styles.navbarSocial}><FiInstagram /></a>
                <a target="_blank" href="https://mobile.twitter.com/__genjy__" rel="noopener noreferrer" className={styles.navbarSocial}><FiTwitter /></a>
            </div>
        </div>
    )
}

export default NavBar;