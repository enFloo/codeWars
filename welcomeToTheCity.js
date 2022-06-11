function sayHello(name, city, state) {
    let name1 = name.join(' ')
    return `Hello, ${name1}! Welcome to ${city}, ${state}!`;
}

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')