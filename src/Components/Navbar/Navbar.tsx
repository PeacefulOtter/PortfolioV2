
import { FC } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

import '../../css/navbar.css'
import { Page } from '../../models/models';


interface INav {
    index: number;
    pages: Page[]
}

const NavBar: FC<INav> = ( { index, pages } ) => {
    console.log(index);
    
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                { pages.map( (page: Page, i: number) => 
                    <div className={`navbar-btn ${i === index ? 'nav-active' : ''}`}>
                        <span>0{i + 1}.</span>
                        {page.name}
                    </div>
                ) }
            </div>
            <div className="navbar-container navbar-socials">
                <div className="navbar-social"><FiGithub /></div>
                <div className="navbar-social"><FiLinkedin /></div>
                <div className="navbar-social"><FiInstagram /></div>
                <div className="navbar-social"><FiTwitter /></div>
            </div>
        </div>
    )
}

export default NavBar;