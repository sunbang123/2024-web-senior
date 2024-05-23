console.log("javascript로 element 편집");
function nameChange() {
    var nameSelectElement = document.querySelector("#nameSelect");
    var nameElement = document.querySelector("#name");

    nameElement.innerHTML = nameSelectElement.value; // 요소의 안쪽 html 내용을 바꿈.
}

const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange);
