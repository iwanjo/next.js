import React, { useEffect, useState } from 'react';import Image from 'next/image';
import styles from './css-modules/Nav.module.css';

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
            <div class="nav-wrap">
                <div id="nav-icon"></div>
            
                <div id="top-nav">

                    <ul class = "menu">
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
        </>
    )
}


export default Navbar;