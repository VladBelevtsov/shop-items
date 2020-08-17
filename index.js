const itemWrapp = document.getElementById('itemWrapp')
const url = './items.json'

const sort_low_btn = document.querySelector('.sort-low-high')
const sort_high_btn = document.querySelector('.sort-high-low')



fetch(url)
  .then(function(resp) { return resp.json() })
  .then(function(data) {
  

    function buildPage(db) {
      for (let i = 0; i < db.length; i++) {
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
    }

    buildPage(data);

    const sortBaseLow = function sorted(a, b) {
      return a.price - b.price;
    }

    const sortBaseHigh = function sorted(a, b) {
      return b.price - a.price;
    }

    sort_low_btn.addEventListener('click', function() {
      itemWrapp.innerHTML = null;
      data.sort(sortBaseLow)
      buildPage(data)
    })

    sort_high_btn.addEventListener('click', function() {
      itemWrapp.innerHTML = null;
      data.sort(sortBaseHigh)
      buildPage(data)
    })

  })
  .catch(function() {
    console.log("error");
  })
