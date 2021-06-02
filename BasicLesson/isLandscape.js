let landScape = isLandscape(1,50);
console.log(landScape);
// It is the practice of how to use return and make the syntax seem more elegant
function isLandscape(width,height){
    return (width > height);
}