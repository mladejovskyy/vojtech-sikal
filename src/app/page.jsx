"use client";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./style.css";
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    useEffect(() => {
        //load animations
        AOS.init();
    }, []);

    const scrollToTarget = (targetId) => {
        //navigate("/")
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: "smooth"});
            }
        }, 200);
    };

    return (
        <>
            <Navbar/>
            <main>
                <section className="header" id="header">
                    <div className="container">
                        <div className="row">
                            <h1>
                                Profesionální převoz sypkých materiálů, zemní práce a demolice
                                na míru
                            </h1>
                            <p className="paragraph">
                                Specializujeme se na rychlý a spolehlivý převoz sypkých
                                materiálů, komplexní zemní práce, včetně výkopů a terénních
                                úprav, a efektivní demolice různých objektů.
                            </p>
                            <div className="btns-row">
                                <button className="btn-primary">
                                    Zobrazit více o službách
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section className="services" id="services">
                <div className="container">
                    <h4>Služby</h4>
                    <h2>Jaké služby nabízíme?</h2>
                    <div className="row">
                        <div className="item">
                            <Image
                                src="/images/services-photo1.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={370}
                                height={239}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="bottom">
                                <div>
                                    <h3>Smluvní autodoprava</h3>
                                    <Link href={"/smluvni-autodoprava"} className="services-link">
                                        <img
                                            className="services-arrow"
                                            src="/images/services-arrow.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                    </Link>
                                </div>
                                <p className="paragraph">
                                    Vnitrostátní i mezinárodní kamionová doprava a přeprava
                                    sypkých materiálů.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/services-photo2.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={370}
                                height={239}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="bottom">
                                <div>
                                    <h3>Zemní práce</h3>
                                    <Link href={"/zemni-prace"} className="services-link">
                                        <img
                                            className="services-arrow"
                                            src="/images/services-arrow.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                    </Link>
                                </div>
                                <p className="paragraph">
                                    Nabízíme profesionální zemní práce: kopání, úprava terénu a zpevnění půdy.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/services-photo3.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={370}
                                height={239}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="bottom">
                                <div>
                                    <h3>Demolice objektů</h3>
                                    <Link href={"/demolice-objektu"} className="services-link">
                                        <img
                                            className="services-arrow"
                                            src="/images/services-arrow.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                    </Link>
                                </div>
                                <p className="paragraph">
                                    Nabízíme demolici objektů: bezpečné a efektivní odstranění stavebních struktur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vehicles" id="vehicles">
                <div className="container">
                    <h4>vozový park</h4>
                    <h2>Jaké máme vozidla?</h2>
                    <div className="row">
                        <div className="item">
                            <Image
                                src="/images/vehicles-photo1.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={270}
                                height={190}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="right">
                                <h3>Scania 8x4</h3>
                                <div className="benefits">
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 18 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Třístranný sklápěč
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Možnost sklápěcího přívěsu S3 o užitné hmotnosti 13 tun
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/vehicles-photo2.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={270}
                                height={190}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="right">
                                <h3>Volvo 8x4</h3>
                                <div className="benefits">
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 18 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Třístranný sklápěč
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Možnost sklápěcího přívěsu S3 o užitné hmotnosti 13 tun
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/vehicles-photo3.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={270}
                                height={190}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="right">
                                <h3>Tahač + thermo sklápěcí návěs</h3>
                                <div className="benefits">
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 33 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Jednostranný
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Upraveno i pro převoz asfaltové směsi
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/vehicles-photo4.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={270}
                                height={190}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="right">
                                <h3>Tahač + návěs</h3>
                                <div className="benefits">
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná plocha 100m³
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 24 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Jednoosý návěs 17,5 tuny
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/vehicles-photo5.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={270}
                                height={190}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="right">
                                <h3>Jumbo souprava</h3>
                                <div className="benefits">
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná plocha 120m³
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 24 tun
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <Image
                                src="/images/vehicles-photo6.webp"
                                alt=""
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                                layout="responsive"
                                width={270}
                                height={190}
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAQAAADxPw1zAAAAEElEQVR42mP8v50BChixMgFqCAUmt6RorAAAAABJRU5ErkJggg=="
                            />
                            <div className="right">
                                <h3>Cisterny</h3>
                                <div className="benefits">
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná plocha 120m³
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt=""
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 24 tun
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery" id="gallery">
                <div className="container">
                    <h4>Při práci</h4>
                    <h2>Galerie naší práce</h2>
                    <div className="row">

                    </div>
                </div>
            </section>
            <section className="whyus" id="whyus">
                <div className="container">
                    <div className="row">
                        <div className="item">
                            <h4>proč si vybrat nás</h4>
                            <h2>Základním kamenem naší firmy je dlouhodobá férová spolupráce</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
