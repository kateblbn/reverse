const nature = document.querySelector('.nature');

for (let i = 0; i < 3; i++) {
    let reverse = i % 2 !== 0 ? 'reverse' : 'allright';
    let img = i == 0 ? 'img1' :  i == 1? 'img2' : 'img3';
    let a = `
<div class="nature__wrap ${reverse}">
    <div class="nature__img ${img}"> </div>
    <div class="descr">
        <div class="nature__title">Your First Beautiful Place</div>
        <div class="nature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
    </div>
    
    
</div> 
`
nature.innerHTML += a;


}


