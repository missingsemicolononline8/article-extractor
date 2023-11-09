import express from "express";
import { extract } from '@extractus/article-extractor';
const app = express();
const PORT = "5001";
import cors from "cors";
import fetch from 'cross-fetch'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { setSanitizeHtmlOptions } from "@extractus/article-extractor";

const proxy = 'http://abc:RaNdoMpasswORd_country-France@proxy.packetstream.io:31113'


app.use(cors());

setSanitizeHtmlOptions({
  allowedTags: [
      "p","br","h1","h2","h3","h4","h5","h6"
  ]
})

app.get('/extract', async(req,res) => {
  const article = await extract(req.query.url)
  console.log(article.content)
  res.json(article);
} )

app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})