$(document).ready(function(){

  $(document).on("click", function(e) {
    var $item = $(".rad-dropmenu-item");
    if ($item.hasClass("active")) {
      $item.removeClass("active");
    }
  });

  $(".rad-toggle-btn").on('click', function() {
    $('.sidenav-overlay').toggleClass("opacidad");
    $(".rad-sidebar").toggleClass("rad-nav-min");
    $(".rad-body-wrapper").toggleClass("rad-nav-min");
    setTimeout(function() {
      initializeCharts();
    }, 300);
  });

  $(".rad-dropdown >.rad-menu-item").on('click', function(e) {
    e.stopPropagation();
    $(".rad-dropmenu-item").removeClass("active");
    $(this).next(".rad-dropmenu-item").toggleClass("active");
  });



  function initializeCharts() {
    $(".rad-chart").empty();
  }

  initializeCharts();

  $('.collapse__head').click(function(){
    $(this).toggleClass('open'); 
    $(this).parent().find('.collapse__body').slideToggle('slow');
    $(this).find("path").toggleClass("flecha");
  });

  $('rad-toggle-btn').click(function(){
    $('body')[0].addClass('.sidenav-open');
  })
  $('').click(function(){
    $('body')[0].removeClass('.sidenav-open')
  })
})