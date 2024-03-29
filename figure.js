let mainArr = [
    //straight
    [
        [0, 1],
        [0, 2],
        [0, 3],
        // 90d turn
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2],
        ],
        // 180d turn
        [
            [1, -1],
            [0, 0],
            [-1 ,1],
            [-2, 2],
        ],
        // 270d turn
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2],
        ],
        // 360d turn
        [
            [1, -1],
            [0, 0],
            [-1 ,1],
            [-2, 2],
        ],
    ],
    //square
    [
        [1, 0],
        [0, 1],
        [1, 1],
        // 90d turn
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // 180d turn
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // 270d turn
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // 360d turn
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
    ],
    // L
    [
        [1, 0],
        [0, 1],
        [0, 2],
        // 90d turn
        [
            [-1, 0],
            [-2, 1],
            [0, 0],
            [1, -1],
        ],
        // 180d turn
        [
            [2, 0],
            [2, 0],
            [0, 1],
            [0, 1],
        ],
        // 270d turn
        [
            [-2, 1],
            [-1, 0],
            [1, -1],
            [0, 0],
        ],
        // 360d turn
        [
            [1, -1],
            [1, -1],
            [-1, 0],
            [-1, 0],
        ],
    ],
    // inverted L
    [
        [1, 0],
        [1, 1],
        [1, 2],
        // 90d turn
        [
            [0, 1],
            [0, 1],
            [1, 0],
            [-1, 0],
        ],
        // 180d turn
        [
            [0, -1],
            [-1, 0],
            [-2, 1],
            [1, 0],
        ],
        // 270d turn
        [
            [2, 0],
            [0, 0],
            [1, -1],
            [1, -1],
        ],
        // 360d turn
        [
            [-2, 0],
            [1, -1],
            [0, 0],
            [-1, 1],
        ],
    ],
    // stair right
    [
        [1, 0],
        [-1, 1],
        [0, 1],
        // 90d turn
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0],
        ],
        // 180d turn
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1],
        ],
        // 270d turn
        [
            [-1, 0],
            [-2, 1],
            [1, 0],
            [0, 1],
        ],
        // 360d turn
        [
            [1, 1],
            [2, 0],
            [-1, 1],
            [0, 0],
        ],
    ],
    // stair left
    [
        [1, 0],
        [1, 1],
        [2, 1],
        // 90d turn
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0],
        ],
        // 180d turn
        [
            [-2, 0],
            [0, -1],
            [-1, 0],
            [1, -1],
        ],
        // 270d turn
        [
            [1, 0],
            [-1, 1],
            [0, 0],
            [-2, 1],
        ],
        // 360d turn
        [
            [-1, 1],
            [1, 0],
            [0, 1],
            [2, 0],
        ],
    ],
    // lego
    [
        [1, 0],
        [2, 0],
        [1, 1],
        // 90d turn
        [
            [1, -1],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // 180d turn
        [
            [0, 0],
            [-1, 0],
            [-1, 0],
            [1, -1],
        ],
        // 270d turn
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [-1, 1],
        ],
        // 360d turn
        [
            [-1, 1],
            [1, 0],
            [1, 0],
            [0, 0],
        ],
    ]     
];

export {mainArr};