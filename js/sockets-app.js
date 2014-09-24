  var host, dialog;
  var isAdmin = false;
  host = "http://infn8-sockets.nodejitsu.com/";
  if(window.location.hostname == "jquery.local" || window.location.hostname == "infinibook.local"){
    host = "infinibook.local:3000";
  }
  var socket = io(host);
$(document).ready(function() {
  $('body').on('click', '.plus-button', function(){
    socket.emit('vote', { hash: window.location.hash, qty: 1 });
    $(".ui-dialog-content").dialog("close");
  });
  $('body').on('click', '.minus-button', function(){
    socket.emit('vote', { hash: window.location.hash, qty: -1 });
    $(".ui-dialog-content").dialog("close");
  });
  $('body').on('click', '.watch-button', function(){
    setWatched(!$(this).data('watching'));
  });
  socket.on('admin-login', function(result){
    if(result.admin){
      window.isAdmin = true;
      $('#socket-message').text("You are logged in as Admin");
    }
  });
  socket.on('client-login', function(result){
    if(result.connected){
      $('.controls button').removeAttr('disabled');
      setWatched(true);
    }
  });
  socket.on('disconnect', function(result){
      $('.controls button').attr('disabled', 'disabled');
      setWatched(false);
  });
  $(window).on('hashchange', function(event) {
    if(isAdmin){
      socket.emit('admin-hashchange', window.location.hash);
    }
  });
  socket.on('client-hashchange', function(newHash){
    if(isAdmin != true && $('.watch-button').data('watching')){
      window.location.hash = newHash;
    }
  });
  socket.on('pulse-check', function(pulse){
    if(isAdmin != true){
    dialog = $('<div><h3>Do you understand what is being discussed?</h3><p><button class="minus-button"><span class="fa fa-thumbs-o-up fa-rotate-180"></span></button> <button class="plus-button"><span class="fa fa-thumbs-o-up"></span></button></p></div>').dialog({
      modal:true,
      title:'Pulse Check!',
      width: 700,
      height : 600,
      autoOpen : false,
      open: function(){
        $('.ui-dialog-titlebar-close').trigger('focus');
        
      }
    });
    dialog.dialog('open');
        $('.ui-dialog-titlebar-close').trigger('focus');
    }
  });
  $(window).konami(function(){ 
    $('<div><h3>Login for admin rights</h3><p><label>Password: </label><input id="admin-login" type="password"></p><p><button id="admin-login-submit">Login</button></p><p id="socket-message"></p></div>').dialog({
      modal:true,
      title:'Konami Code Activated!',
      width: 700,
      height : 600,
      open: function( event, ui ) {
        setTimeout(function(){
          $('#admin-login').val('').focus();
        }, 500);
      }
    });
  });
  $('body').on('click', '#admin-login-submit', function(event) {
    event.preventDefault();
    socket.emit('admin-login', $('#admin-login').val());

    /* Act on the event */
  });
});

function setWatched(state){
  var btn = $(".watch-button");
  var icon = btn.find('.fa');
  if(state){
    btn.data('watching', true).attr('Title', 'Observation Mode On:  Click this button to turn off');
    icon.removeClass('fa-eye-slash').addClass('fa-eye');
  } else {
    btn.data('watching', false).attr('Title', 'Observation Mode Off:  Click this button to turn on');
    icon.removeClass('fa-eye').addClass('fa-eye-slash');
  }
}
