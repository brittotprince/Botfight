
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
function updateState(pointBeingChaged, isMoveByUs) {
    gridState[pointBeingChaged] = isMoveByUs ? 1 : 2
}
function checkIfValidPoint(pointToCheck) {
    let arrOfCornerConnections = []
    let cornerConnectionExist = false
    let [rowPoint, colPoint] = pointToCheck.split("_")
    rowPoint = parseInt(rowPoint)
    colPoint = parseInt(colPoint)
    if (gridState[`${rowPoint}_${colPoint}`] !== 0) {
        throw ("Point not empty")
    }
    let rowPointConsidered
    let colPointConsidered
    for (let i = -1; i <= 1; i++) {
        rowPointConsidered = rowPoint + i
        for (let j = -1; j <= 1; j++) {
            colPointConsidered = colPoint + j
            if ((i == 0 || j == 0) // Edges
                && gridState[`${rowPointConsidered}_${colPointConsidered}`] === 1
            ) {
                throw (`Edge exits for ${rowPoint}_${colPoint} at ${rowPointConsidered}_${colPointConsidered}`)
            } else {
                if (gridState[`${rowPointConsidered}_${colPointConsidered}`] === 1) {
                    cornerConnectionExist = true
                    console.log(`corner connection exists for the piece at ${rowPointConsidered}_${colPointConsidered}`)
                } else {
                    pointBeingChecked = `${rowPoint}_${colPoint}` //4_5
                    freeCornerPoint = `${rowPointConsidered}_${colPointConsidered}` //5_6
                    yCorner = rowPoint - rowPointConsidered > 0 ? "T" : "B"
                    xCorner = colPoint - colPointConsidered > 0 ? "L" : "R"
                    arrOfCornerConnections.push(pointBeingChecked + "_" + yCorner + "_" + xCorner)
                }
            }
        }
    }
    return { validPoint: true, cornerConnectionExist,arrOfCornerConnections}
}
function fillGridOrg(move, pieceToBeMoved, isMoveByUs, updateGrid, validateEachPoint) {
    // set updateGrid as false to run a check
    let centreOfPieceInX = parseInt(pieceToBeMoved.centre[0])
    let centreOfPieceInY = parseInt(pieceToBeMoved.centre[1])
    centreOfPieceInX = handleNegativeIndexing(centreOfPieceInX)
    centreOfPieceInY = handleNegativeIndexing(centreOfPieceInY)

    let pointsToChange = []
    let cornerConnectionExist = false
    let arrOfCornerConnections = []
    pieceToBeMoved.data.forEach((point) => {
        let currentPointinX = handleNegativeIndexing(parseInt(point[0]))
        let currentPointinY = handleNegativeIndexing(parseInt(point[1]))
        let pointsToMoveInRow = centreOfPieceInX - currentPointinX
        let pointsToMoveInCol = centreOfPieceInY - currentPointinY
        let pointBeingChaged = `${move.row - pointsToMoveInRow}_${move.col - pointsToMoveInCol}`
        pointsToChange.push(pointBeingChaged)
        console.log(pointBeingChaged)
        if (isMoveByUs && validateEachPoint) {
            let returnValue = checkIfValidPoint(pointBeingChaged)
            if (returnValue.cornerConnectionExist) {
                cornerConnectionExist = true
            }
            arrOfCornerConnections+=returnValue.arrOfCornerConnections
        }
    })
    console.log(arrOfCornerConnections)
    if (validateEachPoint && !cornerConnectionExist) {
        throw (`No corner connection exists for the piece id ${pieceToBeMoved.id}`)
    }

    if (updateGrid) {
        pointsToChange.forEach((pointBeingChaged) => {
            updateState(pointBeingChaged, isMoveByUs)
        })
        printTable()
    }
}
// function getNewCenter(pieceToBeMoved, oldData) {
//     let index = oldData.findIndex((data) => data === pieceToBeMoved.centre)
//     pieceToBeMoved.centre = pieceToBeMoved.data[index]
// }

// Was used to flip the components. Removing it as it has edge cases like piece 19
// function flipThePiece(pieceToBeMoved) {
//     let oldData = pieceToBeMoved.data
//     let data = []
//     oldData.forEach((eachPoint) => {
//         data.push(`${eachPoint[0]}${eachPoint[1] !== "0" ? parseInt(10 - eachPoint[1]) : 0}`)
//     })
//     console.log(data)
//     pieceToBeMoved.data = data
//     getNewCenter(pieceToBeMoved, oldData)
//     return pieceToBeMoved
// }

function flipThePiece(pieceToBeMoved) {
    pieceToBeMoved.data = pieceToBeMoved?.flipped?.data ?? pieceToBeMoved.data
    pieceToBeMoved.center = pieceToBeMoved?.flipped?.center ?? pieceToBeMoved.center
    return pieceToBeMoved
}
function fillGrid(data, isMoveByUs, validateEachPoint) {
    const move = getProperDataFromINput(data)
    console.log("move", move)
    let pieceToBeMoved = pieceNames.filter(piece => piece.id === move.id)?.[0]
    pieceToBeMoved = { ...pieceToBeMoved }
    console.log("pieceMoved", pieceToBeMoved)
    if (move.flip) {
        pieceToBeMoved = flipThePiece(pieceToBeMoved)
    }

    fillGridOrg(move, pieceToBeMoved, isMoveByUs, true, validateEachPoint)
}
function checkIfGridPointIsUsed(row, col) {
    return gridState[`${row}_${col}`] !== 0
}

function fight(input, myMovesCount) {
    let moveSuggested
    if (input === "MAKE_MOVE") {
        try {
            moveSuggested = "5 0 0 4 4"
            fillGrid(moveSuggested, true, true)
        } catch (e) {
            console.log("Shouldn't happen")
            console.log(e)
            return 0
        }
    } else {
        if (input[0] === "O") {
            let opponentMove = input.replace(/OPPONENT_MOVE\s*/, "")
            fillGrid(opponentMove, false, false)
        }
        //This is totally different check. should not use else
        if (myMovesCount === 0) {
            if (!checkIfGridPointIsUsed(5, 5)) {
                moveSuggested = "5 0 2 4 4"
            } else {
                moveSuggested = "5 0 0 8 8"
            }
            fillGrid(moveSuggested, true, true)
        }
    }
    myMovesCount += 1
    return moveSuggested
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
    myMovesCount = 0
    totalMovesCount = 0
    let reader = getInputReader()
    reader.on('line', (line) => {
        let suggestedMove = fight(line, myMovesCount)
        process.stdout.write(suggestedMove);
        totalMovesCount += 2
    });
}
main()