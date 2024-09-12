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
                        <img src='/images/footer-logo.webp' alt='' draggable="false"
                             loading="lazy" placeholder="blur"/>
                        <h2>Eduard Roth</h2>
                        <p>Zpět k tradičním hodnotám, kupředu s novými příležitostmi</p>
                    </div>
                    <div className="item empty"></div>
                    <div className="item links">
                        <h2>Užitečné</h2>
                        <>
                            <button onClick={() => scrollToTarget("whyme")}>O mně</button>
                            <button onClick={() => scrollToTarget("priorities")}>Priority</button>
                            <button onClick={() => scrollToTarget("projects")}>Projekty</button>
                            <button onClick={() => scrollToTarget("contact")}>Kontakty</button>
                        </>

                    </div>
                    <div className="item links">
                        <h2>Sociální sítě</h2>
                        <a href='https://www.facebook.com/profile.php?id=61550754504718' target='_blank'
                           rel="noopener noreferrer"><img
                            src='/images/footer-facebook.webp' alt='' draggable="false"
                            loading="lazy" placeholder="blur"/> Facebook</a>
                        <a href='https://www.instagram.com/eduardroth/' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footer-instagram.webp' alt='' draggable="false"
                            loading="lazy" placeholder="blur"/> Instagram</a>
                        <a href='https://www.tiktok.com/@eduaredtc55' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footer-tiktok.webp' alt='Telefonní číslo redesigner' draggable="false"
                            loading="lazy" placeholder="blur"/> Tiktok</a>

                    </div>
                    <div className="item links">
                        <h2>Kontakty</h2>
                        <a href='tel:721605620' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footer-phone.svg' alt=""
                            loading="lazy" placeholder="blur"/> ????????</a>
                        <a href='mailto:info@eduardroth.cz' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footer-email.svg' className="footer-email" alt="" draggable="false"
                            loading="lazy"
                            placeholder="blur"/> info@eduardroth.cz</a>
                    </div>
                </div>
                <div className="bottom-line"></div>
                <div className="bottom-content">
                    <p>{new Date().getFullYear()} © Copyright EduardRoth Všechna práva
                        vyhrazena</p>
                    <a href='https://redesigner.cz/' target='_blank' rel="noopener noreferrer">Web na míru od <img
                        src='/images/logoredesginer.svg'
                        alt='' draggable="false"
                        loading="lazy" placeholder="blur"/></a>
                </div>
            </div>
        </footer>
    )
}