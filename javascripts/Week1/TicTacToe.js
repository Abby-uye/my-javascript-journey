let lenght =3
let width =3
let board = [
    {
        row:0,
        col:0,
        value:"x"
    },
    {
        row:0,
        col:1, 
        value:"x"
    },
    {
        row:0,
        col:2,
        value:"x"
    },
    {row:1,col:0,value:"o"},
    {row:1,col:1,value:"o"},
    {row:1,col:2,value:"x"},
    {row:2,col:0,value:"x"},
    {row:2,col:1,value:"o"},
    {row:2,col:2,value:"o"}
]

const tictactoe = (values)=>{
    result =[[],[],[]]
    
for(let index = 0;index<lenght;index++){
    
    for(let index1 =0;index1 <width;index1++){
   result[index][values.col] = 
    }
   
}
    return result

}
console.log(tictactoe(board))

