const memberNickname = document.getElementById("memberNickname");
const memberTel = document.getElementById("memberTel");
const updateInfo = document.getElementById("updateInfo");

// 내 정보 수정 form 태그가 존재할 때 (내 정보 페이지)
if(updateInfo != null){

    // 전역변수로 수정 전 닉네임/전화번호를 저장
    initNickname = memberNickname.value;
    initTel = memberTel.value;





    // 닉네임 유효성 검사
    memberNickname.addEventListener("input", ()=>{

        // 변경 전 닉네임과 입력 값이 같을 경우
        if(initNickname == memberNickname.value){
            memberNickname.removeAttribute("style");
            return;
        }

        // 정규 표현식으로 유효성 검사
        const regEx = /^[가-힣\d\w]{2,10}$/;

        if(regEx.test(memberNickname.value)){
            memberNickname.style.color = "green";  // 까먹지말자...
        } else{
            memberNickname.style.color = "red";
        }


    });



    // 전화번호 유효성 검사
    memberTel.addEventListener("input", ()=>{

        // 변경 전 전화번호와 입력 값이 같을 경우
        if(initTel == memberTel.value){
            memberTel.removeAttribute("style");
            return;
        }

        // 정규 표현식으로 유효성 검사
        const regEx = /^0(1[01679]|2|[3-6][1-5]|70)\d{3,4}\d{4}$/;


        if(regEx.test(memberTel.value)){
            memberTel.style.color = "green";
        } else{
            memberTel.style.color = "red";
        }
    });




    // form태그 제출 시 유효하지 않은 값이 있으면 제출x
    updateInfo.addEventListener("submit", e=>{
        if(memberNickname.style.color == "red" ){
            alert("닉네임이 유효하지 않습니다.");
            memberNickname.focus();
            e.preventDefault();

            return;
        }

        if(memberTel.style.color == "red" ){
            alert("전화번호가 유효하지 않습니다.");
            memberTel.focus();
            e.preventDefault();
            
        }
    })
} // if문 end





// 비밀번호 변경 제출 시
const changePwFrm = document.getElementById("changePwFrm");
const currentPw = document.getElementById("currentPw");
const newPw = document.getElementById("newPw");
const newPwConfirm = document.getElementById("newPwConfirm");

if(changePwFrm != null){
    
    changePwFrm.addEventListener("submit", e=>{
        if(currentPw.value.trim() == ""){
            alert("현재 비밀번호를 입력해주세요.");
            e.preventDefault();
            currentPw.focus();
            currentPw.value="";
            return;
        }

        // 비밀번호 유효성 검사
        const regEx = /^[a-zA-Z0-9\!\@\#\-\_]{6,20}$/;
        if(!regEx.test(newPw.value)){
            alert("비밀번호가 유효하지 않습니다.");
            e.preventDefault();
            newPw.focus();

            return;
        }

        // 비밀번호랑 == 비밀번호 확인
        if(newPw.value != newPwConfirm.value){
            alert("새 비밀번호를 확인해주세요.");
            e.preventDefault();
            newPwConfirm.focus();

            return;
        }


    });
}


// 회원 탈퇴
const memberPw = document.getElementById("memberPw");
const secessionFrm = document.getElementById("secessionFrm");
const agree = document.getElementById("agree");



if(secessionFrm != null){

    secessionFrm.addEventListener("submit", e => {

        // 비밀번호 미작성
        if(memberPw.value.trim() == ""){
            alert("비밀번호를 입력해주세요.");
            e.preventDefault();
            memberPw.focus();
            memberPw.value="";
            return;
        }

        // 동의체크가 되지 않은 경우
        if(agree.checked == false){
            alert("약관 동의를 해주세요.");
            e.preventDefault();
            agree.focus();
            return;
        }
        // 취소 클릭 시
        if(!confirm("정말 탈퇴하시겠습니까?")){
            alert("탈퇴 취소");
            e.preventDefault();
            return;
        }
    });
}
