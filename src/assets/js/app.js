$(document).ready(function(){
  $(function() {

    $(document).on("click", function(e) {
      var $item = $(".rad-dropmenu-item");
      if ($item.hasClass("active")) {
        $item.removeClass("active");
      }
    });

    $(".rad-toggle-btn").on('click', function() {
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

    $(window).resize(function() {
      $.throttle(250, setTimeout(function() {
        initializeCharts();
      }, 200));
    });

    var colors = [
      '#E94B3B',
      '#39C7AA',
      '#1C7EBB',
      '#F98E33'
    ];

    var panelList = $('.row');

    panelList.sortable({
      handle: '.row',
      update: function() {
        $('.panel', panelList).each(function(index, elem) {
          var $listItem = $(elem),
            newIndex = $listItem.index();
        });
      }
    });

    function initializeCharts() {
      $(".rad-chart").empty();
    }

    initializeCharts();
  });

  var navPrimary = document.querySelector(".nav--primary");
  var navItems = document.querySelectorAll(".nav-item--primary");

  navItems.forEach(function(item) {
    var secondary = item.querySelector(".nav--secondary");
    if (secondary) {
      // secondary.style.height = secondary.offsetHeight + "px";
      secondary.style.height = "auto";
    }
    item.classList.add("is-collapsed");

    item.onclick = function() {
      item.classList.toggle("is-collapsed");
      item.classList.toggle("is-active");
    };
  });

  $('.collapse__head').click(function(){
    $(this).toggleClass('open'); 
    $(this).parent().find('.collapse__body').slideToggle('slow');
  });

})