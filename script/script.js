// demo

//var ელემენტი (გლობალური) რომელიც წარმოადგენს ცვლადს

//const ელემენტი (მუდმივი) რომელიც არ წარმოადგენს ცვლადს

//let ელემენტი (ლოკალური) რომელიც წარმოადგენს ცვლადს

// Number რიცხვი
// String ტექსტი/წინადადება
// bool ლოგიკა
// array მასივი
// NULL მონაცემი ცარიელია
// Undefined მონაცემს მნიშვნელობა არ გააჩნია
// Object როდესაც ცნობილია მონაცემის რაობა მაგრამ პროგრამა ვერ ნახულობს რა მნიშვნელობა აქვს მას 
// Symbol საქმე ეხება ერთ სიმბოლოს

/*
+
-
*
/
% ნაშთიანი (გამოდის ნაშთის რაოდენობა)
++ ინკრემენტი
-- დეკრემენტი
** ხარისხი
*/

/*
= უდრის /  ტოლია
+= მონაცემი იმახსოვრებს რა დაიწერა წინათ და ამატებს ახალ ელემენტს
-= მონაცემი იმახსოვრებს რა დაიწერა წინათ და აკლებს ახალ ელემენტს
*= მონაცემი იმახსოვრებს რა დაიწერა წინათ და ამრავლებს ახალ ელემენტს
/= მონაცემი იმახსოვრებს რა დაიწერა წინათ და ყოფს ახალ ელემენტს
%= მონაცემი არ იმახსოვრებს რა დაიწერა წინათ და იყვანს მონაცემის ნაშთს
**= მონაცემი არ იმახსოვრებს რა დაიწერა წინათ და გამოაქვს მონაცემის ხარისხი
*/
/*
function jarima(days){
    var daysInWeek = 7;
    
    var jarimaInDay = 20;
    var jarimaInWeek = 100;
    
    var fullCount = 
    (parseInt(days / daysInWeek) * jarimaInWeek) + 
    ((days % daysInWeek) * jarimaInDay);
    document.getElementById("demo").innerHTML = fullCount;
}

jarima(32)
*/

//მართკუთხედის ფართობი S = (a*b)
//მართკუთხედის პერიმეტრი P = 2(a+b)
//კვადრატის ფართობი S = a^2
//კვადრატის პერიმეტრი P = 4 * a

function mart(a,b){
    document.getElementById("demo1").innerHTML +="martkutxedis fartobi - " + (a*b);
    document.getElementById("demo2").innerHTML +="martkutxedis perimetri - " + (2*(a+b));
}
function kvadr(a){
    document.getElementById("demo3").innerHTML +="kvadratis fartobi - " + (a*a);
    document.getElementById("demo4").innerHTML +="kvadratis perimetri - " + (4*a);
}

kvadr(2);
mart(2,2)
