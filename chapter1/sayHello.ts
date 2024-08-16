const sayHello: (name: string) => string = (personName: string): string => {
    return 'Hello,${personName}!'
}

const text = sayHello('Manamu')
console.log(text)