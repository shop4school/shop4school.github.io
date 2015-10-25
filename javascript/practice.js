$(document).ready(function () {

  $('button').click(function() {

    $.ajax ({
      url: 'http://api.target.com/items/v3/055-02-3741?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb',
      jsonpCallback: 'jsonCallback',
      consentType: "application/json",
      dataType: 'jsonp',

      success: function(data) {
        console.log(data);
        img = data.product_composite_response.items[0].image.internal_primary_image_url
        $("#output-1").html(data.product_composite_response.items[0].general_description)
        $("#output-2").html(data.product_composite_response.items[0].class_id);
        $("#output-3").html(data.product_composite_response.items[0].online_price.current_price);
        $("#output-4").html(
          '<img id="default" src="">'
          document.getElementById("default").setAttribute("id",img).setAttribute("src",img);

          ); // end img output
        }, //end success function

       error: function(e) {
        console.log(e.message);
        } //end error function

    }); // end AJAX

  }); // end button.click

}); // end ready
