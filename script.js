       $(document).ready(function(){

             //이벤트 슬라이드
             slide_num1=0
             autokey2 = 0
            setInterval(function(){
                if(autokey2==0){
                    if(slide_num1 <= -300){
                        slide_num1 = 0;
                        $('#slide_box1').css({left:0})
                    }
                    slide_num1 = slide_num1 - 100
                    $('#slide_box1').animate({left:slide_num1+'%'},500)
                    slide_num1_2 = slide_num1/-100
                    if(slide_num1_2 == 3){ slide_num1_2 = 0}
                    $('#slide_btn>li').eq(slide_num1_2).css({'background-color':'yellow'}).siblings().css({'background-color':'#fff'})
                }              
            },4000)

             $('#slide_btn>li').click(function(){
                $(this).css({'background-color':'yellow'})
                $(this).siblings().css({'background-color':'#fff'})
            })

            $('#slide_btn>li').click(function(){
                slide_num1 = $(this).index() *-100;
                $('#slide_box1').animate({left:slide_num1+'%'})
            })

            // 두 번째 슬라이드
            slide_num2 = 0
            autokey = 0
            setInterval(function(){
                if(autokey==0){
                    if(slide_num2 <= -300){ slide_num2 = 0
                        $('#slide_box2').css({left:0})
                    }
                    slide_num2 = slide_num2 - 100
                    $('#slide_box2').animate({left:slide_num2+'%'},500)
                    slide_num2_2 = slide_num2/-100
                    if(slide_num2_2 == 3 ){slide_num2 = 0}
                    $('#slide_btn2>li').eq(slide_num2_2).css({'background-color':'yellow'}).siblings().css({'background-color':'#fff'})
                }             
            },4000)

            $('#play_btn').click(function(){
                autokey2 = 0;
            })
            $('#stop_btn').click(function(){
                autokey2 = 1;
            })
            $('#play_btn2').click(function(){
                autokey = 0;
            })
            $('#stop_btn2').click(function(){
                autokey = 1;
            })
            
            $('#slide_btn2>li').click(function(){
                $(this).css({'background-color':'yellow'})
                $(this).siblings().css({'background-color':'#fff'})
            })

            $('#slide_btn2>li').click(function(){
                slide_num2 = $(this).index() *-100;
                $('#slide_box2').animate({left:slide_num2+'%'})
            })

            //좌우 슬라이드 (인기상품)
            $('#next2').click(function(){
                $('#sec3_slide').animate({left:-1180})
            })
            $('#prev2').click(function(){
                $('#sec3_slide').animate({left:0})
            })
           

             // 메인 슬라이드
             slide_num = 0;
             main_autokey = 0;
             setInterval(function(){
                if(main_autokey==0){
                    if(slide_num >= 4){slide_num = 0} 
                    slide_num = slide_num + 1
                    $('#main_slide>li').eq(slide_num).fadeIn()
                    $('#main_slide>li').eq(slide_num).siblings('li').fadeOut()
                    $('#bt1>li').eq(slide_num).css({'background-color':'yellow'}).siblings().css({'background-color':'#fff'})     
                }
               
             },4000)

             $('#m_play_btn').click(function(){
                main_autokey = 0
             })
             $('#m_stop_btn').click(function(){
                main_autokey = 1
             })

             $('#bt1>li').click(function(){
                $(this).css({'background-color':'yellow'})
                $(this).siblings().css({'background-color':'#fff'})
                $('#main_slide>li').eq($(this).index()).fadeIn() //0 1 2 3 4
                $('#main_slide>li').eq($(this).index()).siblings('li').fadeOut()
                slide_num = $(this).index()// 0 1 2 3 4
            })

          
            $('#next').click(function(){  
                slide_num = slide_num + 1 
                if(slide_num > 4){slide_num = 0} 
                $('#main_slide>li').eq( slide_num ).fadeIn()
                $('#main_slide>li').eq( slide_num ).siblings('li').fadeOut()
                $('#bt1>li').eq(slide_num).css({'background-color':'yellow'}).siblings().css({'background-color':'#fff'})                  
            })

            $('#prev').click(function(){  
                slide_num = slide_num - 1      
                if(slide_num < 0){slide_num = 4}   
                $('#main_slide>li').eq(slide_num).fadeIn()
                $('#main_slide>li').eq(slide_num).siblings('li').fadeOut()
                $('#bt1>li').eq(slide_num).css({'background-color':'yellow'}).siblings().css({'background-color':'#fff'})
            })

            //탭메뉴
            $('#sec5menu li:nth-child(1)').click(function(){
                $(this).css({'background-color':'rgb(6, 13, 117)','color':'#fff','font-weight':'900'});
                $(this).siblings().css({'background-color':'rgb(236, 233, 233)','color':'rgb(75, 72, 72)','font-weight':'300'});
                $('#sec5img ul').show();
                $('#sec5img2 ul').hide();
                $('#sec5img3 ul').hide();
            })

            $('#sec5menu li:nth-child(2)').click(function(){
                $(this).css({'background-color':'rgb(6, 13, 117)','color':'#fff','font-weight':'900'});
                $(this).siblings().css({'background-color':'rgb(236, 233, 233)','color':'rgb(75, 72, 72)','font-weight':'300'});
                $('#sec5img2 ul').show();
                $('#sec5img ul').hide();
                $('#sec5img3 ul').hide();
            })

            $('#sec5menu li:nth-child(3)').click(function(){
                $(this).css({'background-color':'rgb(6, 13, 117)','color':'#fff','font-weight':'900'});
                $(this).siblings().css({'background-color':'rgb(236, 233, 233)','color':'rgb(75, 72, 72)','font-weight':'300'});
                $('#sec5img3 ul').show();
                $('#sec5img ul').hide();
                $('#sec5img2 ul').hide();
            })
            // 스크롤
            $('#btn_top').click(function(){
                $('body,html').animate({scrollTop:0},300);
            })
           
        })
