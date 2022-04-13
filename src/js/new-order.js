    let selector = document.querySelector(".submit-porpose .custom-select") ; 
    let selectField = document.querySelector(".submit-porpose .custom-select select.form-control")
    let arrow = document.querySelector(".submit-porpose .custom-select .custom-arrow img") ; 
    selector.addEventListener("mousedown" , function(e){
        e.preventDefault() ; 
        const select = selector.children[0] ; 
        const dropdown = document.createElement("ul") ; 
        dropdown.className = "selector-option" ; 
        [...select.children].forEach(option =>{
            const dropdownOption = document.createElement("li") ; 
            dropdownOption.textContent = option.textContent ; 

            dropdownOption.addEventListener("mousedown" ,  function(e){
                e.stopPropagation() ; 
                select.value = option.value ; 
                selector.value = option.value ; 
                select.dispatchEvent(new Event("change")) ; 
                selector.dispatchEvent(new Event("change")) ; 
                arrow.setAttribute("src" , "./assets/icons/Icon ionic-md-arrow-dropdown.svg")
                dropdown.remove() ; 
            })
            dropdown.appendChild( dropdownOption) ;
        })
        if( !(selector.appendChild(dropdown))){
            $(selectField).on("mousedown" , function(){
                selector.appendChild(dropdown) ; 
            })
        }else{
            $(selectField).on("mousedown" , function(){
                dropdown.remove() ; 
            })
        }
        arrow.setAttribute("src" , "./assets/icons/Icon ionic-md-arrow-dropdown-1.svg");
        document.addEventListener("click" , function(e){
            if(!(selector.contains(e.target))){
                dropdown.remove() ; 
                arrow.setAttribute("src" , "./assets/icons/Icon ionic-md-arrow-dropdown.svg")
            }
        })
    })

    $("#notifications").modal("show") ; 
    $("#notifications .btn").on("click" , function(){
        $("#notifications").modal("hide") ; 
    });