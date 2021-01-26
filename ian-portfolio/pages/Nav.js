import React, { useEffect, useState } from 'react';import Image from 'next/image';
import styles from './css-modules/Nav.module.css';

function Navbar() {
    return(
        <>
            <div className={styles.navWrap}>
                <div id={styles.navIcon}></div>
                <div id={styles.topNav}></div>

                <ul className={styles.menu}>
                    <li>
                        <a href="#">About</a>
                    </li>

                    <li>
                        <a href="#">Services</a>
                    </li>

                    <li>
                        <a href="#">Portfolio</a>
                    </li>

                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>


            </div>
        </>
    )
}


export default Navbar;