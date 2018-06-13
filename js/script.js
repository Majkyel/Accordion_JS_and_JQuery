'use strict';

(function () {
    var accordionVanillaJS = function () {

        var headers = document.querySelectorAll('#accordion-vanillajs h3');
        var headersLength = headers.length;

        var headerClickCallback = function () {
            for (var i = 0; i < headersLength; i++) {
                if (headers[i].classList.contains('active') && headers[i] !== this) {
                    headers[i].classList.remove('active');
                }
            }
            this.classList.add('active');
        };

        for (var i = 0; i < headersLength; i++) {
            headers[i].addEventListener('click', headerClickCallback);
        }
    };
    accordionVanillaJS();

    var accordionJQuery = function () {
        $('#accordion-jquery h3').on('click', function () {
            $(this).siblings('h3').removeClass('active');
            $(this).addClass('active');
        });
    };
    accordionJQuery();

})();
