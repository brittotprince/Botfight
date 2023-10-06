
// let { gridState, pieceNames } = require('./constants');
const pieceNames = [
    {
        id: 5,
        used: true,
        "maxLength": 5, "data": [
            "00",
            "10",
            "20",
            "30",
            "40"
        ], centre: "40", rotated: {
            1: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03",
                    "04"
                ], centre: "00"
            },
            2: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03",
                    "04"
                ], centre: "00"
            },
            3: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03",
                    "04"
                ], centre: "0"
            }
        }
    },
    {
        id: 10, maxLength: 4, data: [
            "00",
            "10",
            "11",
            "12",
            "13"
        ], centre: "10", flipped: {
            data: [
                "00",
                "10", '19', '18', '17'
            ], centre: "10"
        }, rotated: {
            1: {
                data: [
                    "00",
                    "10",
                    "20",
                    "30",
                    "40"
                ], centre: "00"
            },
            2: {
                data: [
                    "00",
                    "10",
                    "20",
                    "30",
                    "40"
                ], centre: "00"
            }, 3: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03",
                    "04"
                ], centre: "00"
            },
        }
    }, {

        id: 13, maxLength: 4, data: [
            "00",
            "01",
            "02",
            "10",
            "19"
        ], centre: "00", flipped: {
            data: [
                "00",
                "10", '20', '21', '22'
            ], centre: "20"
        }, rotated: {
            1: {
                data: [
                    "00",
                    "01",
                    "10",
                    "19",
                    "18"
                ], centre: "00"
            },
            2: {
                data: [
                    "00",
                    "10",
                    "19",
                    "01",
                    "11"
                ], centre: "00"
            }, 3: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03",
                    "04"
                ], centre: "00"
            },
        }
    },
    {
        id: 21, maxLength: 4, data: [
            "00",
            "10",
            "19",
            "11",
            "12"
        ], centre: "10", flipped: {
            data: [
                "00",
                "10", '19', '18', '11'
            ], centre: "10"
        }, rotated: {
            1: {
                data: [
                    "00",
                    "01",
                    "10",
                    "19",
                    "18"
                ], centre: "00"
            },
            2: {
                data: [
                    "00",
                    "01",
                    "10",
                    "19",
                    "18"
                ], centre: "00"
            },
            3: {
                data: [
                    "00",
                    "11",
                    "12",
                    "13",
                    "10"
                ], centre: "00"
            }
        }
    }
    , {
        id: 4, maxLength: 4, data: [
            "00",
            "10",
            "20",
            "30"
        ], centre: "30", rotated: {
            1: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03"
                ], centre: "00"
            },
            2: {
                data: [
                    "00",
                    "10",
                    "19",
                    "18"
                ], centre: "00"
            },
            3: {
                data: [
                    "00",
                    "01",
                    "02",
                    "03"
                ], centre: "00"
            }
        }

    },
    {
        id: 11, maxLength: 3, data: ["00", "10", "20", "29", "21"], centre: "20", rotated: {
            1: { data: ["00", "01", "10", "11", "12"], centre: "00" }, 2: { data: ["00", "01", "19", "11", "12"], centre: "00" }, 3: { data: ["00", "01", "19", "11", "12"], centre: "00" }
        }
    },
    {
        id: 12, maxLength: 3, data: ["00", "10", "20", "21", "22"], centre: "20", flipped: { data: ['00', '10', '20', '29', '28'], centre: '20' }
    },
    {
        id: 14, maxLength: 3, data: ["00", "10", "19", "18", "28"], centre: "19", flipped: { data: ['00', '10', '11', '12', '22'], centre: '11' }
    },
    {
        id: 16, maxLength: 3, data: ["00", "01", "10", "11", "20"], flipped: { data: ["00", "01", "10", "11", "21"], centre: "01" }
    },
    {
        id: 17, maxLength: 3, data: ["00", "01", "10", "19", "29"], centre: "10", flipped: { data: ['00', '01', '11', '12', '22'], centre: "11" }
    },
    {
        id: 18, maxLength: 3, data: ["00", "01", "10", "20", "21"], centre: "10", flipped: { data: ['00', '01', '11', '20', '21'], centre: '11' }
    },
    {
        id: 19, maxLength: 3, data: ["00", "01", "10", "19", "20"], centre: "10", flipped: { data: ['00', '01', '11', '12', '21'], centre: '11' }
    },
    {
        id: 20, maxLength: 3, data: ["00", "10", "19", "11", "20"], centre: "10"
    },
    {
        id: 7, maxLength: 3, data: ["00", "10", "20", "21"], centre: "10", flipped: { data: ['00', '10', '20', '29'], centre: '10' }
    },
    {
        id: 8, maxLength: 3, data: ["00", "01", "10", "19"], centre: "10", flipped: { data: ['00', '01', '10', '11'], centre: '10' }
    },
    {
        id: 3, maxLength: 3, data: ["00", "10", "20"], centre: "20"
    },
    {
        id: 9, maxLength: 2, data: ["00", "01", "10", "11"], centre: "10", flipped: { centre: "11" }
    },
    {
        id: 6, maxLength: 2, data: ["00", "10", "11"], centre: "10", flipped: { data: ['00', '10', '19'], centre: '10' }
    },
    {
        id: 2, maxLength: 2, data: ["00", "10"], centre: "10", rotated: {
            1: { data: ["00", "01"], center: "00" }, 2: { data: ["00", "10"], center: "00" }, 3: { data: ["00", "01"], center: "00" }
        }
    },
    {
        id: 1, maxLength: 2, data: ["00"], centre: "00"
    },
    {
        id: 15, maxLength: 2, data: ["00", "10", "19", "11"], centre: "10", rotated: {
            1: { data: ["00", "01", "10", "11"], center: "00" }, 2: { data: ["00", "01", "11", "10"], center: "00" }, 3: { data: ["00", "01", "02", "11"], center: "00" }
        }
    }

]
const gridState = {
    "0_0": 0,
    "0_1": 0,
    "0_2": 0,
    "0_3": 0,
    "0_4": 0,
    "0_5": 0,
    "0_6": 0,
    "0_7": 0,
    "0_8": 0,
    "0_9": 0,
    "0_10": 0,
    "0_11": 0,
    "0_12": 0,
    "0_13": 0,
    "1_0": 0,
    "1_1": 0,
    "1_2": 0,
    "1_3": 0,
    "1_4": 0,
    "1_5": 0,
    "1_6": 0,
    "1_7": 0,
    "1_8": 0,
    "1_9": 0,
    "1_10": 0,
    "1_11": 0,
    "1_12": 0,
    "1_13": 0,
    "2_0": 0,
    "2_1": 0,
    "2_2": 0,
    "2_3": 0,
    "2_4": 0,
    "2_5": 0,
    "2_6": 0,
    "2_7": 0,
    "2_8": 0,
    "2_9": 0,
    "2_10": 0,
    "2_11": 0,
    "2_12": 0,
    "2_13": 0,
    "3_0": 0,
    "3_1": 0,
    "3_2": 0,
    "3_3": 0,
    "3_4": 0,
    "3_5": 0,
    "3_6": 0,
    "3_7": 0,
    "3_8": 0,
    "3_9": 0,
    "3_10": 0,
    "3_11": 0,
    "3_12": 0,
    "3_13": 0,
    "4_0": 0,
    "4_1": 0,
    "4_2": 0,
    "4_3": 0,
    "4_4": 0,
    "4_5": 0,
    "4_6": 0,
    "4_7": 0,
    "4_8": 0,
    "4_9": 0,
    "4_10": 0,
    "4_11": 0,
    "4_12": 0,
    "4_13": 0,
    "5_0": 0,
    "5_1": 0,
    "5_2": 0,
    "5_3": 0,
    "5_4": 0,
    "5_5": 0,
    "5_6": 0,
    "5_7": 0,
    "5_8": 0,
    "5_9": 0,
    "5_10": 0,
    "5_11": 0,
    "5_12": 0,
    "5_13": 0,
    "6_0": 0,
    "6_1": 0,
    "6_2": 0,
    "6_3": 0,
    "6_4": 0,
    "6_5": 0,
    "6_6": 0,
    "6_7": 0,
    "6_8": 0,
    "6_9": 0,
    "6_10": 0,
    "6_11": 0,
    "6_12": 0,
    "6_13": 0,
    "7_0": 0,
    "7_1": 0,
    "7_2": 0,
    "7_3": 0,
    "7_4": 0,
    "7_5": 0,
    "7_6": 0,
    "7_7": 0,
    "7_8": 0,
    "7_9": 0,
    "7_10": 0,
    "7_11": 0,
    "7_12": 0,
    "7_13": 0,
    "8_0": 0,
    "8_1": 0,
    "8_2": 0,
    "8_3": 0,
    "8_4": 0,
    "8_5": 0,
    "8_6": 0,
    "8_7": 0,
    "8_8": 0,
    "8_9": 0,
    "8_10": 0,
    "8_11": 0,
    "8_12": 0,
    "8_13": 0,
    "9_0": 0,
    "9_1": 0,
    "9_2": 0,
    "9_3": 0,
    "9_4": 0,
    "9_5": 0,
    "9_6": 0,
    "9_7": 0,
    "9_8": 0,
    "9_9": 0,
    "9_10": 0,
    "9_11": 0,
    "9_12": 0,
    "9_13": 0,
    "10_0": 0,
    "10_1": 0,
    "10_2": 0,
    "10_3": 0,
    "10_4": 0,
    "10_5": 0,
    "10_6": 0,
    "10_7": 0,
    "10_8": 0,
    "10_9": 0,
    "10_10": 0,
    "10_11": 0,
    "10_12": 0,
    "10_13": 0,
    "11_0": 0,
    "11_1": 0,
    "11_2": 0,
    "11_3": 0,
    "11_4": 0,
    "11_5": 0,
    "11_6": 0,
    "11_7": 0,
    "11_8": 0,
    "11_9": 0,
    "11_10": 0,
    "11_11": 0,
    "11_12": 0,
    "11_13": 0,
    "12_0": 0,
    "12_1": 0,
    "12_2": 0,
    "12_3": 0,
    "12_4": 0,
    "12_5": 0,
    "12_6": 0,
    "12_7": 0,
    "12_8": 0,
    "12_9": 0,
    "12_10": 0,
    "12_11": 0,
    "12_12": 0,
    "12_13": 0,
    "13_0": 0,
    "13_1": 0,
    "13_2": 0,
    "13_3": 0,
    "13_4": 0,
    "13_5": 0,
    "13_6": 0,
    "13_7": 0,
    "13_8": 0,
    "13_9": 0,
    "13_10": 0,
    "13_11": 0,
    "13_12": 0,
    "13_13": 0

}

