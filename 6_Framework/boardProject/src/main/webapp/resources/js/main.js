const loginFrm = document.getElementById("loginFrm");
const memberEmail = document.querySelector("#loginFrm input[name='memberEmail']");
const memberPw = document.querySelector("#loginFrm input[name='memberPw']");


if(loginFrm != null){

    // 로그인 시도를 할 떄
    loginFrm.addEventListener("submit", e => {
        // alert("로그인");
    
        // form 태그 기본 이벤트 제거
        // e.preventDefault();  @@@@@@@@@@@@@@@@@@@

        // 이메일이 입력되지 않은 경우
        if(memberEmail.value.trim().length == 0){
            alert("이메일을 입력해주세요");

            memberEmail.value = "";
            memberEmail.focus();

            e.preventDefault();

            return;
        }

        // 비밀번호가 입력되지 않은 경우
        if(memberPw.value.trim().length == 0){
            alert("비밀번호을 입력해주세요");
            memberPw.value = "";
            memberPw.focus();

            e.preventDefault();

            return;
        }
    })
}
