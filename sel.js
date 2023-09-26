document.addEventListener('DOMContentLoaded', ContentLoadedEvent, false);

function getSelectedText () {
  let selectedText = '';
  if (window.getSelection) { // 检查浏览器是否支持 window.getSelection()
      selectedText = window.getSelection().toString(); // 获取选中的文本并转换为字符串
  } else if (document.selection && document.selection.type !== 'Control') {
      selectedText = document.selection.createRange().text;
  }
    return selectedText.length;
}

function createNumberBox () { //创建文字框并设置样式
  box = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(box);
  box.style.position = 'absolute';
  box.style.display = 'none'
  box.style["background-color"] = 'grey';
  box.style['padding'] = '5px';
  box.style['z-index'] = '9999999999'
}

function replace (ev) {
  if (!getSelectedText()){
      box.style.display = 'none'
  }else{
      box.style.display = ''
      box.style.top = ev.pageY+20+"px";
      box.style.left = ev.pageX+"px"
      box.innerHTML = getSelectedText();
  }
}

function ContentLoadedEvent () {
  window.onload = createNumberBox();
  var body = document.getElementsByTagName("body")[0];
  body.onmousemove = replace;
}