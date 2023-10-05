
const { gridState, pieceNames } = require('./constants');
console.table(gridState)
function printTable(){
    let dict ={}
    Object.keys(gridState).map((eachItem)=>{
        let key = eachItem.split("_")
        if(!dict[key[0]]) dict[key[0]] = []
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
function fillGridOrg(move,pieceToBeMoved){
    let xCentreOfPiece = parseInt(pieceToBeMoved.centre[0])
    let yCentreOfPiece = parseInt(pieceToBeMoved.centre[1])
    pieceToBeMoved.data.forEach((point)=>{
        let currentPointX = parseInt(point[0])
        let currentPointY = parseInt(point[1])
        let pointsToMoveInRow = currentPointX - xCentreOfPiece
        let pointsToMoveInCol = currentPointY - yCentreOfPiece
        let pointBeingChaged = `${move.row + pointsToMoveInRow}_${move.col + pointsToMoveInCol}`
        console.log(pointBeingChaged)
        gridState[pointBeingChaged] = 1
    })
}
function fillGrid(data) {
    const move = getProperDataFromINput(data)
    console.log("move",move)
    let pieceToBeMoved = pieceNames.filter(piece => piece.id === move.id)?.[0]
    console.log("pieceMoved",pieceToBeMoved)
    fillGridOrg(move,pieceToBeMoved)
    printTable()
}

function fight(input, movesCount) {
    if (input === "MAKE_MOVE") {
        let moveSuggested = "5 0 0 4 4"
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