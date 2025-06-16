import React, {
  useState,
  useEffect,
  useRef,
  type MouseEvent,
  type JSX,
} from 'react';
import logo from '@/assets/Header/Header_Logo.png';
import styles from './styles.module.css';
import { useNavigate, useLocation } from 'react-router';

interface NavItem {
  label: string;
  path: string;
}

export function Header(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Портфолио', path: '/portfolio' },
    { label: 'Прайс', path: '/price' },
    { label: 'Отзывы', path: '/reviews' },
    { label: 'Контакты', path: '/contacts' },
  ];

  const handleNavigation = (path: string): void => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        burgerRef.current &&
        !menuRef.current.contains(target) &&
        !burgerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside as unknown as EventListener
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener
      );
    };
  }, []);

  return (
    <header className={menuOpen ? styles.header_open : styles.header}>
      {/* Логотип: слева сверху в закрытом, по центру в открытом меню */}
      {menuOpen ? (
        <div
          className={styles.header__logo_menu}
          onClick={() => handleNavigation('/')}
        >
          <img src={logo} alt="logo" />
        </div>
      ) : (
        <div
          className={styles.header__logo}
          onClick={() => handleNavigation('/')}
        >
          <img src={logo} alt="logo" />
        </div>
      )}

      <nav
        ref={menuRef}
        className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}
      >
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`${styles.header_nav} ${
              location.pathname === item.path ? styles.active : ''
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav>

      <div
        ref={burgerRef}
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
}
