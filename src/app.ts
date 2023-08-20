// require('dotenv-flow').config();
// import express from 'express';
// import { router as __router } from "./route/app"


// const app = express();
// const port = process.env.PORT || 3000;

// app.use(__router);

// app.listen(port, () => {
//   return console.log(`Server is running on port ${port}`);
// });

import app from './config/app';

export default app;