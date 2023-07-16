// TRANSLATE

$(document).ready(function() {
  // Default language is English
  var currentLanguage = 'it';

  // Language translation object
  var translations = {
    en: {
      home: "Home",
      menu: "Menu",
      about: "About Us",
      contact: "Contact",
      location: "Location",
      reviews: "Reviews",
      what_is_joia: "What is Joia?",
      visit_joia:
        "Come visit us at JOIA and let yourself be transported to a corner of Hawaiian paradise. Every day, the perfect place to find natural and tasty dishes for breakfast, lunch, and dinner, as well as for a snack or alternative aperitif. Healthy yet delicious!",
      aloha: "Aloha!",
      about_us: "About Us",
      dynamic_staff:
        "Our dynamic and sunny all-female staff is the beating heart of our establishment.",
      culinary_creativity:
        "With their culinary creativity, they are experts in preparing delicious and colorful dishes that will surprise you with unique flavors and bold combinations.",
      extraordinary_team:
        "We are proud to have such an extraordinary team of women who bring their passion and enthusiasm to make every moment in our establishment unforgettable.",
      super_food: "Super Food",
      superfood_properties:
        "We enhance the properties of superfoods, ingredients rich in nutrients and benefits, to create dishes that nourish both the body and the mind!",
      take_away: "Take Away",
      authentic_flavor:
        "Authentic flavor awaits you! Whether you choose to sit comfortably with us or bring the taste home with our Take Away service.",
      info_reservations: "For information & reservations:",
      footer_title: "Joia Healthy Food Cafe",
      opening_hours: "Opening Hours",
      days_weekend: "Fri - Sat - Sun",
      days_week: "Tue - Wed - Thu",
      day_monday: "Monday",
      where_we_are: "Where We Are",
      reviews_title: "What Our Customers Say",
      review_1:
        "Excellent menu proposals with healthy dishes; young and welcoming staff always seeking new ideas; stylish and tasteful decor; great central location. Perfect at any time of the day, from breakfast to dinner.",
      review_1_author: "federsbrsn",
      review_1_source: "TripAdvisor",
      review_2:
        "Very nice place, but above all excellent healthy and imaginative food, with home delivery service too. The girls are available and kind, always smiling behind their masks. It's a shame to see only their laughing eyes!",
      review_2_author: "AVIGLIANA PARTY",
      review_2_source: "Google Reviews",
      review_3:
        "There are few places like this, so beautiful and unique, especially outside Turin. Well-deserved 5 stars, delicious breakfast! I will definitely come back to try a poke-based lunch.",
      review_3_author: "Lalaura",
      review_3_source: "Google Reviews",
      testimonial_title: "What Our Customers Say",
      testimonial_1_content:
        "Excellent menu proposals with healthy dishes; young and welcoming staff always seeking new ideas; stylish and tasteful decor; great central location. Perfect at any time of the day, from breakfast to dinner.",
      testimonial_1_author: "federsbrsn",
      testimonial_1_source: "TripAdvisor",
      testimonial_2_content:
        "Very nice place, but above all excellent healthy and imaginative food, with home delivery service too. The girls are available and kind, always smiling behind their masks. It's a shame to see only their laughing eyes!",
      testimonial_2_author: "AVIGLIANA PARTY",
      testimonial_2_source: "Google Reviews",
      testimonial_3_content:
        "There are few places like this, so beautiful and unique, especially outside Turin. Well-deserved 5 stars, delicious breakfast! I will definitely come back to try a poke-based lunch.",
      testimonial_3_author: "Lalaura",
      testimonial_3_source: "Google Reviews",
      footer_copyright:
        '&copy; <a class="fw-medium" href="#">Joia Healthy Food Cafe</a>',
      footer_designed_by:
        'Designed by: <a class="fw-medium" href="https://patriziomilione.com/" target="_blank">Patrizio Milione</a>',
      footer_inspired_by:
        'Inspired By <a class="fw-medium" href="https://htmlcodex.com">HTML Codex</a>\'s design through <a class="fw-medium" href="https://themewagon.com">ThemeWagon</a>\'s distribution'
    },
    it: {
      home: "Home",
      menu: "Menu",
      about: "Chi Siamo",
      contact: "Contatti",
      location: "Dove Siamo",
      reviews: "Recensioni",
      what_is_joia: "Cos'è Joia?",
      visit_joia:
        "Vieni a trovarci da JOIA e lasciati trasportare in un angolo di paradiso hawaiano. Ogni giorno, il luogo perfetto per trovare piatti naturali e gustosi per colazione, pranzo e cena, così come per uno spuntino o un aperitivo alternativo. Sano ma delizioso!",
      aloha: "Aloha!",
      about_us: "Chi Siamo",
      dynamic_staff:
        "Il nostro staff tutto al femminile dinamico e solare è il cuore pulsante della nostra struttura.",
      culinary_creativity:
        "Con la loro creatività culinaria, sono esperti nel preparare piatti deliziosi e colorati che ti sorprenderanno con sapori unici e combinazioni audaci.",
      extraordinary_team:
        "Siamo orgogliosi di avere un team così straordinario di donne che portano la loro passione e il loro entusiasmo per rendere ogni momento nella nostra struttura indimenticabile.",
      super_food: "Super Food",
      superfood_properties:
        "Valorizziamo le proprietà dei superfood, ingredienti ricchi di nutrienti e benefici, per creare piatti che nutrono sia il corpo che la mente!",
      take_away: "Take Away",
      authentic_flavor:
        "Ti aspetta un autentico sapore! Che tu scelga di sederti comodamente da noi o di portare a casa il gusto con il nostro servizio di Take Away.",
      info_reservations: "Per informazioni e prenotazioni:",
      footer_title: "Joia Healthy Food Cafe",
      opening_hours: "Orari di Apertura",
      days_weekend: "Ven - Sab - Dom",
      days_week: "Mar - Mer - Gio",
      day_monday: "Lunedì",
      where_we_are: "Dove Siamo",
      reviews_title: "Cosa Dicono i Nostri Clienti",
      review_1:
        "Ottime proposte di menù con piatti salutari; personale giovane e accogliente sempre alla ricerca di nuove idee; arredamento elegante e di gusto; posizione centrale fantastica. Perfetto in qualsiasi momento della giornata, dalla colazione alla cena.",
      review_1_author: "federsbrsn",
      review_1_source: "TripAdvisor",
      review_2:
        "Posto molto carino, ma soprattutto cibo sano e immaginativo eccellente, con servizio di consegna a domicilio incluso. Le ragazze sono disponibili e gentili, sempre sorridenti dietro le loro maschere. Peccato vedere solo i loro occhi che ridono!",
      review_2_author: "AVIGLIANA PARTY",
      review_2_source: "Recensioni di Google",
      review_3:
        "Ci sono pochi posti come questo, così belli e unici, soprattutto fuori Torino. Meritate 5 stelle, colazione deliziosa! Torno sicuramente per provare un pranzo a base di poke.",
      review_3_author: "Lalaura",
      review_3_source: "Recensioni di Google",
      testimonial_title: "Cosa Dicono i Nostri Clienti",
      testimonial_1_content:
        "Ottime proposte di menù con piatti salutari; personale giovane e accogliente sempre alla ricerca di nuove idee; arredamento elegante e di gusto; posizione centrale fantastica. Perfetto in qualsiasi momento della giornata, dalla colazione alla cena.",
      testimonial_1_author: "federsbrsn",
      testimonial_1_source: "TripAdvisor",
      testimonial_2_content:
        "Posto molto carino, ma soprattutto cibo sano e immaginativo eccellente, con servizio di consegna a domicilio incluso. Le ragazze sono disponibili e gentili, sempre sorridenti dietro le loro maschere. Peccato vedere solo i loro occhi che ridono!",
      testimonial_2_author: "AVIGLIANA PARTY",
      testimonial_2_source: "Recensioni di Google",
      testimonial_3_content:
        "Ci sono pochi posti come questo, così belli e unici, soprattutto fuori Torino. Meritate 5 stelle, colazione deliziosa! Torno sicuramente per provare un pranzo a base di poke.",
      testimonial_3_author: "Lalaura",
      testimonial_3_source: "Recensioni di Google",
      footer_copyright:
        '&copy; <a class="fw-medium" href="#">Joia Healthy Food Cafe</a>',
      footer_designed_by:
        'Progettato da: <a class="fw-medium" href="https://patriziomilione.com/" target="_blank">Patrizio Milione</a>',
      footer_inspired_by:
        'Ispirato da <a class="fw-medium" href="https://htmlcodex.com">HTML Codex</a> nel design attraverso la distribuzione di <a class="fw-medium" href="https://themewagon.com">ThemeWagon</a>'
    },
  };

 // Function to update the text in the sections based on the selected language
 function updateTranslations() {
    $('[data-translate]').each(function() {
      var translationKey = $(this).data('translate');
      var translation = translations[currentLanguage][translationKey];
      $(this).html(translation);
    });
  }

  // Event handler for Italian button click
  $('#btnItalian').click(function() {
    currentLanguage = 'it';
    updateTranslations();
  });

  // Event handler for English button click
  $('#btnEnglish').click(function() {
    currentLanguage = 'en';
    updateTranslations();
  });

  // Initial translation on page load
  updateTranslations();
});

// NAVBAR CLOSING

// Get all the links in the navbar
var navDiv = document.getElementById("navbarCollapse");

navDiv.addEventListener("click", function () {
  if (navDiv.classList.contains("show")) {
    navDiv.classList.remove("show");
  } else {
    navDiv.classList.add("show");
  }
});

// Various
(function ($) {
  "use strict";

  // // Spinner
  // var spinner = function () {
  //     setTimeout(function () {
  //         if ($('#spinner').length > 0) {
  //             $('#spinner').removeClass('show');
  //         }
  //     }, 1);
  // };
  // spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-150px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // // Modal Video
  // var $videoSrc;
  // $('.btn-play').click(function () {
  //     $videoSrc = $(this).data("src");
  // });
  // console.log($videoSrc);
  // $('#videoModal').on('shown.bs.modal', function (e) {
  //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  // })
  // $('#videoModal').on('hide.bs.modal', function (e) {
  //     $("#video").attr('src', $videoSrc);
  // })

  // Product carousel
  $(".product-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
  });
})(jQuery);

document.getElementById("loadMoreBtn").addEventListener("click", function () {
  var section = document.getElementById("gallery_anchor");
  section.style.maxHeight = section.scrollHeight * 2 + "px";
  this.style.display = "none";
});
