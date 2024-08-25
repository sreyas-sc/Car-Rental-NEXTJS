import React, { useState } from 'react'
import styles from "./GetLinkPhoneNumber.module.css"

function GetTheLink() {
    // State to hold the phone number
    const [number, setNumber] = useState<string>("")
    const [error, setError] = useState<string>("")

    // Validate phone number
    const validateNumber = (value: string) => {
        if (value.length === 10 || value.length === 0) {
            setError("")
        } else {
            setError("Enter a valid phone number")
        }
    }

    // Validate phone number on change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setNumber(value)
        validateNumber(value)
    }

    return (
        <div>
            <input
                className={styles.subscribePhoneInputMV}
                type="text"
                placeholder="Enter Phone Number"
                value={number}
                onChange={handleChange}
            />
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.getLinkButton}>Get the link</button>
        </div>
    )
}

export default GetTheLink
