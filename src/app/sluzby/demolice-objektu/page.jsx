"use client";
import Navbar from "../../_components/Navbar/Navbar";
import Footer from "../../_components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import "../../globals.css";
import "../style.css";
import {useEffect} from "react";
import Link from "next/link";

export default function DemoliceObjektuPage() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, []);

    return (
        <>
            <Navbar/>
            <section className="service-bg bg-demolice" id="service-bg">
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
                            Demolice objektů
                        </h1>
                    </div>
                </div>

            </section>
            <main>
                <section className="service-header" id="service-header">
                    <div className="container">
                        <div className="row">
                            <div className="item">
                                <h4>Demolice objektů</h4>
                                <h2>Nabízíme demolici objektů: bezpečné a efektivní odstranění stavebních struktur.</h2>
                                <p>
                                    Demolicí domů, výrobních hal atd. se naše firma zabývá již více než 6 let. Jsme
                                    schopni zajistit komplexní službu od demolice, naložení suti až po odvoz.
                                </p>
                                <p>
                                    Před provedením konkrétní zakázky je nutná konzultace na místě, během které proběhne
                                    zjištění stavu objektu. Následně vyhotovíme nabídku, která obsahuje výslednou cenu
                                    za veškeré práce spojené s demolicí.
                                </p>
                            </div>
                            <div className="item">
                                <img
                                    src="/images/servicepage-photo3.webp"
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
                            <div className="btns-row">
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