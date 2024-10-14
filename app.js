const defaultProfile = {
    name: "Ali Bravo",
    discription: "Senior Frontend Developer",
    picture: "https://placeholder.com/150",
    backgroundColor: '#fff'
}

function changeName() {
    // const newName = document.getElementById('nameInput').value;
    // document.getElementById('profileName').innerText = newName;
    // nameInput.value ="";

    if (nameInput.value !== '') {
        const newName = document.getElementById('nameInput').value;
        document.getElementById('profileName').innerText = newName;
    }


}

function changeDiscription() {
    if (nameInput.value !== '') {
        const newDescription = document.querySelector('#nameInput').value;
        document.querySelector('#profileDescription').innerText = newDescription;
    }
}

function changeProfilepic() {
    let newpic = prompt("enter url")
    if (newpic !== '') {
        const newPicture = document.getElementById('imageUrlInput').value;
        document.getElementById('profilePic').src = newpic;
    }

}

function changeBackgroundColor() {
    if(colorInput !== ''){
        const newBackground = document.getElementById('colorInput').value;
        document.getElementById('card').style.backgroundColor = newBackground;

    }
}


function resetProfile() {
    document.getElementById('profileName').innerText = defaultProfile.name;
    document.getElementById('profileDescription').innerText = defaultProfile.discription;
    document.getElementById('profilePic').src = defaultProfile.picture;
    document.getElementById('card').style.backgroundColor = defaultProfile.backgroundColor;
}
