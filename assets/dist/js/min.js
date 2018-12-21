(() => {
    function min(
        a = prompt ('Enter a: '),
        b = prompt ('Enter b: '))
    {
        if (a < b) alert (a);
        else alert (b);
    }
    min();

})();