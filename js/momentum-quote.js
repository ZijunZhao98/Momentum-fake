$.ajax({
      url:"http://quotes.rest/qod.json",
      method: "GET",
      success: function(r){
        var quote = r.contents.quotes[0].quote;
        document.getElementById("quote").innerHTML = quote;
      },
      error: function(e){
        console.log(e);
      },
  });
