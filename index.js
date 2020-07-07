//Get data through Fetch API convert into json file

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}
getData();

//
//Fetch API through POST method

async function postData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      username: "mohsinraz_",
      password: 333,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = response.json();
  console.log(data);
}
postData();
