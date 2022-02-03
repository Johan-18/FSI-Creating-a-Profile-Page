let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div');
dogContent.setAttribute('class', 'dog-content');

let dogImage = document.createElement('img');
dogImage.setAttribute('class', 'dog-image');
dogImage.setAttribute('src', './assets/rizzo.jpg');


let dogDetails = document.createElement('div');
dogDetails.setAttribute('class', 'dog-details');


let dogDetails_description = document.createElement('h3');
dogDetails_description.append('Description:');

dogDetails.append(dogDetails_description);



let dogDetails_p = document.createElement('p');
dogDetails_p.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")

dogDetails.append(dogDetails_p);


let dogDetails_times = document.createElement('h3');
dogDetails_times.append('Feeding Times:');

dogDetails.append(dogDetails_times);



let dogDetails_list = document.createElement('ul');
let list_900 = document.createElement('li');
list_900.append('9:00 am');
let list_1200 = document.createElement('li');
list_1200.append('12:00 pm');
let list_500 = document.createElement('li');
list_500.append('5:00 pm');

dogDetails_list.appendChild(list_900);
dogDetails_list.appendChild(list_1200);
dogDetails_list.appendChild(list_500);

dogDetails.append(dogDetails_list);

dogContent.append(dogImage);
dogContent.append(dogDetails);
content.append(dogContent);