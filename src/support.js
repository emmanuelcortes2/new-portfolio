
function isValidDominoChain(dominoes) {
  let isValid = false
  while (dominoes.length > 0) {
    let currentDomino = dominoes[0]
    let nextDomino = dominoes[1]

    if (currentDomino[1] === nextDomino[0]) {
      dominoes.shift()
      dominoes.shift()
      isValid = true
    } else {
      return false
    }

    if (dominoes.length === 0) {
      return true
    }

  }
}

console.log(isValidDominoChain([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0], [0, 1]]))   