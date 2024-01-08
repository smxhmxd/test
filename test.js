function showcall(fn) {
    num = 10;
    fn(num);
}

showcall(function(num) {
    console.log(num);
});