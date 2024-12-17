// entry point
// server.js

// import express from "express";

const express = require('express');
const app = express();

app.listen(8080, function(){
  console.log('listening on 8080')
});

app.get('/pet', function(요청, 응답){
  응답.send('test');
});

// const corsOptions = {
//     origin: "http://localhost:4000",
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     credentials: true,
// };

// app.use(cors(corsOptions));
// app.use("/", rootRouter);
// export default app;