# Деплой сайта MadewLove (Vite + Node.js/Express + Nginx + SSL)

## 1. Подготовка VPS

1. Заказать VPS на reg.ru (или другом хостинге) с Ubuntu 24.04 LTS.
2. Сгенерировать SSH-ключ на локальном ПК и добавить публичный ключ при заказе сервера.
3. Подключиться к серверу по SSH:
   ```bash
   ssh root@<IP_СЕРВЕРА>
   ```

## 2. Установка ПО на сервере

```bash
apt update && apt upgrade -y
apt install -y git curl nano
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
npm install -g pm2
apt install -y nginx
```

## 3. Клонирование и подготовка проекта

```bash
cd /root
# Клонируем проект
git clone <ВАШ_РЕПОЗИТОРИЙ> madewlove
cd madewlove
```

### 3.1. Настройка .env файлов

- Создайте `.env` в `/root/madewlove/server` (для backend)
- Создайте `.env` в `/root/madewlove/client` (для frontend, все переменные должны начинаться с VITE\_)

## 4. Сборка и запуск клиента

```bash
cd /root/madewlove/client
npm install
npm run build
```

## 5. Сборка и запуск сервера

```bash
cd /root/madewlove/server
npm install
npx prisma generate # если используется Prisma
npm run build
cp -r src/generated dist/src/ # если используется Prisma
pm2 start dist/src/app.js --name madewlove
pm2 save
pm2 startup
```

## 6. Привязка домена

1. В панели управления доменом укажите A-запись на IP вашего VPS для madewlove.ru и www.madewlove.ru.
2. Дождитесь обновления DNS (10–30 минут, максимум 24 часа).

## 7. Настройка nginx

```bash
sudo nano /etc/nginx/sites-available/madewlove
```

Пример конфига:

```nginx
server {
    listen 80;
    server_name madewlove.ru www.madewlove.ru;
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/madewlove /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default # удалить дефолтный сайт
sudo nginx -t
sudo systemctl reload nginx
```

## 8. Настройка SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d madewlove.ru -d www.madewlove.ru
```

- Введите email, согласитесь с условиями, выберите редирект на https.

## 9. Проверка

- Откройте https://madewlove.ru — должен открыться ваш сайт.
- Проверьте статус процессов:
  ```bash
  pm2 status
  sudo systemctl status nginx
  ```
- Проверяйте DNS через https://www.whatsmydns.net/#A/madewlove.ru

## 10. Полезные команды

- Перезапустить сервер:
  ```bash
  pm2 restart madewlove
  ```
- Перезапустить nginx:
  ```bash
  sudo systemctl reload nginx
  ```
- Проверить логи nginx:
  ```bash
  sudo tail -n 50 /var/log/nginx/error.log
  ```

---

**Теперь ваш сайт работает 24/7 по адресу https://madewlove.ru!**

Если потребуется — добавьте разделы по миграциям БД, настройке почты, переменным окружения и т.д.
