import styles from "./MainIndex.module.scss";
import { PropsMainIndex } from "./interfaces";
import { memo } from "react";
import ProjectItem from "../projects/projects";
import RotatingText from "../RotatingText";
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
            <RotatingText />
              <h2 className={styles.title} >IT Outsourcing</h2>
            <p className={styles.slogan}>Giải pháp hiệu quả – sản phẩm dùng được ngay. </p>
             <p className={styles.slogan}>Dự án chất lượng – bàn giao nhanh chóng.</p>
             <p className={styles.slogan}>Code sạch – hệ thống ổn định – trải nghiệm mượt mà.</p>
             <p className={styles.slogan}>Bạn cần gì — tôi làm đúng thứ bạn muốn.</p>
             <p className={styles.slogan}>Thiết kế chuẩn UX/UI – tối ưu mọi nền tảng.</p>
             <p className={styles.slogan}>Bảo mật thông tin – cam kết an toàn dữ liệu.</p>
              <h3 className={styles.content} >Hãy để chúng tôi biến ý tưởng của bạn thành hiện thực</h3>
          </div>
         
        </section>
        <section className={styles.skills}>
          <h3>Công nghệ sử dụng</h3>
          {/* KỸ NĂNG */}
          <div className={styles.skillIcons}>
            <span className={styles.icon} ><img src="/images/logo/dotnet.png" alt="dotnet"/> C#</span>
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
