import { config } from "dotenv";
import { OpenAI } from "openai";
config();


const openai = new OpenAI({apiKey: process.env.API_KEY});

openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "hello chatGPT!"}],
  }).then(res => console.log(res.choices[0].message))
