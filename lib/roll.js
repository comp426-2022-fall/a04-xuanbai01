export function roll(sides, dice, rolls){
    var arr = [];
    for (let i = 0; i < rolls; i++){
      let result = 0;
      for (let j = 0; j < dice; j++){
          result = result + Math.floor(Math.random() * sides) + 1;
      }
      arr.push(result);
    }
  
    return {"sides": sides, "dice": dice, "rolls": rolls, "results": arr};
  }