function returnZero() {
    return "0" + "\n"
}

var freeCorners = []
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
function checkIfValidPoint(pointToCheck, shouldSaveCorners) {
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
            if (colPointConsidered < 0 || rowPointConsidered < 0 || colPointConsidered > 13 || rowPointConsidered > 13) {
                continue
            }
            if ((i == 0 || j == 0) // Edges
                && gridState[`${rowPointConsidered}_${colPointConsidered}`] === 1
            ) {
                throw (`Edge exist for ${rowPoint}_${colPoint} at ${rowPointConsidered}_${colPointConsidered}`)
            } else {
                if (gridState[`${rowPointConsidered}_${colPointConsidered}`] === 1) {
                    cornerConnectionExist = true
                    console.log(`corner connection exists for the piece at ${rowPointConsidered}_${colPointConsidered}`)
                } else if (shouldSaveCorners) {
                    pointBeingChecked = `${rowPoint}_${colPoint}` //4_5
                    freeCornerPoint = `${rowPointConsidered}_${colPointConsidered}` //5_6
                    yCorner = rowPoint - rowPointConsidered > 0 ? "T" : "B"
                    xCorner = colPoint - colPointConsidered > 0 ? "L" : "R"
                    arrOfCornerConnections.push(pointBeingChecked + "_" + yCorner + "_" + xCorner)
                }
            }
        }
    }
    return { validPoint: true, cornerConnectionExist, arrOfCornerConnections }
}
function checkIfCornerStillExists(corner) {
    let data = corner.split("_")
    let rowIndex = parseInt(data[0])
    let colIndex = parseInt(data[1])
    let rowMove = data[2] === "T" ? -1 : 1
    let colMove = data[3] === "L" ? -1 : 1
    let pointToCheck = [`${rowIndex + rowMove}_${colIndex + colMove}`, `${rowIndex + rowMove}_${colIndex}`, `${rowIndex}_${colIndex + colMove}`]
    let isNotCorner = pointToCheck.find((point) => {
        return gridState[point] !== 0
    })
    return !isNotCorner
}
function fillGridOrg(move, pieceToBeMoved, isMoveByUs, updateGrid, validateEachPoint, myMovesCount) {
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
            let returnValue = checkIfValidPoint(pointBeingChaged, true)
            if (returnValue.cornerConnectionExist) {
                cornerConnectionExist = true
            }
            arrOfCornerConnections = arrOfCornerConnections.concat(returnValue.arrOfCornerConnections)
        }
    })
    console.log(arrOfCornerConnections)
    if (validateEachPoint && myMovesCount !== 0 && !cornerConnectionExist) {
        throw (`No corner connection exists for the piece id ${pieceToBeMoved.id}`)
    }

    if (updateGrid) {
        pointsToChange.forEach((pointBeingChaged) => {
            updateState(pointBeingChaged, isMoveByUs)
        })
        printTable()
    }
    if (isMoveByUs && updateGrid) {
        let filteredArr = [...new Set(arrOfCornerConnections)]
        let filteredCorners = filteredArr.filter((corner) => {
            return checkIfCornerStillExists(corner)
        })
        freeCorners = freeCorners.concat(filteredCorners)
        console.log(freeCorners)
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
//     // console.log(data)
//     pieceToBeMoved.data = data
//     getNewCenter(pieceToBeMoved, oldData)
//     return pieceToBeMoved
// }

function flipThePiece(pieceToBeMoved) {
    pieceToBeMoved.data = pieceToBeMoved?.flipped?.data ?? pieceToBeMoved.data
    pieceToBeMoved.center = pieceToBeMoved?.flipped?.center ?? pieceToBeMoved.center
    return pieceToBeMoved
}
function rotateThePiece(pieceToBeMoved, rotate) {
    pieceToBeMoved.data = pieceToBeMoved.rotated[rotate].data
    pieceToBeMoved.centre = pieceToBeMoved.rotated[rotate].centre
}
function fillGrid(data, isMoveByUs, validateEachPoint, myMovesCount) {
    const move = getProperDataFromINput(data)
    // console.log("move", move)
    let pieceToBeMoved = pieceNames.filter(piece => piece.id === move.id)?.[0]
    pieceToBeMoved = { ...pieceToBeMoved }
    // console.log("pieceMoved", pieceToBeMoved)
    if (move.flip) {
        pieceToBeMoved = flipThePiece(pieceToBeMoved)
    }
    if (move.rotate) {
        pieceToBeMoved = rotateThePiece(pieceToBeMoved, move.rotate)
    }

    fillGridOrg(move, pieceToBeMoved, isMoveByUs, true, validateEachPoint, myMovesCount)
}
function checkIfGridPointIsUsed(row, col) {
    return gridState[`${row}_${col}`] !== 0
}
function checkIfWorksValidPoint(pointToCheck, shouldSaveCorners) {
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
            if (colPointConsidered < 0 || rowPointConsidered < 0 || colPointConsidered > 13 || rowPointConsidered > 13) {
                continue
            }
            if ((i == 0 || j == 0) // Edges
                && gridState[`${rowPointConsidered}_${colPointConsidered}`] === 1
            ) {
                throw (`Edge exist for ${rowPoint}_${colPoint} at ${rowPointConsidered}_${colPointConsidered}`)
            } else {
                if (gridState[`${rowPointConsidered}_${colPointConsidered}`] === 1) {
                    cornerConnectionExist = true
                    console.log(`corner connection exists for the piece at ${rowPointConsidered}_${colPointConsidered}`)
                } else if (shouldSaveCorners) {
                    pointBeingChecked = `${rowPoint}_${colPoint}` //4_5
                    freeCornerPoint = `${rowPointConsidered}_${colPointConsidered}` //5_6
                    yCorner = rowPoint - rowPointConsidered > 0 ? "T" : "B"
                    xCorner = colPoint - colPointConsidered > 0 ? "L" : "R"
                    arrOfCornerConnections.push(pointBeingChecked + "_" + yCorner + "_" + xCorner)
                }
            }
        }
    }
    return { validPoint: true, cornerConnectionExist, arrOfCornerConnections }
}
function checkIfWorks(move, pieceToBeMoved) {
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
        checkIfWorksValidPoint(pointBeingChaged, true)
    })
    return true
}

