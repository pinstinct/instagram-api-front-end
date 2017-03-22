// loadPostList ajax 요청의 response data에 'next'값이 있으면 해당 값을 할당할 변수
var next;

// PostList GET 요청 API 함수
function loadPostList() {
  // 첫 loadPostList API 요청 URL
  var url = 'http://localhost:8000/api/post/';

  // next 값이 있다면 요청 url은 해당 값을 사용
  if(next != undefined && next != null) {
    url = next;
  }
  console.log(url)
  $.ajax(url)
   .done(function(data) {
    // ajax 요청의 응답에서 next 값을 가져와 변수에 할당
     next = data.next;
    // 응답에 results를 results의 길이만큼 순회하며
     for(var i=0; i < data.results.length; i++) {
      //  console.log(data)
       // 매 loop마다 result[i]의 값을 curPost 변수에 할당
       var curPost = data.results[i];
      //  console.log(curPost.pk);
       addArticle(curPost)
     }
   })
   .fail(function(data) {
     console.log('fail');
     console.log(data);
     $('.contentt-container').append('<div>Fail</div>')
   });
}
