var numbersArray = [];
for (var i = 0; i<45; i++){
    numbersArray[i] = i + 1;
}

var pickArray = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Random하게 숫자 6개 뽑아서 pickArray에 담기
// type1: Random하게 뽑은 숫자가 이미 뽑았는지 비교
// type2: numbersArray의 바구니에서 뽑힌건 제거하고 나머지 중에 봅기
for (var i = 0; i<6; i++){
    var pickIndex = getRandomInt(0, numbersArray.length);
    var pickNumber = numbersArray.splice(pickIndex, 1)[0];
    pickArray.push(pickNumber);
}

pickArray = pickArray.sort(function (a,b){
    if(a-b>0){
        return 1;
    }

    if(a-b < 0){
        return -1;
    }

    return 0;
})

console.log(pickArray);

// var numbers = new Array(6);
// numbers.fill(0);
// const lottoArr = numbers.map((x) => getRandomInt(1, 45));
// const uniqueArr = []

// lottoArr.forEach(el => {
//     if (!uniqueArr.includes(el)){
//         uniqueArr.push(el);
//     }    
// })

// for (var i = 0; i< lottoArr.length - uniqueArr; i++){
//     getRandomInt(1, 45)
// }

// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// }

// lottoArr.forEach((element) => console.log(element));

// var number = {
//     num1 : 1,
//     num2 : 2,
//     num3 : 3,
//     num4 : 4,
//     num5 : 5,
//     num6 : 6
// }

// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// }

// function lottoHandler(){
//     for (let key of Object.keys(number)){
//         number[key] = getRandomInt(1, 45);
//     }
// }

// lottoHandler();
