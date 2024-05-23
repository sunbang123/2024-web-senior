const express = require("express");
const axios = require("axios"); //HTTP 요청을 보낼 때 사용하는 라이브러리
const bodyParser  =require('body-pareser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// 영화 정보 API 엔드포인트 설정
app.get('/api/boxoffice', async (req, res) => {
    const { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd } = req.query;
    
})