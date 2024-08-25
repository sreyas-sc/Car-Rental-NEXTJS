// "use client"
// import React, { useEffect, useState } from 'react'
// import styles from "./Subscribe.module.css"
// import Image from 'next/image'
// import GetTheLink from '../PhoneNumber/GetLinkPhoneNumber'

// function Subscribe() {

//     // setting the state for name
//     const [name, setName] = useState<string>("")
//     const [nameError, setNameError] = useState<string>("")
//     // validating the name
//     const validateName = () => {
//         // Check if the name contains only alphabetic characters and is within the required length
//         const isAlphabetic = /^[A-Za-z]+$/.test(name);
    
//         if (name.length > 0 && (name.length <= 3 || !isAlphabetic)) {
//             // Setting the error message for invalid name
//             setNameError("Invalid Name! Name should be greater than 3 characters and contain only alphabetic characters");
//         } else {
//             setNameError("");
//         }
//     }    
//     useEffect(() => {
//         validateName()
//     }, [name])

//     //State for storing error message
//     const [email, setEmail] = useState<string>("")
//     const [emailError, setEmailError] = useState<string>("")
//     // email validation
//     const validateEmail = () => {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (email.length == 0) {
//             setEmailError("")
//         }
//         else if (!emailPattern.test(email)) {
//             // Setting the error message
//             setEmailError("Please enter a valid email address");
//             return false;
//         } else {
//             setEmailError("");
//             return true;
//         }
//     };
//     useEffect(() => {
//         validateEmail()
//     }, [email])


//     return (
//         <div className={styles.subscribe}>
//             <div className={styles.subscribeDiv1}>
//                 <h3 className={styles.subscribeDiv1Heading}>
//                     Subscribe here for exclusive offers and updates!
//                 </h3>
//                 <div className={styles.subscribeDiv1InputDiv}>
//                     {/* input feilds for email and name */}
//                     <input type="text" id="name" placeholder="Name" required onChange={(e) => {
//                         setName(e.target.value)
//                     }
//                     } />
//                     <input type="email" id="email" placeholder="Email" required onChange={(e) => {
//                         setEmail(e.target.value)
//                     }} />
//                 </div>

//                 {/* paragraphs for error */}
//                 <p className={styles.error} id="nameError">{nameError}</p>
//                 <p className={styles.error} id="emailError">{emailError}</p>
//                 <p className={styles.subscribeDiv1Para}>
//                     Don't miss out! enter your email and your name, then hit subscribe
//                     to unlock a world of special offers and details.
//                 </p>
//                 <button className={styles.subscribeButton}>Subscribe</button>
//             </div>

//             <div className={styles.subscribeDiv2}>
//                 <Image
//                     className={styles.mobileAppImg}
//                     src="logos/Rectangle.svg"
//                     alt=""
//                     width={249}
//                     height={435}
//                 />
//                 <div className={styles.DownloadLinkDiv}>
//                     <p className={styles.downloadLinkPara}>
//                         Enter your number and receive <br />
//                         a direct link to download the app
//                     </p>
//                     <GetTheLink />
//                     <p className={styles.getItOnPara}>Get it on</p>
//                     <div className={styles.StoreLinks}>
//                         <Image src="logos/googlePlay.svg" alt="" width={103} height={30} />
//                         <Image src="logos/appleStore.svg" alt="" width={103} height={30} />
//                     </div>
//                 </div>
//             </div>

//             {/* mobile view */}
//             <div className={styles.subscribeDiv2Mobile}>
//                 <div className={styles.subscribeDiv2Main}>
//                     <Image
//                         className={styles.mobileAppImgMV}
//                         src="logos/Rectangle.svg"
//                         alt=""
//                         width={136}
//                         height={245}
//                     />
//                     <div className={styles.DownloadLinkDiv}>
//                         <p className={styles.getItOnParaMV}>Get it on</p>
//                         <div className={styles.StoreLinksMV}>
//                             <Image src="logos/googlePlay.svg" alt="" width={103} height={30} />
//                             <br />
//                             <Image src="logos/appleStore.svg" alt="" width={103} height={30} />
//                         </div>
//                         <p className={styles.downloadLinkParaMV}>
//                             Enter your number and receive a direct link <br />to download
//                             the app
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.downloadInputDiv}>
//                     {/* Component for phone number with validation*/}
//                     <GetTheLink />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Subscribe


"use client";
import React, { useEffect, useState } from 'react';
import styles from "./Subscribe.module.css";
import Image from 'next/image';
import GetTheLink from '../PhoneNumber/GetLinkPhoneNumber';

function Subscribe() {

    // Setting the state for name
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");

    // Validating the name
    const validateName = () => {
        const isAlphabetic = /^[A-Za-z]+$/.test(name);
        if (name.length > 0 && (name.length <= 3 || !isAlphabetic)) {
            setNameError("Invalid Name! Name should be greater than 3 characters and contain only alphabetic characters");
        } else {
            setNameError("");
        }
    };

    useEffect(() => {
        validateName();
    }, [name]); // Dependency array contains 'name'

    // State for storing email
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    // Email validation
    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length === 0) {
            setEmailError("");
        } else if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };

    useEffect(() => {
        validateEmail();
    }, [email]); // Dependency array contains 'email'

    return (
        <div className={styles.subscribe}>
            <div className={styles.subscribeDiv1}>
                <h3 className={styles.subscribeDiv1Heading}>
                    Subscribe here for exclusive offers and updates!
                </h3>
                <div className={styles.subscribeDiv1InputDiv}>
                    {/* Input fields for email and name */}
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Paragraphs for error */}
                <p className={styles.error} id="nameError">{nameError}</p>
                <p className={styles.error} id="emailError">{emailError}</p>
                <p className={styles.subscribeDiv1Para}>
                    Don't miss out! Enter your email and your name, then hit subscribe
                    to unlock a world of special offers and details.
                </p>
                <button className={styles.subscribeButton}>Subscribe</button>
            </div>

            <div className={styles.subscribeDiv2}>
                <Image
                    className={styles.mobileAppImg}
                    src="logos/Rectangle.svg"
                    alt="Mobile App"
                    width={249}
                    height={435}
                />
                <div className={styles.DownloadLinkDiv}>
                    <p className={styles.downloadLinkPara}>
                        Enter your number and receive <br />
                        a direct link to download the app
                    </p>
                    <GetTheLink />
                    <p className={styles.getItOnPara}>Get it on</p>
                    <div className={styles.StoreLinks}>
                        <Image src="logos/googlePlay.svg" alt="Google Play" width={103} height={30} />
                        <Image src="logos/appleStore.svg" alt="Apple Store" width={103} height={30} />
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            <div className={styles.subscribeDiv2Mobile}>
                <div className={styles.subscribeDiv2Main}>
                    <Image
                        className={styles.mobileAppImgMV}
                        src="logos/Rectangle.svg"
                        alt="Mobile App"
                        width={136}
                        height={245}
                    />
                    <div className={styles.DownloadLinkDiv}>
                        <p className={styles.getItOnParaMV}>Get it on</p>
                        <div className={styles.StoreLinksMV}>
                            <Image src="logos/googlePlay.svg" alt="Google Play" width={103} height={30} />
                            <br />
                            <Image src="logos/appleStore.svg" alt="Apple Store" width={103} height={30} />
                        </div>
                        <p className={styles.downloadLinkParaMV}>
                            Enter your number and receive a direct link <br />to download
                            the app
                        </p>
                    </div>
                </div>
                <div className={styles.downloadInputDiv}>
                    {/* Component for phone number with validation */}
                    <GetTheLink />
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
