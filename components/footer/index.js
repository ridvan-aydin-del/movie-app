import React from "react";
import Link from "next/link";

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.instagram.com/ridvnaydin" target="_blank">
        Rıdvan Aydın
      </Link>
    </footer>
  );
}

export default Footer