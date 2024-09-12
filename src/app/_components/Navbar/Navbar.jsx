"use client"
import {useState, useEffect} from 'react'
import "./Navbar.css"

export default function Navbar() {
    //let navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [isScroll, setIsScroll] = useState(false)

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

    const scrollToTarget = (targetId) => {
        //navigate("/")
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
                if (window.innerWidth <= 1026) {
                    setOpen(false);
                }
            }
        }, 200);
    };

    return (
        <div className={isScroll ? 'nav-bg nav-bg-scroll' : 'nav-bg'}>
            <nav className='container'>
                <img src="./images/nav-logo.svg" className="logo"
                     alt=""
                     draggable="false" loading="eager"
                     placeholder="blur"/>
                {open ? <ul className="nav-links" data-aos={mobile ? "slide-left" : ""} data-aos-delay="100"
                            data-aos-duration="400" data-aos-once="false">
                    <>
                        <li onClick={() => scrollToTarget("intro")} data-aos="fade-down" data-aos-delay="0"
                            data-aos-once="true">Úvod
                        </li>
                        <li onClick={() => scrollToTarget("services")} data-aos="fade-down" data-aos-delay="0"
                            data-aos-once="true">Služby
                        </li>
                        <li onClick={() => scrollToTarget("vehiclepark")} data-aos="fade-down" data-aos-delay="100"
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