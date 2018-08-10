
let pqr =[
    'apple',
    'pinapple',
    'mango',-
    'banana',
    'orange',
    'yashashree',
    'pooja',
    'sonam',
    'rutuja',
    'ayushi',
    'kolkata',
    'mumbai',
    'pune',
    'miraj',
    'Delhi'
]
 
// let input = [
//     '1',
//     '2',
//     '3',
// ]


let i=0
let a = 1
// for(let j=0;j<input.length;j++)
// {
    switch(a)
    {
        case 1: if(i<5)
            {
                console.log('name of fruits')
                console.log(`fruits => ${pqr[i]}`)
                i++
            }
            break

        case 2: if(i>=5&&i<10)
            {
                console.log('name of girls')
                console.log(`girls => ${pqr[i]}`)
                i++
            }
            break
        case 3: if(i>=10&&i<15)
            {
                console.log('name of city')
                console.log(`cities => ${pqr[i]}`)
                i++
            }
            break
        default: 
                console.log("input is invalid")
        }
// }