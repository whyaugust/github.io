const a = document.getElementById('in_a');
const b = document.getElementById('in_b');
const c = document.getElementById('in_c');
function ab(){
    const x= +a.value,
          y= +b.value,
          z=+ c.value,
          treug = ((x + y > z) && (y + z > x)&& (x + z > y)),
          pryam = ((x**2+y**2===z**2)||(x**2+z**2===y**2)||(z**2+y**2===x**2));





    if (treug && pryam){
        alert('такой треугольник существует и он прямоугольный');
    } else if (treug && !pryam){
        alert('такой треугольник существует, но он не прямоугольный')
    } else {
        alert('это не треугольник')
    }
}




