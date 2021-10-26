var words = ['Rookie','Learner','Designer','Creator','Dreamer']

var index = 0

var inner_index = 0

var jsText = document.querySelector(".jsText");

var intervalHolder;

function type(){
    var text = words[index].substring(0,inner_index+1);
    jsText.innerHTML = text + "_"
    inner_index += 1
    
    if (text === words[index]){
        
        clearInterval(intervalHolder);
        setTimeout(function(){
            intervalHolder = setInterval(deletee,50)
        },1000)
    }
}

function deletee(){
    var text = words[index].substring(0,inner_index-1);
    jsText.innerHTML = text + "_"
    inner_index -= 1
    
    if (text === ""){

        clearInterval(intervalHolder);

        if (index == words.length-1){
            index = 0;
        }
        else{
            index += 1;
        }
        
        inner_index = 0

        clearInterval(intervalHolder);
        setTimeout(function(){
            intervalHolder = setInterval(type,200),5000
        })
    }
}


intervalHolder = setInterval(type,200)



window.onscroll = function(){
    var a = "col2"
    var b = "sd"
    console.log(scrollY)

    if (window.innerWidth > 480){
        if(scrollY>364){
            document.getElementById("bruh").classList.remove('bruh')
            document.getElementById("bruh").classList.add('bruh_red')
            console.log( document.getElementById("bruh").classList)
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
        if(scrollY>1148){
            document.getElementById("bruh").classList.remove('bruh_red')
            document.getElementById("bruh").classList.add('bruh_black')
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
        if(scrollY<1148 && scrollY > 364){
            document.getElementById("bruh").classList.remove('bruh_black')
            document.getElementById("bruh").classList.add('bruh_red')
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
        if( scrollY < 364){
            document.getElementById("bruh").classList.remove('bruh_black')
            document.getElementById("bruh").classList.remove('bruh_red')
            document.getElementById("bruh").classList.add('bruh')
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
    
    
        if (window.innerWidth > 481 && scrollY>633){
            a = b
            document.getElementById("top2").classList.replace(a,"slideUp")
            
        }
        if (window.innerWidth > 481 && scrollY>380){
            a = b
            document.getElementById("top3").classList.replace(a,"slideUp")
        }
    
        if (window.innerWidth > 481 && scrollY>2130){
            a = b
            document.getElementById("top4").classList.replace(a,"slideUp")
        }
        if (window.innerWidth > 481 && scrollY<628){
            
            document.getElementById("top2").classList.remove("slideUP")
            document.getElementById("top2").classList.remove(a)
            document.getElementById("top2").classList.add(b)
            
    
            a = b
        }
        if (window.innerWidth > 481 &&  scrollY<1345){
            
            document.getElementById("top3").classList.remove("slideUP")
            document.getElementById("top3").classList.remove(a)
            document.getElementById("top3").classList.add(b)
            
    
            a = b
        }
        if (window.innerWidth > 481 &&  scrollY<2125){
            
            document.getElementById("top4").classList.remove("slideUP")
            document.getElementById("top4").classList.remove(a)
            document.getElementById("top4").classList.add(b)
            
    
            a = b
        }

    }
    if(window.innerWidth < 481){
        if(scrollY>364){
            document.getElementById("bruh").classList.remove('bruh')
            document.getElementById("bruh").classList.add('bruh_red')
            console.log( document.getElementById("bruh").classList)
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
        if(scrollY>1148){
            document.getElementById("bruh").classList.remove('bruh_red')
            document.getElementById("bruh").classList.add('bruh_black')
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
        if(scrollY<1148 && scrollY > 364){
            document.getElementById("bruh").classList.remove('bruh_black')
            document.getElementById("bruh").classList.add('bruh_red')
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
        if( scrollY < 364){
            document.getElementById("bruh").classList.remove('bruh_black')
            document.getElementById("bruh").classList.remove('bruh_red')
            document.getElementById("bruh").classList.add('bruh')
    
            // document.getElementById("bruh").classList.add("bruh_red");
            // console.log(document.getElementById("bruh").classList)
        }
    
    
        if (window.innerWidth < 481 &&  scrollY>333){
            a = b
            document.getElementById("top2").classList.replace(a,"slideUp")
            
        }
        if (window.innerWidth < 481 && scrollY>830){
            a = b
            document.getElementById("top3").classList.replace(a,"slideUp")
        }
    
        if (window.innerWidth < 481 && scrollY>1234){
            a = b
            document.getElementById("top4").classList.replace(a,"slideUp")
        }
        if (window.innerWidth < 481 &&  scrollY < 333){
            
            document.getElementById("top2").classList.remove("slideUP")
            document.getElementById("top2").classList.remove(a)
            document.getElementById("top2").classList.add(b)
            
    
            a = b
        }
        if (window.innerWidth < 481 && scrollY < 830){
            
            document.getElementById("top3").classList.remove("slideUP")
            document.getElementById("top3").classList.remove(a)
            document.getElementById("top3").classList.add(b)
            
    
            a = b
        }
        if (window.innerWidth < 481 && scrollY < 1234){
            
            document.getElementById("top4").classList.remove("slideUP")
            document.getElementById("top4").classList.remove(a)
            document.getElementById("top4").classList.add(b)
            
    
            a = b
        }
    }
    
}

// window.onscroll = function(){
//     var a = "col2"
//     var b = "sd"

//     console.log(scrollY)
    
// }
