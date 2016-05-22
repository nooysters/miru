
game = function() {
	
	return {

	  cpu: function() {
	    var num = this.choices.length;
	    var rand = Math.floor(Math.random() * num);
	    
	    return this.choices[rand];
	  },

	  indexOfValue: function(value) {
	    return this.choices.map(function(item) {
	      return item.value;
	      
	    }).indexOf(String(value));
	  },
	  
	  isWinner: function(p1, p2) {
		  index = this.indexOfValue(p1);
		
		  result = this.choices[index].beats.filter(function(item) {
		    return item == p2.value;
		  }); 
		
		  return result.length > 0;
	  },
	  
	  run: function(p1) {
	  	 var p2 = this.cpu();
	  	 
	  	 if(p2.value == p1) {
	  	 	return this.run(p1);
	  	 }
		 
		this.result = this.isWinner(p1, p2);
		
		if (this.result) {
			alert("You Win! "+ p1 +" defeats " + p2.value);
		}
		else {
			alert("You Lose! " + p1 + " is defeated by " +  p2.value);
		}
		
		return this.result
	  },
	  
	  choices: [
	    {
	      value: 'rock',
	      beats: ['scissors']
	    },
	    {
	      value: 'paper',
	      beats: ['rock']
	    },
	    {
	      value: 'scissors',
	      beats: ['paper']
	    },
	  ],
	  
	  result: false,
	  gameover: false,
	};
	
})();

var newGame = game;

while (newGame.gameover === false) {
	var input = prompt("rock, paper, scissors, 0 to exit");
	if (input === 0) {
		newGame.gameover = true;
	}
	newGame.run(input);
}

