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
    var box = document.createElement('div');
    box.id = "box";
    page.appendChild(box);

    var preview = document.createElement('img');
    preview.className = "preview_class";
    preview.src = element.preview;
    box.appendChild(preview);

    var caption = document.createElement('caption');
    caption.className = "caption_class";
    box.appendChild(caption);

    var country_image = document.createElement('img');
    country_image.id = "country_image_id";
    country_image.className = "country_image_class";
    country_image.src = element.country_image;
    caption.appendChild(country_image);

    var level = document.createElement('div');
    level.className = "level";
    level.innerHTML = element.level;
    caption.appendChild(level);

    var model = document.createElement('div');
    model.innerHTML = element.model;
    caption.appendChild(model);
    model.className = "model_class";

    var country = document.createElement('div');
    country.innerHTML = element.country;
    country.className = "country_class";
    caption.appendChild(country);


    var details = document.createElement('div');
    details.className = "details_class";
    caption.appendChild(details);

    var table = document.createElement('table');
    table.className = "table_class";
    table.innerHTML = "Characteristics";
    details.appendChild(table);

    var damageR = document.createElement('tr');
    table.appendChild(damageR);

    var damageC = document.createElement('td');
    damageR.appendChild(damageC);
    damageC.innerHTML = "damage";
    var damage = document.createElement('td');
    damageR.appendChild(damage);
    damage.innerHTML = element.details.damage;

    var breoningR = document.createElement('tr');
    table.appendChild(breoningR);
    var breoningC = document.createElement('td');
    breoningR.appendChild(breoningC);
    breoningC.innerHTML = "breoning";
    var breoning = document.createElement('td');
    breoningR.appendChild(breoning);
    breoning.innerHTML = element.details.breoning;

    var attack_speedR = document.createElement('tr');
    table.appendChild(attack_speedR);
    var attack_speedC = document.createElement('td');
    attack_speedR.appendChild(attack_speedC);
    attack_speedC.innerHTML = "attack speed";
    var attack_speed = document.createElement('td');
    attack_speedR.appendChild(attack_speed);
    attack_speed.innerHTML = element.details.attack_speed;

    var time_of_targetingR = document.createElement('tr');
    table.appendChild(time_of_targetingR);
    var time_of_targetingC = document.createElement('td');
    time_of_targetingR.appendChild(time_of_targetingC);
    time_of_targetingC.innerHTML = "time of targeting";
    var time_of_targeting = document.createElement('td');
    time_of_targetingR.appendChild(time_of_targeting);
    time_of_targeting.innerHTML = element.details.time_of_targeting;

    var ammunitionR = document.createElement('tr');
    table.appendChild(ammunitionR);
    var ammunitionC = document.createElement('td');
    ammunitionR.appendChild(ammunitionC);
    ammunitionC.innerHTML = "ammunition";
    var ammunition = document.createElement('td');
    ammunitionR.appendChild(ammunition);
    ammunition.innerHTML = element.details.ammunition;
});

/*Open Details page
  
  var list = document.getElementsByClassName("preview_class");
  for (var i = 0; i < list.length; i++) {
   list[i].addEventListener('click', function(e) {
    window.location.href = '/details.html';
}, false);
};
*/
