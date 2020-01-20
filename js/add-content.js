var today = Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow>0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3');

    // Program to print a sentence 10 times
    class Loop {
        public static void main(String[] args) {
           
           for (int i = 1; i <= 10; ++i) {
              document.write("Snow Day " + i);
           }
        }
     }