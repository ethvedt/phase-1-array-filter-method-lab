// Code your solution here
function findMatching(arr, str) {
    return arr.filter(el => {
        return el.toLowerCase().includes(str.toLowerCase());
    });
};

function fuzzyMatch(arr, str) {
    return arr.filter(el => {
        return el.startsWith(str);
    });
};

function matchName(arr, str) {
    return arr.filter(obj => {
        return obj.name === str;
    })
}