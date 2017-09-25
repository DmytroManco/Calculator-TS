function compute(equation) {
    try {
        return +eval(equation).toFixed(10);
    } catch (err) {
        alert('Invalid data, please try again');
        return equation;
    }
}

export {compute};