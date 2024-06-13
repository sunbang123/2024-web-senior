const btnSubmit = document.querySelector("#btnSubmit");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
// inputPassword.addEventListener('input', function(e){
// });

const email = localStorage.getItem("email", inputEmail.value)
inputEmail.value = email

btnSubmit.addEventListener('click', function(){
    // 입력된 email password 가져오기
    console.log(inputEmail.value, inputPassword.value);

    // fetch를 통해 입력된 정보를 서버로 전달
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email:inputEmail.value,
            password:inputPassword.value
        }),
    })
    .then(res => res.json())
    .then(json => {
        const result = json.result;
        if(result === 'success'){
            alert("로그인에 성공하셨습니다.");
            localStorage.setItem("email", inputEmail.value);
        } else{
            alert("실패하셨습니다.");
            localStorage.removeItem("email");
        }

    })
});