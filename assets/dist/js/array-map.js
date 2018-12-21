(() => {
    const arr = [1, 2, 3];

    const square = (x) => { return x * x; };

    const map = (fn, array) => {
        const result = [];

        array.forEach((item, i, array) => {
            result.push(square(array[i]));
        });
        return result;

    };
    console.log(map(square, arr));
})();