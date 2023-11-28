import express from 'express';

const app = express();

const handleListen = () => console.log("듣고 있어 http://localhost:3000");
app.listen(3000, handleListen);



