

let text = "Coder Shiyar";
let encode_text = window.btoa(text);

let decode_text = window.atob(encode_text);


let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input", () => {
    make_result();
});
select.addEventListener("change", () => {
    make_result();
});
function make_result() {
    if (select.value == "decode") {
        result.value = window.btoa(textarea.value);
    } else {
        result.value = window.atob(textarea.value);
    }
}
























// Coder Shiyar - YouTube : http://youtube.com/codershiyar

