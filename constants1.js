const pieceNames = [
    {
        id: 5,
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
    }]