//highlight
const highlight = function () {
    hljs.highlightAll();
}

//modal
const modal = function () {
    //버튼을 클릭하면 modal창을 보이게 해주세요(show 추가)
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    })
}

//tapmenu
const tapMenu = function () {
    const tabBtn = document.querySelectorAll(".view-title > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    //
    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            //모든 클래스 active 삭제
            tabBtn.forEach(el => {
                el.classList.remove("active");
            });
            //내가 클릭한건 active 추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게~
            tabCont.forEach(el => {
                el.style.display = "none";
            })
            tabCont[index].style.display = "block"
        })
    })
}

//quizmoda;
const quizmodal = function () {
    //버튼을 클릭하면 modal창을 보이게 해주세요(show 추가)
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    })
}

//quizmenu
const quizMenu = function () {
    const tabBtn = document.querySelectorAll(".menu-bar > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    //
    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            //모든 클래스 active 삭제
            tabBtn.forEach(el => {
                el.classList.remove("active");
            });
            //내가 클릭한건 active 추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게~
            tabCont.forEach(el => {
                el.style.display = "none";
            })
            tabCont[index].style.display = "block"
        })
    })
}
