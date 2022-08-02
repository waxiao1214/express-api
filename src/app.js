import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { connectDB } from './db';
import { Routes } from './routes';
// import { RegisterRoutes } from './routes';

export const app = express();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

Routes(app);

if (process.env.NODE_ENV === "development") {
  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Swagger REST API",
        description: "A REST API built with Express and MongoDB"
      },
    },
    apis: [__dirname + "/controllers/*"],
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  try {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  } catch (err) {
    console.error(err);
  }
}
