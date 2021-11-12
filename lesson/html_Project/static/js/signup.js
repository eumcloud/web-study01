
let isOn = false;                   // 로그인 로그오프 체크 메뉴 접근 제한.
let userListID = [];                // 가입 된 아이디 저장.
let userListPW = [];                // 가입 된 비밀번호 저장.
let userListNickName = [];          // 가입 된 이름 저장.

let completeUserID = "";            // 아이디 방식 체크 후 저장 될 변수.
let completeUserPW = "";            // 비밀번호 방식 체크 후 저장 될 변수.
let completeUserNickName = "";      // 사용자의 이름이 저장 될 변수.

let logInInputValueID = "";         // 로그인시 인풋창에 들어온 아이디.
let logInInputValuePW = "";         // 로그인시 인풋창에 들어온 비밀번호.

var shakeAnim;

localStorage.setItem("isOn", isOn);

function signUp()                 // 회원가입 버튼을 클릭 시 회원가입 창 팝업.
{

    if(!isOn)
    {
        console.log("회원가입");
        document.getElementById("signUpAnimBox").style.animationPlayState = "paused";
        const signUpForm = document.signUpForm;             // 실행이 되야함. 자동 할당이 안됨.
    
        signUpForm.name.style.border = "1px solid";
        signUpForm.name.style.borderColor = "gray";
        signUpForm.password.style.border = "1px solid";
        signUpForm.password.style.borderColor = "gray";
        signUpForm.nickname.style.border = "1px solid";
        signUpForm.nickname.style.borderColor = "gray";

        document.getElementById("errSignupID").innerHTML = "";
        document.getElementById("errSignupPW").innerHTML = "";
        document.getElementById("errSignupNickName").innerHTML = "";
    
        document.getElementById("signUpMainContainer").style.display="block";
    }
    else
    {
        logOut();
    }
}

function completeUserCheck()                            // 회원 가입이 ID PW 기입 후 호출되는 함수. 사전에 문자열 체크 함수 필요.
{
    console.log("회원가입 승인 요청");
    // shakeAnim = document.getElementById("signUpAnimBox");
    const signUpForm = document.signUpForm;             // 실행이 되야함. 자동 할당이 안됨.

    if(signUpForm.name.value != "" && signUpForm.password.value != "" && signUpForm.nickname.value != "") // ID 와 PW 인풋창이 비어있는지 확인.
    {
        completeUserID = signUpForm.name.value;
        completeUserPW = signUpForm.password.value;
        completeUserNickName = signUpForm.nickname.value;
        // console.log("completeUserID = " + completeUserID);
        // console.log("completeUserPW = " + completeUserPW);
        // console.log("completeUserNickName = " + completeUserNickName);

        for(i = 0; i < userListID.length; i++)
        {
            if(userListID[i] == completeUserID)
            {
                document.getElementById("signUpAnimBox").style.animationPlayState = "running";
                signUpForm.name.style.border = "2px solid";
                signUpForm.name.style.borderColor = "red";
                document.getElementById("errSignupID").innerHTML = "- 이미 등록 된 아이디입니다."
                console.log("이미 존재하는 아이디");
                return;
            }
        }
        userListID.push(completeUserID);      // 회원가입 ID 인풋에 들어온 값 userListID 배열에 추가.
        userListPW.push(completeUserPW);             // 회원가입 PW 인풋에 들어온 값 userListPW 배열에 추가.
        userListNickName.push(completeUserNickName); // 회원가입 이름 인풋에 들어온 값 userListNickName 배열에 추가.
        signUpForm.name.value = "";
        signUpForm.password.value = "";
        signUpForm.nickname.value = "";
        
        document.getElementById("signUpMainContainer").style.display="none"; // 비어있지 않으면 회원가입창 none.
    }
    else
    {
        console.log("유저체크실패 내용") // ID 와 PW 인풋창중 하나라도 비어있으면 실패.

        // shakeAnimfunc();

        if(signUpForm.name.value == "")
        {
            // shakeAnim.style.animation = "shake 0.3s 1";
            document.getElementById("signUpAnimBox").style.animationPlayState = "running";
            signUpForm.name.style.border = "2px solid";
            signUpForm.name.style.borderColor = "red";
            document.getElementById("errSignupID").innerHTML = "- 아이디를 입력하세요."
        }
        if(signUpForm.password.value == "")
        {
            document.getElementById("signUpAnimBox").style.animationPlayState = "running";
            signUpForm.password.style.border = "2px solid";
            signUpForm.password.style.borderColor = "red";
            document.getElementById("errSignupPW").innerHTML = "- 비밀번호를 입력하세요."
        }
        if(signUpForm.nickname.value == "")
        {
            document.getElementById("signUpAnimBox").style.animationPlayState = "running";
            signUpForm.nickname.style.border = "2px solid";
            signUpForm.nickname.style.borderColor = "red";
            document.getElementById("errSignupNickName").innerHTML = "- 이름을 입력하세요."
        }
        
    }
}

function logIn()                    // 로그인 버튼 클릭 시 로그인 창 팝업.
{
    if(!isOn)
    {
        document.getElementById("loginAnimBox").style.animationPlayState = "paused";
        const logInForm = document.logInForm;             // 실행이 되야함. 자동 할당이 안됨.

        logInForm.name.style.border = "1px solid";
        logInForm.name.style.borderColor = "gray";
        logInForm.password.style.border = "1px solid";
        logInForm.password.style.borderColor = "gray";
        // logInForm.nickname.style.border = "1px solid";
        // logInForm.nickname.style.borderColor = "gray";
        document.getElementById("errSigninID").innerHTML = "";
        document.getElementById("errSigninPW").innerHTML = "";

        document.getElementById("loginMainContainer").style.display="block";
    }
    else
    {
        return;
    }
}

