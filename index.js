let ride = 199;
ride = 2001;
ride = 2501;

function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return 'This one is on me!';
  } else if (ride > 2000 && ride < 2500 ) {
    return 'I will gladly take your thirty bucks.';
  } else {return 'No can do.';
}
  }

  
const city = 'NYC';
function ternaryCheckCity(city){
  
  const checkCity = city === 'NYC' ?'Ok, sounds good.':'No go.'
  return checkCity;
}


let reply;

function switchOnCharmFromTip(reply){
switch (reply){
  case 'generous':
    return 'Thank you so much.';
    break;

  case   'not as generous':
    return 'Thank you.'
    break;

  default:
    console.log('Bye.');
    return 'Bye.'
    break;
}
}