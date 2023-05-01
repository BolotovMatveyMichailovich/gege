
        $(document).ready(function(){
            // Добавить плавную прокрутку до всех ссылок
            $("a").on('click', function(event) {
          
              // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
              if (this.hash !== "") {
                // Запретить поведение щелчка якоря по умолчанию
                event.preventDefault();
          
                // Хранить хэш
                var hash = this.hash;
          
                // Использование метода animate() jQuery для добавления плавной прокрутки страницы
                // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 1200, function(){
          
                  // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                  window.location.hash = hash;
                });
              } // Конец, если
            });
          });
       
  
  
  
  
  
  
  $(document).ready(function(){
      $('#bestp').click(function(){
          $('#top5').css('backgroundColor', '#cbf2ff');
          $('#Предыдущиематчи').css('backgroundColor', '#ffffff');
          $('#Предстоящиематчи').css('backgroundColor', '#ffffff');
          $('#shop').css('backgroundColor', '#ffffff');
      })
  
  });
  
  $(document).ready(function(){
      $('#matchs').click(function(){
          $('#Предстоящиематчи').css('backgroundColor', '#cbf2ff');
          $('#top5').css('backgroundColor', '#ffffff');
          $('#Предыдущиематчи').css('backgroundColor', '#cbf2ff');
      })
      
  });
  
  $(document).ready(function(){
      $('#nextMatch').click(function(){
          $('#Предстоящиематчи').css('backgroundColor', '#cbf2ff');
          $('#top5').css('backgroundColor', '#ffffff');
          $('#Предыдущиематчи').css('backgroundColor', '#ffffff');
          $('#shop').css('backgroundColor', '#ffffff');
      })
      
  });
  $(document).ready(function(){
      $('#prevMatch').click(function(){
          $('#Предыдущиематчи').css('backgroundColor', '#cbf2ff');
          $('#Предстоящиематчи').css('backgroundColor', '#ffffff');
          $('#top5').css('backgroundColor', '#ffffff');
          $('#shop').css('backgroundColor', '#ffffff');
      })
      
  });
  $(document).ready(function(){
      $('#mag').click(function(){
          $('#shop').css('backgroundColor', '#cbf2ff');
          $('#Предыдущиематчи').css('backgroundColor', '#ffffff');
          $('#Предстоящиематчи').css('backgroundColor', '#ffffff');
          $('#top5').css('backgroundColor', '#ffffff');
      })
      
  });
  
  
  
  $('.table th').on('click', function(){
      var index=$(this).index();
      var $this_table=$(this).closest('table');
      if(!$(this).hasClass('selected')){
         $(this).addClass('selected');
         $this_table.find('td').removeClass('selected');
         $this_table.find('tr').each(function(){
            $(this).find("td").eq(index).addClass('selected');
         })
      }else{
         $(this).removeClass('selected');
         $this_table.find('tr').each(function(){
            $(this).find("td").eq(index).removeClass('selected');
         })
      }
    });
   
  
  // увеличение и уменьшение текста aside
  $('aside').on('click', function () {
      if (!$(this).hasClass('big-font')) { // если класса нет
          $(this).addClass('big-font'); // добавляем класс
      } else { // если есть
          $(this).removeClass('big-font'); // убираем класс
      }
   });
   
  
  
  
  
   $('.match').mouseover(function(){
      $('.menu-under1').css('display','block');
      $('.menu-under2').css('display','none');
      $('.menu-under3').css('display','none');
   })
  
   $('.li').mouseover(function(){
     $('.menu-under1').css('display','none');
     $('.menu-under2').css('display','block');
     $('.menu-under3').css('display','none');
   })
  
   $('.magazin').mouseover(function(){
     $('.menu-under1').css('display','none');
     $('.menu-under2').css('display','none');
     $('.menu-under3').css('display','block');   
  })
  
   $('.home').mouseleave(function(){
     $('.menu-under1').css('display','none');
     $('.menu-under2').css('display','none');
     $('.menu-under3').css('display','none');
  })
  
  
  
   
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
   
  