import React from "react";
import styles from "./Popularcar.module.css";
import CarCard from "../PopularCarCard/PopularCarCard";
import Image from "next/image";

function PopularCars() {

  const popCars =
    [{
      id: 1,
      carName: "Mitsubhishi Eclipse",
      description: "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
      imgUrl: "/logos/Mask groupmitsubhishi.svg",
      gear: "Automatic",
      door: 5,
      people: 6,
      price: 2700
    },
    {
      id: 2,
      carName: "Jac J7",
      description: "S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",
      imgUrl: "/logos/Rectangle 23951jac.svg",
      gear: "Automatic",
      door: 5,
      people: 6,
      price: 2700
    },
    ]

  return (
    <div>
      <section className={styles.popularcars}>
        <h2 className={styles.popularcarsH2}>Most popular cars</h2>
        <div className={styles.popularCardRow}>

          {/* Mapping the cars Cards */}
          {popCars.map(car => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </section>
    </div>)
}

export default PopularCars;
