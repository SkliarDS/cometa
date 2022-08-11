


document.addEventListener("DOMContentLoaded", function(){


    // многоточие 
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

    new WOW().init();

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
    
    
    
    
   
    // ================== Табы ============================================
    let tabBlock = document.querySelectorAll('.tabs');
    const linkHaracteristics = document.querySelector('[data-characteristics]')
    const contentHaracteristics = document.querySelectorAll('[data-content-characteristics]')
    
    tabBlock.forEach(element => {
    let tabsParent = element.querySelector('ul');
    let tabs = tabsParent.querySelectorAll('li');
    let tabsContent = element.querySelectorAll('.tabs-content');
    
    linkHaracteristics.addEventListener('click', function(e){
        tabsContent.forEach(item =>{
            item.classList.remove('active')
        });
        tabs.forEach(item =>{
            item.classList.remove('active')
        });
        contentHaracteristics.forEach(item =>{
            item.classList.add('active');
        });                
    });
    
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
        });
    });




});

    


