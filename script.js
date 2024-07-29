// code to print max element of an array
// let a=[1,2,3,444,-4,-75,888];
// let max=-Infinity;
// let secmax=-Infinity;
//1st type
// for(let i=0;i<a.length;i++){
// if(max<a[i])
// {
//     max=a[i];
// }
// }

//2nd type
// for(let x of a){
//     if(max<x)
//         {
//             max=x;
//         }
// }
// for(var z of a){
//     if(z!=max && z>secmax){
//         secmax=z;
//     }
// }
// console.log(secmax)
//***********minimum element and second minimum */
// let a=[1,2,3,444,-4,-75,888];
//  let min=Infinity;
//  let secmin=Infinity;
//  for(let x of a){
//         // if(x<min)
//         //      { 
//         //     min=x;
//         //         }

//         //second min
//         if(x<min)
//             { 
//            min=x;
//                }
//            }
            
//            for(var z of a){
//             if(z<secmin && z>min){
//                 secmin=z;
//             }
//            }
//             console.log(secmin)