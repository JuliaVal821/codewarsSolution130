https://www.codewars.com/kata/5a2809dbe1ce0e07f800004d/train/javascript

    function divisibleByLast(n) {
        let total = [];
        let arr = n.toString().split('').map(el => +el);
        for(let i = 0; i < arr.length; i++){
            total.push(arr[i] % arr[i - 1] === 0)
        }
        return total;
    }