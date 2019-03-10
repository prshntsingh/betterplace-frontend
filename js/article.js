const app = document.getElementById('root2');


const container = document.createElement('div');
container.setAttribute('class', 'container');

var cid = sessionStorage.getItem("cid");
//mid = mid.toString();
console.log(cid);

var request = new XMLHttpRequest();
request.open('GET', 'https://ancient-escarpment-55482.herokuapp.com/api/show_channel/'+cid, true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
   
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      //const x = "Channel name";
       const h1 = document.createElement('h2');
       h1.textContent = data[0]["Channel name"];

       const p1 = document.createElement('p');
        p1.textContent = "This channel belongs to the grade "+data[0].Grade + " of youtube";

       const p2 = document.createElement('p');
       p2.textContent = "Total number of videos uploaded on this channel is "+data[0]["Video Uploads"] +" till date";

      

      const p3 = document.createElement('p');
      p3.textContent = "Number of subscribers this channel has is "+data[0]["Subscribers"]+" ,this number is increasing even at this moment";

      const p4 = document.createElement('p');
      p4.textContent = "Total number of views this channel has got till date is "+data[0]["Video views"];


    app.appendChild(h1);
    app.appendChild(container);
      container.appendChild(card);
       //card.appendChild(h1);
       card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
       card.appendChild(p4);
      //card.appendChild(p);
  } 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();