const nama="nashir";
const map=Array.prototype.map;

const newName=map.call(nama, nm => {
    return `${nm}hir`;
})

console.log(newName[2]);