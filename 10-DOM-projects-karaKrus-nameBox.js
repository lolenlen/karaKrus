
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