function tryEachElement(cornersWeCanUse) {
    for (let i = 0; i < cornersWeCanUse.length; i++) {
        let splitValue = cornersWeCanUse[i].split("_")
        let row = parseInt(splitValue[0]) + (splitValue[2] === "B" ? 1 : -1)
        let col = parseInt(splitValue[1]) + (splitValue[3] === "R" ? 1 : -1)
        let move = `${row} ${col}`
        for (let j = 0; j < pieceNames.length; j++) {
            try {
                let testMove = `${pieceNames[j]} 0 0 ${move}`
                console.log("tryin move",testMove )
                if (checkIfWorks(testMove, pieceNames[j])) {
                    pieceNames[j].used = true
                    return move
                }
            }
            catch (e) {
                // console.log(e)
                continue;
            }
        }
        return returnZero()
    }
}

let logic
function fightWithLogic() {
    console.log(freeCorners)
    let cornersToUse = []
    let maxCornerFound;
    freeCorners.forEach((corner) => {
        let cornerData = corner.split("_")
        pointLocationConsidered = (logic[0] === "down" || logic[0] === "up") ? parseInt(cornerData[0]) : parseInt(cornerData[1])
        if (maxCornerFound === undefined) {
            maxCornerFound = pointLocationConsidered
        } else {
            if (maxCornerFound < pointLocationConsidered) {
                maxCornerFound = pointLocationConsidered
            }
        }
    })
    console.log(maxCornerFound)
    let cornersWeCanUse = freeCorners.filter((corner) => {
        let indexToLookAt = (logic[0] === "down" || logic[0] === "up") ? 0 : 1
        return corner[indexToLookAt] == maxCornerFound
    })
    console.log(cornersWeCanUse)
    return tryEachElement(cornersWeCanUse)
}

