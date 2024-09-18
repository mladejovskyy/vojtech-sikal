"use client";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./style.css";
import {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";

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

    const firstRow = [
        {
            img: "/images/gallery-photo1.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo2.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo3.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo4.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo5.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo6.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo7.webp",
            alt: "",
        },
        {
            img: "/images/gallery-photo8.webp",
            alt: "",
        },
    ];

    const ReviewCard = ({img, alt}) => {
        return (
            <div>
                <div className="flex flex-row items-center gap-2">
                    <img src={img} alt={alt}/>
                </div>
            </div>
        )
    }

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
                            <div className="btns-row" data-aos="fade-right" data-aos-once="true" data-aos-delay="0">
                                <button onClick={() => scrollToTarget('services')} className="btn-primary">
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
                        <div className="item" data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="0">
                            <Image
                                src="/images/services-photo1.webp"
                                alt="Obrázek služby smluvní autodoprava"
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
                                    <Link href={"/smluvni-autodoprava"} className="services-link" aria-label="Přejít na stránku smluvní autodopravy">
                                        <img
                                            className="services-arrow"
                                            src="/images/services-arrow.svg"
                                            alt="Ikona šipky"
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
                        <div className="item" data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="100">
                            <Image
                                src="/images/services-photo2.webp"
                                alt="Obrázek služby zemní práce"
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
                                    <Link href={"/zemni-prace"} className="services-link" aria-label="Přejít na stránku zemní práce">
                                        <img
                                            className="services-arrow"
                                            src="/images/services-arrow.svg"
                                            alt="Ikona šipky"
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
                        <div className="item" data-aos="zoom-in-up" data-aos-once="true" data-aos-delay="200">
                            <Image
                                src="/images/services-photo3.webp"
                                alt="Obrázek služby demolice objektů"
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
                                    <Link href={"/demolice-objektu"} className="services-link" aria-label="Přejít na stránku demolice objektů">
                                        <img
                                            className="services-arrow"
                                            src="/images/services-arrow.svg"
                                            alt="Ikona šipky"
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
                        <div className="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="0">
                            <Image
                                src="/images/vehicles-photo1.webp"
                                alt="Foto Scania 8x4"
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
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 18 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Třístranný sklápěč
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Možnost sklápěcího přívěsu S3 o užitné hmotnosti 13 tun
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                            <Image
                                src="/images/vehicles-photo2.webp"
                                alt="Foto Volvo 8x4"
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
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 18 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Třístranný sklápěč
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Možnost sklápěcího přívěsu S3 o užitné hmotnosti 13 tun
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                            <Image
                                src="/images/vehicles-photo3.webp"
                                alt="Foto tahače s thermo sklápěcím návěsem"
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
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 33 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Jednostranný
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Upraveno i pro převoz asfaltové směsi
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="150">
                            <Image
                                src="/images/vehicles-photo4.webp"
                                alt="Foto tahače s návěsu"
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
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná plocha 100m³
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 24 tun
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Jednoosý návěs 17,5 tuny
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                            <Image
                                src="/images/vehicles-photo5.webp"
                                alt="Foto jumbo soupravy"
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
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná plocha 120m³
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Užitná hmotnost 24 tun
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="250">
                            <Image
                                src="/images/vehicles-photo6.webp"
                                alt="Foto cisterny"
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
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        Cisterna potravinářská tlaková objem 32 m3
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        izolovaná 3 komory
                                    </div>
                                    <div className="benefit">
                                        <img
                                            src="/images/vehicles-check.svg"
                                            alt="Ikona zaškrtnutí"
                                            draggable="false"
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                        provozována v režimu GMP+ pro přepravu potravin
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
                </div>
                <div className="row">
                    <div>
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {firstRow.map((review) => (
                                <ReviewCard key={review.img} {...review} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
            <section className="whyus" id="whyus">
                <div className="container">
                    <div className="row">
                        <div className="item">
                            <h4>proč si vybrat nás</h4>
                            <h2>Základním kamenem naší firmy je dlouhodobá férová spolupráce</h2>
                            <p>
                                Společnost VŠ Trans Group s.r.o. byla založena v roce 2011 za účelem poskytování služeb
                                v oblasti přepravy veškerých sypkých materiálů a zemních prací v okolí města Mladá
                                Boleslav. Postupem času se hlavní region působení firmy posunul i za hranice
                                středočeského kraje do okolí Liberce, Hradce Králové a především Prahy.
                            </p>
                            <p>

                                V roce 2016 se společnost rozrostla o první jumbo soupravu, díky které se zařadila na
                                vnitrostátní trh velkoobjemové kamionové dopravy.
                            </p>
                            <p>
                                V současné době je společnost VŠ Trans Group s.r.o. neustále se rozrůstající firmou,
                                která se specializuje mimo jiné i na mezinárodní kamionovou dopravu.
                            </p>

                        </div>
                        <div className="item">
                            <img
                                src="/images/whyus-photo.webp"
                                alt="Foto nákladního vozidla"
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="item">
                            <h4>objednání služeb</h4>
                            <h2>Cenovou nabídku tvoříme po detailním vyměření práce</h2>
                            <p>Zavolejte nám s vaším požadavkem a my se vám pokusíme vyhovět</p>
                            <div className="btns-row" data-aos="fade-right" data-aos-once="true">
                                <Link href={'tel:607727509'} aria-label='Zavolat na číslo +420 607 727 509'>
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
    );
}
