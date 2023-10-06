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