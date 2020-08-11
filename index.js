const itemWrapp = document.getElementById('itemWrapp')
const url = './items.json'

fetch(url)
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    //console.log(data);

    for (let i = 0; i < data.length; i++) {
      var card = `<div class="card">
                      <a href="#">
                        <img src="${data[i].img}" alt="${data[i].title}">
                        <div class="text">
                          <div class="title">
                            <span>${data[i].title}</span>
                            <p>${data[i].desc}</p>
                          </div>
                          <div class="price">${data[i].price}.00$</div>
                        </div>
                      </a>
                    </div>`;

      
      if (data[i].value === 0) {
        card = `<div class="card">
                  <a href="#">
                    <img src="${data[i].img}" alt="${data[i].title}">
                    <div class="text">
                      <div class="title">
                        <span>${data[i].title}</span>
                        <p>${data[i].desc}</p>
                        <div class="nAvailable">Not available</div>
                      </div>
                    </div>
                  </a>
                </div>`;
      }

      itemWrapp.innerHTML += card;
    }
  })
  .catch(function() {
    console.log("error");
  })
