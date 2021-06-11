document.addEventListener('DOMContentLoaded',function(){
    
    const list =  document.querySelector('#movie-list ul');
    const forms = document.forms;

    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    // add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.PreventDefault();
        
    // creating elements
    const value = addForm.querySelector('input[type = "text"]').value;
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content


    // add classes


    // append to DOM


   
    });



})