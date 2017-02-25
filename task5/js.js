jQuery(document).ready(function($) {
    $(".alert").hide();
    $('button').click(function() {
        var user = $('#user').val();
        var password = $('#password').val();
        if (!user || !password) {
            $('.alert').show('fast');
            var alert=setTimeout(function() {
                $('.alert').hide('fast')
            }, 1000)
        }
    });

});
