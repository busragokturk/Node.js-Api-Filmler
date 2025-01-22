const addFilmForm = document.getElementById('addFilmForm');
const filmList = document.getElementById('filmList');

// Film Ekleme
addFilmForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const filmNameInput = document.getElementById('filmName');
  const filmName = filmNameInput.value;

  if (filmName) {
    addFilmToList(filmName);
    filmNameInput.value = '';
  }
});

// Listeye Film Ekleme Fonksiyonu
function addFilmToList(filmName) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${filmName}</span>
    <div>
      <button onclick="deleteFilm(this)">Sil</button>
      <button onclick="updateFilm(this)">Güncelle</button>
    </div>
  `;
  filmList.appendChild(li);
}

// Film Silme
function deleteFilm(button) {
  const li = button.parentElement.parentElement;
  filmList.removeChild(li);
}

// Film Güncelleme
function updateFilm(button) {
  const li = button.parentElement.parentElement;
  const filmName = li.querySelector('span').textContent;

  const newFilmName = prompt('Yeni film adını girin:', filmName);
  if (newFilmName) {
    li.querySelector('span').textContent = newFilmName;
  }
}
