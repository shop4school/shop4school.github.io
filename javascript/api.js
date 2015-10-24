$(document).ready(function () {

$('button').click(function() {

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.target.com/items/v3/055-02-3741?id_type=dpci&store_id=530&fields=ids%2Cdescriptions%2Clocations%2Cpricing%2Cimages&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "bbd93d8c-edd6-c6e2-828a-0a0343341b19"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});



    // var product_id = "055-02-3741"
    // var url = 'https://api.target.com/items/v3/' + product_id + '?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb?callback=?';


    // // var data = {
    // //   id_type : 'dpci',
    // //   store_id : '530',
    // //   fields : 'ids,descriptions,locations,pricing,images',
    // //   // fields : ['ids','descriptions','locations','pricing','images'],
    // //   mode : 'online',
    // //   key : '1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb'
    // // };

    // $.getJSON(url,function (response) {
    //   console.log(response);

    //   // var callback = function(response) {

    //   //   var responseHTML = '<ul class="tbu">';
    //   //   responseHTML += '<li class="detail">' + product_composite_response.items.online_description.value + '</li>';
    //   //   responseHTML += '<li class="detail">' + product_composite_response.items.online_price.current_price + '</li>';
    //   //   responseHTML += '<li class="detail">' + product_composite_response.items.online_price.original_price + '</li>';
    //   //   responseHTML += '<li class="detail">' + product_composite_response.items.image.internal_primary_image_url + '</li>';

    //   // };

    // }); // end getJSON

  }); // end button.click

}); // end ready