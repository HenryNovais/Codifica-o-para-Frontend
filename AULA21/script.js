const API_KEY = 'live_9UTHV3ZY0sHefntiRU7ZsPQS1zdPdVrS924uUtpef9hLn4Ppe0CtCHhTk1VahZhg';
    const BASE_URL = 'https://api.thedogapi.com/v1';

    let currentImage = {};
    const favs = [];

    function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      if (id === 'favs') displayFavs();
    }

    async function loadDog() {
      const res = await fetch(`${BASE_URL}/images/search`, {
        headers: { 'x-api-key': API_KEY }
      });
      const data = await res.json();
      currentImage = data[0];
      document.getElementById('dogImage').src = currentImage.url;
    }

    async function vote(value) {
      await fetch(`${BASE_URL}/votes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify({
          image_id: currentImage.id,
          value: value
        })
      });
      loadDog();
    }

    function favorite() {
      favs.push(currentImage);
      loadDog();
    }

    function displayFavs() {
      const favGrid = document.getElementById('favGrid');
      favGrid.innerHTML = '';
      favs.forEach(img => {
        const el = document.createElement('img');
        el.src = img.url;
        favGrid.appendChild(el);
      });
    }

    async function loadBreedsList() {
      const res = await fetch(`${BASE_URL}/breeds`, {
        headers: { 'x-api-key': API_KEY }
      });
      const breeds = await res.json();
      const select = document.getElementById('breedSelect');
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        select.appendChild(option);
      });
    }

    async function searchBreedBySelect() {
      const breedId = document.getElementById('breedSelect').value;
      if (!breedId) return;

      const res = await fetch(`${BASE_URL}/images/search?breed_id=${breedId}&limit=5`, {
        headers: { 'x-api-key': API_KEY }
      });
      const images = await res.json();
      const resultDiv = document.getElementById('breedResult');
      resultDiv.innerHTML = '';
      images.forEach(img => {
        const el = document.createElement('img');
        el.src = img.url;
        resultDiv.appendChild(el);
      });
    }

    loadDog();
    loadBreedsList();