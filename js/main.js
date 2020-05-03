document.getElementById("search").addEventListener("click", findUser);

function getAllUsersAndDrow(){
    const myRequest= new Request();
    myRequest.get(`https://api.github.com/users?page=1&per_page=100`, "JSON", drawAllUsers, getTextFail, progress)
    function drawAllUsers(result){
        const output = result.response.reduce((str, item) => {
            return str += `<div onclick = "getUser('${item.login}', false)" data-user="${item.login}" class="user-item">
                        <img src ="${item.avatar_url}" class="user-image">
                        <span class="user-name" >${item.login}</span></div>`;
        }, '');

        document.getElementById("place").innerHTML = output;
    }
}

function findUser(){
    if (document.getElementById("lname").value){
        const clickedUser = document.getElementById("lname").value;
        getUser(clickedUser, false);
    }
}

function getUser(userName, dispatch=true){
    history.pushState({}, null, `#${userName}`);

    const myRequest= new Request();
    myRequest.get(`https://api.github.com/users/${userName}`, "JSON", drawUser, getTextFail, progress);
    function drawUser(result){
        const output = `<p><img src ="${result.response.avatar_url}" id="user-image"></p>
                      <div id="curent-user"><h1>Name: ${result.response.name}</h1>
                         <h2>Login: ${result.response.login}</h2>
                         <h3>Followers: ${result.response.followers}</h3>
                         <h3>Location: ${result.response.location}</h3>
                         <a id = "user-blog-url" href="${result.response.blog}">My Blog</a></div>`

        document.getElementById("place").innerHTML = output;
    }
}
window.addEventListener('hashchange', simpleRouter);
window.addEventListener('DOMContentLoaded', simpleRouter)

function simpleRouter() {
    if(window.location.hash === '') {
        getAllUsersAndDrow();
    }
    else{
       const userName =  window.location.hash.substr(1);
       getUser(userName, false);
    }
}

function progress(){
    document.getElementById("place").innerHTML = `<img src="loading.gif">`;
}

function getTextFail(){
    document.getElementById("place").innerHTML = "User Not Found";
}
