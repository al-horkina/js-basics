(() => {
    const getRandom = (x = prompt('Put first number: '), y = prompt('Put second number: ') ) => {
        const result  = Math.floor(Math.random() *(y - x)) + Number(x);
        return result;
    }
    console.log(getRandom());
})();