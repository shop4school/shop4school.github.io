$(document).ready(function () {

  $('button').click(function() {

    $.ajax ({
      url: 'http://api.target.com/items/v3/055-02-3741?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb',
      jsonpCallback: 'jsonCallback',
      consentType: "application/json",
      dataType: 'jsonp',

      succes: function(json) {
        console.log(json);
        $("#output").html(json.product_composite_response.items.online_description.value);
        $("#output").html(json.product_composite_response.items.online_price.current_price);
        $("#output").html(product_composite_response.items.online_price.original_price);
        $("#output").html(json.product_composite_response.items.image.internal_primary_image_url);
      }, //end success function

      error: function(e) {
        console.log(e.message);
      } //end error function

    }); // end AJAX

  }); // end button.click

}); // end ready
