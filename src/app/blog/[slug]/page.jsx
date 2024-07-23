import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage =()=>{
    return (
    <div className={styles.container}> 
    <div className={styles.imgContainer}>
      <Image src="/pexels-willianjusten-15845935.jpg" alt="" fill className={styles.img}/></div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details} >
          <Image 
          className={styles.avatar}
          src="/pexels-willianjusten-15845935.jpg" 
          alt=""
          width={50}
          height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Aditi Bhargav</span>
            </div>
            <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident nemo dolores doloribus aut sapiente quaerat quasi? Veniam, deleniti repellat quo incidunt blanditiis corrupti saepe molestias, voluptatem, suscipit quisquam nesciunt?
          </div>
      </div>
    </div>
    );
  };
  
  export default SinglePostPage;