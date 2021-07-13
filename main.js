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
        <input type="checkbox" id=${task.id}/>
        <span>
        ${task.value}
        </span>
        <input type="button" id=${task.id} value="delete"/>
        </div>
       `
     })
 $('.todos-wrapper').html(string);
 }

