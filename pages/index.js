import styles from './../styles/home.module.css';

const Home = () => {
  return ( 
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <h1 className={styles.name}>Bohdan Barulin</h1>
              <span className={styles.subtitle}>Web-developer</span>
            </div>
            <img className={styles.avatar} src="/images/avatar.jpg" alt="Avatar" />
          </div>
          <h2 className={styles.title}>About me</h2>
          <p className={styles.about}>I am a web developer who is passionate about building web applications that are efficient, user-friendly, and visually appealing. My current focus is on learning React, Next.js, and Supabase, as I believe that these technologies are essential for building modern and scalable web applications. I enjoy exploring new tools and frameworks and constantly strive to improve my skills and stay up-to-date with the latest trends in web development. When I'm not coding, you can usually find me reading tech blogs, listening to podcasts, or tinkering with side projects.</p>
        </div>
      </div>
    </main>
   );
}
 
export default Home;