$(function(){
    $(".en").on("click" , function(){
        $(".lang .text-lang").text($(this).text()) ; 
        $("html").attr("dir" , "ltr") ;
    }) ; 
    $(".ar").on("click" , function(){
        $(".lang .text-lang").text($(this).text()) ; 
        $("html").attr("dir" , "rtl") ;
    }) ; 
    $(".close-register").on("click" , function(){
        $(".modal").modal("hide") ; 
    })
    $(".eye").on("mousedown" , function(){
        $(".pass").attr("type" , "text").css("padding-right" , "25px") ; 
    })
    $(".eye").on("mouseup" , function(){
        $(".pass").attr("type" , "password").css("padding-right" , "25px") ; 
    })
    $(".eye-2").on("mousedown" , function(){
        $(".pass-2").attr("type" , "text").css("padding-right" , "25px") ; 
        $(".pass").attr("type" , "password").css("padding-right" , "25px") ; 
    })
    $(".eye-2").on("mouseup" , function(){
        $(".pass-2").attr("type" , "password").css("padding-right" , "25px") ; 
    })

    $("#notifications").modal("show") ; 
    $("#notifications .btn").on("click" , function(){
        $("#notifications").modal("hide") ; 
    });



    if( $(".modal-register .form-group").hasClass("error") ) {
        $(".modal-register .text-error").text("المستخدم غير مسجل بالنظام") ; 
    }
    if( $(".modal-forget .form-group").hasClass("error") ) {
        $(".modal-forget .text-error").text("المستخدم غير موجود بالنظام").css({"text-align" : "center" , "margin-top" : "40px"}) ; 
    }
    if( $(".modal-new-pass .form-group").hasClass("error") ) {
        $(".modal-new-pass  .text-error").css({"text-align" : "center" , "margin-top" : "40px"}) ; 
        $(".modal-new-pass .text-error.first").text("برجاء مليء جميع البيانات") ; 
        $(".modal-new-pass .text-error.second").text("كلمات المرور غير متطابقة").css({"margin-top" : "12px"}) ; 
    }
    if( $(".otp .form-group").hasClass("error") ) {
        $(".otp .text-error").text("كلمة المرور المؤقتة غير صحيحة").css({"text-align" : "center" , "font-size" : "10pt" , "margin-top" : "10px" }) ; 
    }
    if( $(".modal-create .form-group").hasClass("error") ) {
        $(".modal-create .text-error.first").text("برجاء مليء جميع الخانات").css({"margin-top" : "10px"}) ; 
        $(".modal-create .text-error.second").text("المستخدم مسجل باللوحة").css({"margin-top" : "10px"}) ; 
        $(".modal-create .text-error.third").text("يوجد خطأ في البيانات المدخلة").css({"margin-top" : "10px"}) ;
        $(".modal-create .buttons").css({"margin-top" : "35px"}) ; 
        $(".modal-create .col-6").css({"height" : "900px"}) ; 
    }

    $(".importants-sector select").on("change" , function(e){
        var option = $(".importants-sector select option") ; 
        for(let w = 0 ; w<option.length ; w++){
            var customInput = $("<div class='custom-input'></div>") ; 
            var input = $("<input disabled  type='text' class='form-control' name = 'type' value='' />") ;
            var close = $("<img class = 'close' src='./assets/icons/Icon ionic-ios-close-circle-outline.svg' alt=''/>") ; 
            $(customInput).append(close) ;  
            $(customInput).append(input) ;  
        }
        $(".importants").append(customInput) ; 
        $(input).val($(".importants-sector select option:selected").text());
        $(".importants .custom-input .close").on("click" , function(){
            $(this).parentsUntil(".importants").hide() ; 
        })
    })

    $(".modal-create .form-group").on("submit" , function(e){
        e.preventDefault();
        $(".modal-create").hide() ; 
        $("#otp-phone").modal("show") ; 
    })
    $(".modal-forget .form-group").on("submit" , function(e){
        e.preventDefault();
        $(".modal-forget").hide() ; 
        $("#otp-pass").modal("show") ; 
    });
    $(".submit-porpose .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#submit-porpose").hide() ; 
        $("#successful-submit").modal("show") ; 
    });
    $(".write-consult .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#successful-submit").modal("show") ; 
    });
    $(".data-bank .form-group").on("submit" , function(e){
        e.preventDefault();
        $("#bank-info").modal("show") ; 
    });
    $(".bank-info .form-group").on("submit" , function(e){
        e.preventDefault();
        $(".bank-info").hide() ; 
        $(".successful-submit").modal("show") ; 
    });
    $(".online-consult .button .btn").on("click" , function(e){
        e.preventDefault();
        $("#successful-submit").modal("show") ; 
    });

    $(".add-start-time").on("click"  , function(e){
        let strTime = $(".start-time input").val() ; 
        e.preventDefault() ; 
        if(strTime){
            let input = $(".selected-start-time input") ; 
            input.val(strTime).css("display" , "block") ; 
            $("#start-time .add-time input").val(null) ;
            $(".end-time input").removeAttr("disabled") ; 
        }
    })
    $(".add-end-time").on("click"  , function(e){
        let endTime = $(".end-time input").val() ; 
        e.preventDefault() ; 
        if(endTime){
            let input =$(".selected-end-time input") ; 
            input.val(endTime).show() ; 
            $("#end-time .add-time input").val(null)  ; 
            $(".add-btn").removeAttr("disabled").css({"background-image" : "linear-gradient(#da9800 , #8d6d3a)"}) ;  
        }
    })
    $(".add-btn").attr("disabled" , "disabled") ;
    $(".add-btn").on("click" ,  function(e){
        e.preventDefault() ; 
        let day = $(".clinic-days select option:selected").text() ; 
        let frmTime = $(".selected-start-time  input").val() ; 
        let toTime =  $(".selected-end-time  input").val() ; 
        $(".add-btn").attr("disabled" , "disabled").css({"background-image" : "linear-gradient(#faca89 , #e2ad5b)"}) ; 
        $(".end-time input").attr("disabled" , "disabled") ; 
        if(frmTime && toTime){
            let dates = $(".dates") ; 
            let date = $("<div class = 'date'></div>") ; 
            let close = $("<img  src = './assets/icons/Icon ionic-ios-close-circle-outline.svg'/>") ; 
            $(close).on("click" , function(){
                $(this).parentsUntil(".dates").remove() ; 
            })
            let selectedDay = $(" <span class='day'></span>") ; 
            selectedDay.text(day) ; 
            let time =  $("<div class = 'time'></div>") ; 
            let strTime = $("<input type = 'time' readonly class='from-time '/>") ; 
            strTime.val(frmTime) ;  
            let dot = $("<span class='dot'>:</span>") ; 
            let endTime =  $("<input type = 'time' readonly class='from-time '/>") ; 
            endTime.val(toTime) ; 
            date.append(close) ; 
            date.append(selectedDay) ; 
            time.append(strTime) ; 
            time.append(dot) ;
            time.append(endTime) ; 
            date.append(time);
            dates.append(date) ; 
            $(".selected-start-time input").hide() ; 
            $(".selected-end-time input").hide() ; 
        }
    })






    $(".input-date").on("change" , function(){
        let element = $(".available-days .days .day") ; 
        element.val($(".input-date").val()) ; 
        $(element).css("display" , "flow-root") ;
        $(".available-time>.date input").removeAttr("disabled") ; 
    });

    $(".add-date .btn-time").on("click" , function(e){
        e.preventDefault() ;
        if( ( $(".available-time .date input").val() ) ){
            let element = $("<input type = 'time' readonly class = 'date' />")  ; 
            $(element).val($(".available-time .date input").val()) ; 
            $(".decided-date").append(element) ; 
        }
        if( ( $(".available-days .days .day").val() )&& ( $(".available-time .decided-date .date").val() ) ){
            $(".add-date-btn").removeAttr("disabled").css("opacity" , "1") ; 
        }
    })

    $(".online-consult .form-group").on("submit" , function(e){
        e.preventDefault() ; 
        let element = $("<div class = 'decided-day'></div>") ; 
        let titleElement = $("<span class='title'>تاريخ الاستشارة :</span>") ; 
        let dayElement = $("<span class='day'></span>")
        dayElement.text($(".available-days .days .day").val()) ; 
        let timeElement = $("<span class='time-element'></span>") ; 
        let date = $(".decided-date .date"); 
        for(var i = 0 ; i < date.length ; i++){
            console.log(date[i]) ; 
            timeElement.append(date[i]) ; 
        }
        element.append(titleElement) ; 
        element.append(dayElement) ; 
        element.append(timeElement) ; 
        $(".available-days .days .day").text("") ; 
        $(".available-time .date input").val("") ; 
        $(".add-date-btn").attr("disabled" , "disabled").css("opacity" , "0.7") ; 
        $(".available-time>.date input").attr("disabled" , "disabled") ; 
        $(".result").append(element).css("display" , "block") ; 
        $(this).closest(".form-group").find("input[type=text]").val("") ; 
        $(".input-date").removeAttr("disabled");
        $(".available-days .days .day").hide();
        $(".decided-date .date").hide() ;
    })
});

