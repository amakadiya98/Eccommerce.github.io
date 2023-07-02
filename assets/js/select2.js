$(document).ready(function () {
    // Create an array of country objects with image and text properties
    var countries = [
      {
        id: "aus",
        text: "AUS",
        image: "./assets/images/header/australia-flag-icon.svg",
      },
      {
        id: "ind",
        text: "IND",
        image: "./assets/images/header/india-flag-icon.svg",
      },
      {
        id: "usa",
        text: "USA",
        image: "./assets/images/header/united-states-flag-icon.svg",
      },
      {
        id: "uk",
        text: "UK",
        image: "./assets/images/header/united-kingdom-flag-icon.svg",
      },
      {
        id: "ca",
        text: "CA",
        image: "./assets/images/header/canada-flag-icon.svg",
      },
    ];

    var options = countries.map(function (country) {
      return {
        id: country.id,
        text: country.text,
        image: country.image,
      };
    });

    $(".country-select").select2({
      minimumResultsForSearch: Infinity,
      data: options,
      templateResult: formatCountryOption,
      templateSelection: formatSelectedCountry,
    });

    function formatCountryOption(country) {
      if (!country.image) {
        return country.text;
      }
      return $(
        '<span><img class="flag-icon" src="' +
          country.image +
          '" /> ' +
          country.text +
          "</span>"
      );
    }

    function formatSelectedCountry(country) {
      if (!country.image) {
        return country.text;
      }
      return $(
        '<span><img class="flag-icon" src="' +
          country.image +
          '" /> ' +
          country.text +
          "</span>"
      );
    }
  });