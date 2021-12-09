var year = document.querySelectorAll(".tab#All h1");
if(year){
      for(var i=0;i<year.length;i++){
        var yr = year[i].innerText.split("-")[0].trim();
        var dt = year[i].innerText.split("-")[1].trim();
        var version = year[i].nextElementSibling.nextElementSibling.innerText;
        var vid = year[i].nextElementSibling.getAttribute("id");
        var present = document.querySelectorAll(`#year${yr}`);
        if(present.length == 0){
          var node = `
            <div class="time-line" id="year${yr}">
              <div class="timeline-block" onclick="openTimeline(${yr})";>
                <div class="timeline-right-icon"></div>
                <p class="year">${yr}</p>
              </div>
              <div class="hide-timeline version-block" id="#${vid}">
                <div class="timeline-round-icon"></div>
                <div>
                  <p class="date">${dt}</p>
                  <a href="#${vid}" class="version">${version}</a>
                </div>
              </div>
            </div>
          `;
          document.getElementById("timelines").innerHTML += node;
        }else{
          document.querySelector(`#year${yr}.time-line`).innerHTML += `
              <div class="hide-timeline version-block" id="#${vid}">
                <div class="timeline-round-icon"></div>
                <div>
                  <p class="date">${dt}</p>
                  <a href="#${vid}" class="version">${version}</a>
                </div>
              </div>
          `;
        }
      }    
}   
	
function openTimeline(yr){
    document.getElementById(`year${yr}`).classList.toggle("open-timeline");
}


$(document).ready(function(){
	var sectionIds = $('a');
	$(document).scroll(function(){
		sectionIds.each(function(){
			var container = $(this).attr('href');
			var containerOffset = $(container).offset().top;
			var containerHeight = $(container).outerHeight();
	    	var containerBottom = containerOffset + containerHeight;
			var scrollPosition = $(document).scrollTop();
			if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
					
			} 
		});
	});
});