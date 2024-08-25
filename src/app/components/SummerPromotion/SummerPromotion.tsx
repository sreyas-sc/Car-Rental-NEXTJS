"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import mitsubhishi from '../../../../public/logos/Mitsubishi.svg'  ;
import styles from "./SummerPromotion.module.css"
export default function Banner() {

    type bannerData = {
        id: string,
        src: StaticImageData,
    }

    //slide show contents
    const banner: bannerData[] = [
        { id: "slide1", src: mitsubhishi },
        { id: "slide2", src: mitsubhishi},
        { id: "slide3", src: mitsubhishi },
        { id: "slide4", src: mitsubhishi },
    ];

    //create state to store the currently active slide
    const [activeSlide, setActiveSlide] = useState(0);

    //move to next slide in fixed intrevals
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % banner.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [banner.length]);

    return (
        // set a container class for setting up the slides
        <div className={styles.bannerContainer}>
            {banner.map((data, index) => (
                // map the slides from array 
                <div
                    key={data.id}
                    className={`${styles.slideContainer} ${index === activeSlide ? styles.active : styles.inactive}`}
                >
                    <Image  priority={true} id={styles.bannerImg} src={data.src} alt="banner" layout="responsive"  />

                    {/* set the text to display above image  */}
                    <div className={styles.bannerText}>
                        Receive guaranteed <button>GIFT VOUCHER</button>
                        <div>on a monthly hire or lease.</div>
                    </div>

                    {/* set a indicator to track the active slide */}
                    <div className={styles.indicator}>
                        {banner.map((_,index)=> 
                        // style the button for indicating the active slide
                            <button key={index} className={`${index===activeSlide?styles.activeIndicator:styles.inactiveIndicator}`}></button>
                        )}
                        
                    </div>
                </div>
            ))}
        </div>
    );
}
