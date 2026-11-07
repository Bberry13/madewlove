import express from 'express';
import dotenv from 'dotenv';
import { readFile } from 'node:fs';
import path from 'path'; // <== добавляем
import serverConfig from './configs/serverConfig.js';
import indexRouter from './routes/index.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

serverConfig(app);

// API-маршруты
app.use('/api', indexRouter);
app.use('/api/auth', authRouter); // <== если это не внутри indexRouter

// === СТАТИКА: отдача build-версии фронта ===
// Путь до client/build (или dist, если Vite)
const __dirname = path.resolve();
const clientBuildPath = path.resolve(process.env.CLIENT_DIST_PATH || '/root/madewlove/client/dist'); // или 'build'

app.get(['/vipiski', '/ckb'], (_req, res) => {
  res.redirect(301, '/');
});

app.use(express.static(clientBuildPath, { index: false, redirect: false }));

// Only known public routes receive indexable HTML; unknown routes return HTTP 404.
const publicPages = new Set(["/","/contacts","/reviews","/oferta","/politics","/price","/portfolio","/price/pregnancy","/portfolio/pregnancy","/price/birth","/portfolio/birth","/price/newborn","/portfolio/newborn","/price/baptism","/portfolio/baptism","/price/family","/portfolio/family","/price/one-year","/portfolio/one-year","/price/photo-books","/portfolio/photo-books","/price/extracts","/portfolio/extracts","/price/extracts/ckb","/portfolio/extracts/ckb","/price/extracts/lapino","/portfolio/extracts/lapino","/price/extracts/md","/portfolio/extracts/md","/price/extracts/townextra","/portfolio/extracts/townextra"]);
const privatePages = new Set(['/sign-in', '/sign-up']);
app.get(/(.*)/, (req, res, next) => {
  if (req.path === '/api' || req.path.startsWith('/api/')) { next(); return; }
  const pathname = req.path.replace(/\/$/, '') || '/';
  const known = publicPages.has(pathname) || privatePages.has(pathname);
  const file = publicPages.has(pathname) && pathname !== '/'
    ? path.join(clientBuildPath, pathname.slice(1), 'index.html')
    : path.join(clientBuildPath, 'index.html');
  readFile(file, 'utf8', (error, html) => {
    if (error) { res.status(500).send('Page unavailable'); return; }
    if (!publicPages.has(pathname)) res.set('X-Robots-Tag', 'noindex');
    res.status(known ? 200 : 404).type('html').send(html);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(
    `Database URL: ${process.env.DATABASE_URL ? 'Configured' : 'Not configured'}`,
  );
  console.log(
    `JWT Secrets: ${
      process.env.ACCESS_TOKEN_SECRET && process.env.REFRESH_TOKEN_SECRET
        ? 'Configured'
        : 'Not configured'
    }`,
  );
});
