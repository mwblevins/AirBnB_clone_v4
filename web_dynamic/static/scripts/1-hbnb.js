#!/usr/bin/node
$(document).ready(function () {
    const amenities = {};
    $('input[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        amenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenities[$(this).data('id')];
      }
      const amenityList = Object.values(amenities).join(', ');
      $('.amenities > h4').text(amenityList);
    });
  });
