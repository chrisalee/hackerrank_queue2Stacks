function processData(input) {
    let lines = input.split("\n");
    let len = +lines[0];
    let queueLine = [];
    for (let i = 1; i <= len; i++) {
        let args = lines[i].split(' ');
        let actionType = +args[0];
        
        if (actionType === 1) {
                queueLine.push(args[1]);
        }
        if(actionType === 2) {
            queueLine.shift();    
        }
        if(actionType === 3) {
            console.log(queueLine[0]);    
        }
    }
} 


//////////////////////////////////////////////////////
function processData(input) {
    //Enter your code here
    var lines = input.split("\n");
    var count = +lines[0];
    var queue = [];
    for (var i = 1; i <= count; i++) {
        var args = lines[i].split(' ');
        var cmd = +args[0];
        var arg;
        switch (cmd) {
            case 1:
                arg = args[1];
                queue.push(arg);
                break;
            case 2:
                queue.shift();
                break;
            case 3:
                console.log(queue[0]);
                break;
        }
    }
} 
