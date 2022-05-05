// const triggerBtn = document.getElementById("trigger-api-btn");
// const triggerAsyncBtn = document.getElementById("trigger-async-btn");

// const url = "https://api.github.com/orgs/nodejs/repos";
// const fetchOptions = {
//   method: "GET",
// };

// async/await
// const handleAsyncButtonClick = async () => {
//     try {
//       // make request to API
//       const response = await fetch(url, fetchOptions);

//       // check response status
//       if (response.status === 200) {
//         // display data
//         const data = await response.json();

//         console.log(data);
//       } else {
//         // throw error
//         throw new Error("Something went wrong");
//       }
//     } catch (error) {
//       // handle error
//       console.log(error.message);
//     }
//   };

//   triggerBtn.addEventListener("click", handleButtonClick);
//   triggerAsyncBtn.addEventListener("click", handleAsyncButtonClick);
const apiKey = "http://www.omdbapi.com/?s=batman&apikey=3eadfa86";
//S IS BY PARAMETER //BATMAN IS THE TITLE SEARCHED FOR
const fetchOptions = {
  method: "GET",
};
const button = document.getElementById("get-movie-api");
const handleClick = async () => {
  try {
    const response = await fetch(apiKey, fetchOptions);
    if (response.status === 200) {
      const data = await response.json();

      console.log(data);
    } else {
      throw new Error("Something");
    }
  } catch (error) {}
};

button.addEventListener("click", handleClick);

const foodApiKey =
  "https://private-anon-363d9a5164-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza";
const fetchOptionsForFood = {
  method: "GET",
};
const fooButon = document.getElementById("get-foo-api");
const handleClickOnFoo = async () => {
  try {
    const response = await fetch(foodApiKey, fetchOptionsForFood);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("something");
    }
  } catch (error) {}
};

fooButon.addEventListener("click", handleClickOnFoo);
