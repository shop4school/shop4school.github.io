$(document).ready(function () {

$('button').click(function() {

    var url = "http://api.target.com/items/v3/";
    var data = {
      product_id : "055-02-3741",
      ?id_type : "dpci",
      store_id : "530",
      fields : "ids,descriptions,locations,pricing,images",
      mode : "online",
      key : "1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb"
    };

    $.getJSON(url, data, function (response) {


      var callback = function(response) {

        var responseHTML = '<ul class="tbu">';
        var responseHTML += '<li class="detail">' + product_composite_response.items.online_description.value + '</li>'
        var responseHTML += '<li class="detail">' + product_composite_response.items.online_price.current_price + '</li>'
        var responseHTML += '<li class="detail">' + product_composite_response.items.online_price.original_price + '</li>'
        var responseHTML += '<li class="detail">' + product_composite_response.items.image.internal_primary_image_url + '</li>'

      };

    }); // end getJSON

  }); // end button.click

}); // end ready