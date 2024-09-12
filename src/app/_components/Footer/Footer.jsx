"use client"
import React, {useEffect, useState} from 'react'
import './Footer.css'
import Link from "next/link";

export default function Footer() {
    const scrollToTarget = (targetId) => {
        //navigate("/")
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        }, 200);
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item about">
                        <img src='/images/nav-logo.svg' alt='' draggable="false"
                             loading="lazy" placeholder="blur"/>
                        <p>Profesionální převoz sypkých materiálů, zemní práce a demolice na míru</p>
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
                            <a href='tel:721605620' target='_blank' rel="noopener noreferrer"><img
                                src='/images/footer-phone.svg' alt=""
                                loading="lazy" placeholder="blur"/> ????????</a>
                            <a href='mailto:info@raceczech.cz' target='_blank' rel="noopener noreferrer"><img
                                src='/images/footer-email.svg' className="footer-email" alt="" draggable="false"
                                loading="lazy"
                                placeholder="blur"/> info@raceczech.cz</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-line"></div>
                <div className="bottom-content">
                    <p>{new Date().getFullYear()} © Copyright Raceczech.cz Všechna práva vyhrazena</p>
                    <a href='https://redesigner.cz/' target='_blank' rel="noopener noreferrer">Web na míru od <img
                        src='/images/logoredesginer.svg'
                        alt='' draggable="false"
                        loading="lazy" placeholder="blur"/></a>
                </div>
            </div>
        </footer>
    )
}
