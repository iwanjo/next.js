import React, { useEffect} from 'react';
import styles from "./css-modules/Nav.module.css";
import Image from 'next/image';

function Navbar() {

    useEffect(() => {
        var menuIcon = document.getElementById('nav-icon');
        var topNav = document.getElementById('top-nav');
        menuIcon.addEventListener('click', function(){
          topNav.classList.toggle('nav-active');
          menuIcon.classList.toggle('menu-close');
        });
  
  
    })



    return(
        <>
        <section className={styles.headerArea}>
            <div className="nav-wrap">
                <div id="nav-icon"></div>
            
                <div id="top-nav">

                    <ul className = "menu">

                        <li>
                            <a href="#">Home</a>
                        </li>

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
                
            </div>

            <section className={styles.mainArea}>
                <h1>Hi I'm Iano</h1>
            </section>
        </section>


            
        </>
    )
}


export default Navbar;