// ECMAScript 2015, ES6 부터 지원되는 것들
// 함수선언 ES5
function xxx(){
    // console.log(this);
}
// ES6
const xxx = () => {
    // console.log(this);
}
// Context의 차이가 존재

// 변수선언
var aaa;
// ES6
const aaaa = 1;
// 변하지않는 상수 형태가 필요했다.
let aaaaaa;
// 지역변수
function aaa() {
    var abc;
}

abc = 1;
// Promise 패턴 (ES5 Callback Hell 패턴을 극복하기 위함)


// Callback Hell

setTimeout(function(){
    if(false){
        var ab = 0;
    }
    setTimeout(function (){
        setTimeout(function(){
            setTimeout(function (){
                setTimeout(function(){
                    setTimeout(function (){
                        setTimeout(function(){
                            setTimeout(function (){
                            }, 100)
                        }, 100)                        
                    }, 100)
                }, 100)                
            }, 100)
        }, 100)
    }, 100)
}, 100)


//es6 순서가 명확히 확인이 되잖아요.
fetch()
    .then(function(){

    })
    .then(function(){

    })
    .then()
    .then()
    .then()


function newSource(){
    // github test
}