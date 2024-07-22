// ဖောင့်မှာ နာမည်ဖြည့်

// document.querySelictor('#submit').disabled = true;

// document.querySelictor('#name').onkeyup = function(){
// document.querySelector('#submit').disabled = false;}

document.querySelector('form').onsubmit = function() {
    let urName = document.querySelector('#name').value;
    alert('မင်္ဂလာပါ, ${urNane}');
}