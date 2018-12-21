(() => { //function() {...} for ES5
    setTimeout(() => {
        const a = Number(prompt('Enter first argument: '));
        const b = Number(prompt('Enter second argument: '));

        let action;
        do {
            action = prompt('Enter action as arithmetical operation: ');
        } while(
            !(
                 '+' === action
                 || '-' === action
                 || '*' === action
                 || '/' === action
                 || '%' === action
                 || 'power'
            )
         );

        /** construction */
        ('+' === action)
            ?  (() => {
                alert(a + ' + ' + b + ' = ' + (a + b));
                alert('test')
            })()
            : ('-' === action)
                ? alert (a + ' - ' + b + ' = ' + (a - b))
                : ('*' === action)
                    ? alert (a + ' * ' + b + ' = ' + (a * b))
                    : ('/' === action)
                        ? alert (a + ' / ' + b + ' = ' + (a / b))
                        :('power' === action)
                            ?alert (a + ' power ' + b + ' = ' +  (a**b)/*(Math.pow(a , b)*/)
                            : alert('Unavailable action')

        ;

/*        if ('+' === action) {
            alert (a + ' + ' + b + ' = ' + (a + b));
        } else if ('-' === action) {
            alert (a + ' - ' + b + ' = ' + (a - b));
        }  else if ('*' === action) {
            alert (a + ' * ' + b + ' = ' + (a * b));
        } else if ('/' === action) {
            alert (a + ' / ' + b + ' = ' + (a / b));
        } else if ('%' === action) {
            alert (a + ' % ' + b + ' = ' + (a % b));
        } else {
            alert('Unavailable action');
        }*/


      /*  switch (action) {
            case '+':
                alert (a + ' + ' + b + ' = ' + (a + b));
                break;
            case '-':
                alert (a + ' - ' + b + ' = ' + (a - b));
                break;
            case '*':
                alert (a + ' * ' + b + ' = ' + (a * b));
                break;
            case '/':
                alert (a + ' / ' + b + ' = ' + (a / b));
                break;
            case '%':
                alert (a + ' % ' + b + ' = ' + (a % b));
                break;
            default:
                alert('Unavailable action');
                break;
        }*/

    }, 100);
})();