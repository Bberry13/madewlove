import React, { useState, useEffect, useRef, type MouseEvent } from 'react';
import logo from '@/assets/Header/Header_Logo.png';
import styles from './styles.module.css';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router';

interface NavItem {
  label: string;
  path: string;
}

export function Header(): React.JSX.Element {
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
        // setMenuOpen(false);
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
  console.log('МЕНЮОУПЕН', menuOpen);
  return (
    <>
      <img
        src={logo}
        alt='logo'
        className={clsx(styles.header__logo, styles.header__logo_pc, {
          [styles.header__logo_hide]: menuOpen,
        })}
        onClick={() => handleNavigation('/')}
      />
      <header
        className={clsx(styles.header, {
          [styles.header_open]: menuOpen,
        })}
      >
        <div
          className={clsx(styles.header__logo, {
            [styles.header__logo_open]: menuOpen,
          })}
          onClick={() => handleNavigation('/')}
        >
          <img src={logo} alt='logo' />
        </div>

        <nav ref={menuRef} className={styles.navMenu}>
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
      </header>
      {!menuOpen ? (
        <div
          ref={burgerRef}
          className={styles.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      ) : (
        <div className={styles.burgerOpen} onClick={() => setMenuOpen(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='30px'
            viewBox='0 -960 960 960'
            width='30px'
            fill='#ede5dd'
          >
            <path d='m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
          </svg>
        </div>
      )}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='30px'
          viewBox='0 -960 960 960'
          width='30px'
          fill='#e3e3e3'
        >
          <path d='m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z' />
        </svg>
      </button>
    </>
  );
}
