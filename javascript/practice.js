
var array_of_items = {Tissues: 253070129, Scissors: 081220936, Glue-Sticks: 081061653, Crayons: 081040343, Watercolor-Set: 081040600, Washable-Markers: 081041261, Pencils: 081021857, Wire-Notebook: 081011751, Erasers: 081021505, Folders: 081030706, Pencil Box: 081062910, Hand-Soap: 049001118, Gallon-Bags: 253010291};


var api_call = function(dpci) {

  var url = 'http://api.target.com/items/v3/' + array_of_items[key] + '?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb'

$(document).ready(function () {

  $('button').click(function() {

    $.ajax ({
      url: url,
      consentType: "application/json",
      dataType: 'jsonp',

      success: function(data) {
        console.log(data);
        $("#output-1").html(data.product_composite_response.items[0].general_description)
        $("#output-2").html(data.product_composite_response.items[0].class_id);
        $("#output-3").html(data.product_composite_response.items[0].online_price.current_price);

        var img_tag = new Image();
        img_tag.src = data.product_composite_response.items[0].image.internal_primary_image_url;
        img_tag.setAttribute("class", "thumb-img");
        img_tag.setAttribute("alt", "effy");
        document.getElementById("output-4").appendChild(img_tag);


        }, //end success function

       error: function(e) {
        console.log(e.message);
        } //end error function

    }); // end AJAX

  }); // end button.click

}); // end ready
}; // end api-call


// ITERATES OVER ARRAY TO CALL API

for (var key in array_of_items) {
  api_call(array_of_items[key]);
};