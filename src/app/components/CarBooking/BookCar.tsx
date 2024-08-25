"use client"
import { useState } from 'react'
import styles from "./BookCar.module.css"
import Link from 'next/link'
import Image from 'next/image'

function BookCar() {

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    const [isDifferentDropOff, setIsDifferentDropOff] = useState<boolean>(false)

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div className={styles.container}>
            <div className={styles.quickBookSection}>

                <div className={styles.tabs}>
                    <ul className={styles.tabsList}>
                        <li className={styles.tabItem}><a href="#">Same as Pick-Up</a></li>
                        <li className={styles.tabItem}><a href="#">Different Drop-Off</a></li>
                        <li>
                            <select name="vehicle" defaultValue="default" className={styles.vehicleDropdown}>
                                <option value="default" disabled hidden>Select Vehicle Type</option>
                                <option value="pickuptruck">Pickup</option>
                                <option value="coupe">Copue</option>
                                <option value="suv">SUV</option>
                                <option value="hatchback">Hatchback</option>
                                <option value="sedan">Sedan</option>

                            </select>
                        </li>
                    </ul>
                </div>

                <div className={styles.inputSection}>
                    <select name="location" className={styles.locationDropdown} defaultValue="default">
                        <option value="default" disabled hidden>Al Quaz</option>
                        <option value="fujairah">Fujairah</option>
                    </select>

                    <input className={styles.datetimeInput} type="datetime-local" value="2023-10-30T09:00" />
                    <input className={styles.datetimeInput} type="datetime-local" value="2023-10-30T09:00" />
                    <button className={styles.searchButton}>
                        <Image width={26} height={26} src="logos/searchSummerPromotion.svg" alt="Search Icon" />
                    </button>
                    <div className={styles.verticalDivider}></div>
                    <button className={styles.quickBookButton}>Quick Book</button>
                </div>

                <div className={styles.appDownloadSection}>
                    <p className={styles.downloadText}>Download our App for easy accessibility anytime, anywhere!</p>
                    <div className={styles.appStoreImages}>
                        <Image width={110} height={32} className={styles.storeImage} src="logos/appStoreSummerPromotion.svg" alt="App Store" />
                        <Image width={110} height={32} className={styles.storeImage} src="logos/playStoreSummerPromotion.svg" alt="Play Store" />
                    </div>
                </div>
            </div>

            <div className={styles.mobileMenu}>
                <div className={styles.menuButtons}>
                    <button className={styles.bookCarButton} onClick={toggleMenuVisibility}>Book a car</button>
                    <button className={styles.quickBookMobileButton}>Quick book</button>
                </div>

                <div className={`${styles.mobileTabs} ${isMenuVisible ? styles.activeTabs : ''}`}>
                    <ul className={styles.mobileTabsList}>
                        <li className={styles.mobileTabItem}><button className={styles.pickUpButton} onClick={() => setIsDifferentDropOff(false)}>Same as Pick-Up</button></li>
                        <li className={styles.mobileTabItem}><button className={styles.dropOffButton} onClick={() => setIsDifferentDropOff(true)}>Different Drop-Off</button></li>
                        <li>
                            <select name="vehicle" defaultValue="default" className={styles.vehicleDropdownMobile}>
                                <option value="default" disabled hidden>Vehicle Type</option>
                                <option value="sedan">Sedan</option>
                                <option value="hatchback">Hatchback</option>
                                <option value="suv">SUV</option>
                            </select>
                        </li>
                    </ul>
                    <ul className={styles.mobileInputList}>
                        <li className={styles.mobileInputItem}>
                            <select name="pickup" defaultValue="default" className={styles.pickupDropdownMobile}>
                                <option value="default" disabled hidden>Pick up location</option>
                                <option value="dubai">Dubai</option>
                            </select>
                        </li>
                        <li className={styles.mobileInputItem}>
                            <select name="dropoff" defaultValue="default" className={`${styles.dropOffLocationInactive} ${isDifferentDropOff ? styles.dropOffLocationActive : ''}`}>
                                <option value="default" disabled hidden>Drop off location</option>
                                <option value="fujairah">Fujairah</option>
                            </select>
                        </li>
                        <li className={styles.mobileInputItem}><input className={styles.pickupDateMobile} type="datetime-local" placeholder="Pick-Up Date and Time" /></li>
                        <li className={styles.mobileInputItem}><input className={styles.dropOffDateMobile} type="datetime-local" placeholder="Drop off Date and Time" /></li>
                        <li><button className={styles.searchMobileButton}>Search</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookCar
