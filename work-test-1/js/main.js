window.onload = function() {
    let getNameField = document.querySelector('input[name=name]');
    let getEmailField = document.querySelector('input[name=email]');
    let getSubmitBtn = document.querySelector('#submit');



    /* ajax send data */
    function getAjax(url, success) {
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send();
        return xhr;
    }
    getSubmitBtn.addEventListener('click',function(){
        let ajaxField = 'https://httpbin.org/get?' + getNameField.getAttribute('name') + '=' + getNameField.value +
        '&' + getEmailField.getAttribute('name') + '=' + getEmailField.value;
        getAjax(ajaxField, function(data){
        let json = JSON.parse(data);
        if (json != '') {
         alert('Thank you, we have received your data')
        } else alert('Error');
    });
    });
    /*----------SLICK SLIDER-----------*/
    $('.third-block__slider').slick({
        dots:true,
        arrows:false,
    });
    /*----------/SLICK SLIDER-----------*/
    /*---------SCROLL ANIM-----------*/
    var $win = $(window);

    $win.scroll(function() {
        if($win.scrollTop() + ($win.height()*0.9) >= $('#anim_marker1').offset().top) {
            $('#anim_marker1').addClass('show_hidden_block');
        }
        if($win.scrollTop() + ($win.height()*0.9) >= $('#anim_marker2').offset().top) {
            $('#anim_marker2').addClass('show_hidden_block');
        }
    });
    /*---------/SCROLL ANIM-----------*/
};
