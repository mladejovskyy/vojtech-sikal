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

export default function SmluvniAutodopravaPage() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, []);

    return (
        <>
            <Navbar/>
            <section className="service-bg bg-autodoprava" id="service-bg">
                <div className="container">
                    <div className="row">
                        <Link href={'../'}>
                            <img
                                src="/images/servicepage-arrow.svg"
                                alt="Ikona šipky zpět"
                                draggable="false"
                                loading="eager"
                                placeholder="blur"
                            />
                        </Link>
                        <h1>
                            Smluvní autodoprava
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
                                <h2>Vnitrostátní i mezinárodní kamionová doprava a přeprava sypkých materiálů</h2>
                                <p>
                                    Naše firma se specializuje především na přepravu palet a sypkých materiálů.
                                </p>
                                <p>
                                    Hlavním předmětem činnosti je velkoobjemová přeprava, kterou zajišťujeme
                                    prostřednictvím tahačů s lowdeckovými návěsy o ložné ploše 100m³ a jumbo soupravami,
                                    které umožňují přepravit náklad o objemu až 120m³.
                                </p>
                                <p>
                                    Na přepravu sypkých materiálů je naše firma vybavena hned několika druhy nákladních
                                    vozidel, které je možné naložit od 1 do 33 tun.
                                </p>

                            </div>
                            <div className="item">
                                <img
                                    src="/images/servicepage-photo1.webp"
                                    alt="Foto nákladních vozidel"
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
                                alt="Foto nákladního vozidla"
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