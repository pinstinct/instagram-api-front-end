var next;
var isLoading = false;
var url = 'http://localhost:8000/api/post/';

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      if(isLoading == false){
      loadPostList();
    }
  }
});

// PostList GET 요청 API 함수
function loadPostList() {
  isLoading = true;
  $('.post-list-container').append('<div class=loading>Loading...</div>')


  // next 값이 있다면 요청 url은 해당 값을 사용
  if(url == undefined && url == null) {
    return;
  }
  console.log(url)
  $.ajax(url)
   .done(function(data) {
    // ajax 요청의 응답에서 next 값을 가져와 변수에 할당
     url = data.next;
    // 응답에 results를 results의 길이만큼 순회하며
     for(var i=0; i < data.results.length; i++) {
      //  console.log(data)
       // 매 loop마다 result[i]의 값을 curPost 변수에 할당
       var curPost = data.results[i];
      //  console.log(curPost.pk);
       addArticle(curPost)
     }
     isLoading = false;
     $('.post-list-container').find('.loading').remove();
   })
   .fail(function(data) {
     console.log('fail');
     console.log(data);
     $('.contentt-container').append('<div>Fail</div>')
   });
}
