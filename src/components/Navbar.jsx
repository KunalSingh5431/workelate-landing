import { Menu, Button } from "antd";
import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { RocketIcon } from "lucide-react";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const menuItems = [
    { key: "why", label: "Why" },
    { key: "features", label: "Features" },
    { key: "pricing", label: "Pricing" },
    { key: "stories", label: "Stories" },
  ];

  return (
    <div className={styles.navWrap}>
      <div className={styles.navInner}>
        <div className={styles.brand}>WorkElate</div>

        <div className={styles.right}>
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={(e) => setCurrent(e.key)}
            theme="dark"
            className={styles.menu}
            items={menuItems.map((item) => ({
              key: item.key,
              label: (
                <Link
                  to={item.key}
                  smooth={true}
                  duration={520}
                  offset={-80}
                  className={styles.navLink}
                  activeClass={styles.navLinkActive}
                >
                  {item.label}
                </Link>
              ),
            }))}
          />

          <Button
            type="primary"
            className={styles.cta}
            onMouseEnter={(e) => e.currentTarget.classList.add(styles.ctaHover)}
            onMouseLeave={(e) => e.currentTarget.classList.remove(styles.ctaHover)}
          >
          <RocketIcon size={18} strokeWidth={2.4} style={{ marginLeft: "8px" }} />
            Escape Tool Hell →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
