// 画画线条的样式
const LINE_WIDTH = 3;
const COLOR_YELLOW = "#fff051";
const COLOR_PINK_1 = "#ffb4c3";
const COLOR_PINK_2 = "#ff809f";
const COLOR_PINK_3 = "#ee2f72";
const COLOR_DARK = "#680c20";
const COLOR_WHITE = '#ffffff';


// 画面中心的x、y坐标
const CENTER_X = 400;
const CENTER_Y = 400;


const getCircleEqualDivisitonDotList = (n,r,x,y,rotate = 0) => {
    const offset = rotate - 90;
    if(n < 3) return;
    const perAngle = 360 / n;
    return new Array(n).fill(1).map((_,index) => {
        const angle = (offset + perAngle * index) / 180 * Math.PI
        return {
            x: x + Math.cos(angle) * r,
            y: y + Math.sin(angle) * r
        }
    })
}

const combineDotList = (list1,list2) =>{
    if(list1.length !== list2.length) return;
    let n = list1.length;
    const list = [];
    while(n > 0){
        list.push(list1[n - 1])
        list.push(list2[n - 1])
        n --;
    }
    return list;
}

const lineDotList = (ctx,list) => {
    const start = list[0];
    ctx.beginPath();
    ctx.moveTo(start.x,start.y);
    list.forEach((dot,index) => {
        if(index > 0){
            ctx.lineTo(dot.x,dot.y);
        }
    })
    ctx.lineTo(start.x,start.y);
    ctx.stroke();
}

const lineDotListWithStyle = (ctx,list,color,width,fill) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    lineDotList(ctx,list);
    if(fill){
        ctx.fillStyle = fill;
        ctx.fill();
    }
}

const lineDotPairs = (ctx,list1,list2,color,width) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    if(list1.length !== list2.length) return;
    for(let i = 0; i < list1.length; i ++){
        const start = list1[i];
        const end = list2[i];
        ctx.beginPath();
        ctx.moveTo(start.x,start.y);
        ctx.lineTo(end.x,end.y);
        ctx.stroke();
    }
}


// option = {
//     x: 1,
//     y: 1,
//     r: 1,
//     color: 1,
//     width: 1,
//     fill: 1,
// }
const drawCircle = (ctx,option)=>{
    const {x,y,r,color,width,fill} = option;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2 * Math.PI);
    ctx.stroke();
    if(fill){
        ctx.fillStyle = fill;
        ctx.fill();
    }
}

// option = {
//     x: 1,
//     y: 1,
//     inner_r: 1,
//     outer_r: 1,
//     color: 1,
//     width: 1,
//     inner_fill: 1,
//     outer_fill: 1,
//     inner_line: 1,
//     inner_line_width: 1,
// }
const drawDoubleCircle =  (ctx,option)=>{
    const {x,y,inner_r,outer_r,color,width,outer_fill,inner_fill,inner_line} = option;
    drawCircle(ctx,{x,y,r:outer_r,color,width,fill:outer_fill});
    drawCircle(ctx,{x,y,r:inner_r,color,width,fill:inner_fill});
    if(inner_line){
        drawDoubleCircleInnerLine(ctx,{n:inner_line.n,x,y,inner_r,outer_r,color:inner_line.color,width:inner_line.width})
    }
}


// option = {
//     n: 1,
//     x: 1,
//     y: 1,
//     inner_r: 1,
//     outer_r: 1,
//     color: 1,
//     width: 1,
// }
const drawDoubleCircleInnerLine =  (ctx,option)=>{
    const {n,x,y,inner_r,outer_r,color,width} = option;
    const list1 = getCircleEqualDivisitonDotList(n,inner_r,x,y);
    const list2 = getCircleEqualDivisitonDotList(n,outer_r,x,y);
    lineDotPairs(ctx,list1,list2,color,width);
}

// option = {
//     n: 2,
//     x: 1,
//     y: 1,
//     outer_r: 1,
//     inner_r: 1,
//     rotate: 90,
//     color: 1,
//     width: 1,
//     fill: 1,
// }
const drawStar = (ctx,option) => {
    const {n, x, y, outer_r, inner_r, rotate, color="#000", width=1, fill,inner_line} = option;
    const list1 = getCircleEqualDivisitonDotList(n,outer_r,x,y,rotate);
    const list2 = getCircleEqualDivisitonDotList(n,inner_r,x,y,rotate - (180 / n));
    const list =  combineDotList(list1,list2);
    lineDotListWithStyle(ctx,list,color,width,fill);
    if(inner_line){
        drawStarInnerLine(ctx,{n,x,y,r:inner_line.r,rotate:inner_line.rotate,color:inner_line.color,width:inner_line.width})
    }
}


// option = {
//     n: 2,
//     x: 1,
//     y: 1,
//     r: 1,
//     rotate: 90,
//     color: 1,
//     width: 1,
// }
const drawStarInnerLine =  (ctx,option) => {
    const {n, x, y, r, rotate, color="#000", width=1} = option;
    const list1 = new Array(n).fill({ x, y });
    const list2 = getCircleEqualDivisitonDotList(n,r,x,y,rotate);
    lineDotPairs(ctx,list1,list2,color,width);
}



// option = {
//     x: 1,
//     y: 1,
//     r: 1,
//     rotate: 90,
//     color: 1,
//     width: 1,
//     fill: 1,
// }
const drawCircleInnerRect =  (ctx,option) => {
    const { x, y, r, rotate, color="#000", width=1,fill} = option;
    const list = getCircleEqualDivisitonDotList(4,r,x,y,rotate);
    lineDotListWithStyle(ctx,list,color,width,fill);
}


// option = {
//     x: 1,
//     y: 1,
//     inner_r: 1,
//     outer_r: 1,
//     rotate: 90,
//     color: 1,
//     width: 1,
//     outer_fill: 1,
//     inner_line: 1,
// }
const drawCircleInnerDoubleRect =  (ctx,option) => {
    const { x, y, inner_r,outer_r, rotate, color="#000", width=1,outer_fill,inner_fill} = option;
    drawCircleInnerRect(ctx,{x,y,r:outer_r,rotate,color,width,fill:outer_fill})
    drawCircleInnerRect(ctx,{x,y,r:inner_r,rotate,color,width,fill:inner_fill})
}


