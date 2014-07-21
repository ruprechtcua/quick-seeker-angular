'use strict';

describe('Test Seek Directive', function() {
    var $compile,
        $rootScope,
        template,
        httpBackend;

    // Load the myApp module, which contains the directive
    beforeEach(function(){
        module('seeker','app/views/posting.html');
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function($templateCache, $httpBackend, _$compile_, _$rootScope_){
      //assign the template to the expected url called by the directive and put it in the cache
      template = $templateCache.get('app/views/posting.html');
      $templateCache.put('views/posting.html',template);
      httpBackend = $httpBackend;
      httpBackend.whenJSONP('https://api.seek.com.au/v2/jobs/search?&callback=JSON_CALLBACK&classification=6281&dateRange=999&graduateSearch=false&isAreaUnspecified=false&keywords=front&location=3106&page=1&salaryRange=0-999999&salaryType=annual&sortMode=ListedDate&subclassification=')
        .respond({ title:'abc', data:[{id:2692963,title:'abc'},{id:26929688,title:'abc'},{id:26929633,title:'abc'}] });

      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Check Seek Element count 3', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile(angular.element('<seek count=\"20\" keywords=\"front\" classification="6281" location="3106"></seek>'))($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();

        httpBackend.flush();

        expect(element.find('.seek-element').length).toBe(3);
    });

    it('Check Seek Element count 1', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile(angular.element('<seek count=\"1\" keywords=\"front\" classification="6281" location="3106"></seek>'))($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();

        httpBackend.flush();

        expect(element.find('.seek-element').length).toBe(1);
    });
});