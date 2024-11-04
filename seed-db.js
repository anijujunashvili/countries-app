import axios from "axios";

axios.get("https://restcountries.com/v3.1/all").then((res) => {
  const obj = {};
  for (let i = 0; i < res.data.length; i++) {
    obj[i] = {
      id: i,
      name: {
        ka: res.data[i].name.common,
        en: res.data[i].name.common,
      },
      capital: {
        ka: res.data[i].capital,
        en: res.data[i].capital,
      },
      intro: {
        ka: res.data[i].status,
        en: res.data[i].status,
      },
      population: res.data[i].population,
      flag: res.data[i].flags.png,
      image: "",
      vote: 0,
      disabled: 0,
      uploaded: 0,
    };
  }

  axios.post("http://localhost:3000/countries", obj).then((res) => {
    console.log(res);
  });
});
