
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');


function nextImage() {
    let gallery = document.querySelectorAll('.displayImage');
    let next = 0;
    for (image of gallery) {
        if (next == 1) {
            image.id = 'selectedImage';
            break;
        }
        if (image.id == 'selectedImage') {
            image.id = '';
            next = 1;
        }
    }
}

// rightButton.addEventListener('click', nextImage())