"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingText.module.scss";

export default function RotatingText() {
  const texts = [
    "Đội ngũ giàu kinh nghiệm",
    "Hỗ trợ nhiệt tình",
    "Giá cả hợp lý",
    "Cam kết chất lượng",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        // Đang gõ chữ
        if (subIndex < texts[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          // Dừng 1 chút trước khi xoá
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        // Đang xoá chữ
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          // Xoá xong → chuyển câu mới
          setDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }
    }, deleting ? 50 : 100); // tốc độ xóa / gõ

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Nháy dấu |
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={styles.subTitle}>
      {texts[index].substring(0, subIndex)}
      <span className={blink ? styles.cursor : styles.cursorHidden}>|</span>
    </div>
  );
}