let myMovesCount = 0
function fight(input) {
    let moveSuggested
    if (input === "MAKE_MOVE") {
        try {
            moveSuggested = "5 0 0 8 4"
            logic = ["down", "right"]
            fillGrid(moveSuggested, true, true, myMovesCount)
        } catch (e) {
            console.log("Shouldn't happen")
            console.log(e)
            return returnZero()
        }
    } else {
        if (input[0] === "O") {
            let opponentMove = input.replace(/OPPONENT_MOVE\s*/, "")
            fillGrid(opponentMove, false, false, myMovesCount)
        }
        //This is totally different check. should not use else
        if (myMovesCount === 0) {
            if (!checkIfGridPointIsUsed(4, 4)) {
                moveSuggested = "5 0 2 4 4"
                logic = ["down", "right"]
            } else {
                moveSuggested = "5 0 0 9 9"
                logic = ["up", "left"]
            }
            fillGrid(moveSuggested, true, true, myMovesCount)
        } else {
            try {
                return fightWithLogic() + "\n"
            } catch (e) {
                console.log(e)
                return returnZero
            }
        }
    }
    myMovesCount += 1
    return (moveSuggested + "\n")
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
    totalMovesCount = 0
    let reader = getInputReader()
    reader.on('line', (line) => {
        let suggestedMove = fight(line)
        process.stdout.write(suggestedMove);
        totalMovesCount += 2
    });
}
main()