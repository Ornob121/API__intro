function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
};

function displayComments(comments){
    const divContainer = document.getElementById('comment-container');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <h3> User: ${comment.postId} </h3>
        <p> Name: ${comment.name} </p>
        <p> Email: ${comment.email} </p>
        <p> Description: ${comment.body} </p>
        `
        divContainer.appendChild(div);
    }
}

comments();