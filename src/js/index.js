
function createBook() {
  const name = document.getElementById('bookName').value;
  const title = document.getElementById('bookTitle').value;
  const text = document.getElementById('bookText').value;
  const file = `[ { "title": "${title }", "text": "${ text  }" } ]`;

  const data = `text/json;charset=utf-8, ${encodeURIComponent(file)}`;
  const link = document.getElementById('link');
  link.href = `data:${  data}`;
  link.download = `${ name }.json`;
  link.innerHTML = `download ${  link.download}`;
  link.style.display = 'block';
}

/* FUNCTION TO SWITCH BETWEEN DIFFERENT VIEWS*/
function switchDiv(hide, show) {
  for (let i = 0; i <= hide.length - 1; i++) {
  	document.getElementById(hide[i]).style.display = 'block';
  	document.getElementById(show[i]).style.display = 'block';
  }
}
// function getFile() {

// }
// https://travis-ci.org/andela-rhenshaw/inverted-index/builds/202433795
