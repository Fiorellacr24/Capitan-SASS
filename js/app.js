'use strict';

$( _ => {
    getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', (err, json) => {
        if (err) { 
            return alert(err.message);
        }

        const viewList = $('#studentList');
        json.forEach((data)=>{
            viewList.append('<li>' + data.name + '<input type="checkbox"></li>');
        });
    });
});