import styles from "./MainIndex.module.scss";
import { PropsMainIndex } from "./interfaces";
import { memo } from "react";
import ProjectItem from "../projects/projects";
function MainIndex({}: PropsMainIndex) {
  return (
    <div className={styles.container_main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo/logo.png" alt="logo" />
        </div>
        <nav className={styles.nav}>
          <a href="#home">Trang chủ</a>
          <a href="#project">Dự án</a>
          <a href="#technology">Công nghệ</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.avatarBox}>
            <img className={styles.avatar}src="/images/logo/avatar.png" alt="Avatar"/>
          </div>
          <div className={styles.intro}>
            <p className={styles.subTitle}>Tôi đây</p>
            <h1 className={styles.title}>I'm a Software Engineer.</h1>
            <p className={styles.description}>
              A self-taught coder & designer. Passionate in the industry for 1+
              years now. I have worked with multiple agencies and clients that
              connect smartphone between user and business goals.
            </p>
          </div>
        </section>
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
        </footer>
      </div>
    </div>
  );
}

export default memo(MainIndex);
