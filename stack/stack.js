function Stack() {
    this.data = [];
    this.index = 0;
    this.push = push;
    this.pop = pop;
}

function push(element) {
    this.data[this.index++] = element;
}

function pop() {
    return this.data[--this.index];
}
let s = new Stack()
s.push("Arsak")
s.push("Xoro")
s.push("Samo")
// s.push("Samoooooo")

let betmen=  s.pop()
console.log(betmen)