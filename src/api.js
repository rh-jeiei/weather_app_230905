import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "eaa567b7eff8cb252899300f20ed3a89",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = 35.157656612362736;
  const lon = 129.05911161055482;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => console.log(response.data));
};

// *axios
// =>npm i axios
// =>프론트에서 필요한 데이터를 서버에 요청하는데
// url에 필요한 변수값 등을 설정함
// 
