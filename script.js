import { config } from "dotenv";
import { OpenAI } from "openai";
import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';

config();
const app = express();
const openai = new OpenAI({apiKey: process.env.API_KEY});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    const htmlFilePath = path.join(__dirname, 'public', 'frontend.html');
    res.sendFile(htmlFilePath)
})

app.get("/ask-chatGPT", (req,res) => {
    openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": req.query.query}],
    }).then(res => console.log(res.choices[0].message))
})




  


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
