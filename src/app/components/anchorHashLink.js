/**
 * anchorHashLink
 *
 *  USAGE
 *  1. Inject this to the app module.
 *
 *  2.
 *    <!-- Link to top of this article -->
 *    <a
 *      ng-show="vm.isVisible"
 *      ng-click="jumpTo( vm.topId )"
 *      anchor-hash-link>
 *      [Top]
 *    </a>
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .directive( "anchorHashLink", anchorHashLinkDirective );

  function anchorHashLinkDirective() {

    var directive = {
      restrict: "A",
      controller: AnchorHashLinkController
    };

    return directive;

  } // end anchorHashLinkDirective


  angular
    .module( "app" )
    .controller( "AnchorHashLinkController", AnchorHashLinkController );

  AnchorHashLinkController.$inject = [
    "$scope",
    "$location",
    "$anchorScroll"
  ];
  function AnchorHashLinkController( $scope, $location, $anchorScroll ) {

    $scope.jumpTo = jumpTo;

    /**
     * Scroll to the element with the specified id.
     * @param  id The id to which we want to link the element.
     */
    function jumpTo( id ) {

      // Remember original location hash.
      var originalHash = $location.hash();

      // Change hashes to one based on specified element ID and
      // jump to that location.
      // https://docs.angularjs.org/api/ng/service/$anchorScroll
      $location.hash( id );
      $anchorScroll();

      // Reset to the original location hash.
      $location.hash( originalHash );

    }

  } // end AnchorHashLinkController

})();
