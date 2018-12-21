/*
((a, b, c) => {
    console.log(a + b +c);
    return a + b +c;
})(1, 2, 3);*/

/*Рекурсия, факториал*/
/*(() => {
    const getFactorial = function(n) {
        return (n > 1) ? n * getFactorial(n-1) : n;
    };
    console.log(getFactorial(6));
})();*/

/*(() => {
    const getFactorial = function getF(n) {
        return (n > 1) ? n * getF(n-1) : n;
    };
    console.log(getFactorial(6));
})();*/

/*(() => {
   function getDate(d = 'today') { //значение по умолчанию

      /!* if (typeof d === 'undefined') //значение по умолчанию по старому
           d = 'today';*!/

    // d = (typeof d === 'undefined') ? 'today' : d;

   }
    alert(getDate());

})();*/

/*(() => {
  const power = (x, y) => {
      let result = 1;
      if (0 !== y)
         for (let i = 0; i < y; ++i) {
             result *= x;
      }
      return result;
  }

  alert(
      power ( prompt ('Enter first argument'),
          prompt ('Enter secondargument ')));

})();*/

/**
 * w - number of password
 * s - number of symbols
 */
(() => {
    const genPass = (w = 4, s = 8) =>  {
        let pswds = '';
        const rand = function r(n, x)
        {
            let h = Math.floor(Math.random() * (x - n)) + n;
            return h;
        };
        for (let i = 0; i < w; ++i) {
            for (let j=0; j < s; ++j){
                pswds += String.fromCharCode(rand(97, 122));

            }

            pswds += ' ';
        }

        return pswds;
    }
    console.log(genPass());

})();


