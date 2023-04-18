$(document).ready(function () {
    // Send POST request to /api/v1/places_search with an empty dictionary as the body
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      contentType: 'application/json',
      data: '{}',
      success: function (data) {
        // Loop through the results and create an article tag for each place
        $.each(data, function (index, place) {
          // Create the article tag
          var article = $('<article>');
          article.addClass('place');
          article.append($('<div>').addClass('title').append($('<h2>').text(place.name)));
          article.append($('<div>').addClass('price_by_night').text('$' + place.price_by_night));
          // Create the information section of the place
          var infoDiv = $('<div>').addClass('information');
          var maxGuest = place.max_guest > 1 ? place.max_guest + ' Guests' : place.max_guest + ' Guest';
          var numRooms = place.number_rooms > 1 ? place.number_rooms + ' Bedrooms' : place.number_rooms + ' Bedroom';
          var numBaths = place.number_bathrooms > 1 ? place.number_bathrooms + ' Bathrooms' : place.number_bathrooms + ' Bathroom';
          infoDiv.append($('<div>').addClass('max_guest').append($('<i>').addClass('fa fa-users fa-3x')).append($('<br>')).append(maxGuest));
          infoDiv.append($('<div>').addClass('number_rooms').append($('<i>').addClass('fa fa-bed fa-3x')).append($('<br>')).append(numRooms));
          infoDiv.append($('<div>').addClass('number_bathrooms').append($('<i>').addClass('fa fa-bath fa-3x')).append($('<br>')).append(numBaths));
          article.append(infoDiv);
          // Create the description section of the place
          var descDiv = $('<div>').addClass('description').text(place.description);
          article.append(descDiv);
          // Append the place to the .places section
          $('section.places').append(article);
        });
      }
    });
  });