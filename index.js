const express = require("express");
const axios = require("axios");
const app = express();

app.get("/x", async (req, res) => {
  const name = req.query.name;

  try {
    const url = 'https://tera.backend.live/app';
    const headers = {
      'User-Agent': 'okhttp/5.0.0-alpha.10',
      'Accept-Encoding': 'gzip',
      'Content-Type': 'application/json; charset=utf-8',
      'key': 'i094kjad090asd43094@asdj4390945',
    };

    const data = {
      url: name,
      token: 'QOrJ9S39UCIDsBgwLhP+jqlAR7s/QRhZ6LHo2Sqx961StIQTms0hGEvYqrEiyG7L54t3/ATX/hHXZc3SBsFVAq6hzL5WnSxXACAWP2gH/dvWOC1Fwhg16LAKm0cHqP6ejKdgyar2qpPdU7dnKQs9tCoVoGJjMvFnWLPAYvccvugFb6jhnT9hkHzkGB+TF586dsaZkj0oQM2fNC7vIJDStTff+LxuzFYKL//iN44KFCNm0g4mTdhu3Xhg7++PUHVS3TXvTONLhsriw56laIO/ImHWtJ06PxGBMGeD3ZTj+bs='
    };

    const response = await axios.post(url, data, { headers });
    res.json(response.data);

  } catch (error) {
    console.error('Request failed:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4000, () => {
  console.log("API is running");
});