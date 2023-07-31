const url = "https://api.github.com/users";
const myForm = document.querySelector("#myForm");

function display(response) {
  // console.log(response);
  let str = "";
  response.data.forEach((res) => {
    // console.log(res);
    const row = document.querySelector(".row");
    str += `
     <div class="col-12 col-md-6 col-lg-4">
     <a class="col__a" href="https://www.github.com/${res.login}">
    <div class="card d-flex flex-column align-items-center pt-3">
      <img src="${res.avatar_url}" alt="" />
      <div class="card-body">
        <h5 class="card-title">${res.login}</h5>
      </div>
    </div>
    </a>
  </div>
  `;
    row.innerHTML = str;
  });
}

async function getPost() {
  try {
    const response = await axios.get(url);
    display(response);
  } catch (err) {
    console.log(err);
  }
}
getPost();

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let search = document.querySelector("#search").value;
  const a = search.split(" ").join("");
  async function searchGet() {
    try {
      const response = await axios.get(`${url}/${a}`);
      console.log(response.data);
      document.querySelector(".row").innerHTML = `
     <div class="col-12 col-md-6 col-lg-4">
     <a class="col__a" href="https://www.github.com/${a}">
     <div class="card d-flex flex-column align-items-center pt-3">
       <img src="${response.data.avatar_url}" alt="" />
       <div class="card-body">
         <h5 class="card-title">${response.data.login}</h5>
       </div>
     </div>
     </a>
   </div>
      `;
    } catch (err) {
      console.log(err);
    }
  }
  searchGet();
  document.querySelector("#search").value = "";
});

// function search() {
//   console.log(arguments);
// }
// search(1);

// console.log(this);
