
function showHidePreview() {
    previewDiv = document.getElementById('preview');
    if (previewDiv.style.display === "" || previewDiv.style.display === "none") {
        previewDiv.style.display = "block";
    } else {
        previewDiv.style.display = "none";
    }
}

function setPreviewMessageBackground() {
    previewMessage = document.getElementById('preview');

    var radios = document.getElementsByName('image');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            previewMessage.style.backgroundImage = 'url(' + radios[i].value + ')';
        }
    }
}

function setPreviewMessageText() {
    message = document.getElementById('message');
    previewMessage = document.getElementById('messagePreview');
    previewMessage.value = message.value;
}

function setPreviewIntroductionText() {
    introduction = document.getElementById('previewintroduction');
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastname').value;

    var radios = document.getElementsByName('gender');
    var genderTermination = 'o';

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (radios[i].id === 'female')
                genderTermination = 'a';
        }
    }

    introduction.innerHTML = "Prezad" + genderTermination + ", " + name + " " + lastName;
}


function charsOnly() {
    return !(event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57);
}

function numbersOnly() {
    return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57;
}

function redirectTo(url) {
    window.location.href = url;
}