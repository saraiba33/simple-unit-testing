const whoWon = require("../src/2")

test("checks value for 2 players and compares results", () => {
    const player1 = "rock"
    const player2 = "rock"
    const compare = whoWon(player1, player2)
    expect(compare).toBe("TIE!")
})

test("", () => {
    const player1 = "rock"
    const player2 = "paper"
    const compare = whoWon(player1, player2)
    expect(compare).toBe("Player 2 wins!")
})

test("", () => {
    const player1 = "paper"
    const player2 = "scissors"
    const compare = whoWon(player1, player2)
    expect(compare).toBe("Player 2 wins!")
})

test("", () => {
    const player1 = "scissors"
    const player2 = "rock"
    const compare = whoWon(player1, player2)
    expect(compare).toBe("Player 2 wins!")
})