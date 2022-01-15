import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';

const Header = () => {
    return(
        <div>
                <div className={styles.main_Header}>
                    <div className="nav-item">
                        <NavLink to='/home' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'yellow' : 'white'} } }>Home</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/students' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'yellow' : 'white'} } }>Students</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to='/contact' className={styles.main_Header_Items} style={ ( {isActive} ) => { return { color: isActive? 'yellow' : 'white'} } }>Contact Us</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Header;



// How to change color in hover for NavLink when there is "isActive" defined inside a function?