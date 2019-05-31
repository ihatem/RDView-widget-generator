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

  var clipboard = new ClipboardJS('#cpy-btn');

  clipboard.on('success', function(e) {
    $(e.trigger).toggleClass("active");
    setTimeout(() => {
      $(e.trigger).toggleClass("active")
    }, 1000);
  });


  let widgetCss = (color, url) => {
    return `@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800';

* {
  font-family: "Open Sans";
}
.widget-wrap {
  width: 350px;
  height: 100%;
  border: 2px solid ${color};
  overflow: auto;
}
.widget-wrap .widget-title {
  height: 67px;
  background: ${color};
  display: flex;
  align-items: center;
  justify-content: center;
}
.widget-wrap .widget-title h4 {
  font-weight: 600;
  text-transform: uppercase;
  margin: 15px 0;
  text-align: center;
  color: white;
}
.widget-wrap .widget-details-wrap {
  margin-top: 30px;
  display: flex;
}
.widget-wrap .widget-details-wrap .widget-avatar {
  margin: 0 30px;
  width: 100px;
  height: 100px;
  background-image: url("${url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
}
.widget-wrap .widget-details-wrap .widget-name {
  width: 200px;
}
.widget-wrap .widget-details-wrap .widget-name h4 {
  font-weight: 300;
  margin-bottom: 0;
}
.widget-wrap .widget-details-wrap .widget-name h5 {
  margin-top: 0;
}
.widget-wrap a {
  text-decoration: none;
}
.widget-wrap a .rdview-btn {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 50px;
  border: 0;
  border-radius: 200px;
  background: ${color};
  display: flex;
  align-items: center;
}
.widget-wrap a .rdview-btn .rdview-logo {
  margin: 0 15px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi40NiAyOS43MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5GaWNoaWVyIDE8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAsMTQuOTVhMS45LDEuOSwwLDAsMSwuNjYtLjU3Yy44Ni0uNiwxLjcyLTEuMTksMi42LTEuNzdhMSwxLDAsMCwwLC40NS0uNjlBMTQuODcsMTQuODcsMCwwLDEsMTYuMy4xNCwxNC44NCwxNC44NCwwLDAsMSwzMi43MSwxMS41YS43Ny43NywwLDAsMSwwLC4wOSwxLjU1LDEuNTUsMCwwLDAsLjgyLDEuMjNjLjg5LjU0LDEuNzQsMS4xNywyLjYsMS43NmwuMzIuMjVjMCwuMjYtLjIxLjI5LS4zNC4zOC0uNzkuNTQtMS41NywxLjEtMi40LDEuNTlhMiwyLDAsMCwwLTEsMS40OCwxMSwxMSwwLDAsMS0xLjEzLDMuMTksMTQuNDYsMTQuNDYsMCwwLDEtMTAuNTIsOCwxNC43OSwxNC43OSwwLDAsMS0xNy4xOC0xMSwzLjI2LDMuMjYsMCwwLDAtLjMxLTEuMDcsMy4yOCwzLjI4LDAsMCwwLS45MS0uNjZaTTE4LjI4LDI1QTEwLjE3LDEwLjE3LDAsMSwwLDguMTEsMTQuODksMTAuMSwxMC4xLDAsMCwwLDE4LjI4LDI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4LjMsNy44OWE3LDcsMCwwLDEsNC4zNCwxMi41NCw1LjI3LDUuMjcsMCwwLDEtLjY1LjQ0LjE4LjE4LDAsMCwxLS4yNy0uMTFjLS4wOC0uMjItLjEyLS40NS0uMjEtLjY2YTMuNSwzLjUsMCwwLDAtNi41MSwwLC41MS41MSwwLDAsMSwwLC4wOGMtLjE0LjIyLDAsLjYtLjI5LjY5cy0uNTItLjItLjczLS4zOGE2Ljc4LDYuNzgsMCwwLDEtMi40OS03LjIzQTYuNzUsNi43NSwwLDAsMSwxNi45Miw4YTUsNSwwLDAsMSwuNjktLjExQzE3Ljg0LDcuODgsMTguMDcsNy44OSwxOC4zLDcuODlabTEuODQsN2ExLjg5LDEuODksMCwxLDAtMy43Ny4wOCwxLjg5LDEuODksMCwwLDAsMy43Ny0uMDhaIi8+PC9nPjwvZz48L3N2Zz4=");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.widget-wrap a .rdview-btn .rdview-text {
  color: white;
  margin-right: 15px;
  font-weight: 600;
  font-size: 14px;
}`
  }



  $("form").on('submit', function (event) {

    event.preventDefault();
    
    let cssText = widgetCss($("#couleur").val(), $("#lien-photo").val() !== "" ? $("#lien-photo").val() : $("#lien-photo").attr('placeholder'));
    
    console.log(cssText)

    $("#css-code").html(cssText);

    Prism.highlightElement($('#css-code')[0]);

    var widget_wrap_html = $('.widget-wrap')[0].outerHTML;

    var html = Prism.highlight(widget_wrap_html, Prism.languages.html, 'html');

    $("#html-code").html(html);

    //Prism.highlightElement($('#html-code')[0]);

    // $(".code-wrap").empty();

    // $(".code-wrap").append("<h2 class='code-title'>Copier le code CSS ici :</h2><pre id='css-code' class='brush: css;'>"+cssText+"</pre>");

    // $(".code-wrap").append("<h2 class='code-title'>Copier le code HTML ici :</h2><pre id='html-code' class='brush: html;'>"+widget_wrap_html+"</pre>");


  });



});
