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

    let fromTime = $("#select-time .inputs .from-time input") ; 
    let toTime = $("#select-time .inputs .to-time input") ; 
    let selectedTime = $(".selected-time ") ;
    $("#select-time .inputs input").on("change" , function(){
        $(".add-time-btn").removeAttr("disabled") ; 
    })
    $(".add-time-btn").on("click"  , function(e){
        e.preventDefault() ; 
        if(fromTime.val()&&toTime.val()){
            let inputFrm = $(" <input type='time' name = 'from[]' readonly class='form-control start'>") ; 
            let inputTo = $(" <input type='time' name = 'to[]' readonly class='form-control end'>") ; 
            let dot = $("<span class = 'dot'>:</span>") ; 
            let time = $("<div class = 'time'></div>") ; 
            inputFrm.val(fromTime.val() ) ; 
            inputTo.val(toTime.val()) ; 
            time.append($("<span class = 'frm-text'>من</span>")) ;
            time.append(inputFrm) ; 
            time.append(dot) ; 
            time.append($("<span class = 'to-text'>الي</span>")) ;
            time.append(inputTo) ; 
            selectedTime.append(time) ; 
            $(fromTime).val(null) ;
            $(toTime).val(null) ;
            $(this).attr("disabled" , "disabled") ;
            $(".add-btn").removeAttr("disabled").css({"background-image" : "linear-gradient(#da9800 , #8d6d3a)"}) ;  
        }
    });

    $(".add-btn").attr("disabled" , "disabled") ; 
    $(".add-btn").on("click" ,  function(e){
        e.preventDefault() ; 
            let dates = $(".dates") ; 
            let date = $("<div class = 'date'></div>") ; 
            let close = $("<img  src = './assets/icons/Icon ionic-ios-close-circle-outline.svg'/>") ; 
            $(close).on("click" , function(){
                $(this).parentsUntil(".dates").remove() ; 
            });
            let day = $(".clinic-days select option:selected").text() ; 
            let selectedDay = $(" <span class='day'></span>") ; 
            selectedDay.text(day) ; 
            date.append(selectedDay) ; 
            let times = $("<span class = 'times'></span>") ;
            $(".selected-time input").attr("name" , " ") ; 
            times.append($(".selected-time .time" )) ; 
            date.append( times) ; 
            date.append(close) ; 
            dates.append(date) ; 
            $(".selected-time .dot").remove() ; 
        $(".add-btn").attr("disabled" , "disabled").css({"background-image" : "linear-gradient(#faca89 , #e2ad5b)"}) ; 
        $(".end-time input").attr("disabled" , "disabled") ; 
    })

    $(".report-content #sl-1").on( "change" , function(){
        $(".report-content [data-select = '1']").show() ; 
    })
    $(".report-content #sl-2").on( "change" , function(){
        $(".report-content [data-select = '2']").show() ; 
    })

    $("#back_btn").on("click" , function (){
        window.history.back();
    });

    $("#med-btn").on("click" , function(){
        let contents =  $(".descriptions .select-content") ; 
        let selectedText =  $(".descriptions select option:selected").text()  ; 
        let content = $("<span></span>") ; 
        let img = $("<img src='./assets/icons/Icon ionic-ios-close-circle-outline.svg' alt='حذف'>") ; 
        let text = $("<div></div>") ; 
        content.append(img) ;
        text.text(selectedText) ;  
        content.append(text) ; 
        contents.append(content) ; 
        $(img).on("click" , function(){
            $(this).parentsUntil(".select-content").remove() ; 
        })
    }) ; 

    $(".special-report .form-group textarea").on("input" , function(){
        if(! $(this).val().length==0){
            $("#new-report").removeAttr("disabled") ; 
        }else{
            $("#new-report").attr("disabled" , "disabled") ; 
        }
    })
    $("#new-report").on("click" , function(e){
        e.preventDefault() ; 
        let reports = $(".recorded-reports") ; 
        let report = $("<div class= 'report'></div>") ; 
        console.log(report) ;
        let title = $("<div class= 'title'></div>") ; 
        let text = $("<span></span>") ; 
        text.text(`التقرير الاول`) ;
        title.append(text) ; 
        let edit = $('<img id = "edit" src="./assets/icons/Edit.svg" data-bs-toggle="modal" data-bs-target="#edit-report" alt="تعديل">') ;
        title.append(edit) ; 
        let rem = $(' <img id = "rem" src="./assets/icons/delete.svg" alt="حذف">') ;
        title.append(rem) ; 
        report.append(title) ;
        let specialRecord = $("<div class= 'special-record'></div>") ; 
        let selectContent = $(".special-report .form-group .content select option:selected").text() ; 
        let selectedContent = $("<div class= 'selected-content'></div>");
        selectedContent.text(selectContent) ; 
        specialRecord.append(selectedContent) ; 
        let textarea = $(".special-report .form-group textarea").val() ;
        let textContent = $('<div class="text-content"></div>') ; 
        textContent.text(textarea) ; 
        specialRecord.append(textContent) ;
        report.append(specialRecord) ; 
        reports.append(report);
        $(".recorded-reports .report .title #rem ").on("click" , function(){
            $(this).parentsUntil(".recorded-reports").remove() ; 
        })
        $(".special-report .form-group textarea").val(null) ; 
        $(".special-report .descriptions .select-content span").remove() ; 
        $(".special-report .form-group .content select option:first").attr("selected" , "selected") ; 
        $(".special-report .descriptions .content select option:first").attr("selected" , "selected") ; 
        $(this).attr("disabled" , "disabled") ; 
    });


    $("#edit-report .close").on("click" , function(){
        $("#edit-report").modal("hide") ; 
    })
    $(".modal#edit-report .btn").on("click" , function(e){
        e.preventDefault() ; 
        $("#edit-report").modal("hide") ; 
    })

});

