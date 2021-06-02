//OBject
let post = new Post('a', 'b','e');

console.log(post);

//Constructor Functions
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


