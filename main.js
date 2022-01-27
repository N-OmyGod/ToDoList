let Tasks=[];
let allstatus=true;
let completedStatus=false;
let uncompletedStatus=false;
let currentPage=1
let amount;

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
   $('#description-task').val('');
   console.log(Tasks)
   render();
   renderPagenumber()
   
})

function  Completedrender(){
   let string=`` 
   Tasks.forEach((task)=>{

      let isGrey= task.completed ? 'grey' : null;
      let isChecked=task.completed ? 'checked' : null;
      if(isChecked!=null){
      string+=`
      <div class="todo-item  ${isGrey}" id="todo-${task.id}"> 
      <input type="checkbox" class="complete-checkbox" id="${task.id}" ${isChecked}/>
      <span>
      ${task.value}
      </span>
      <input type="button" class="delete-button" id="${task.id}" value="delete"/>
      </div>
     `}
   })
$('.todos-wrapper').html(string);


}
function UnCompletedrender(){
   let string=`` 
   Tasks.forEach((task)=>{
      let isGrey= task.completed ? 'grey' : null;
      let isChecked=task.completed ? 'checked' : null;
      if(isChecked===null){
      string+=`
      <div class="todo-item  ${isGrey}" id="todo-${task.id}"> 
      <input type="checkbox" class="complete-checkbox" id="${task.id}" ${isChecked}/>
      <span>
      ${task.value}
      </span>
      <input type="button" class="delete-button" id="${task.id}" value="delete"/>
      </div>
     `}
   })
$('.todos-wrapper').html(string);
}

 function render(){
   
    let string=`` 
   
    for(let i=(currentPage-1)*5; i<currentPage*5;i++){
       if(Tasks[i]){
       console.log('isfunc',Tasks[i])
        let isGrey= Tasks[i].completed ? 'grey' : null;
        let isChecked=Tasks[i].completed ? 'checked' : null;
        string+=`
        <div class="todo-item  ${isGrey}" id="todo-${Tasks[i].id}"> 
        <input type="checkbox" class="complete-checkbox" id="${Tasks[i].id}" ${isChecked}/>
        <span>
        ${Tasks[i].value}
        </span>
        <input type="button" class="delete-button" id="${Tasks[i].id}" value="delete"/>
        </div>
       `
       }
       else{
          break;
       }
     }
 $('.todos-wrapper').html(string);
 }

 
 $(document).on('click', '.complete-checkbox',function() {
    const id=$(this).attr('id');
   Tasks.forEach((task)=>{
      if (task.id===id){
         task.completed=!task.completed
         if(task.completed){
            $(`#todo-${id}`).addClass('grey')
         }
       else{
            $(`#todo-${id}`).removeClass('grey')

         }
      }

   })
check_CurrentButton()
})

$(document).on('click', '.delete-button',function() {
    const id=$(this).attr('id');
    const ind=Tasks.findIndex(task=>task.id===id);
    Tasks.splice(ind,1);
    check_CurrentButton();
 })
 
function check_CurrentButton(){
  if(allstatus){
     render();
  }
  if(completedStatus){
     Completedrender();
  }
  if(uncompletedStatus){
     UnCompletedrender();
  }
}

 $(document).on('click', '#all-btn',function() {
    allbutton=true;
    completedStatus=false;
    uncompletedStatus=false;
   $( '#completed-btn').removeClass('active');
   $( '#uncompleted-btn').removeClass('active');
   $( '#all-btn').addClass('active');
   check_CurrentButton()
 
})

$(document).on('click', '#completed-btn',function() {
   allbutton=false;
   completedStatus=true;
   uncompletedStatus=false;
   $( '#completed-btn').addClass('active');
   $( '#uncompleted-btn').removeClass('active');
   $( '#all-btn').removeClass('active');
   check_CurrentButton()
   
})

$(document).on('click', '#uncompleted-btn',function() {
   allbutton=false;
   completedStatus=false;
   uncompletedStatus=true;
   $( '#uncompleted-btn').addClass('active');
   $( '#completed-btn').removeClass('active');
   $( '#all-btn').removeClass('active');
   check_CurrentButton()
})

$(document).on('click', '.amount-button',function() {
   currentPage=$(this).attr('id');
   renderPage()

})
function renderPage(){
   
      render()
   
}

function renderPagenumber(){
   amount=Tasks.length/5
  let string=`` 
 
   for(let j=1; j<=amount; j++){
      string+=`
      <button  id="${j}">${j}</button>
      
     `
   }
$('.amount-button').html(string);
}

