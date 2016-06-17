/**
 * MovieDataService
 * Fetches movie information based on the search term that is a full movie name.
 * http://www.omdbapi.com/
 */
(function() {

  angular
    .module( "app" )
    .factory( "MovieDataService", MovieDataService );

  MovieDataService.$inject = [
    "$http",
    "$q"
  ];
  function MovieDataService( $http, $q ) {

    var service = {

      getData: getData

    };
    return service;


    /**
     * Make a GET request to the Open Movie Database for a movie data.
     * @param  title  A search key.
     * @return A promise of this GET request.
     */
    function getData( title ) {

      // Creates a Deferred object which represents a task which will finish in the future.
      // https://docs.angularjs.org/api/ng/service/$q
      var deferred = $q.defer();
      var url      = "http://www.omdbapi.com/?plot=full&t=" + title;

      $http.get( url )
        .then(
          function(response) {
            // NOTE: response.data is an object of movie data.
            deferred.resolve( response.data );
          }
        ) // end then
        .catch(
          function(reason) {
            deferred.reject( "Error fetching movie data: " + reason );
          }
        ); // end catch

      return deferred.promise;

    };

  } // end MovieDataService

})();
