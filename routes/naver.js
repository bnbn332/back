const express = require("express");
const router = express.Router();
const Axios = require("axios");

/* GET home page. */
router.get("/getNaverMovie", async function (req, res) {
  let query = req.query.query;
  let reqOptions = {
    headers: {
      "X-Naver-Client-Id": "WuBKWhMNAk2cahL07B1P",
      "X-Naver-Client-Secret": "cdJaSRfMrr",
    },
    params: {
      query: query,
    },
  };
  try {
    let movieRes = await Axios.get(
      "https://openapi.naver.com/v1/search/movie.json",
      reqOptions
    );

    return res.json(movieRes.data);
  } catch (e) {
    return res.json({
      status: 400,
      message: e,
    });
  }
});

module.exports = router;
