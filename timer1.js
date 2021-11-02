const times =  process.argv.slice(2)
//let x = 0

const timer1 = function(number){
  for(let seconds of number)
{
  setTimeout(() => {
    process.stdout.write('\x07');;


    }, 1000 * seconds)
  
  }    
};

timer1(times)