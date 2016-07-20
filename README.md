### 01-into-and-setup
1. Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
  * The jobs in Angular 1 out-number jobs for all other frameworks.
2. People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
  * One it's Slow - the 2 way data binding far less speedy than other options. Two, it's complex - difficult to learn, learning about services, directives, factories, injection, and all of the abstractions. Three, Angular 2.0 is completely different - full redesign.
3. Is Angular an MVC framework?
  * Yes, but it leans towards MVVM (model, view, view model)
4. Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
  * The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the or tags. Only one AngularJS application can be auto-bootstrapped per HTML document. NG stands for Angular.

### 02-data-binding
1. What does ng-model do?
  * The ngModel directive binds an input , select , textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive. ngModel is responsible for: Binding the view into the model, which other directives such as input , textarea or select require.
2. What is "dirty checking"?
  * Dirty checking is a relatively efficient approach to checking for changes on a model. Every time there could be a potential change, Angular will do a dirty check inside its event loop to ensure everything is consistent.
3. Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
  * Using `ng-init="selectedModel.title = ''"`
4. What are those {{ }} expressions? Are they Handlebars?
  * The double curly brace notation {{ }} are used to bind expressions to elements is built-in Angular markup.
5. Explain what two-way data binding is.
  * Data-binding in Angular apps is the automatic synchronization of data between the model and view components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.
6. BONUS: Research the $digest loop

### 03-angular-MVC
  * This chapter explains model, view, controller and their relationships. No questions.

### 04-expressions-and-filters
1. What are Angular expressions? How do they compare to tags from templating engines you've used before?
  * Angular expressions are JavaScript-like code snippets that are mainly placed in interpolation bindings such as <span title="{{ attrBinding }}">{{ textBinding }}</span>, but also used directly in directive attributes such as ng-click="functionExpression()".
  For example, these are valid expressions in Angular:
  - 1+2
  - a+b
  - user.name
  - items[index]
2. What happens when you write invalid code in an expression? What type of error do you get?
  * Seems like it depends.. Sometimes all the brackets show up all over the page wherever I have them, I got an angular.js:13708Error: [$parse:lexerr] once.. One time nothing at all showed up.
3. What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
  * They filter your angular expressions for the view.. Filter, currency, number, date, json, lowercase, uppercase, limitTo, orderBy.
4. What's the syntax for filters?
  * {{ expression | filter }}
5. Can you use more than one filter?
  * Yes, it's called chaining and the syntax is {{ expression | filter1 | filter2 | ... }}
6. We'll soon see how to create custom filters. What is a use case for a custom filter?
  * If you need to write you own function it should be pure as apposed to stateful which are less performant. At that point you could use your filter for anything you'd like

### 05-built-in-directives
1. What is the purpose of ng-init?
  * Used to initialize values on a scope, however controllers should be used instead
2. Why use ng-src and ng-href?
  * They wait for AngularJS to load before before filling up their respective values. This makes sure that no null image request is sent or empty link displayed
3. What are directives?
  * AngularJS directives are extended HTML attributes with the prefix ng- . The ng-app directive initializes an AngularJS application. The ng-init directive initializes application data. The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
4. Does ng-class require an object to be passed in?
  * No, there is map syntax {} and array syntax [].
5. What order does an ng-repeat display items in?
  * I believe it defaults to the order they are in the array and then you can specify with orderBy.
6. How does ng-repeat handle duplicate data?
  * The default tracking function (which tracks items by their identity) does not allow duplicate items in arrays. This is because when there are duplicates, it is not possible to maintain a one-to-one mapping between collection items and DOM elements.
  If you do need to repeat duplicate items, you can substitute the default tracking behavior with your own using the track by expression.
  For example, you may track items by the index of each item in the collection, using the special scope property $index.
7. What does ng-cloak directive do?
  * The ngCloak directive is used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display.
8. What does ng-include do?
  * Fetches, compiles and includes an external HTML fragment.
  By default, the template URL is restricted to the same domain and protocol as the application document. This is done by calling $sce.getTrustedResourceUrl on it. To load templates from other domains or protocols you may either whitelist them or wrap them as trusted values. Refer to Angular's Strict Contextual Escaping.
  In addition, the browser's Same Origin Policy and Cross-Origin Resource Sharing (CORS) policy may further restrict whether the template is successfully loaded. For example, ngInclude won't work for cross-domain requests on all browsers and for file:// access on some browsers.
