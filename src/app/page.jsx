import Image from "next/image";
import styles from './home.module.css';
const Home =()=>{
  return  (
  <div className={styles.container}> 
  <div className={styles.textContainer}>
    <h1 className={styles.title}>Innovation Channel.</h1>
    <p className={styles.desc}>
    Hub of visionary minds, turning imaginative ideas into impactful projects and where dreams take shape, and inspiration knows no bounds.
    </p>
    <div className={styles.buttons}>
      <button type="button" className={styles.button}>Learn More</button>
      <button type="button" className={styles.button}>Contact</button>
    </div>
    <div className={styles.brands}>
      <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
    </div>
  </div>
  <div className={styles.imgContainer}>
    <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
  </div>
  </div>);
};

export default Home;