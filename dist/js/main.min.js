


document.addEventListener("DOMContentLoaded", function(){

    Ellipsis({
        ellipsis: '…', 
        debounce: 0, 
        responsive: true, 
        className: '.clamp', 
        lines: 3,
        portrait: null,
        break_word: true,          
    });
    Ellipsis({
        ellipsis: '…', 
        debounce: 0, 
        responsive: true, 
        className: '.clamp1', 
        lines: 4,
        portrait: null,
        break_word: false,          
    });
    Ellipsis({
        ellipsis: '…', 
        debounce: 0, 
        responsive: true, 
        className: '.clamp2', 
        lines: 8,
        portrait: null,
        break_word: true,          
    });

    const navIcon = document.querySelector('.nav-icon');
    const mobMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('#overlay');    
    const bodyEl = document.body;
    const linkCatalog = document.querySelector('.nav__item--catalog');
    const subList = document.querySelector('.nav__sub-list');
  
    navIcon.addEventListener('click', function () {
        this.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        bodyEl.classList.toggle('noscroll');
    });

   
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        navIcon.classList.remove('active');
        overlay.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });
       
        overlay.addEventListener('click', function(){
        this.classList.remove('active');
        navIcon.classList.remove('active');
        mobMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });  
    if(window.innerWidth < 767){
        linkCatalog.addEventListener('click', (e)=> {
            e.stopPropagation();                    
            subList.classList.toggle('nav__sub-list--active');            
        });
    }
   

    //================ при клике по изображению увелечение этого изображения========
    let sec = document.querySelectorAll('.sec4-img');
    
    sec.forEach(function (item) {
        item.addEventListener('click', function (){
            this.classList.toggle('more');            
        });
    });
    
    // ====================Слайдер======================
    
    const sertificateSwiper = new Swiper('.sertificate__swiper ', {
        loop: true,
        breakpoints: {
            
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            380: {
              slidesPerView: 1,
              spaceBetween: 20
            },
          
            576: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            
        },      
        navigation: {
            nextEl: '.seriticate-next',
            prevEl: '.seriticate-prev',
        },        
        
    });
    
    const partnersSwiper = new Swiper('.partners__swiper ', {
        loop: true,
        breakpoints: {
            
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 20
            },
          
            576: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 40
            },
            
        },      
        navigation: {
            nextEl: '.partners-next',
            prevEl: '.partners-prev',
        },        
        
    });
    
    //==============================================================slider1 на мобилке================================

    let slider1 = document.querySelector('.article__images')
    let  articleSwiper;
    if(slider1){
        function mobileSlider1(){
            if(window.innerWidth <= 768 && slider1.dataset.mobile =='false'){
                articleSwiper = new Swiper(slider1, {       
                    // loop: true,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    // If we need pagination
                    
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                        //   spaceBetween: 20
                        },
                        380: {
                          slidesPerView: 1,
                        //   spaceBetween: 20
                        },
                        // when window width is >= 480px
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        
                        
                    },
                    
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    
                });
                slider1.dataset.mobile ='true'
            };
            if(window.innerWidth > 768) {
                slider1.dataset.mobile ='false';
                if(slider1.classList.contains('swiper-container-initialized')){
                    articleSwiper.destroy();
                }
                
            }
        }
        mobileSlider1();
    
        window.addEventListener('resize', () => {
            mobileSlider1();
        });
    }
    

    
    

    
    
    //=======================================slider4==================

    const aboutSwiper = new Swiper('.about__swiper', {
        // Optional parameters
        
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });
    
    //======================================slider с превьюшками кастомный========================
    let sb = document.querySelectorAll('.slider-big'); 
    if(sb){
        sb.forEach(item => {
            let sliderBig = new Swiper (item,{
                slidesPerView: 1,
                loop: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                nested: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
            });      
            let swiperItems = item.querySelectorAll('.swiper-item');        
                swiperItems.forEach(el=>{
                    el.addEventListener('click', (e)=> {
                        let index = e.currentTarget.dataset.card;
                        sliderBig.slideTo(index);             
                    });
                });
        }); 
        
        
    }                     
   

    //===============================slider спревьюшками с библиотеки ===============================
    const examplesSwoperBtns = new Swiper ('.examples-slider__btns',{
        
        spaceBetween: 15,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    })
    const examplesSwiper = new Swiper('.examples-slider__container', {
                
       
        slidesPerView: 1,
        // spaceBetween: 10,
        thumbs: {
            swiper: examplesSwoperBtns,
          },
        
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });
    
    
   
    // ================== Табы ============================================
    let tabBlock = document.querySelectorAll('.tabs');

    tabBlock.forEach(element => {
    let tabsParent = element.querySelector('ul');
    let tabs = tabsParent.querySelectorAll('li');
    let tabsContent = element.querySelectorAll('.tabs-content');
    
    
    tabHideContent();
    tabShowContent();

    
    tabs.forEach((element, i) => {              
        element.addEventListener('click', function(){
            tabHideContent();
            tabShowContent(i);
        });          
        
    });
    

    function tabHideContent() {
        tabs.forEach(element => {
        element.classList.remove('active');
        });

        tabsContent.forEach(element => {
        element.classList.remove('active');
        });
    }

    function tabShowContent(i = 0) {
        tabs[i].classList.add('active');
        tabsContent[i].classList.add('active');
    }
    });
    
    //======================== аккордеон с иконками ===============================
    
    const accordeon = document.querySelectorAll("[data-accordion]");
    accordeon.forEach(function (item) {
        let plus = item.querySelector('[data-check]');
        item.addEventListener('click', function() {
            let self = this.nextElementSibling;
            self.classList.toggle('hidden');                                
            plus.classList.toggle('show');
            if(self.classList.contains('hidden')){
                self.style.maxHeight = self.scrollHeight + 'px';                  
            } else {
                self.style.maxHeight = null;
            }
        });
    });


        //================== скролл на верх =============================================

     let scrollTop = document.querySelector('.scroll-top');
     window.onscroll = () => {
         if (window.scrollY > 700) {
             scrollTop.classList.remove('scroll-top--hide');
         }
         else if (window.scrollY < 700) {
             scrollTop.classList.add('scroll-top--hide');
         }
     };
    
  
    // ================отправка формы PHPMailer========================================

    const telSelector = document.querySelectorAll('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    const forms = document.querySelectorAll('.form');

    forms.forEach(function(form){
        // let formHeight = form.scrollHeight;
        // form.style.height = `${formHeight}px`;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Submit');
        
            const formData = new FormData(form);
        
            async function fetchData() {            
                const url = "./mailer.php";            
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.text();
                console.log(result);   
                
                if (result === 'SUCCESS') {                              
                    let answers = document.querySelectorAll('.success');  
                    answers.forEach(function(answer){
                        answer.hidden = false;
                    });                   
                    // form.style.cssText = `height: 0; opacity: 0;`;
                    form.style.display = 'none';
                    reloadWin();  
                } else {                    
                    let answersErrors = document.querySelectorAll('.error');  
                    answersErrors.forEach(function(error){
                        error.hidden = false;
                    });           
                }                
                form.reset();
            }
            fetchData();
        });
    });

    // ====================== Форма AJax ================================

    // $(".zayavka").each(function (index, item) {
    //     $(item).on('submit', function (event) {
    //     event.preventDefault();
        
    //         ajaxFormSubmit();
    //         function ajaxFormSubmit() {

    //             let string = $(item).serialize(); 

                
    //             $.ajax({
    //                 type: "POST", 
    //                 url: "files/php/mail.php", 
    //                 data: string, 

                   
    //                 success: function (html) {
    //                     $(item).slideUp(800);                    
    //                     // $(".answer").html(html);
    //                     // window.location.href = './thankyou.html';
    //                     // showMmodal();
    //                     reloadWin();
    //                 }
    //             });
                
    //             return false;
    //         }    
    //     });
    
    // });

    
    
    
    //=======================================форма с кастомной валидацией валидация =================================

    // Если валидировать несколько форм на странице то каждой форме отдельный класс	
    // new window.JustValidate('.form', {
    //     rules: {
    //         Телефон: {
    //         required: true,
    //         function: () => {
    //         const phone = telSelector.inputmask.unmaskedvalue();
    //         return Number(phone) && phone.length === 10;
    //         }
    //         },
    //         Имя: {
    //             required: true,
    //         },		
    //     },
    //     colorWrong: '#ff0f0f',
    //     messages: {
    //         Имя: {
    //             required: 'Введите имя',
    //             minLength: 'Введите 2 и более символов',
    //             maxLength: 'Запрещено вводить более 15 символов'
    //         },		
    //         email: {
    //             email: 'Введите корректный email',
    //             required: 'Введите email'
    //         },
    //         Телефон: {
    //             required: 'Введите телефон',
    //             function: 'Здесь должно быть 10 символов без +7'
    //         }
    //     },
    //     submitHandler: function(form) {
    //         console.log(form);
    //         let formHeight = form.scrollHeight;
    //         form.style.height = `${formHeight}px`;			
    //         const formData = new FormData(form);
        
    //         async function fetchData() {			
    //             const url = "./mailer.php";			
    //             const response = await fetch(url, {
    //                 method: 'POST',
    //                 body: formData,
    //             });
    //             const result = await response.text();
    //             console.log(result);
                
    //             if (result === 'SUCCESS') {                              
    //                 let answers = document.querySelectorAll('.success');  
    //                 answers.forEach(function(answer){
    //                     answer.hidden = false;
    //                 });                   
    //                 form.style.cssText = `height: 0; opacity: 0;`;
    //             } else {
    //                 document.getElementById('error').hidden = false;            
    //             }			
    //             form.reset();
    //         }
    //         fetchData();
            
    //     }
    // });
    
    

    //================================ кнопка вкл видео ===================================
    
    const videos = document.querySelectorAll('.video-id');
    if(videos !== null){
        videos.forEach(item => {
            const video = item.querySelector('video');
            
            const videoBtn = item.querySelector('.video-btn');
            videoBtn.addEventListener('click', function(){
                video.controls = 'controls';
                if(video.paused){
                    video.play();
                    videoBtn.classList.add('video-hidden');
                } else {
                    video.pause();
                    videoBtn.classList.remove('video-hidden');
                }
                
            });
        });

        let dataVideo = document.querySelector('[data-video]');
        if(dataVideo) {
            dataVideo.addEventListener('click', (e)=>{
                e.currentTarget.style.display = 'none';          
                
            });
        }; 
    };

    //========================= темноя тема =============================

    // день/ночь
    const themes = document.querySelectorAll('.theme');
    const html = document.querySelector('html');
    const themeImg = document.querySelector('.theme img');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {    
        themeImg.style.display = 'none';
    }    
    if (localStorage.getItem('theme') === 'dark') {
        console.log('ffff');
    }
    themes.forEach(theme => {
        theme.addEventListener('click', function(){
        
            if(localStorage.getItem('theme') === 'dark'){
                localStorage.removeItem('theme');
            }else {
                localStorage.setItem('theme', 'dark');
            }
            addDarkClassHtml();
        });
    });


    function addDarkClassHtml() {
        
        try {
            if(localStorage.getItem('theme') === 'dark') {
                html.classList.add('dark');            
                themeImg.src = './img/icons/sun.svg';
            }
            else {
                html.classList.remove('dark');            
                themeImg.src = './img/icons/moon.svg';
                
            }
        } catch (err){}
    }
    addDarkClassHtml();

    //============================== Плавный скролл ==========================
    const header = document.querySelector('.header');
    const anchors = document.querySelectorAll('a[href*="#"]'); 
    anchors.forEach(function(anchor){
        let headerHeight = header.offsetHeight;
        anchor.addEventListener('click', function(e){  
        e.preventDefault();           
        const blockId = anchor.getAttribute('href');            
        let block = document.querySelector('' + blockId);
            block.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                
            });                       
            // block.style.paddingTop = `${headerHeight}px`;         
            
       });
    });


});

    


