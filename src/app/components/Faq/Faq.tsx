import React from 'react'
import styles from "./Faq.module.css"
import Accordian from '../Toggle/Toggle'


function Faq() {

    interface faqInterface {
        id?: number;
        question?: string;
        answer?: string;
    }

    // Array with data for each faq
    const faqs = [{
        id: 1, question: " What is my eligibility to book a car?", answer: "You should be of 18 years old above and you must possess a valid driving license"
    },
    {
        id: 2, question: " Can i book for any period of time?", answer: "Yes you Can book for any period of time"
    },
    {
        id: 3, question: " Can i opt car for a longer period?", answer: "Yes you can opt car for a longer period"
    },
    {
        id: 4, question: " Can i book one-way trip?", answer: "Yes you can book for one-way trip"
    },
    {
        id: 5, question: "Is there home delivery option available?", answer: "Yes cars can be delivered at your house."
    },
    {
        id: 6, question: "How can i make the payment?", answer: "There are manu options to make payments."
    }
    ]


    return (
        <div className={styles.faq} >
            <h2 className={styles.faqHeading}>Frequently asked questions</h2>
            <Accordian faqs={faqs} />
        </div >
    )
}

export default Faq