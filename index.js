import app from "./server.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

console.log(`testKey = ${process.env.testKey}`);

app.listen(PORT, handleListening);