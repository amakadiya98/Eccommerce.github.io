var isMainMenuActive = false;
var isSubMenuActive = false;
var isSubSubMenuActive = false;
var isRegoActive = false;
var isVehicleActive = false;

$(document).on("click", function (event) {
  var target = $(event.target);
  if (
    !target.closest(".menu-button").length &&
    !target.closest(".menu-modal").length &&
    !target.closest(".menu-modal-two").length &&
    !target.closest(".menu-modal-three").length
  ) {
    isMainMenuActive = false;
    isSubMenuActive = false;
    isSubSubMenuActive = false;
    $(".menu-button").removeClass("hide");
    $(".close-button").addClass("hide");
    $(".menu-modal").addClass("hide");
    $(".menu-modal-two").slideUp(300).removeClass("two-active");
    $(".menu-modal-three").slideUp(300).removeClass("three-active");
  }

  if (!target.closest(".sub-header-mobile").length) {
    $(".form-block.rego").slideUp(300).removeClass("active-form");
    $(".form-block.vehicle").slideUp(300).removeClass("active-form");
    $("body").removeClass("overflow-hidden");
    isRegoActive = false;
    isVehicleActive = true;
    $(".mobile-vehicle.active").removeClass("active");
    $(".mobile-rego").addClass("active");
  }
});

$(".menu-button").click(function () {
  isMainMenuActive = true;
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-button").addClass("hide");
  $(".close-button").removeClass("hide");
  $(".menu-modal").removeClass("hide");
  $("body").addClass("overflow-hidden");
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
  $("body").removeClass("overflow-hidden");
});

$(".menu-modal-two")
  .parent("li")
  .click(function () {
    isSubMenuActive = true;
    $(this).find(">.menu-modal-two").not(":animated").slideDown(300);
    $(this).find(">.menu-modal-two").addClass("two-active");
  });

$(".menu-modal-three")
  .parent("li")
  .click(function () {
    isSubSubMenuActive = true;
    $(".menu-modal-three.three-active")
      .slideUp(300)
      .removeClass("three-active");
    $(this).find(">.menu-modal-three").not(":animated").slideDown(300);
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
});

$("#rego").click(function () {
  $(".mobile-vehicle.active").removeClass("active");
  $("body").addClass("overflow-hidden");
  isVehicleActive = false;
  if (isRegoActive) {
    $(".form-block.rego").slideUp(300).removeClass("active-form");
    $("body").removeClass("overflow-hidden");
    isRegoActive = false;
  } else {
    $(".mobile-rego").addClass("active");
    $(".form-block.vehicle").slideUp(300).removeClass("active-form");
    $(".form-block.rego").slideDown(300).addClass("active-form");
    isRegoActive = true;
  }
});

$("#vehicle").click(function () {
  if (isVehicleActive) {
    $(".form-block.vehicle").slideUp(300).removeClass("active-form");
    $("body").removeClass("overflow-hidden");
    isVehicleActive = false;
  } else {
    $(".mobile-vehicle").addClass("active");
    $("body").addClass("overflow-hidden");
    isRegoActive = false;
    $(".mobile-rego.active").removeClass("active");
    $(".form-block.rego").slideUp(300).removeClass("active-form");
    $(".form-block.vehicle").slideDown(300).addClass("active-form");
    isVehicleActive = true;
  }
});

$("#searchInput").focus(function () {
  $(".search-result").slideDown(300).addClass("show");
  $("body").addClass("overflow-hidden");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest(".content-wrapper").length &&
    !$(event.target).closest("#searchField").length
  ) {
    $(".search-result").slideUp(300).removeClass("show");
  }
});

$("#myGarage").click(function (event) {
  event.preventDefault();
  $("body").addClass("overflow-hidden");
  $(".my-garage").slideDown(300).addClass("show");
  $(".my-garage > .rego-modal").slideDown(300).removeClass("hide");
  $(".my-garage > .vehicle-modal").addClass("hide");
});

$("#vehicleBtn").click(function (event) {
  event.preventDefault();
  $(".my-garage > .rego-modal").not(":animated").addClass("hide");
  $(".my-garage > .vehicle-modal.hide").not(":animated").removeClass("hide");
});
$("#backToRego").click(function (event) {
  event.preventDefault();
  $(".my-garage > .vehicle-modal").not(":animated").addClass("hide");
  $(".my-garage >.rego-modal.hide").not(":animated").removeClass("hide");
});

$(".my-garage").click(function (event) {
  if (!$(event.target).closest(".modal-block").length) {
    $(".my-garage").slideUp(300).removeClass("show");
    $("body").removeClass("overflow-hidden");
  }
});

$("#cartBtn").click(function () {
  $(".cart-section").slideDown(300).addClass("show");
  $("body").addClass("overflow-hidden");
});

$("#cart-close").click(function () {
  $(".cart-section").slideUp(300).removeClass("show");
  $("body").removeClass("overflow-hidden");
});

$(".cart-section").click(function (event) {
  if (!$(event.target).closest(".cart-modal").length) {
    $(".cart-section").slideUp(300).removeClass("show");
    $("body").removeClass("overflow-hidden");
  }
});
