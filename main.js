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
        <div> 
        <input type="checkbox" class="complete-checkbox" id=${task.id}/>
        <span>
        ${task.value}
        </span>
        <input type="button" id=${task.id} value="delete"/>
        </div>
       `
     })
 $('.todos-wrapper').html(string);
 }

 
 $(document).on('click', '.complete-checkbox',function() {
    const id=$(this).attr('completed');
    this.completed=!this.completed
     for(let i=0; i<Tasks.length; i++){
         if(this.id==Tasks[i].id){
            Tasks[i].completed= !Tasks[i].completed;
            console.log(Tasks[i].completed);
         }
     }

console.log(Tasks);
  
 })
 
