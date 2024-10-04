const list = []
const anotherList = list.concat(157)

const persona = {
    name: 'Miguel',
    twitter: '@midudev',
    age: '18',
    isDeveloper: true,
    links: ['https://midu.tube','https://midu.live']
}

const sumar = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}


console.log(sumar(2,2))