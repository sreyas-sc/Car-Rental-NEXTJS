import React from 'react'
import styles from "./RentLease.module.css"
import Image from 'next/image'

function RentLease() {

  const data = [
    {
      id: 1,
      description: 'Select the location. Browse through our available options and find the perfect car to suit your needs',
      imgUrl: 'logos/Frame 1171274971locationPin.svg'
    },
    {
      id: 2,
      description: 'Choose your desired Pick-Up date and time.',
      imgUrl: 'logos/Frame 1171274970calender.svg'
    },
    {
      id: 3,
      description: 'Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.',
      imgUrl: 'logos/Frame 1171274969car.svg'
    }
  ]

  return (
    <div className={styles.rentSteps} >
      <h2 className={styles.rentStepsHeading}>Rent/Lease In three easy steps</h2>
      <div className={styles.rentStepsRow}>

        {/* Mapping cards based on data above */}
        {data.map((item) => (
          <div className={styles.rentStepCols} key={item.id}>
            <h3 className={styles.rentSteph3}>0{item.id}</h3>
            <div className={styles.rentStepSubdiv}>
              <Image
                className={styles.rentStepSubdivImg}
                src={item.imgUrl}
                alt=""
                width={64}
                height={64}
              />
              <p className={styles.rentDivPara}>
                {item.description}
              </p>
            </div>
          </div>
        ))}




      </div>
    </div >
  )
}

export default RentLease