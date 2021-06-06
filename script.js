// var app = new Vue({
//     el: '#app',
//     data: {
//       message: null
//     },
//     methods: {
//         getInputData(val) {
//             debugger
//             message = val;
//         }
//     }
// })

const getInputData = (event) => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = event.target.value;
    document.getElementById('enteredText').innerHTML = msg.text;
    window.speechSynthesis.speak(msg);
}