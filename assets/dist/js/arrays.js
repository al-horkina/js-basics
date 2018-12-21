(() => {
  
    const separateName = function (fio, s=' ') {
        /*const f = fio.slice(0, 8);
        const i = fio.slice(8, 17);
        const o = fio.slice(17 );

        return [f, i, o];*/

        const result = [];
        let temp = '';
        for (let i = 0; i < fio.length; ++i){
            if (s === fio[i] ){  //был ' '
                if (temp)  result.push(temp);
                temp = '';
                continue;
            }
            temp += fio[i];
            if ((fio.length - 1) === i) {
                if (temp)  result.push(temp);
            }


        }

        return result;
    };

    /*const arr = separateName('Horkina Alexandra Vladimirovna');
    console.log(arr);*/

     const collected = separateName('Horkina Alexandra Vladimirovna');



    String.prototype.newSplit = function(s = ' ') {
        const result = [];
        let temp = '';
        for (let i = 0; i < this.length; ++i){
            if (s === this[i] ){  //был ' '
                if (temp)  result.push(temp);
                temp = '';
                continue;
            }
            temp += this[i];
            if ((this.length - 1) === i) {
                if (temp)  result.push(temp);
            }


        }

        return result;

    }

    console.log(separateName(collected, ' '));
    console.log(collected.newSplit());
})();