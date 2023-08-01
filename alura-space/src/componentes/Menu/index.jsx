import React from 'react';
import Home from '../../assets/icones/home.png';
import MaisCurtidas from '../../assets/icones/mais-curtidas.png';
import MaisVistas from '../../assets/icones/mais-vistas.png';
import Novas from '../../assets/icones/novas.png';
import SurpreeendaMe from '../../assets/icones/surpreenda-me.png';
import styles from './Menu.module.scss';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={Home} alt='' />
                    <a href='/'>Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={MaisCurtidas} alt='' />
                    <a href='/'>Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={MaisVistas} alt='' />
                    <a href='/'>Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={Novas} alt='' />
                    <a href='/'>Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={SurpreeendaMe} alt='' />
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}
