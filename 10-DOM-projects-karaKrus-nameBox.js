
    // nameBox

    function handleCostKeydown(event) {
      if (event.key === 'Enter') {
        nameSubmitted();
      }
    };

    function nameSubmitted() {
      const inputElement = document.querySelector('.nameBox');
      let userName = inputElement.value;

      document.querySelector('.showName')
      .innerHTML = `Your name is ${userName}`;

        function pickCompliment() {
                  const randomNumber = Math.random();
                   
                  let compliment = '';
                
                if (randomNumber >= 0 && randomNumber < 1/10) {
                   compliment ='Cool name dude.';
                } else if (randomNumber >= 1/10 && randomNumber < 2/10) {
                   compliment ='Nice to meet you!';
                } else if (randomNumber >= 2/10 && randomNumber < 3/10) {
                  compliment ='Have a great day!';
                } else if (randomNumber >= 3/10 && randomNumber < 4/10) {
                   compliment ='ew!';
                } else if (randomNumber >= 4/10 && randomNumber < 5/10) {
                 compliment ='oh...I am sorry for your name.';
                } else if (randomNumber >= 5/10 && randomNumber < 6/10) {
                   compliment ='yikes.';
                } else if (randomNumber >= 6/10 && randomNumber < 7/10) {
                 compliment ='That is a lovely name.';
                } else if (randomNumber >= 7/10 && randomNumber < 8/10) {
                   compliment ='Your name has such a lovely sound.';
                } else if (randomNumber >= 8/10 && randomNumber < 9/10) {
                  compliment ='I like your name.';
                } else if (randomNumber >= 9/10 && randomNumber < 1) {
                   compliment ='Your name is so unique and special.';
                } 
                
                return compliment;
                }
        let compliments = pickCompliment();
      document.querySelector('.compliment')
      .innerHTML = `${compliments}`;
        
    };



    // xoBeman

    // karaKrus 

    let score = JSON.parse(localStorage.getItem('score'));

    if (score === null) {
      score = {
        wins:0,
        loses:0,
      }
     };

    function playGame(playerMove) {
      const karaKrusResulta = coinFlip(playerMove);

      let resulta = '';

      playerMove === karaKrusResulta ? resulta = 'Panalo!' : resulta = 'Talo';
      
      if (resulta === 'Panalo!') {
        score.wins ++;
      } else if (resulta === 'Talo') {
        score.loses ++;
      };

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('.galawKaraKrus')
    .innerHTML = `Tumaya ka sa ${playerMove}`;
    document.querySelector('.kalabanKaraKrus')
    .innerHTML = `Pitik ng piso ay ${karaKrusResulta}`;
    document.querySelector('.resultaKaraKrus')
    .innerHTML = `${resulta}`;
    updateScoreElement();
  
    };

  
    


    function coinFlip(playerMove) {
      const randomNumber = Math.random();

        let karaKrusResulta = '';

      if (randomNumber >= 0 && randomNumber < 0.5) {
        karaKrusResulta = 'Kara';
      } else {karaKrusResulta = 'Krus';}

      return karaKrusResulta;

    };

    function updateScoreElement() {
      document.querySelector('.iskurKaraKrus')
   .innerHTML = `Panalo: ${score.wins}, Talo: ${score.loses}`
    }
    // surKaraK
