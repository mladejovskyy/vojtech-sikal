"use client"
import {useState, useEffect} from 'react'
import "./Navbar.css"
import {useRouter} from 'next/navigation';

export default function Navbar() {
    //let navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [isScroll, setIsScroll] = useState(false)
    const router = useRouter();

    //check scroll
    useEffect(() => {
        function updateScroll() {
            if (window.scrollY >= 25) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    //check width
    useEffect(() => {
        function updateSize() {
            if (window.innerWidth >= 1026) {
                setOpen(true);
                setMobile(false);
            } else {
                setMobile(true);
                setOpen(false);
            }
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const scrollToTarget = async (targetId) => {
        const currentPath = window.location.pathname;

        const scrollToElement = () => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});

                // Close the menu on mobile after clicking
                if (window.innerWidth <= 1026) {
                    setOpen(false);
                }
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
        <div className={isScroll ? 'nav-bg nav-bg-scroll' : 'nav-bg'}>
            <nav className='container'>
                <img src="/images/nav-logo.svg" className="logo"
                     alt=""
                     draggable="false" loading="eager"
                     placeholder="blur"/>
                {open ? <ul className="nav-links" data-aos={mobile ? "slide-left" : ""} data-aos-delay="100"
                            data-aos-duration="400" data-aos-once="false">
                    <>
                        <li onClick={() => scrollToTarget("header")} data-aos="fade-down" data-aos-delay="0"
                            data-aos-once="true">Úvod
                        </li>
                        <li onClick={() => scrollToTarget("services")} data-aos="fade-down" data-aos-delay="0"
                            data-aos-once="true">Služby
                        </li>
                        <li onClick={() => scrollToTarget("vehicles")} data-aos="fade-down" data-aos-delay="100"
                            data-aos-once="true">Vozový park
                        </li>
                        <li onClick={() => scrollToTarget("contact")} data-aos="fade-down" data-aos-delay="200"
                            data-aos-once="true">Kontakty
                        </li>
                        <div data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
                            <button onClick={() => scrollToTarget("services")} className="btn-primary burger">
                                Zobrazit služby
                            </button>
                        </div>
                    </>

                </ul> : ""}
                {!open ? <div className="burger" onClick={() => setOpen(true)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> : <div className="close" onClick={() => setOpen(false)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>}

            </nav>
        </div>
    )
}