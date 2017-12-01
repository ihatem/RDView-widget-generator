$(document).ready(function () {

  $("#name").keyup(function () {
    if ($(this).val() === "") {
      $(".name-presta").text("Micheline Poitou");
    }
    else {
      $(".name-presta").text($(this).val());
    }
  });

  $("#mots-cles").keyup(function () {
    if ($(this).val() === "") {
      $(".detail-presta").text("Expérience, discrétion, efficacité");
    }
    else {
      $(".detail-presta").text($(this).val());
    }
  });

  $("#intitule").keyup(function () {
    if ($(this).val() === "") {
      $(".widget-title-span").text("consultation");
    }
    else {
      $(".widget-title-span").text($(this).val());
    }
  });

  $("#lien-photo").keyup(function () {
    if ($(this).val() === "") {
      $(".widget-avatar").css("background-image","url('https://images.unsplash.com/photo-1502012502567-b86c93e1b606?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=')");
    }
    else {
      $(".widget-avatar").css("background-image","url('"+$(this).val()+"')");
    }
  });

  $("#lien-rdv").keyup(function () {
    if ($(this).val() === "") {
      $(".rdview-btn-link").attr("href", "#");
    }
    else {
      $(".rdview-btn-link").attr("href", $(this).val());
    }
  });

  $('#couleur').colorPicker();

  $('#couleur').on('focusout',function(){
     var colorSelect = $(this).val();
     $('.widget-wrap').css("borderColor",colorSelect);
     $('.widget-title').css("backgroundColor",colorSelect);
     $('.rdview-btn').css("backgroundColor",colorSelect);
  });

  $('#couleur').keyup(function(){

     var colorSelect = $(this).val();
     $('.widget-wrap').css("borderColor",colorSelect);
     $('.widget-title').css("backgroundColor",colorSelect);
     $('.rdview-btn').css("backgroundColor",colorSelect);

  });

  /*
  $.when($.get("assets/css/widget-wrap.css")).done(function(response) {

  });*/



  $("button").click(function () {

    $.ajax({
      url: "assets/css/widget-wrap.css",
      dataType: "text",
      success: function(cssText) {

          var widget_wrap_html = $('.widget-wrap')[0].outerHTML;

          $(".code-wrap").empty();

          $(".code-wrap").append("<h2 class='code-title'>Copier le code CSS ici :</h2><pre id='css-code' class='brush: css;'>"+cssText+"</pre>");

          $(".code-wrap").append("<h2 class='code-title'>Copier le code HTML ici :</h2><pre id='html-code' class='brush: html;'>"+widget_wrap_html+"</pre>");

      }
    });

    $.getScript("assets/js/syntaxhighlighter.js");

  });



});
