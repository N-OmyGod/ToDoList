let Tasks=[];

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
$(document).on('click', '#add-task-btn',function() {
   let value = $('#description-task').val();
   Tasks.push({value:value, completed:false, id: guid()});
   render();
 
})

 function render(){
    let string=`` 
     Tasks.forEach((task)=>{
        string+=`
        <div class="todo-item"> 
        <input type="checkbox" class="complete-checkbox" id="${task.id}"/>
        <span>
        ${task.value}
        </span>
        <input type="button" class="delete-button" id="${task.id}" value="delete"/>
        </div>
       `
     })
 $('.todos-wrapper').html(string);
 }

 
 $(document).on('click', '.complete-checkbox',function() {
    const id=$(this).attr('id');
Tasks.forEach((task)=>{
if (task.id===id){
task.completed=!task.completed
}
})
console.log(Tasks);

    
 })
 
 $(document).on('click', '.delete-button',function() {
    const id=$(this).attr('id');
    const ind=Tasks.findIndex(task=>task.id===id);
    Tasks.splice(ind,1);


    render();
 })
 
 