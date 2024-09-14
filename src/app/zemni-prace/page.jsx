"use client";
import Navbar from "../_components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import "../globals.css";
import "../service.css";
import {useEffect} from "react";
import Link from "next/link";

export default function ZemniPracePage() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, []);

    return (
        <>
            <Navbar/>
            <section className="service-bg bg-zemniprace" id="service-bg">
                <div className="container">
                    <div className="row">
                        <Link href={'../'}>
                            <img
                                src="/images/servicepage-arrow.svg"
                                alt=""
                                draggable="false"
                                loading="eager"
                                placeholder="blur"
                            />
                        </Link>
                        <h1>
                            Zemní práce
                        </h1>
                    </div>
                </div>

            </section>
            <main>
                <section className="service-header" id="service-header">
                    <div className="container">
                        <div className="row">
                            <div className="item">
                                <h4>zemní práce</h4>
                                <h2>Nabízíme profesionální zemní práce: kopání, úprava terénu a zpevnění půdy.</h2>
                                <p>
                                    Naše firma nabízí rozsáhlé služby i v realizaci zemních či výkopových prací.
                                </p>
                                <p>
                                    Mezi nejčastěji prováděné činnosti patří:
                                    <ul>
                                        <li>
                                            <img
                                                src="/images/vehicles-check.svg"
                                                alt=""
                                                draggable="false"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                            přípravné práce pro stavby
                                        </li>
                                        <li>
                                            <img
                                                src="/images/vehicles-check.svg"
                                                alt=""
                                                draggable="false"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                            úpravy rovinných i svažitých terénů
                                        </li>
                                        <li>
                                            <img
                                                src="/images/vehicles-check.svg"
                                                alt=""
                                                draggable="false"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                            odvoz skrývky, zemin, sutí,…
                                        </li>
                                        <li>
                                            <img
                                                src="/images/vehicles-check.svg"
                                                alt=""
                                                draggable="false"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                            dovoz písku, štěrku, zeminy,…
                                        </li>
                                        <li>
                                            <img
                                                src="/images/vehicles-check.svg"
                                                alt=""
                                                draggable="false"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                            hloubení základů
                                        </li>
                                        <li>
                                            <img
                                                src="/images/vehicles-check.svg"
                                                alt=""
                                                draggable="false"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                            úprava komunikací
                                        </li>

                                    </ul>
                                </p>
                                <p>
                                    Veškeré práce v této oblasti jsou uzpůsobené požadavkům zákazníka. Pro specifické
                                    potřeby máme k dispozici řadu dalších strojů a vozidel od dlouhodobě prověřených
                                    smluvních partnerů.
                                </p>

                            </div>
                            <div className="item">
                                <img
                                    src="/images/servicepage-photo2.webp"
                                    alt=""
                                    draggable="false"
                                    loading="eager"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="item">
                            <h4>objednání služeb</h4>
                            <h2>Cenovou nabídku tvoříme po detailním vyměření práce</h2>
                            <p>Zavolejte nám s vaším požadavkem a my se vám pokusíme vyhovět</p>
                            <div className="btns-row" data-aos="fade-right" data-aos-once="true">
                                <Link href={'tel:607727509'}>
                                    <button className="btn-secondary">+420 607 727 509</button>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <img
                                src="/images/contact-photo.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}