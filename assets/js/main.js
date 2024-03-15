document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham chiếu đến các phần tử cần thiết
    var headerIconBar = document.querySelector('.header-icon-bar');
    var headerIconClose = document.querySelector('.header-icon-close');
    var menu = document.querySelector('.menu');

    // Thêm sự kiện click cho nút
    headerIconBar.addEventListener('click', function () {
        // Kiểm tra xem lớp "active" đã tồn tại trong menu hay chưa
        var isActive = menu.classList.contains('active');

        // Nếu lớp "active" chưa tồn tại, thêm vào; nếu đã tồn tại, loại bỏ
        if (!isActive) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });
    headerIconClose.addEventListener('click', function () {
        // Kiểm tra xem lớp "active" đã tồn tại trong menu hay chưa
        var isActive = menu.classList.contains('active');

        // Nếu lớp "active" chưa tồn tại, thêm vào; nếu đã tồn tại, loại bỏ
        if (!isActive) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });
});

window.onscroll = function () {
    myFunction();
};

// Get the header
var header = document.getElementById('header');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (document.documentElement.scrollTop > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

var listButton = document.querySelectorAll('.tabs-feature__button');
var listCard = document.querySelectorAll('.list-card');
listButton.forEach((element, i, parent) => {
    element.onclick = (e) => {
        e.preventDefault();
        parent.forEach((e, index) => {
            if (e.classList.contains('active')) {
                e.classList.remove('active');
                listCard[index].classList.remove('active');
            }
        });
        element.classList.add('active');
        listCard[i].classList.add('active');
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.features-more__button.btn');
    const popup = document.getElementById('popup-filter');
    const closeButton = document.querySelector('.close-popup-filter');

    button.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

var closeSubmenu = document.querySelectorAll('.btn-go-to-back');
var subMenu = document.querySelectorAll('.sub-menu');
var itemMenu = document.querySelectorAll('.item-menu');
// closeSubmenu.onclick = (e) => {
//     e.preventDefault();
//     var isActive = subMenu.classList.contains('close');

//     // Nếu lớp "active" chưa tồn tại, thêm vào; nếu đã tồn tại, loại bỏ
//     if (!isActive) {
//         subMenu.classList.add('close');
//     } else {
//         subMenu.classList.remove('close');
//     }
// };

// Sử dụng let thay vì var để biến có thể thay đổi giá trị trong phạm vi hàm xử lý sự kiện
closeSubmenu.forEach((e, i, parent) => {
    e.addEventListener(
        'click',
        function (event) {
            event.stopImmediatePropagation();
            const isActive = subMenu[i].classList.contains('active');
            if (isActive) {
                subMenu[i].classList.add('close');
                subMenu[i].classList.remove('active');
            } else {
                subMenu[i].classList.remove('close');
                subMenu[i].classList.add('active');
            }
        },
        { capture: true }
    );
});

itemMenu.forEach((e, i, parent) => {
    e.onclick = (event) => {
        let sub = e.querySelector('.sub-menu');
        const isClosed = sub?.classList.contains('close');
        if (sub !== null) {
            if (isClosed) {
                sub.classList.remove('close');
                sub.classList.add('active');
            } else {
                sub.classList.remove('close');
                sub.classList.add('active');
            }
        }
    };
});