function logInSubmit()              // 로그인 시 ID 와 PW 인풋창 기입 후 클릭.
{
    const logInForm = document.logInForm;

    userListID.indexOf(logInForm.name.value);           // userListID 배열에 저장된 아이디 중 인풋창에 들어온 내용과 동일한 인덱스 표출.
    // console.log("logInForm.name.value = " + logInForm.name.value);
    // console.log("logInForm.password.value = " + logInForm.password.value);

    // console.log("userListID.indexOf(aaa) = " + userListID.indexOf("aaa"));

    // indexOf 의 값이 -1 이면 배열에 존재하지않음.
    // 로그인시 인풋창의 ID 와 PW 가 둘다 존재하는지 체크.
    if(userListID.indexOf(logInForm.name.value) != -1 && userListPW.indexOf(logInForm.password.value) != -1)
    {
        // ID 와 PW 가 둘다 존재할때 같은 인덱스일 경우 같은 유저로 간주.
        if(userListID.indexOf(logInForm.name.value) == userListPW.indexOf(logInForm.password.value))
        {
            console.log("로그인 성공");
            console.log("유저체크성공")
            isOn = true;
            userOnoff(isOn);
            // logInForm.name.value = "";
            // logInForm.password.value = "";
            // logInForm.nickname.value = "";

            // console.log("userListID.indexOf(logInForm.name.value = " + userListID.indexOf[logInForm.name.value]);
            document.getElementById("loginMainContainer").style.display="none";
        }
    }
    // 로그인지 인풋창의 ID 와 PW 가 둘중 하나라도 정보에 없을 경우 체크.
    else
    {
        // 아이디의 인덱스가 -1 일 경우 아이디가 존재하지 않음.
        if(userListID.indexOf(logInForm.name.value) == -1 && logInForm.name.value != "")
        {
            document.getElementById("loginAnimBox").style.animationPlayState = "running";
            document.getElementById("errSigninID").innerHTML = "- 등록되지 않은 아이디입니다."
            logInForm.name.style.border = "2px solid";
            logInForm.name.style.borderColor = "red";
            console.log("등록되지 않은 아이디입니다.")
            return;
        }
        if(userListPW.indexOf(logInForm.password.value) == -1 && logInForm.password.value != "")
        {
            document.getElementById("loginAnimBox").style.animationPlayState = "running";
            document.getElementById("errSigninPW").innerHTML = "- 비밀번호가 일치하지 않습니다."
            logInForm.password.style.border = "2px solid";
            logInForm.password.style.borderColor = "red";
            console.log("비밀번호가 일치하지 않습니다.")
        }
        console.log("로그인 실패");
    }

    if(logInForm.name.value == "")
    {
        console.log("123123123123123");
        logInForm.name.style.border = "2px solid";
        logInForm.name.style.borderColor = "red";
        document.getElementById("errSigninID").innerHTML = "- 아이디를 입력하세요."
        document.getElementById("loginAnimBox").style.animationPlayState = "running";
    }
    if(logInForm.password.value == "")
    {
        logInForm.password.style.border = "2px solid";
        logInForm.password.style.borderColor = "red";
        document.getElementById("errSigninPW").innerHTML = "- 비밀번호를 입력하세요."
        document.getElementById("loginAnimBox").style.animationPlayState = "running";
    }

    // console.log("userListID.indexOf(logInForm.name.value) = " + userListID.indexOf(logInForm.name.value));
    // console.log("userListPW.indexOf(logInForm.password.value) = " + userListPW.indexOf(logInForm.password.value));
}

function userOnoff(isOn)            // 로그인이나 로그아웃시 false 값 받을 함수. 이하 내용 보충.
{
    if(isOn)
    {
        // document.getElementById("userOn").style.display = "block"
        // document.getElementById("userOff").style.display = "none"
        localStorage.setItem("isOn", isOn);
        console.log("유저 상태 isOn = " + isOn);
        document.getElementById("logInText").innerHTML = userListNickName[userListID.indexOf(logInForm.name.value)] + "님";
        document.getElementById("signUpText").innerHTML = "LogOut";
    }
    else
    {
        // document.getElementById("userOn").style.display = "none"
        // document.getElementById("userOff").style.display = "block"
        localStorage.setItem("isOn", isOn);
        console.log("유저 상태 isOn = " + isOn);
        document.getElementById("logInText").innerHTML = "signin";
        document.getElementById("signUpText").innerHTML = "signup";
    }
}

function logOut()                   // 로그아웃 버튼 클릭 시 호출.
{
    isOn = false;
    userOnoff(isOn);                // off 라인 상태를 표시하는 false을 던짐.
}

function containerExitBtn()         // 팝업창 닫는 버튼 통일 테스트 중.
{
    const signUpForm = document.signUpForm;
    const logInForm = document.logInForm;

    if(document.getElementById("signUpMainContainer").style.display = "block")
    {
        signUpForm.name.value = "";
        signUpForm.password.value = "";
        signUpForm.nickname.value = "";
        document.getElementById("signUpMainContainer").style.display = "none";
    }

    if(document.getElementById("loginMainContainer").style.display == "block")
    {
        logInForm.name.value = "";
        logInForm.password.value = "";
        document.getElementById("loginMainContainer").style.display = "none";
    }

    document.getElementById("signUpAnimBox").style.animationPlayState = "paused";
    document.getElementById("loginAnimBox").style.animationPlayState = "paused";
}
