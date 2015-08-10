$(document).ready(function(){
  //댓글 달기
  $('.replyBox .inner').focusin(function(){
    var $this = $(this);
    $this.height(130);
    $('.inputHidden').show();
  })
  $('.replyBox .inner').focusout(function(){
    var $this = $(this);
    $this.height(60);
    $('.inputHidden').hide();
  })

  //답글
  $('.replyAn').click(function(){
    var $this = $(this);
    $this.parent().find('.replyReplyInp.inp').show();
    return false;
  });

});
