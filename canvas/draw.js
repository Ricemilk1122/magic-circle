const canvas = document.querySelector('#magic');
var ctx = canvas.getContext("2d");

const STAR_INNER_R = 100;
const STAR_OUTER_R = 200;

const INNER_CIRCLE_R = 200;
const OUTER_CIRCLE_R = (INNER_CIRCLE_R + 20) * Math.sqrt(2);

const ROTATE_LIST = [0,30,60];
const DNXB_LIST = [
    {x: CENTER_X + OUTER_CIRCLE_R + 5,y: CENTER_Y},
    {x: CENTER_X - OUTER_CIRCLE_R - 5,y: CENTER_Y},
    {x: CENTER_X + 5,y:CENTER_Y + OUTER_CIRCLE_R + 5},
    {x: CENTER_X + 5,y:CENTER_Y - OUTER_CIRCLE_R - 5},
]

drawCircle(ctx,{
    x: CENTER_X,
    y: CENTER_Y,
    r: 360,
    fill:COLOR_PINK_2,
})

drawDoubleCircle(ctx,{
    x: CENTER_X,
    y: CENTER_Y,
    inner_r: OUTER_CIRCLE_R,
    outer_r: OUTER_CIRCLE_R + 10,
    color: COLOR_DARK,
    width: LINE_WIDTH,
    outer_fill: COLOR_PINK_3,
    inner_fill: COLOR_WHITE,
    inner_line: {
        n: 100,
        width: 1
    }
})

ROTATE_LIST.map(rotate => {
    drawCircleInnerDoubleRect(ctx,{
        x: CENTER_X,
        y: CENTER_Y,
        outer_r: OUTER_CIRCLE_R,
        inner_r: OUTER_CIRCLE_R - 10,
        rotate: rotate,
        color: COLOR_DARK,
        width: LINE_WIDTH,
        outer_fill: COLOR_PINK_2,
        inner_fill: COLOR_PINK_1,
    })
})

const canvas2 = document.querySelector('#magic_inner');
var ctx2 = canvas2.getContext("2d");


drawDoubleCircle(ctx2,{
    x: CENTER_X,
    y: CENTER_Y,
    inner_r: INNER_CIRCLE_R,
    outer_r: INNER_CIRCLE_R + 10,
    color: COLOR_DARK,
    width: LINE_WIDTH,
    outer_fill: COLOR_PINK_3,
    inner_fill: COLOR_PINK_2,
    inner_line: {
        n: 100,
        width: 1,
    }
})

drawStar(ctx2,{
    n: 5,
    x: CENTER_X,
    y: CENTER_Y,
    outer_r: STAR_OUTER_R,
    inner_r: STAR_INNER_R,
    rotate: 36,
    color: COLOR_DARK,
    width: LINE_WIDTH,
    fill: COLOR_PINK_3,
    inner_line: {
        r: 200,
        rotate: 36,
        width: 1,
    }
});

// drawCircle(ctx,{
//     x: CENTER_X + OUTER_CIRCLE_R - 70,
//     y: CENTER_Y,
//     r: 100,
//     color: COLOR_DARK,
//     width: LINE_WIDTH,
//     fill: COLOR_PINK_2
// })

// drawCircle(ctx,{
//     x: CENTER_X + OUTER_CIRCLE_R - 95,
//     y: CENTER_Y,
//     r: 70,
//     color: COLOR_DARK,
//     width: LINE_WIDTH,
// })


drawStar(ctx2,{
    n: 5,
    x: CENTER_X,
    y: CENTER_Y,
    outer_r: STAR_OUTER_R,
    inner_r: STAR_INNER_R,
    rotate: 0,
    color: COLOR_DARK,
    width: LINE_WIDTH,
    fill: COLOR_YELLOW,
});



DNXB_LIST.map(dot => {
    drawCircle(ctx,{
        x: dot.x,
        y: dot.y,
        r: 25,
        fill:COLOR_PINK_3
    })
})




