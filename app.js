function talk() {
    var know = {
        "Hello": "Hii",
        "Hii": "Hello",
        "Nice to meet you": "Same here :)",
        "Who are you": "I am Sanjeev. ",
        "How are you": "Good :)",
        "What are you doing": "Nothing just Coding.",
        "Where do you live": "I live in Gorakhpur. ",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}