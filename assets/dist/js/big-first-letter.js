(() => {
    const ucFirst = (str = prompt('Enter string: ')) => {
        if (str === '' || str == null) {
            alert('Error');
        }
        else {
            const firstLetter = str.charAt(0);
            const result = firstLetter.toUpperCase() + str.substr(1);
            alert(result);
        }
    }
    console.log(ucFirst());
})();