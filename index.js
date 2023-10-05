
const { gridState, pieceNames } = require('./constants');
console.table(gridState)
function printTable() {
    let dict = {}
    Object.keys(gridState).map((eachItem) => {
        let key = eachItem.split("_")
        if (!dict[key[0]]) dict[key[0]] = []
        // dict[key[0]].push({[key[1]]:gridState[eachItem]})
        dict[key[0]].push(gridState[eachItem])
    })
    console.table(dict)
}
printTable()
function getProperDataFromINput(input) {
    let [id, flip, rotate, row, col] = input.split(" ")
    return {
        id: parseInt(id),
        flip: parseInt(flip),
        rotate: parseInt(rotate), row: parseInt(row), col: parseInt(col)
    }
}
function handleNegativeIndexing(index) {
    return index > 5 ? index - 10 : index
}
function fillGridOrg(move, pieceToBeMoved) {
    let centreOfPieceInX = parseInt(pieceToBeMoved.centre[0])
    let centreOfPieceInY = parseInt(pieceToBeMoved.centre[1])
    centreOfPieceInX = handleNegativeIndexing(centreOfPieceInX)
    centreOfPieceInY = handleNegativeIndexing(centreOfPieceInY)

    pieceToBeMoved.data.forEach((point) => {
        let currentPointinX = handleNegativeIndexing(parseInt(point[0]))
        let currentPointinY = handleNegativeIndexing(parseInt(point[1]))
        let pointsToMoveInRow = centreOfPieceInX - currentPointinX
        let pointsToMoveInCol = centreOfPieceInY - currentPointinY
        let pointBeingChaged = `${move.row + pointsToMoveInRow}_${move.col + pointsToMoveInCol}`
        console.log(pointBeingChaged)
        gridState[pointBeingChaged] = 1
    })
}
function flipThePiece(pieceToBeMoved) {
    let oldData = pieceToBeMoved.data
    let data = []
    oldData.forEach((eachPoint) => {
        data.push(`${eachPoint[0]}${eachPoint[1] !== "0" ? parseInt(10 - eachPoint[1]) : 0}`)
    })
    console.log(data)
    return pieceToBeMoved
}
function fillGrid(data) {
    const move = getProperDataFromINput(data)
    console.log("move", move)
    let pieceToBeMoved = pieceNames.filter(piece => piece.id === move.id)?.[0]
    pieceToBeMoved = { ...pieceToBeMoved }
    console.log("pieceMoved", pieceToBeMoved)
    if (move.flip) {
        pieceToBeMoved = flipThePiece(pieceToBeMoved)
    }
    fillGridOrg(move, pieceToBeMoved)
    printTable()
}

function fight(input, movesCount) {
    if (input === "MAKE_MOVE") {
        let moveSuggested = "14 1 0 4 4"
        fillGrid(moveSuggested)
        return moveSuggested
    } else if (movesCount === 0) {
        return
    }
    movesCount += 1
}
function getInputReader() {
    var readline = require('readline');

    var reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return reader
}
function main() {
    movesCount = 0
    let reader = getInputReader()
    reader.on('line', (line) => {
        fight(line, movesCount)
    });
}
main()