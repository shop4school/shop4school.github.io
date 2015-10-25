
var array_of_items = {Tissues: 14736258, Scissors: 21454431, Glue_Sticks: 14796082, Crayons: 14151825, Watercolor_Set: 14151836, Washable_Markers: 17133979, Pencils: 17081484, Wire_Notebook: 18817725, Erasers: 16909123, Folders: 23980910, Pencil_Box: 16974240, Hand_Soap: 14775581, Gallon_Bags: 12972028};


var api_call = function(dpci) {

$(document).ready(function () {

  $('button').click(function() {

    $.ajax ({
      url: 'http://api.target.com/items/v3/055-02-3741?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb',
      jsonpCallback: 'jsonCallback',
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