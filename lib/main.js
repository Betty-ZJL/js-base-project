//想知道下面哪种方法更优？

//第一种 通过函数调用把1 bottle， 2 bottles放在一个循环里——但这样做，这种方法效率是不是比较低？
function unit(n) { //判断单位
    return n == 1 ? 'bottle' : 'bottles';
}

function next(n) { //控制第4小句主语
    return n == 1 ? 'no more' : n - 1;
}

function main(num) {
    let a = 'of beer';
    let b = a + ' on the wall';
    let song = `No more bottles ${b}, no more bottles ${a}.\nGo to the store and buy some more, 99 bottles ${b}.`;
    for (let i = 1; i <= num; i++)
        song = `${i} ${unit(i)} ${b}, ${i} ${unit(i)} of beer.\nTake one down and pass it around, ${next(i)} ${unit(i - 1)} ${b}.\n` + song;
    return song;
}



/*

//第二种 按顺序输出，只是把重复的字符串用a,b,c提取出来，更易读
function main(){
    let a = 'of beer';
    let b = a + ' on the wall';
    let c='Take one down and pass it around,'
    let song='';
    for(let i=99;i>=3;i--)
        song+=`${i} bottles ${b}, ${i} bottles ${a}.\n${c} ${i-1} bottles ${b}.\n`;
    song+=`2 bottles ${b}, 2 bottles ${a}.\n${c} 1 bottle ${b}.\n`;
    song+=`1 bottle ${b}, 1 bottle ${a}.\n${c} no more bottles ${b}.\n`;
    song+=`No more bottles ${b}, no more bottles ${a}.\nGo to the store and buy some more, 99 bottles ${b}.`;
    return song;
}

*/


module.exports = main;
