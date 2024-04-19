

var quest= [
    {
        question:'How many legs does a spider have?',
        a:'8',
        b:'5',
        c:'9',
        d:'10',
        theanswer:'8'
    },
    {
        question:'What is something you hit with a hammer?',
        a:'Person',
        b:' A nail',
        c:'A car',
        d:'No thing',
        theanswer:'A nail'
    },
    {
        question:'Whats the name of a place you go to see lots of animals?',
        a:'Paris',
        b:'The ZOO',
        c:'School',
        d:'Home',
        theanswer:'The ZOO'
    },
    {
        question:'Whose nose grew longer every time he lied?',
        a:'SpongeBob',
        b:'Batman',
        c:'Tom And Jerry',
        d:'Pinocchio',
        theanswer:'Pinocchio'
    },
    {
        question:'If you freeze water, what do you get?',
        a:'Jus',
        b:'Sandwitch',
        c:'Ice',
        d:'Water',
        theanswer:'Ice'
    },
]

$('.container').hide()
$('.start').on('click',function(){
 
    $('.quest').html(`<h2 id="question">${quest[0].question}</h2>`)
    $('.mylist').html(`<li><input type="radio" class="checkbox" value="${quest[0].a}">${quest[0].a}</li><li><input type="radio" class="checkbox" value="">${quest[0].b}</li><li><input type="radio" class="checkbox" value="">${quest[0].c}</li><li><input type="radio" class="checkbox" value="">${quest[0].d}</li>`)
    $('.next').show()
    $('.start').hide()
    $('.disp').hide()
    $('.container').show()
})  
$('.msg').hide()
var count = 0
$('.next').on('click',function(){
    count = count + 1 
    if(count===quest.length){
        $('.container').hide()
        $('.msg').show()
    }
    $('.quest').html(`<h2 id="question">${quest[count].question}</h2>`)
$('.mylist').html(`<li><input id='1' type="radio" name="ans" class="checkbox" value="${quest[count].a}">${quest[count].a}</li><li><input id='2' type="radio" name="ans" class="checkbox" value="${quest[count].b}">${quest[count].b}</li><li><input id='3' type="radio" name="ans" class="checkbox" value="${quest[count].c}">${quest[count].c}</li><li><input id ='4' type="radio" name="ans" class="checkbox" value="${quest[count].d}">${quest[count].d}</li>`)

})
$('.ans').on('click',function(){
    alert(`The answer is: ${quest[count].theanswer}`)
})



















