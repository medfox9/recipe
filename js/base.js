$(document).ready(function(){
  //��� �ޱ�
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

  //���
  $('.replyAn').click(function(){
    var $this = $(this);
    $this.parent().find('.replyReplyInp.inp').show();
    return false;
  });



});//end document.ready




//�̹��� �̸�����
$.fn.setPreview = function(opt){
  "use strict"
  var defaultOpt = {
    inputFile: $(this),
    img: null,
    w: 440,
    h: 210
  };
  $.extend(defaultOpt, opt);

  var previewImage = function(){
    if (!defaultOpt.inputFile || !defaultOpt.img) return;

    var inputFile = defaultOpt.inputFile.get(0);
    var img       = defaultOpt.img.get(0);

    // FileReader
    if (window.FileReader) {
      // image ���ϸ�
      if (!inputFile.files[0].type.match(/image\//)) return;

      // preview
      try {
        var reader = new FileReader();
        reader.onload = function(e){
          img.src = e.target.result;
          img.style.width  = defaultOpt.w+'px';
          img.style.height = defaultOpt.h+'px';
          img.style.display = '';
        }
        reader.readAsDataURL(inputFile.files[0]);
      } catch (e) {
        // exception...
      }
      // img.filters (MSIE)
    } else if (img.filters) {
      inputFile.select();
      inputFile.blur();
      var imgSrc = document.selection.createRange().text;

      img.style.width  = defaultOpt.w+'px';
      img.style.height = defaultOpt.h+'px';
      img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";
      img.style.display = '';
      // no support
    } else {
      // Safari5, ...
    }
  };
  // onchange
  $(this).change(function(){
    previewImage();
  });
};



//��� �ο���

//��� ���빰����
