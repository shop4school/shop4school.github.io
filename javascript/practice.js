$(document).ready(function () {

  $('button').click(function() {

    $.ajax ({
      type: 'GET',
      dataType: "jsonp",
      jsonp: 'jsonp',
      crossDomain: 'true',
      url: 'http://api.target.com/items/v3/055-02-3741?id_type=dpci&store_id=530&fields=ids,descriptions,locations,pricing,images&mode=online&key=1Kfdqvy6wHmvJ4LDyAVOl7saCBoKHcSb',
      succes: function(data) {
        console.log('success', data);
      } //end success function

    }); // end AJAX

  }); // end button.click

}); // end ready