9. What does ng-pluralize do?
   * ngPluralize is a directive that displays messages according to en-US localization rules. These rules are bundled with angular.js, but can be overridden (see Angular i18n dev guide). You configure ngPluralize directive by specifying the mappings between plural categories and the strings to be displayed.
### 06-into-to-controllers
1. What is $scope?
  * $scope is the link between your view and controller. Any property that the html evaluates is evaluated on a particular scope. For eg. When you write {{name}}, Angular searches for name property in the corresponding scope.
2. What are Angular modules? What's the syntax for defining a module?
  * You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc. A module is a collection of services, directives, controllers, filters, and configuration information. angular.module is used to configure the $injector. Example of syntax is `var myModule = angular.module('myModule', []);`
3. Why do we pass in $scope as an argument to controller functions?
  * It's clearer what parameters the function expects.
  It's easier to unit-test because all parameters are injected into the function.(good for unit-testing)
4. In Express, what are Angular controllers most analogous to?
  * They sort of remind me of routes? You pass a first argument in to match to then a higher-order/callback with things to do inside of them
### 07-into-to-scope
1. What is $rootScope?
  * Every application has a single root scope. All other scopes are descendant scopes of the root scope. Scopes provide separation between the model and the view, via a mechanism for watching the model for changes. They also provide event emission/broadcast and subscription facility.
2. Explain how $scope is passed from a parent to child controller
  * https://rclayton.silvrback.com/parent-child-controller-communication
3. List five built in directives that create their own scope
  * By default a directive shares whatever scope was defined above it. This is great link too http://codetunnel.io/isolate-scopes-explained/
4. "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what         does this mean?
  * https://github.com/angular/angular.js/wiki/Understanding-Scopes
### 08-intro-to-events
  * No questions
### 09-form-validation
1. When does a form/input have a property of $valid? What class accompanies this property?
  * True if all of the containing forms and controls are valid.
2. When does a form/input have a property of $invalid? What class accompanies this property?
  * True if at least one containing control or form is invalid.
3. When does a form/input have a property of $pristine? What class accompanies this property?
  * {boolean} $pristine True if user has not interacted with the form yet.
4. When does a form/input have a property of $dirty? What class accompanies this property?
  * {boolean} $dirty True if user has already interacted with the form.
5. When does a form/input have a property of $touched? What class accompanies this property?
  * {boolean} $touched True if control has lost focus.
6. More on touched/untouched and pristine/dirty
  * $pristine/$dirty tells you whether the user actually changed anything, while $touched/$untouched tells you whether the user has merely been there/visited.
  This is really useful for validation. The reason for $dirty was always to avoid showing validation responses until the user has actually visited a certain control. But, by using only the $dirty property, the user wouldn't get validation feedback unless they actually altered the value. So, an $invalid field still wouldn't show the user a prompt if the user didn't change/interact with the value. If the user entirely ignored a required field, everything looked OK.
7. What does blurred mean? (research the blur event)
  * Blurred is after you click into an input and leave it.
### 10-animation
1. What is ng-animate? What does it do for us? What does it not to for us?
  * The ngAnimate module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via callback hooks. Animations are not enabled by default, however, by including ngAnimate the animation hooks are enabled for an Angular app.
2. What is the difference between the .ng-enter and .ng-enter-active classes?
  * For CSS transitions, the transition code must be defined within the starting CSS class (in this case .ng-enter). The destination class is what the transition will animate towards. If for example we wanted to create animations for leave and move (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
  `.fade.ng-leave {
      transition:0.5s linear all;
      opacity:1;
    }
    .fade.ng-leave.ng-leave-active {
      opacity:0;
    }`
3. What is a staggered animation?
  * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be performed by creating a ng-EVENT-stagger CSS class and attaching that class to the base CSS class used for the animation. The style property expected within the stagger class can either be a transition-delay or an animation-delay property (or both if your animation contains both transitions and keyframe animations).Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation will also be reset if one or more animation frames have passed since the multiple calls to $animate were fired.
4. What is animate.css?
  * Animate.css is to transitions what Bootstrap is to layout, which means it comes with a number of pre-built and easy to use styles. Animate uses keyframe animations. which specify the start, end, and in-between points of what an element should look like, and although Animate is not tied to Angular, keyframes make Angular animations easier because there is no need to specify the “preparation” phase. Also, complicated animations roll up into a single keyframe name.
