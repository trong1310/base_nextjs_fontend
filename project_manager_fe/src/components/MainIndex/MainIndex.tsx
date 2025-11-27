import styles from "./MainIndex.module.scss";
import { PropsMainIndex } from "./interfaces";
import { memo } from "react";
import ProjectItem from "../projects/projects";
function MainIndex({}: PropsMainIndex) {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>T</div>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#link">Link</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img className={styles.avatar} src="/avatar.png" alt="avatar" />
        <p className={styles.subTitle}>"Judges a book by its cover."</p>
        <h1 className={styles.title}>I'm a Software Engineer.</h1>
        <p className={styles.description}>
          A self-taught coder & designer. Passionate in the industry for 1+
          years now. I have worked with multiple agencies and clients that
          connect smartphone between user and business goals.
          {/*   
           Một lập trình viên và nhà thiết kế tự học. Đã có niềm đam mê trong ngành được hơn 1 năm. 
           Tôi đã làm việc với nhiều công ty và khách hàng nhằm kết nối điện thoại thông minh với các mục tiêu của người dùng và doanh nghiệp.
          */}
        </p>
      </section>

      {/* Work Experience */}
      <section className={styles.work}>
        <h2>Work Experience</h2> {/*KINH NGHIỆM */}
        <div className={styles.workGrid}>
          <div className={styles.workCard}>CB on the Mobile</div>
          <div className={styles.workCard}>CB on the Mobile</div>
          <div className={styles.workCard}>CB on the Mobile</div>
          <div className={styles.workCard}>CB on the Mobile</div>
        </div>
      </section>

      {/* Skills Icons */}
      <section className={styles.skills}>
        <h3>SKILL</h3>
        {/* KỸ NĂNG */}
        <div className={styles.skillIcons}>
          <span>🟣</span>
          <span>🟡</span>
          <span>🔵</span>
          <span>🟠</span>
          <span>🟤</span>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <ProjectItem />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Contact</p>
        <div className={styles.socials}>
          <span>📧</span>
          <span>🐦</span>
          <span>💼</span>
        </div>
        <p>© 2025. Designed by You.</p>
      </footer>
    </div>
  );
}

export default memo(MainIndex);
