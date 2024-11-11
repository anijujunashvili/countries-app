import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
  var obj = [];
  for (let i = 0; i < res.data.length; i++) {
    const name = res.data[i].title.split(" ");
    obj.push({
      id: res.data[i].id,
      name: {
        ka: name[0],
        en: name[0],
      },
      capital: {
        ka: name[1],
        en: name[1],
      },
      intro: {
        ka: res.data[i].title,
        en: res.data[i].title,
      },
      population: res.data[i].id * 1000000,
      flag: "georgia.png",
      image: res.data[i].thumbnailUrl,
      vote: 0,
      disabled: 0,
      uploaded: 0,
    });
  }

  axios.post("http://localhost:3000/countries", obj).then((res) => {
    console.log(res);
  });
});
