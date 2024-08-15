// let h1=document.getElementsByTagName('h1');
// console.log(h1[0]);


// let h1 =document.querySelectorAll('h1')


// h1.forEach(function(h1) {
//     h1[3].innerText='Fourth Paragraph'
    
    
// });

// let h4=document.querySelector('.four');
// h4.innerHTML="<i>Fourth Paragraph</i>"

// h4.style='text-align: center'
// h1[0].style.background='red'
// h1[2].style.color='blue'
// h1[1].style='text-size:100'




// for ( let i  =1 ; i<= 10; i++){
//     let h1=document.createElement('h1')
//     h1.className='test'
//     h1.style.backgroundColor='blue'
//     h1.textContent='bu yazi javascript ile eklendi ' + 1;
//     document.body.append(h1)
// }



// let button=document.createElement('button')
// button.textContent='bu bir butondur';
// button.style.backgroundColor='red'
// document.body.append(button)



// const allH1elements=document.querySelectorAll('h1.test');
// for (const h1 of allH1elements){
//     h1.remove()
// }




const button=document.getElementById('btn');
button.addEventListener('mouseenter',function(event){
    alert('helal lan abuzer ogreniyorsun hee')
    button.style.backgroundColor='blue'
})
