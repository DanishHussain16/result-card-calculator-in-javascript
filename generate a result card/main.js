function Enter(name,obtain,total){
       this.name=name;
       this.obtain=obtain;
       this.total=total;
      
};


Enter.prototype.addToList=function(result){
    const row=document.createElement('tr');
    const tBody=document.getElementById('t-body');
    row.innerHTML='<td>'+result.name+'</td><td>'+result.total+'</td>'+'<td>'+result.obtain+'</td><td><a href="#" class="remove">x</a></td>';

    tBody.appendChild(row);


}
Enter.prototype.clearTasks=function(){
    document.getElementById('subject').value='';
    document.getElementById('obtain').value='';
    document.getElementById('total').value='';
}

const even=document.getElementById('submit-form');
even.addEventListener('submit',function(e){

     const name=document.getElementById('subject').value;
     const obtain=document.getElementById('obtain').value;
     const total=document.getElementById('total').value;

    const result=new Enter(name,obtain,total);
    result.addToList(result);
    result.clearTasks();


    
     


   e.preventDefault();
});

document.getElementById('table').addEventListener('click',function(e){
      if (e.target.classList.contains('remove')){
          e.target.parentElement.parentElement.remove();
      }
   

})
