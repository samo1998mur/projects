// function Stack() {
//     this.data = [];
//     this.index = 0;
//     this.push = push;
//     this.pop = pop;
// }
//
// function push(element) {
//     this.data[this.index++] = element;
// }
//
// function pop() {
//     return this.data[--this.index];
// }
// let s = new Stack()
// s.push("Arsak")
// s.push("Xoro")
// s.push("Samo")
// // s.push("Samoooooo")
//
// let betmen=  s.pop()
// console.log(betmen)

function Stack() {
    let data = [];
    let index = 0;

    return {
        push: function(element) {
            return  data[index++] = element;
        },
        pop: function() {
           return  data[index--];
        },
        length: function() {
            return index+1;
        }
    }

}

const klor = new Stack();

klor.push("a");
klor.push("b");
klor.push("c");
klor.push("d");
klor.push("k");
klor.pop();
klor.length();
console.log(klor.pop())
console.log(klor.length())


