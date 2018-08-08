let func1 = () => {console.log('It is func1')}
function func2(){console.log('it is func2')}
function func3(){
    console.log('it is func3')
    return function func4(){console.log('it is func4 ')}

}
function func4(){console.log('it is func4 ')}
let var1= func1()
console.log(`${var1}`)
func2()

//func3()
//func3()()

let var3=func3()
//console.log(`${var3}`)
var3()

function func5(ab)  //ab holds func6 while executing func6 and fun7 when executing func7
{
    console.log('it is func5')
    ab()
}
setTimeout(func8 = () => console.log('it is func8'),2000)
func5(func6 = () => console.log('it is func6') ) // func is passed as paramter
func5(function func7(){console.log('it is func7')})
func5(func2)
let c =(num1,num2) => num1+ num2
console.log(`${c(1,2)}`)







