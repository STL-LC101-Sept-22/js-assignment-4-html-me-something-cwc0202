
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

function changePreviewImage(index) {
    let anchor = document.querySelectorAll('a .previewImage');
    let img = document.querySelectorAll('img .previewImage');
    let gallery = document.querySelectorAll('.displayImage');
    anchor.href = `${gallery[index].src}`
    img.src = `${gallery[index].src}`
// dnot working currently
}

function nextImageLeft() {
    let gallery = document.querySelectorAll('.displayImage');
    let next = 0;
    let i = 0
    for (image of gallery) {
        i++
        if (next == 1) {
            gallery[(i-3)].id = 'selectedImage';
            changePreviewImage(i-1)
            break;
        }
        if (image.id == 'selectedImage') {
            image.id = '';
            next = 1;
            // if at beginning, return to end
            if (i >= gallery.length) {
                gallery[gallery.length-2].id = 'selectedImage'
            }
            if (i == 1) {
                gallery[gallery.length-1].id = 'selectedImage';
                next = 0;
                changePreviewImage(i-1)
                break;
            }
        }
    }
    changePreviewImage(i-1)
}
function nextImageRight() {
    let gallery = document.querySelectorAll('.displayImage');
    let next = 0;
    let i = 0
    for (image of gallery) {
        i++
        // make new selectedImage after removing old
        if (next == 1) {
            image.id = 'selectedImage';
            break;
        }
        if (image.id == 'selectedImage') {
            image.id = '';
            next = 1;
            // return to first image after getting to end
            if (i >= gallery.length) {
                gallery[0].id = 'selectedImage'
            }
        }
    }
}

// rightButton.addEventListener('click', nextImage())