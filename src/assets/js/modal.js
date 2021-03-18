// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log(window.screen.width);
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}


$(document).ready(function() {
  $('#comment_form').submit(function() {
    $(this).ajaxSubmit({
      error: function(xhr) {
        status('Error: ' + xhr.status);
      },
     success: function(response) {
      console.log(response);
     }
    });
    //Very important line, it disable the page refresh.
    return false;
  });
});

$("#home-card").carousel('pause');