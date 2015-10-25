
var array_of_items = {Tissues: "253-07-0129", Scissors: "081-22-0936", Glue: "081-06-1653", Crayons: "081-04-0343", Watercolor_Set: "081-04-0600", Markers: "081-04-1261", Pencils: "081-02-1857", Notebook: "081-01-1751", Erasers: "081-02-1505", Folders: "081-03-0706", Box: "081-06-2910", Soap: "049-00-1118", Bags: "253-01-0291"};


var api_call = function(dpci) {

  var url = 'http://api.target.com/items/v3/' + array_of_items[key] + '?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb'

$(document).ready(function () {

  $('button').click(function() {

    $.ajax ({
      url: url,
      consentType: "application/json",
      dataType: 'jsonp',

      success: function(data) {
        // console.log(data);
        // $("#output-2").html("Item: " + key)
        // $("#output-2").html("Description: " + data.product_composite_response.items[0].general_description)
        // $("#output-3").html(data.product_composite_response.items[0].online_price.current_price);



            var img_tag = new Image();
            img_tag.src = data.product_composite_response.items[0].image.internal_primary_image_url;
            img_tag.setAttribute("class", "thumb-img");
            img_tag.setAttribute("alt", "effy");
            document.getElementById("output-4").appendChild(img_tag);

            var div_b = document.createElement("div");
            div_b.innerHTML = "Description: " + data.product_composite_response.items[0].general_description;
            div_b.setAttribute("class", "description")
            document.getElementById("output-4").appendChild(div_b);

            var div_a = document.createElement("div");
            div_a.innerHTML = "Price: " + data.product_composite_response.items[0].online_price.current_price;
            div_a.setAttribute("class", "price")
            document.getElementById("output-4").appendChild(div_a);


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