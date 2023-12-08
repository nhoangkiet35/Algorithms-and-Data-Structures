var isEmpty = function (obj) {
    // return Object.entries(obj).length === 0;
    return !Object.keys(obj).length;
    // for (const _ in obj) return false;
    // return true;
};

let obj = [null, false, 0];
console.log(isEmpty(obj));
