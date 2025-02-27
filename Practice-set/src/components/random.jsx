function Random() {
    let number = Math.random() * 190;

    return <h1>Random number is: {Math.round(number)}</h1>
}

export default Random;