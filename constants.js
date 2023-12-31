const pieceNames = [
    {
        id: 5, maxLength: 5, data: ["00", "10", "20", "30", "40"], centre: "40", rotated: { 1: { data: ["00","01","02","03","04"], centre: "00" }, 2: { data: ["00",], centre: "" } }
    },
    {
        id: 10, maxLength: 4, data: ["00", "10", "11", "12", "13"], centre: "10", flipped: { data: ["00", "10", '19', '18', '17'], centre: "10" }
    },
    {
        id: 13, maxLength: 4, data: ["00", "01", "02", "10", "19"], flipped: { data: ["00", "10", '20', '21', '22'], centre: "20" }
    },
    {
        id: 21, maxLength: 4, data: ["00", "10", "19", "11", "12"], centre: "10", flipped: { data: ["00", "10", '19', '18', '11'], centre: "10" }
    },
    {
        id: 4, maxLength: 4, data: ["00", "10", "20", "30"], centre: "30"
    },
    {
        id: 11, maxLength: 3, data: ["00", "10", "20", "29", "21"], centre: "20"
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
        id: 2, maxLength: 2, data: ["00", "10"], centre: "10"
    },
    {
        id: 1, maxLength: 2, data: ["00"], centre: "00"
    }
];

const freeCorners = []

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
module.exports = { gridState, pieceNames, freeCorners }