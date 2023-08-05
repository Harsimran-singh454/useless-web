window.onload = () => {


    // ----------- Screen ------------
    var gameContainer = document.getElementById('game-container');


    // ---------- Emoji setting --------- 
    var emoji = document.getElementById('emoji');
    emoji.src = 'emojis/'+ Math.floor(Math.random() * 5) + ".png";    

    function happyEmoji(){
        setTimeout(()=>{
            emoji.src = 'emojis/'+ Math.floor(Math.random() * 5) + ".png";    
        },300)
        console.log("happy");
    }

    function sadEmoji(){
        emoji.src = 'emojis/s'+ Math.floor(Math.random() * 2) + ".png";    
        console.log("sad");
    }


    // ----------- Restart game --------
    var restart = document.getElementById('restart');
    restart.addEventListener('click', ()=>{
        window.location.reload();
    });

    
    // ------- -Moving Emoji ------ 
    function moveEmoji() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var emojiWidth = emoji.offsetWidth;
        var emojiHeight = emoji.offsetHeight;

        var maxLeft = windowWidth - emojiWidth;
        var maxTop = windowHeight - emojiHeight;

        var left = Math.floor(Math.random() * maxLeft);
        var top = Math.floor(Math.random() * maxTop);

        emoji.style.left = left + 'px';
        emoji.style.top = top + 'px';
    }

    function reduceSize(){
        var width = parseInt(window.getComputedStyle(emoji).width);
        if (width > 10) {
            emoji.style.width = (width - 12) + 'px';
        } else {
            gameContainer.style.background = "red";
            restart.style.display = "block";
            emoji.style.transition = 'all 0.5s ease';
        }
    };

    let size;

    function startGame(d) {
        setTimeout(() => {
            size = setInterval(reduceSize, 10);            
        }, 100);
        console.log(d);
    }

    // startGame();
    // reduceSize();
    
    // --------- Score Counter ------
    var count_holder = document.getElementById('count');
    var count = 0;
	


    // --------- On clicking Emoji ---------
    var num = 300;
    emoji.addEventListener('click', function(){
        clearInterval(size);
        num-=50;
        sadEmoji();
        moveEmoji();
        happyEmoji();
        startGame(num);
        count += 1;
        count_holder.innerHTML = count;
        emoji.style.width = '100px';
    });

};