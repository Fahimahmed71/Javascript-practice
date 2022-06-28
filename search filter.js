const book = [
  "Eloquent JavaScript",
  "JavaScript: The Good Parts",
  "You Don't Know JS: Scope & Closures",
  "Head First JavaScript Programming",
  "A Smarter Way to Learn",
  "JQuery: Interactive Front-End Web Development",
];

const search = "javascript";
const output = [];

for (const loop of book) {
  if (loop.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
    output.push(loop);
  }
}
console.log(output);
