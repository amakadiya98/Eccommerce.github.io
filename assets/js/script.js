var isMainMenuActive = false;
var isSubMenuActive = false;
var isSubSubMenuActive = false;
var isRegoActive = false;
var isVehicleActive = false;

$(".menu-button").click(function () {
  isMainMenuActive = true;
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-button").addClass("hide");
  $(".close-button").removeClass("hide");
  $(".menu-modal").removeClass("hide");
});

$(".close-button").click(function () {
  isMainMenuActive = false;
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-button").removeClass("hide");
  $(".close-button").addClass("hide");
  $(".menu-modal").addClass("hide");
  $(".menu-modal-two").slideUp(300).removeClass("two-active");
  $(".menu-modal-three").slideUp(300).removeClass("three-active");
});

$(".menu-modal-two").parent("li").click(function () {
  isSubMenuActive = true;
  $(this).find(">.menu-modal-two").not(':animated').slideDown(300);
  $(this).find(">.menu-modal-two").addClass("two-active");
});

$(".menu-modal-three").parent("li").click(function () {
  isSubSubMenuActive = true;
  $(".menu-modal-three.three-active").slideUp(300).removeClass("three-active");
  $(this).find(">.menu-modal-three").not(':animated').slideDown(300);
  $(this).find(">.menu-modal-three").addClass("three-active");
});

$(".menu-modal-two > .common-title > button").click(function () {
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-modal-three").slideUp(300).removeClass("three-active");
  $(".menu-modal-two").slideUp(300).removeClass("two-active");
});

$(".menu-modal-three > .common-title > button").click(function () {
  isSubSubMenuActive = false;
  $(".menu-modal-three").slideUp(300).removeClass("three-active");
});

$(".main-menu-list").click(function () {
  if (isSubMenuActive) {
    if ($(this).find(">.menu-modal-two").length === 0) {
      $(".menu-modal-three").slideUp(300).removeClass("three-active");
      $(".menu-modal-two").slideUp(300).removeClass("two-active");
    }
  }
})

$("#rego").click(function () {
  $(".mobile-vehicle.active").removeClass("active");
  isVehicleActive = false;
  if (isRegoActive) {
    $(".form-block.rego").slideUp(300).removeClass("active-form");
    isRegoActive = false;
  } else {
    $(".mobile-rego").addClass("active");
    $(".form-block.vehicle").slideUp(300).removeClass("active-form");
    $(".form-block.rego").slideDown(300).addClass("active-form");
    isRegoActive = true;
  }
})

$("#vehicle").click(function () {
  if (isVehicleActive) {
    $(".form-block.vehicle").slideUp(300).removeClass("active-form");
    isVehicleActive = false;
  } else {
    $(".mobile-vehicle").addClass("active");
    isRegoActive = false;
    $(".mobile-rego.active").removeClass("active");
    $(".form-block.rego").slideUp(300).removeClass("active-form");
    $(".form-block.vehicle").slideDown(300).addClass("active-form");
    isVehicleActive = true;
  }
})


$("#searchInput").focus(function () {
  $(".search-result").slideDown(300).addClass('show');
})

$(document).on("click", function (event) {
  if (!$(event.target).closest(".content-wrapper").length && !$(event.target).closest("#searchField").length) {
    $(".search-result").slideUp(300).removeClass('show');
  }
});