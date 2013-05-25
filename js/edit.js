document.onready = function(){
    console.log(CKEDITOR);
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline( 'editable' );
};