"use client"
import React, {useEffect, useState} from 'react'
import './Footer.css'
import {useRouter} from 'next/navigation';

export default function Footer() {
    const router = useRouter();

    const scrollToTarget = async (targetId) => {
        const currentPath = window.location.pathname;

        const scrollToElement = () => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        };

        if (currentPath === '/') {
            // Already on the homepage, scroll directly to the target section
            setTimeout(scrollToElement, 200); // Slight delay for page transition
        } else {
            // Navigate to the homepage first, then scroll
            await router.push('/');
            setTimeout(scrollToElement, 200); // Slight delay for page transition
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item about">
                        <img onClick={() => scrollToTarget("header")} src='/images/nav-logo.svg' alt="Logo VStTransGroup s.r.o." draggable="false"
                             loading="lazy" placeholder="blur"/>
                        <p>Profesionální převoz sypkých materiálů, zemní práce a demolice na míru</p>
                        <span>VŠ Trans Group s.r.o.</span>
                        <span>IČ: 24761915</span>
                        <span>Regnerova 291, Čejetičky, 293 01 Mladá Boleslav</span>
                    </div>
                    <div className="item-wrapper">
                        <div className="item links">
                            <h2>Užitečné</h2>
                            <>
                                <button onClick={() => scrollToTarget("services")}>Služby</button>
                                <button onClick={() => scrollToTarget("vehicles")}>Vozový park</button>
                                <button onClick={() => scrollToTarget("gallery")}>Galerie< /button>
                                <button onClick={() => scrollToTarget("whyus")}>O nás< /button>
                                <button onClick={() => scrollToTarget("contact")}>Kontakty</button>
                            </>
                        </div>
                        <div className="item links">
                            <h2>Kontaktujte nás</h2>
                            <a href='mailto:sikal@vstransgroup.cz' target='_blank' rel="noopener noreferrer" aria-label='Napsat email na emailovou adresu info@vstransgroup.cz'><img
                                src='/images/footer-email.svg' className="footer-email" alt="Ikona emailu" draggable="false"
                                loading="lazy"
                                placeholder="blur"/> sikal@vstransgroup.cz</a>
                            <a href='tel:607727509' target='_blank' rel="noopener noreferrer" aria-label='Zavolat na číslo +420 607 727 509'><img
                                src='/images/footer-phone.svg' alt="Ikona telefonu"
                                loading="lazy" placeholder="blur"/> 607 727 509</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-line"></div>
                <div className="bottom-content">
                    <p>{new Date().getFullYear()} © Copyright VStransgroup.cz Všechna práva vyhrazena</p>
                    <a href='https://redesigner.cz/' target='_blank' rel="noopener noreferrer" aria-label="Přejít na stránku Redesigner">Web na míru od <img
                        src='/images/logoredesginer.svg'
                        alt='Logo Redesigner' draggable="false"
                        loading="lazy" placeholder="blur"/></a>
                </div>
            </div>
        </footer>
    )
}
