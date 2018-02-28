var rootNode = document.getElementById("root");

var page = document.createElement("div");
page.setAttribute("class", "page");
rootNode.appendChild(page);

        var header = document.createElement('header');
		page.appendChild(header);
        var logo = document.createElement('h1');
		logo.setAttribute("class", "logo");
		header.appendChild(logo);
        var logoText = document.createTextNode('Most popular tanks');
        logo.appendChild(logoText);
    


  tanks.forEach(function(element) {
     var model = document.createElement('div');
     model.innerHTML = element.model;
     rootNode.appendChild(model);


     var preview = document.createElement('img');
     preview.id = "id";
     preview.className = "class";
     preview.src = element.preview;
     rootNode.appendChild(preview);

     var country = document.createElement('div');
     country.innerHTML = element.country;
     rootNode.appendChild(country);

	 var country_image = document.createElement('img');
	 country_image.id = "id";
     country_image.className = "class";
     country_image.src = element.country_image;
     rootNode.appendChild(country_image);


	 var level = document.createElement('div');
	 level.innerHTML = element.level;
	 rootNode.appendChild(level);

	 var details = document.createElement('div');
	 details.id = "id";
	 details.className = "class";
	 rootNode.appendChild(details);
     
	 if(element.children){
         details.forEach(function(el) {
            var damage = document.createElement('div');
	        details.appendChild(damage);
	        damage.innerHTML = el.damage;
	        var breoning = document.createElement('div');
	        details.appendChild(breoning);
	        breoning.innerHTML = el.breoning;
	        var attack_speed = document.createElement('div');
	        details.appendChild(attack_speed);
	        attack_speed.innerHTML = el.attack_speed;
	        var time_of_targeting = document.createElement('div');
	        details.appendChild(time_of_targeting);
	        time_of_targeting.innerHTML = el.time_of_targeting;
	        var ammunition = document.createElement('div');
	        details.appendChild(ammunition);
	        ammunition.innerHTML = el.ammunition;
        });

        }
	 
  });
    
 

