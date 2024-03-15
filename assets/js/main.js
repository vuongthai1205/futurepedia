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
