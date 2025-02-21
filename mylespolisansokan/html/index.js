let currentName = "Polismyndigheten";

$(function () {
    function display(bool) {
        if (bool) {
            $("#container").slideDown(400);
            $("#startscreen ").slideDown(400);
            $("#info").hide()
            $("#info3").hide()
            $("#info4").hide()
            $("#done").hide()
        } else {
            $("#container").hide();
        }

        
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
            
        }

        $(`.playerName`).html(`
            <div>Välkommen till <span style="font-weight: bold">${currentName}</span><br></div>
        `);
    })
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post(`http://${GetParentResourceName()}/exit`, JSON.stringify({}));
            return
        }
    };
    $("#start").click(function () {
        
       $("#startscreen").fadeOut(400)
       $("#info").fadeIn(500)
       $("#warn").hide()

       document.getElementById('firstname').value = ''
       document.getElementById('telefonnummer').value = ''
       document.getElementById('age').value = ''
       document.getElementById('personnummer').value = ''
       document.getElementById('gender').value = ''
    })


    var first = document.getElementById('firstname')
    var age = document.getElementById('age')
    var why = document.getElementById('why')
    var gender = document.getElementById('gender')
    var personnummer = document.getElementById('personnummer')


        $(".sumbit").click(function() {
                if($(first , age , why , gender).val() === '') {
                    $("#warn").fadeIn(400)
                    return
                    
                } else{
       
                $("#warn").fadeOut(400)
                $("#info4").fadeOut(400)
                $("#info3").fadeOut(400)
                $("#info1").fadeOut(400)
                $("#info").fadeOut(400)
                $("#done").fadeIn(400)
                $.post(
                    `http://${GetParentResourceName()}/name`,
                  JSON.stringify({
                    plate: $("#firstname").val(),     
                    telefonnummer: $("#telefonnummer").val(),
                    age: $("#age").val(),
                    personnummer: $("#personnummer").val(),
                    gender: $("#gender").val(),
                  })
                );
            }
    })



    
    $("#next").click(function () {
        
        $("#info").fadeOut(400)
        $("#info3").fadeIn(400)
        $("#warn").hide()
    })

    $("#back").click(function () {
        
        $("#info").fadeIn(500)
        $("#warn").hide()
 
        document.getElementById('firstname').value = ''
        document.getElementById('telefonnummer').value = ''
        document.getElementById('age').value = ''
        document.getElementById('gender').value = ''
    })

    $("#Next2").click(function () {
        
        $("#info3").fadeIn(500)
        $("#warn").hide()

    })

    $("#Back2").click(function () {
        
        $("#info3").fadeOut(400)
        $("#info").fadeIn(500)
        $("#warn").hide()
 
        document.getElementById('firstname').value = ''
        document.getElementById('telefonnummer').value = ''
        document.getElementById('age').value = ''
        document.getElementById('gender').value = ''
    })

    $(".exit").click(function() {

        $("#container").slideUp();
        setTimeout(function(){
            $.post(`http://${GetParentResourceName()}/exit`, JSON.stringify({}));

        },400);


        return
    })    
})
