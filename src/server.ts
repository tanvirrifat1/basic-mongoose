import app from "./app";
import mongoose from "mongoose";

const port: number = 5000;

// database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice_mongoose");
    console.log("Database connect successfully");

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (err) {
    console.log(`failed to connect database`, err);
  }
}

bootstrap();
