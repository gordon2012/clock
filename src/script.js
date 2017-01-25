console.log('hello, clock');

////////
// WIP: From codepen -> http://codepen.io/gordon2012/pen/001370332f2ad691dde22c4cc190dcbc
// Will definately need to grab some css
//

function updateTime(e) {
  const now = new Date();

  const seconds =  now.getSeconds() == 0 ? 60 : now.getSeconds();
  const secdeg = (((seconds / 60) * 360) + 90);

  console.log(seconds, secdeg);

  document.querySelector('.seconds').style.transform = `rotate(${secdeg}deg)`;
}

updateTime();
window.setInterval(updateTime, 1000);

//
////////
