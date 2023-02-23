function loadUsers2 (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayEmail(data))
};


function displayData2 (data){
    const ul = document.getElementById('users-list')
    for (const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


function displayEmail (data){
    const ul = document.getElementById('users-list')
    const user = data.map(x => {
        const li = document.createElement('li');
    li.innerText = x.email;
    ul.appendChild(li)
    })
}