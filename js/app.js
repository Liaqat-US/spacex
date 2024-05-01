(function(){
    let socials = document.querySelectorAll('.social div');

    socials.forEach(function(social,index){
        social.style.animation = `InOut .8s ease-in-out forwards ${index/6 + 0.5}s`;
    })

    let rocketPieces = document.querySelectorAll('.rocket-body span');

    let rocket = document.querySelector('.rocket');

    let triggerStart = window.innerHeight / 6;

    let rocketOffSetTop = rocket.offsetTop;

    let thirdOffSetTop = rocketPieces[2].offsetTop;

    document.addEventListener('scroll',(e)=>{
        if(window.scrollY > (rocketOffSetTop - triggerStart)){
            rocketPieces[0].classList.add('active');
            rocketPieces[1].classList.add('active');
        } else {
            rocketPieces[0].classList.remove('active');
            rocketPieces[1].classList.remove('active');
        }

        if(window.scrollY > (thirdOffSetTop - triggerStart)){
            rocketPieces[2].classList.add('active');
        } else {
            rocketPieces[2].classList.remove('active');
        }
    })
}())