let taskCount = 6
let num = 23
const buttons = document.querySelectorAll('.button-container button');
const log = document.getElementById('activity-log');
const task = document.getElementById('task-number');
buttons.forEach(button => { button.addEventListener('click', function(){
alert("board updated successfully");
const time = new Date();
const timestamp = time.toLocaleTimeString();
log.innerHTML += `<div> you have completed the task at - ${timestamp} </div>`

const taskNumber = document.getElementById('task-assigned')
if(taskCount > 0){
    
    taskCount--;
    taskNumber.textContent = taskCount;
    this.disabled = true
}
const twentyThree = document.getElementById('twenty-three');
if(num > 0){
    num++;
    twentyThree.textContent = num;
}


        if (Array.from(buttons).every(btn => btn.disabled)) {
            alert('s all buttons clicked successfully');
        }
})

})
document.getElementById('clr-history').addEventListener('click', () => {
    // Clear activity log
    log.innerHTML = '';
});
document.getElementById('discover').addEventListener('click',function(){
    window.location.href ="./discover.html"
});
document.getElementById('color-cng').addEventListener('click',function(){
    const bgColor = document.body.style;
    if(bgColor.backgroundColor == "red"){
        bgColor.backgroundColor = "purple";
    }
    else if(bgColor.backgroundColor == "purple"){
        bgColor.backgroundColor = "black"
    }
    else if(bgColor.backgroundColor == "black"){
        bgColor.backgroundColor = "Cyan"
    }
    else{
        bgColor.backgroundColor = "red"
    }
    
    
})

