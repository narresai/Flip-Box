// let boxes1 = document.querySelector('.boxes1')
// let wrapper = document.querySelector('.wrapper')
// let container = document.querySelector('.container')


// let count = 0;


// for(let i = 0 ; i < 12 ; i++){
//     let li = document.createElement('li');
//     li.classList.add('box')
//     boxes1.append(li)
//     wrapper.append(boxes1)
//     container.append(wrapper)

//     li.addEventListener('click', function(){
//         count += 1;
//         li.innerText = count

        
//          setInterval(() => {
//             li.style.display = 'none'
//         }, 2000);
//     })


// }

let firstBox = document.querySelectorAll('.first li');
let secondBox = document.querySelector('.second')

firstBox.forEach((box, index) => {
  box.addEventListener('click', (event) => {
    event.target.innerText = index + 1;

    setTimeout(() => {
      event.target.innerText = "";
    }, 5000)
  });
});

secondBox.addEventListener('click', (event) => {
  let text = event.target.dataset.text;
  event.target.innerText = text;

  setTimeout(() => {
    event.target.innerText = "";
  }, 5000)
  // event.target.innerText = 
})