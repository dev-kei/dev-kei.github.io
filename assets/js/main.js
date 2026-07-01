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