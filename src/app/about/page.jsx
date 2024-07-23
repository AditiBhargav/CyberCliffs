import Image from "next/image";
import styles from "./about.module.css";
const AboutPage =()=>{
    return (
    <div className={styles.container}> 
    <div className={styles.textContainer}>
      <h2 className={styles.subtitle}>About Agency</h2>
      <h1 className={styles.title}>
      We develop digital solutions that are more innovative and exceptional.
      </h1>
      <p className={styles.desc}>
      We craft digital solutions that are bigger, bolder, braver, and better.
      We value innovative ideas, flexibility, and precision. As a dedicated team of
      developers and designers, we provide a wide range of web and software development 
      services with professionalism and passion.
      </p>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>10 K+</h1>
          <p>Years of experience</p>
        </div>
        <div className={styles.box}>
          <h1>10 K+</h1>
          <p>Years of experience</p>
        </div>
        <div className={styles.box}>
          <h1>10 K+</h1>
          <p>Years of experience</p>
        </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image 
      src="/about.png" 
      alt="About Image"
      fill
      className={styles.img}/>
      </div>
      </div>

    );
  };
  
  export default AboutPage;