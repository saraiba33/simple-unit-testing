const checkFive = require("../src/1")

test("checks if the number equal to 5", () => {
    const numberInput = checkFive(5)
    expect(numberInput).toBe("5 is equal to 5.")
})

test("checks if number is greater than 5", () => {
    const numberInput = checkFive(6)
    expect(numberInput).toBe("6 is greater than 5.")
})

test("checks if number is less than 5", () => {
    const numberInput = checkFive(4)
    expect(numberInput).toBe("4 is less than 5.")
})