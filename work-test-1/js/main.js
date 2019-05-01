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
        if (getEmailField.value.indexOf('@') > -1) {
            $.get(
                "https://httpbin.org/get",
                {
                    name: getNameField.value,
                    email: getEmailField.value
                },
                onAjaxSuccess
            );

            function onAjaxSuccess(data)
            {
                alert('Thank you, we have received your data')
            }
        }
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
