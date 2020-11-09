$(document).ready(function() {
  $("form#survey").submit(function(event) {
    let frontBack = $("select#frontBack").val();
    let platform = $("select#platform").val();
    let webDesign = $("#webDesign").val();
    let unsure = $("select#unsure").val();
    let data = $("select#data").val();

    if (frontBack === 'front')  {
      $("#c").show();
    } else if (frontBack === 'back')  {
      $("#js").show();
    } else  {
      $("#c").show();
      $("#js").show();
    }
    if (unsure === true)  {
    } if (platform === "1") {
      $("#sw").show();
    }
    if (webDesign != false) {
      $("#js").show();
    }
    if (data) {
      $("#py").show();
    }
    event.preventDefault();
  });
});