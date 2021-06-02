const A = [{"categoryId":"category1-3","name":"Category One Three","parent":"category1"},{"categoryId":"category1-1-1","name":"Category One One One","parent":"category1-1"},{"categoryId":"category1","name":"Category One","parent":"root"},{"categoryId":"category1-1-1-1","name":"Category One One One One","parent":"category1-1-1"},{"categoryId":"category1-1-1-2","name":"Category One One One Two","parent":"category1-1-1"},{"categoryId":"category3","name":"Category Three","parent":"root"},{"categoryId":"category4","name":"Category Four","parent":"root"},{"categoryId":"category5","name":"Category Five","parent":"root"},{"categoryId":"category1-1","name":"Category One One","parent":"category1"},{"categoryId":"category1-2","name":"Category One Two","parent":"category1"},{"categoryId":"category1-1-2","name":"Category One One Two","parent":"category1-1"},{"categoryId":"category1-2-1","name":"Category One Two One","parent":"category1-2"},{"categoryId":"category1-2-2","name":"Category One Two Two","parent":"category1-2"},{"categoryId":"category2-1","name":"Category Two One","parent":"category2"},{"categoryId":"category3-1","name":"Category Three One","parent":"category3"},{"categoryId":"category2","name":"Category Two","parent":"root"},{"categoryId":"category1-5-7","name":"Category One Five Seven","parent":"category1-5"},{"categoryId":"category1-5","name":"Category One Five","parent":"category1"},{"categoryId":"category1-4","name":"Category One Four","parent":"category1"},{"categoryId":"category2-2-2","name":"Category Two Two Two","parent":"category2-2"},{"categoryId":"category2-2","name":"Category Two Two","parent":"category2"},{"categoryId":"category1-5-7-1","name":"Category One Five Seven One","parent":"category1-5-7"},{"categoryId":"category1-5-7-1-1","name":"Category 15711","parent":"category1-5-7-1"},{"categoryId":"category1-5-7-1-2","name":"Category 15712","parent":"category1-5-7-1"},{"categoryId":"category1-1-1-2-1","name":"Category 111211","parent":"category1-1-1-2"}]

const childrenArray = []
const rootArray = []

for(let i = 0; i < A.length; i++) {
    A[i]["children"] = childrenArray;
}




// function convertToTree(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         //Don't know why arr[i].child.push() affects the value of arr[i+1].child, so here eleminates the extra value in new element  
//         arr[i].children = [];

//         //attach elements to the matched category
//          for (let j = 0; j < A.length; j++) {
//              if (A[j].parent == arr[i].categoryId) {
//                 A[j]["children"] = [];
//                 arr[i].children.push(A[j]);
//              }              
//          } 
//     };
//     return arr;
// }

// console.log(`${JSON.stringify(convertToTree(convertToTree(rootArray)))}`)


function convertToTree(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (arr[i].categoryId == arr[j].parent) {               
                arr[i].children.push(arr[j]);
            }
        }
    }
    return arr
}

console.log(`${JSON.stringify(convertToTree(A))}`)


       




