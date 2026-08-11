$(document).ready(function() {
    $('#sidenav').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    $("#case_studies").hide(); 

    $(".case").mouseenter(function(){
        $("#case_studies").show(); 
      });
    
      $("#case_studies").mouseleave(function(){
        $("#case_studies").hide(); 
      });

    });

$(document).ready(function () {

    $('#sidenav').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#case_studies').hide();

    $('.case').mouseenter(function () {
        $('#case_studies').show();
    });

    $('#case_studies').mouseleave(function () {
        $('#case_studies').hide();
    });


    // Trusted companies carousel
    const track = document.querySelector('.logo-track');

    if (track) {
        const logos = [...track.children];

        logos.forEach(logo => {
            track.appendChild(logo.cloneNode(true));
        });
    }

});