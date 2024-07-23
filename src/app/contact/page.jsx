import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="Contact Image" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea
                        name="xyz"
                        id="12"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;