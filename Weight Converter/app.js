document.getElementById('output').style.visibility = 'hidden'
document.getElementById('lbsInput')
  .addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    const lbs = e.target.value
    //Grams
    document.getElementById('gOutput').innerHTML = lbs/0.0022046
    //Kilograms
    document.getElementById('kgOutput').innerHTML = lbs/2.2046
    //Ounces
    document.getElementById('ozOutput').innerHTML = lbs*16
  })
