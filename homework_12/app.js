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
    details.id = "details_id";
    details.className = "details_class";
    caption.appendChild(details);

    if (element.children) {
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

