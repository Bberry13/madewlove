import React, { useEffect } from 'react';

declare global {
  interface Window {
    ym?: YandexMetrikaFunction;
  }
}

type YandexMetrikaFunction = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

interface YandexMetrikaProps {
  consentGiven: boolean;
}

export const YandexMetrika: React.FC<YandexMetrikaProps> = ({
  consentGiven,
}) => {
  const initYandexMetrika = () => {
    if (!consentGiven) return;

    // Защита от повторной вставки скрипта
    if (document.getElementById('yandex-metrika-script')) return;

    // Определяем глобальную функцию ym (если её нет)
    if (typeof window.ym !== 'function') {
      const ymFunc: YandexMetrikaFunction = (...args: unknown[]) => {
        (ymFunc.a = ymFunc.a || []).push(args);
      };
      ymFunc.a = [];
      ymFunc.l = Date.now();
      window.ym = ymFunc;
    }

    // Создаём и вставляем тег <script>
    const script = document.createElement('script');
    script.id = 'yandex-metrika-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    script.onload = () => {
      // после загрузки скрипта инициализируем счётчик
      window.ym!(102623778, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true,
      });
    };
    document.head.appendChild(script);

    // Вставляем <noscript> для отключённого JS
    if (!document.getElementById('yandex-metrika-noscript')) {
      const noscript = document.createElement('noscript');
      noscript.id = 'yandex-metrika-noscript';
      noscript.innerHTML = `
        <div>
          <img
            src="https://mc.yandex.ru/watch/102623778"
            style="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
      `;
      document.body.appendChild(noscript);
    }
  }

  useEffect(() => {
    initYandexMetrika();
  }, [consentGiven]);

  return null;
};
