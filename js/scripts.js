const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

const heading = document.createElement('h2');
 heading.textContent = "Channels";

app.appendChild(heading);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ancient-escarpment-55482.herokuapp.com/api/show_channels', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(channel => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      //const x = "Channel name";
       const h1 = document.createElement('h1');
       h1.textContent = channel["Channel name"];

       const p1 = document.createElement('p');
        p1.textContent = "Grade:  "+channel.Grade;

       const p2 = document.createElement('p');
       p2.textContent = "No. of videos uploaded  "+channel["Video Uploads"];

      

      const p3 = document.createElement('p');
      p3.textContent = "No. of subscribers  "+channel["Subscribers"];

      const p4 = document.createElement('p');
      p4.textContent = "No. of video views "+channel["Video views"];


      	var createA = document.createElement('a');
      	createA.setAttribute('onClick', "sessionStorage.setItem('cid', "+"'"+channel._id+"'"+")");
      	
        var createAText = document.createTextNode("more");
        createA.setAttribute('href', "./article.html");
        createA.appendChild(createAText);
        p4.appendChild(createA);

      container.appendChild(card);
       card.appendChild(h1);
       card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
       card.appendChild(p4);
      //card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();