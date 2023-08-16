const $body = document.querySelector("body");

const $wrapper = document.createElement("div");
$wrapper.className = "wrapper";
$body.appendChild($wrapper);

for(let i = 0; i < 8; i++){
    const $div = document.createElement("div");
    $div.className = "app";
    $wrapper.appendChild($div);
}
const $apps = document.querySelectorAll(".app");

$apps.forEach((e, i) => {
    // console.log(e, i);
    e.addEventListener("click", function() {
        $apps.forEach((el) => {
            el.classList.remove("active");
        });
        $apps[i].classList.add("active");
    });

    $apps[i].addEventListener("mouseover", function() {
        $apps[i].style.width = "100px";
        $apps[i].style.height = "100px";
        $apps[i].style.transform = "translateY(-40%)";
    });
    $apps[i].addEventListener("mouseout", function() {
        $apps[i].style.width = "55px";
        $apps[i].style.height = "55px";
        $apps[i].style.transform = "translateY(0)";
    });

    let array = [
        "url('images/creamsoda_baekhyun.jpg') no-repeat",
        "url('../images/creamsoda_chanyeol.jpg') no-repeat",
        "url('../images/creamsoda_chen.jpg') no-repeat",
        "url('../images/creamsoda_do.jpg') no-repeat",
        "url('../images/creamsoda_sehun.jpg') no-repeat",
        "url('../images/creamsoda_suho.jpg') no-repeat",
        "url('../images/creamsoda_xiumin.jpg') no-repeat",
        "url('../images/creamsoda_exo.jpg') no-repeat"
    ];
    $apps[i].addEventListener("click", function() {
        $body.style.background = array[i];
        $body.style.backgroundSize = "cover";
    });
});
