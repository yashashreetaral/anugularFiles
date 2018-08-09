let a = [
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50'
]
let count=0
console.log("Prime Nos Between 41 to 50 are:")
for(let y=0;y<a.length;y++)
{
    for(let j=2;j<a[y]/2;j++)
    {
        if(a[y]%j==0)
        {
            count++
            break
        }
    }
    if(count==0 && a[y]!=1)
    console.log(`${a[y]}`)

}