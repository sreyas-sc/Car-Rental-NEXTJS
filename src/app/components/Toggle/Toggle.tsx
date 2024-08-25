"use client"
import React, { useState } from 'react'// Changed the CSS module name
import Image from 'next/image';
import styles from './Toggle.module.css'

interface faqInterface {
    id: number;
    question: string;
    answer: string;
}

interface AccordionProps {
    faqs: faqInterface[];
}

const Toggle: React.FC<AccordionProps> = ({ faqs }) => {
    const [active, setActive] = useState<number | null>(null);
    
    const handleToggle = (index: number) => {
        setActive(active === index ? null : index);
    };

    return (
        <div className={styles.toggleContainer}>
            {faqs.map((faq: faqInterface, index: number) => (
                <div key={faq.id} className={styles.toggleBox}>
                    <button
                        className={styles.toggleHeader}
                        onClick={() => { handleToggle(index) }}
                    >
                        {faq.question}
                        <Image
                            className={`${styles.iconRotate} ${active === index ? styles.activeIcon : ''}`}
                            src="logos/xmarkxmark.svg"
                            alt="toggle icon"
                            width={24}
                            height={24}
                        />
                    </button>
                    <div
                        className={`${styles.togglePanel} ${active === index ? styles.panelOpen : ''}`}
                    >
                        <p className={styles.panelText}>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Toggle;
