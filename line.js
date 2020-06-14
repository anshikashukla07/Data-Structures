Object.defineProperty(global, '__line', {
    get: function(){
        return ((new Error()).stack.split("\n")[2].trim().replace(/^(at\s?)(.*)/gim, "$2 >").replace(__dirname, ""))
    }
});
