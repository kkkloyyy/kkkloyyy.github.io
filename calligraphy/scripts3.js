//console.log(calligraphy)
var games1 = games



// copy a card in as a comment
// add target to dom
// set up the target in JS $()  = targetName
// loop over your projects
// build the card step by step
// --- pull vars
// --- create the small pieces of html
// then you use targetName.append()
var games1 =$('#games')
console.log(games1)
for (i=0; i<games.length;i++)
    {
        
        var card = games[i];
        var id = card.id;
        var type = card.type;
        var style = card.style;
        var title = card.title;
        var text = card.text;
        var textCN = card.textCN;
        {/* < a href=" " data-lightbox="roadtrip">
          < img src="bgPhoto.jpg">
        </ a> */}
        var thumbImgUrl = 'images3/thumb/'+id+'t.png';
        var renderThumbImg = '<img width="100%" height="100%" src="'+thumbImgUrl+'"/>';
        var renderType = '<p>'+type+'</p>';
        var renderStyle = '<p>'+style+'</p>';
        var renderTitle = '<p>'+title+'</p>';
        var texts = text+ ' '+ textCN; 
        var renderTexts = '<p>'+texts+'</p>';
        var renderLink = '<a href="images3/full/'+id+'.png" data-lightbox="roadtrip">View</a>';
        
 
//           <div class="card mb-4 shadow-sm">
//            <img width="100%" height="100%" src="images/thumb/25666t.jpg"/>
//            <div class="card-body">
//              <p class="card-text">Walk to the water, sit and watch the clouds rise. 行到水穷处，坐看云起时</p>
//              <div class="d-flex justify-content-between align-items-center">
//                <div class="btn-group">
//                    <button type="button" class="btn btn-sm btn-outline-secondary"><a href="images/full/25666.jpg">View</a></button>
//                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                </div>
//                <small class="text-muted">9 mins</small>
//              </div>
//            </div>
        var renderCard = '<div class="col-md-4"><div class="card mb-4 shadow-sm">'+renderThumbImg+'<div class="card-body">'+renderType + renderStyle + renderTitle+renderTexts+'<div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary">'+renderLink+'</button></div><small class="text-muted">  </small></div></div></div>'
    
        games1.append(renderCard)

        
    }