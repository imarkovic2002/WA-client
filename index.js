const axios = require('axios');
const { response } = require('express');
const port = 3000;
const dataServiceBaseUrl = `http://127.0.0.1:${port}`;

function getMovie() {
	//obican
	axios.get(dataServiceBaseUrl + '/api/movie')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { debugger; console.error('Error: ', error) });
}

function getMovieById() {
	//request params
	axios.get(dataServiceBaseUrl + '/api/movie/1')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

function getMovieByRatingOrName() {
	//with query params
	const rating = 8;
	const name = 'Pulp Fiction';
	axios.get(dataServiceBaseUrl + `/api/movie?rating=${rating}&name=${name}`)
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

function wontGetAnythingJustForShow() {
	//s ekstra headerima
	const config = {
		headers: {
			'Authorization': 'Bearer YourAuthToken',
			'Accept': 'application/json',
		},
	};
	axios.get(dataServiceBaseUrl + '/api', config)
		.then(response => { console.log('Success:', response.data) })
		.catch(error => { console.error('Error:', error) });
}

//POST REQUEST
function addMovie() {
	const postData = {
        id: 11,
        title: 'Forrest Gump',
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}

//PUT REQUEST
function changeMovieInfo() {
	const updatedMovieData = {
        id: 1,
        title: 'The Shawshank Redemption',
        genres: ['Drama'],
        year: 1994,
        rating: 9.5
    };
	  
	axios.put(dataServiceBaseUrl + '/api/movie/1', updatedMovieData)
		.then(response => { debugger; console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//PATCH REQUEST
function changePartOfMovieInfo() {
	const partialMovieData = {
		rating: 9.6
	};

	axios.patch(dataServiceBaseUrl + '/api/movie/1', partialMovieData)
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//DELETE REQUEST
function deleteMovie() {
	axios.delete(dataServiceBaseUrl + '/api/movie/1')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}






//                      3. Vježbe           //

// 1. zadatak -> Dodati novi film
function addMovie() {
	const postData = {
        id: 15,
        title: 'The Hangover',
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}
//addMovie();


// 2. Zadatak -> Dohvatiti sve filmove
//getMovie();


// 3. Zadatak -> Promijeniti ime novog filma
function changePartOfMovieInfo() {
	const partialMovieData = {
		title: 'Mamurluk'
	};

	axios.patch(dataServiceBaseUrl + '/api/movie/15', partialMovieData)
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//changeMovieInfo();


// 4. Zadatak -> Dohvatiti ponovno sve filmove

//getMovie();







///////////////////////////			4. vježbe 			////////////////////


// 1. Zadatak -> Dodati funkcionalnost koja briše filmove. Input je lista id-eva.
 function deleteMovies(ids) {
   ids.forEach((id) => {
     axios
       .delete(dataServiceBaseUrl + "/api/movie/" + id)
       .then((response) => {
         console.log("Success: ", response.data);
       })
       .catch((error) => {
         console.error("Error: ", error);
       });
   });
 }

 const arrayId = [1,2,3];
 //deleteMovies(arrayId);
 //getMovie();


 // 2. Zadatak -> Dodati funkcionalnost koja računa prosječnu vrijenost ratinga
 function calculateAverageRating(){
    axios
    .get(dataServiceBaseUrl + '/api/movie') 
    .then((response) => {
        const movies = response.data;
        if(movies.length === 0){
            console.log("Nema filmova u bazi.");
        }

        const totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
        const averageRating = totalRating / movies.length;
        console.log("Prosječna ocjena je:", averageRating) 


    }).catch((err) => {
        console.log("Greška pri očitavanju filmova iz baze", err)
    });
 }

 calculateAverageRating();




 //////////////////////////////// MOJI ZADACI /////////////////////////
//1. Zadatak (smislio ja) -> Napravi funkcionalnost koja ispisuje samo imena svih filmova koje imaš u bazi
    function getMoviesName(){
    axios
    .get(dataServiceBaseUrl + "/api/movie-names")
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
    }

//getMoviesName();


// 2. Zadatak -> Dodati funkcionalnost koja filtrira filmove koji su stariji od 2005 godine 
function olderMovies(){
    axios
    .get(dataServiceBaseUrl + '/api/older-movie')
    .then((response) => {
        console.log("Stariji filmove od 2005. su: ");
        console.log(response.data);
    })
    .catch((err) => {
        console.log("Error: ", err);
    });
}

olderMovies();