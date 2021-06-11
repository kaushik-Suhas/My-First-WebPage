document.addEventListener('DOMContentLoaded'),function(){
    
    const list =  document.querySelector('#movie-list ul');
    const forms = document.forms;

    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.classname == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    // Add movie

}