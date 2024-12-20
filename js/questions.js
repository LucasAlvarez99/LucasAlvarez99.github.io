(function(){

    const titleQuestions = [...document.querySelectorAll('.questions_title')]; 
    console.log(titleQuestions)
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answare = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add')
            question.children[0].classList.toggle('questions_arrow--rotate');

            if(answare.clientHeight === 0){
                height = answare.scrollHeight;
            }

            answare.style.height = `${height}px`;
        });
    });


})();