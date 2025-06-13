// export default {
//   origin:
//     process.env.NODE_ENV === 'production'
//       ? ['http://localhost:5173', 'http://localhost:5174']
//       : '*',

//   optionsSuccessStatus: 200,

//   credentials: true,
// };
export default {
  origin: ['http://localhost:5173', 'http://localhost:5174'], 
  optionsSuccessStatus: 200,
  credentials: true,
};