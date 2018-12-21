(() => {
    function simplN( n = prompt('Enter n: ')) {
        let result = '';
        outer:
        for (let i = 2; i <= n; ++i) {
              for (let j = 2; j < i; ++j) {
                if (i % j == 0) continue outer;
            }
            console.log(i);
            result += i + " ";
        }

       alert (result);
    }

    simplN();
})();