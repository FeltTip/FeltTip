$(document).ready(function(){
    $('#create').on('click', function(){
        var name = $('#name').val();

        if (name == '') {
            alert('Please input file name');
            return false;
        }

        if (createFile(name) != false) {
            alert('Ok');
        }
    });
});

function createFile(name) {
    if (typeof localStorage.files === "undefined") {
        localStorage.files = {};
    }
    if (typeof localStorage.files[name] === "undefined") {
        localStorage.files[name] = {content: ''};
    }
    else {
        alert('File ' + name + ' is already exists');
        return false;
    }

    return true;
}
