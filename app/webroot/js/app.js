(function(){
	var app = angular.module('home', ['ngRoute']);

	app.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.when('/', {
			controller: 'HomeController',
			templateUrl: '/templates/home.html'
		}).when('/about-us/', {
			controller: 'AboutController',
			templateUrl: '/templates/partial.html'
		}).when('/our-impact/', {
			controller: 'XhrController',
			templateUrl: '/templates/partial.html'
		}).when('/get-involved/', {
			controller: 'XhrController',
			templateUrl: '/templates/partial.html'
		}).when('/get-involved/:slug', {
			controller: 'XhrController',
			templateUrl: '/templates/partial.html'
		}).when('/resources/', {
			controller: 'XhrController',
			templateUrl: '/templates/partial.html'
		}).when('/contact-us/', {
			controller: 'XhrController',
			templateUrl: '/templates/partial.html'
		})
	});



	app.directive('imageGallery',function() {
		return {
			restrict: 'E',
			templateUrl: '/templates/image-gallery.html'
		};
	});

	app.directive('boardMembers' , function($compile) {
		var openRow = "<div class='row'>";
		var closeRow = "teatedfs";
		return {
			restrict: 'E',
			templateUrl: '/templates/board-members.html'
		};
	});

	app.directive('rail', function() {
		return {
			restrict: 'E',
			templateUrl: '/templates/rail.html'
		};
	});

	app.controller('MainController', [ '$http','$sce','$scope', function($http, $sce, $scope) {
		$scope.fullPathName = window.location.pathname;
		$scope.pathArray = $scope.fullPathName.split('/');
		$scope.pathArray[1] == "" ? $('.navbar-nav').find('[href="/"]').addClass('active') : $('.navbar-nav').find('[href='+'"/' +$scope.pathArray[1]+'/"'+']').addClass('active');
		$('body').on('click','a:not(.soc-twitter,.soc-facebook,.soc-google,.soc-linkedin)', function(){
			var $nav = $('.navbar-nav');
			var $href = $(this).attr('href');
			var hrefArray = $href.split('/');
			$nav.find('a').removeClass('active');
			$href == "/" ?  $nav.find('[href="/"]').addClass('active') : $nav.find('[href='+'"/' + hrefArray[1] +'/"'+']').addClass('active');
			$(window).scrollTop(0);
		});

		$('body').on('click','#num', function() {
			var showNum = $('<span>(502)-585-9920</span>');
			$('#showNum').last().append(showNum);
			$('#num').remove();
		});
	 
	 	$('body').on('click','#emailB', function() {
			var showNum = $('<a href="mailto:libbymills@rjlou.org">libbymills@rjlou.org</a>');
			$('#showEmail').last().append(showNum);
			$('#emailB').remove();
		});

		function detectMobile() {
		    if($(window).innerWidth() <= 768) {
		        return true;
		    } else {
		        return false;
		    }
		}

		function isMobile() {
		     var   mn = $(".navHeader");
		        mns = "navbar-fixed-top";
		        mn2 = "navHeader-absolute";
		        li = $(".logoImage");
		        lt = $(".logoText");
		        ls = $(".logoShadow")
		        logoImage = "logoImageScroll";
		        logoText = "logoTextScroll";
		        logoShadow = "logoShadow";
		        absolute = "absolute";
		        hdr = $('.waypoint').position();
		        
		    if(detectMobile() == false) {
		        $(window).scroll(function() {
		            if( $(this).scrollTop() > hdr.top ) {
		                mn.addClass(mns);
		                li.addClass(logoImage);
		                lt.addClass(logoText);
		                ls.removeClass(logoShadow);
		                lt.removeClass(absolute);
		            } else {
		                lt.addClass(absolute);
		                ls.addClass(logoShadow);
		                mn.removeClass(mns);
		                li.removeClass(logoImage);
		                lt.removeClass(logoText);
		          }
		        });
		    } else  {
		        $(window).scroll(function() {

		        });
		    }
		}

		$(window).resize(isMobile);

		$(document).ready(isMobile);

		$(document).ready(function() {
		    $('body').on('click','.soc-twitter,.soc-facebook,.soc-google,.soc-linkedin',function(event) {
		        event.preventDefault();
		        (function() {
		            // link selector and pop-up window size
		            var Config = {
		                Link: "ul.shareThis li a",
		                Width: 500,
		                Height: 500
		            };
		         
		            // add handler links
		            var slink = document.querySelectorAll(Config.Link);
		            for (var a = 0; a < slink.length; a++) {
		                slink[a].onclick = PopupHandler;
		            }
		         
		            // create popup
		            function PopupHandler(e) {
		         
		                e = (e ? e : window.event);
		                var t = (e.target ? e.target : e.srcElement);
		         
		                // popup position
		                var
		                    px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
		                    py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
		         
		                // open popup
		                var popup = window.open(t.href, "social", 
		                    "width="+Config.Width+",height="+Config.Height+
		                    ",left="+px+",top="+py+
		                    ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
		                if (popup) { 
		                    popup.focus();
		                    if (e.preventDefault) e.preventDefault();
		                    e.returnValue = false;
		                }
		                return !!popup;
		            }
		     
		        }());
		        this.click();
		    });
		});

	}]);

	app.controller('HomeController', [ '$http','$sce','$scope', function($http, $sce, $scope) {

		function detectMobile() {
		    if($(window).innerWidth() <= 768) {
		        return true;
		    } else {
		        return false;
		    }
		}

		$('.slideContainer ul.slideList').css('margin-left', "-" + $(window).innerWidth() + "px");

		function moveSlide() {
		    $( "a.control_nextSlide").unbind( "click" );
		    $( "a.control_prevSlide").unbind( "click" );

		    var windowWidth = $(window).innerWidth();
		    $('a.control_nextSlide').on('click', function(event) {
		        $('.slideContainer ul.slideList').animate({
		            left: "-=" + windowWidth
		        }, 1000, function(){
		            $('.slideContainer ul.slideList li.slide:first-child').appendTo('.slideContainer ul.slideList');
		            $('.slideContainer ul.slideList').css('left', '');
		        });
		    });

		    $('a.control_prevSlide').on('click', function(event) {
		    $('.slideContainer ul.slideList').animate({
		            left: "+=" + windowWidth
		        }, 1000, function(){
		            $('.slideContainer ul.slideList li.slide:last-child').prependTo('.slideContainer ul.slideList');
		            $('.slideContainer ul.slideList').css('left', '');
		        });
		    });
		}

		var swipeStart;
		var swipeEnd;

		function startup() {
		  var el = document.querySelector('.slider');
		  //el.addEventListener("touchstart", handleStart, false);
		  //el.addEventListener("touchend", handleEnd, false);
		  console.log("initialized.");
		}

		function handleSwipe() {
		    var windowWidth = $(window).innerWidth();
		    console.log('swipe start is ' + swipeStart);
		    console.log('swipe end is ' + swipeEnd);
		    if((swipeEnd - swipeStart) > 50) {
		        $('.slideContainer ul.slideList').animate({
		            left: "+=" + windowWidth
		        }, 1000, function(){
		            $('.slideContainer ul.slideList li.slide:last-child').prependTo('.slideContainer ul.slideList');
		            $('.slideContainer ul.slideList').css('left', '');
		        });
		    } else if((swipeStart - swipeEnd) > 50){
		         $('.slideContainer ul.slideList').animate({
		            left: "-=" + windowWidth
		        }, 1000, function(){
		            $('.slideContainer ul.slideList li.slide:first-child').appendTo('.slideContainer ul.slideList');
		            $('.slideContainer ul.slideList').css('left', '');
		        });
		    }
		};


		function handleStart(event) {
		    swipeStart = event.changedTouches[0].clientX;
		}

		function handleEnd(event) {
		    swipeEnd = event.changedTouches[0].clientX;
		    handleSwipe();
		}

		$(document).ready(function(){
		    var self = $('.slider .slideContainer ul.slideList');
		    var windowWidth = $(window).innerWidth();

		    $.get("/ajax/allSlides.ctp", function() {
		            }).done(function(response) {
		                $(document).ready(moveSlide);
		$(window).resize(moveSlide);
            $('.slider .slideContainer ul.slideList').append(response);
            if(detectMobile() == true) {
                var sliderHeight = $(window).height() * .60;
                var minSliderHeight = 300;
                $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
                if(sliderHeight> minSliderHeight) {
                    var centerButton = $('a.control_nextSlide').outerHeight() / 2;
                    var buttonHeight = sliderHeight / 2 + 50 - centerButton;
                    $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
                    $('a.control_prevSlide').css("left", 0);
                    $('a.control_nextSlide').css("right", 0);
                } else {
                    var centerButton = $('a.control_nextSlide').outerHeight() / 2;
                    var buttonHeight = minSliderHeight / 2 + 50 - centerButton;
                    $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
                    $('a.control_prevSlide').css("left", 0);
                    $('a.control_nextSlide').css("right", 0);
                }
            } else {
                var sliderHeight = $(window).height() * .80;
                var centerButton = $('a.control_nextSlide').outerHeight() / 2;
                var buttonHeight = sliderHeight / 2 + 85 - centerButton;
                $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
                $('a.control_prevSlide').css("left", 0);
                $('a.control_nextSlide').css("right", 0);
                $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
            }
            $('.slideContainer ul.slideList').css('width', windowWidth * 3 + "px");
            $('.slideContainer ul.slideList li.slide').css('width', windowWidth + "px");
        });

		    //initialize touch events
		    startup();
		});

		$(window).resize(function(){
		    var windowWidth = $(window).innerWidth();
		     $('.slideContainer ul.slideList').css('width', windowWidth * 3 + "px");
		    $('.slideContainer ul.slideList').css('margin-left', "-" + $(window).innerWidth() + "px");
		    $('.slideContainer ul.slideList li.slide').css('width', windowWidth);
		});

		$(window).resize(function() {
		    var sliderHeight = $(window).height() * .60;
		    var minSliderHeight = 300;
		     if(detectMobile() == true) {
		        if(sliderHeight> minSliderHeight) {
		            var centerButton = $('a.control_nextSlide').outerHeight() / 2;
		            var sliderHeight = $(window).height() * .60;
		            var buttonHeight = sliderHeight / 2 + 50 - centerButton;
		            $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
		            $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
		        } else {
		            var centerButton = $('a.control_nextSlide').outerHeight() / 2;
		            var sliderHeight = $(window).height() * .60;
		            var buttonHeight = minSliderHeight / 2 + 50 - centerButton;
		            $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
		            $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
		        }
		    } else {
		        var centerButton = $('a.control_nextSlide').outerHeight() / 2;
		        var sliderHeight = $(window).height() * .80;
		        var buttonHeight = sliderHeight / 2 + 85 - centerButton;
		        $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
		        $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
		    }
		});


		$(document).on({
		    mouseenter: function () {
		        $(this).find('.slideContent').children('.slideText').addClass('flyout');
		        $(this).find('.shareItems').children('.shareThis').removeClass('shareHide');
		        $(this).find('.slideContent').addClass('slideUp');
		        $(this).find('.gradient').addClass('gradient-hover');
		    },
		    mouseleave: function () {
		        $(this).find('.slideContent').children('.slideText').removeClass('flyout');
		         $(this).find('.slideContent').removeClass('slideUp');
		        $(this).find('.shareItems').children('.shareThis').addClass('shareHide');
		        $(this).find('.slideContent2').children('.addthis_sharing_toolbox').addClass('hide');
		        $(this).find('.slideContent3').children('.addthis_sharing_toolbox').addClass('hide');
		        $(this).find('.gradient').removeClass('gradient-hover');
		    }
		},'.slide');

		$(document).on({
		    mouseenter: function () {
		        
		        $(this).find('.slideContent').children('.slideText').addClass('flyout');
		        $(this).find('.mainSlideContent').addClass('mainSlideUp');
		        $(this).find('.shareSlide').addClass('shareSlideUp');
		        
		    },
		    mouseleave: function () {
		        $(this).find('.slideContent').children('.slideText').removeClass('flyout');
		        $(this).find('.mainSlideContent').removeClass('mainSlideUp');
		        $(this).find('.shareSlide').removeClass('shareSlideUp');
		       
		    }
		},'#slider1_container');


		$(document).on ({
		    mouseenter: function() {
		        $(this).find('li').children('a').css('display', '');
		    }

		}, '.sliderShare');
	}]);

	app.controller('RailController', ['$http', function($http){
		var rail = this;

		rail.item = [];
		if(!(sessionStorage.getItem('railObject'))){
			$http({url: 'http://' + window.location.host + '/api/rail/',cache: true,method: 'GET'})
				.success(function(data){
					rail.items = data;
					console.log(rail.items);
					var jsonData = JSON.stringify(data);
					sessionStorage.setItem('railObject', jsonData);
				})
				.error(function(data) {
					console.log(data);
				});
		} else {
			rail.items = JSON.parse(sessionStorage.getItem('railObject'));
		}
	}]);

	app.controller('XhrController',['$scope','$location', '$sce','$http','$compile', function($scope, $location, $sce, $http, $compile) {
		var req = {
			 method: 'GET',
			 url: '/api' + window.location.pathname,
			 headers: {
			   'Accept':  'application/json'
			 }
		}

		$http(req).success(function(response) {

			$scope.template = $sce.trustAsHtml(response.template);
			$('#partial').append($sce.getTrustedHtml($scope.template));
			var dynamic = $compile($('#partial'));
			dynamic($scope);
		});
	}]);

	app.controller('VolunteerController',['$scope', function($scope) {
	    $( "#inputDateOfBirth" ).datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true,
			constrainInput: false,
			yearRange: "-90:+0"
		});
		
		$("#volForm").validate({
			submitHandler: function() {
				event.preventDefault();
				var formData = $('#volForm').serialize();
				submitform(formData);
			},
			rules: {
				inputFirstName: { required: true, letterswithbasicpunc: true },
				inputLastName: { required: true, letterswithbasicpunc: true },
				inputDateOfBirth: {
				  required: true,
				  date: true
				},
				inputPriPhone: { required:true, phoneUS: true },
				inputSkills: {  required: true }

			}
		});

		function submitform(formData) {
			console.log(formData);

			$.ajax({
				type: 'POST',
				url:"/api/get-involved/volunteer",
				data: formData,
				dataType: 'json'
			}).done(function(data) {
				console.log(data);
				validateData(data);
			});

			function validateData(data) {
				if (data.success == true ) {
					getSuccessForm();
				} else {
					alert('An error occured when processing your information.')
				}
			}

			function getSuccessForm() {
				$('#contentContainer .col-md-8').load("/api/get-involved/volunteer-success");
			}
		}
	}]);

	app.controller('AboutController',['$scope','$location', '$sce','$http','$compile', function($scope, $location, $sce, $http, $compile) {
		var req = {
			 method: 'GET',
			 url: '/api/about-us/',
			 headers: {
			   'Accept':  'application/json'
			 }
		}
		$http(req).success(function(response) {

			$scope.template = $sce.trustAsHtml(response.template);
			$('#partial').append($sce.getTrustedHtml($scope.template));
			var dynamic = $compile($('#partial'));
			dynamic($scope);
			
			$scope.lazyLoadImages = function() {
				$("div.lazy").lazy({
			        effect: "fadeIn",
	        		effectTime: 1500,
	        		bind:'event'
			    });
			    $('[data-toggle="popover"]').popover({ trigger: "hover" });
			}


			$scope.trustResource = function(url) {
				return $sce.trustAs('resourceUrl', url);
			}

			$scope.members = [
                {
                    "name": "Judge Dee McDonald",
                    "title": "",
                    "job": "Jefferson County Family Court",
                    "imageUrl": "/images/board/mcdonald-min.jpg",
                    "bio": "Judge Deana “Dee” McDonald was elected to the Jefferson County Circuit Court, Family Division Eight (8), in November 2014.  Prior to that Judge McDonald served as a District Court judge handling all juvenile delinquency cases within Jefferson County. Following graduation from Western Kentucky University she began her career as a social worker for the present Cabinet for Health and Family Services.  While holding that job she returned to school and graduated from the Louisville Brandeis School of Law, Night Division in 1994. She worked as a Prosecutor in the Domestic Violence, Juvenile and Child Support Divisions of the Jefferson County Attorney’s Office, under three different County Attorneys.  She also spent four years with the Cabinet for Health and Family Services as an attorney in Louisville handling Termination of Parental Rights cases and Dependency, Abuse, Neglect cases in Family Court.  Judge McDonald’s entire career has focused on the delivery of services to and for Jefferson County’s children and the families in which they live.  Her career provided a perfect path to her present position as a Family Court Judge."
                },
                {
                    "name": 'Neville Blakemore',
                    "title": '',
                    "job": 'Chairman, Great Northern Building Products, LLC, Louisville, KY',
                    "imageUrl": '/images/board/neville-min.jpg',
                    "bio": "Great Northern is a holding company specializing in niche products for the construction industry.  Previously, Neville started his own consulting company, was the Director of Marketing for an120 attorney law firm in Boston, taught high school history, and worked as a political organizer for a Presidential campaign.  Additionally, Neville serves on the  Louisville Urban League Board, JCTC Foundation Board, Regional Airport Coalition, Rotary Club, Kentucky College of Art & Design Board, Community Foundation of Louisville, Spalding University Board, Local Investment For Transformation, Speed Museum Board of Governors,  Actors Theatre of Louisville Board, and YMCA Safe Place Services Advisory Board.  Neville is married to Jessica Bird, a #1 New York Times bestselling author, and they have a daughter."
                },
                {
                    "name": 'Robert Givens',
                    "title": '',
                    "job": 'President, RPG Consulting LLC',
                    "imageUrl": '/images/board/givens-min.jpg',
                    "bio": "Rob served in the United States Air Force for over 27 years culminating in the rank of Brigadier General.  He led and managed the world's largest aerospace group guiding large, diverse organizations facing complex challenges.  Rob has served as Inspector General, Air Combat Command; Director of Combined Air Operations Center; and Special Assistant for the Chairman of the Joint Chiefs of Staff.  Rob has served on the Board of Directors for Unbridled Eve and the Neighborhood House.  His commitment to bringing his knowledge and skills to help address the issues facing children and families today brought him to work in our community and to Restorative Justice Louisville."
                },
                {
                    "name": 'Steven Jenkins',
                    "title": '',
                    "job": 'Owner, Consulting Dimensions, LLC, Louisville, KY',
                    "imageUrl": '/images/board/jenkins-min.jpg',
                    "bio": "As the owner of Consulting Dimensions, Steven works with small business and non-profit organizations in the development of services that assists and strengthens the programs they offer.  Additionally, Steven provides non-profit board development, strategic visioning, and business planning.  Additionally, Steven is a Youth Worker with YMCA Safe Place Services.  Steven provides intake for youth who need services and shelter, and assists with the supervision of youth in a shelter environment.  He provides life skills and activities that strengthen family and community relations.  Previously, Steven worked as a Church Administrator, Chief Executive Officer for the Greater Stark County Urban League in Ohio, and an Administrative Officer for a marketing company.    "
                },
                {
                    "name": 'Jill Leedom',
                    "title": '',
                    "job": 'Social Intelligence Specialist, Marketing, Yum! Brands – KFC, Louisville, KY',
                    "imageUrl": '/images/board/leedom-min.jpg',
                    "bio": "At KFC, Jill is focused on leading the Coop, KFC’s digital center of excellence, to help drive the organization’s social listening and insights.  Jill joined Yum! in 2012 as an intern on the Technology and Innovation Architecture/Global Systems teams and in 2015 she accepted a position in Yum! Brands’ Social Hive, which helps oversee KFC, Pizza Hut, and Taco Bell globally on social media.  Jill recently graduated from the University of Louisville in May 2015, majoring in Marketing and minoring in CIS.  Prior to RJL, she has volunteered with the Boys and Girls Club, the Special Olympics, and Habitat for Humanity."
                },
                {
                    "name": 'Sean O’Leary',
                    "title": '',
                    "job": 'CEO & Founder, Edj Analytics',
                    "imageUrl": '/images/board/sean-min.jpg',
                    "bio": "Sean is an entrepreneurial leader committed to developing products, geographic markets, and employee growth. Before co-founding Edj Analytics, Sean was the co-founder and former CEO of Genscape, Inc. – a Louisville, Kentucky headquartered organization monitoring real-time power plant output through a proprietary network. O’Leary has been recognized as an Ernst & Young Entrepreneur of the Year honoring entrepreneurial excellence in vision, innovation, courage, and leadership in building and growing successful businesses. In 2010, Genscape was also recognized as the Best Place to Work among small and medium businesses in Kentucky under his leadership. Sean is a member of the Bluegrass Chapter of the Young Presidents Organization (YPO), the University of Louisville College of Business Board of Advisors, and serves on the Board of Trustees for Louisville Collegiate School. O’Leary holds a BBA degree in Finance and Economics from the University of Michigan and is a graduate of the University of Louisville’s first MBA in Entrepreneurship class. He and his wife, Anne, along with their son and two daughters currently reside in Louisville, Kentucky."
                },
                {
                    "name": 'Sharika Hazley',
                    "title": '',
                    'job': 'Senior Operations Manager, Healthcare Recoveries, Healthcare Corporation of America (HCA)- Louisville, KY',
                    'imageUrl': '/images/board/sharika-min.jpeg',
                    'bio': "A long-time Louisville native, Sharika has been with HCA for over 17 years with several promotions and varied experience in Healthcare Recoveries.  Sharika recently earned her certification in Revenue Cycles through the Healthcare Financial Management Association (HFMA).  Sharika is a University of Louisville graduate with a B.S. in Justice Administration.  Her daughter is also a University of Louisville graduate.  Sharika feels passionately about uplifting people through empowerment and community involvement. She enjoys new ideas, reading, walking, and creative writing. Restorative Justice Louisville is Sharika’s first experience with a non-profit Board."
                },
				{
					"name": "Angela McCormick Bisig",
					"title": '',
					"job": 'Chair, Jefferson County Circuit Court',
					"imageUrl": '/images/board/angela-min.jpg',
					"bio": "Judge Bisig has presided over criminal felony cases and civil cases since being elected as Circuit Court judge in 2012.  Previously she served as District Court Judge for 10 years, reviewing civil and criminal dockets.  During her tenure Judge Bisig established a pilot project to review domestic violence cases. Judge Bisig also served as a prosecutor for 7 years, specializing in the prosecution of domestic violence and sex offense cases. Judge Bisig is a member of the Board of the World Affairs Council of Kentucky and Southern Indiana; the American Red Cross; the University of Louisville Overseers; and Sister Cities of Louisville.  She also is a member of the Chief Justice’s Racial Fairness Task Force, and the Disproportionate Minority Confinement Committee of the Jefferson Juvenile Court."
				},
				{
					"name": "Susan H. Duncan",
					"title": 'Non-Voting Emeritus Member',
					"job": 'Interim Dean, Brandeis School of Law at the University of Louisville, Louisville, Kentucky',
					"imageUrl":'/images/board/susan-min.jpg',
					"bio": "Prior to Susan’s appointment as Interim Dean, she served as a professor at the University of Louisville, Spalding University and the Cecil C. Humphreys School of Law at the University of Memphis.  In addition to serving in key law school positions for almost 20 years Susan has authored, edited or reviewed over 36 law journals or publications. Susan has served in key positions for the Legal Writing Institute; the AALS Section on Legal Research, Writing and Analysis; the Kentucky Bar Association; and the Louisville Bar Association. Susan was the Co-Chair of Citizens of Louisville Organized and United Together (CLOUT) Healthcare Research Planning Committee (2007-2008) that addressed children’s healthcare issues. She has also served extensively with St. Agnes Catholic Church and School. "
				},
				{
					"name": "Benjamin J. Lewis",
					"title": '',
					"job": 'Attorney, Bingham Greenebaum Doll LLP, Louisville, KY',
					"imageUrl":'/images/board/ben-min.jpg',
					"bio": "Ben’s legal practice focuses on business litigation, and trust and estate litigation.  Ben was recently named a 2015 Rising Star by the Kentucky Super Lawyers publication.  Ben was drawn to the work of RJL through his interest in local business and politics, and the advancement of the City of Louisville and its citizens.  Ben is a huge fan of Louisville, his adopted hometown, and convinced that the sustained work of RJL will help to reduce some of the unfortunate inequalities that exist amongst its citizens. Ben is married to another local attorney, Danielle J. Lewis.  They recently welcomed their first son, Samuel, into the world.  Beyond the practice of law, Ben enjoys time with his family, riding motorcycles, and performing home improvement projects (poorly)."
				},
				{
					"name": "Steve Mershon",
					"title": 'Non-Voting Emeritus Member',
					"job": 'Retired, Chief Judge of Jefferson Circuit Court, Louisville, KY',
					"imageUrl":'/images/board/steve-min.jpg',
					"bio": "Judge Mershon has 25 years of judicial experience and, now retired, continues to mediate many different types of disputes working with the court system.  In 2004, Judge Mershon was elected Chief Judge of the Jefferson Circuit Term; prior to that he had served a general court docket which included several high profile and death penalty cases.  In his early years on the bench, he was a volunteer for Kentucky's First Family Court, presiding over cases dealing with divorce, child custody, and abuse. Judge Mershon has served the community as a member of the Board of the YWCA Spouse Abuse Center, the Home of the Innocents, the New Directions Housing Corporation, Day Spring, and MB Care.  He was the founding president of the Board of Children First and former treasurer of the Louisville Chapter of the Lawyers Alliance for Nuclear Arms Control."
				},
				{
					"name": "Miguel Mireles",
					"title": '',
					"job": 'Field Director, Lincoln Heritage Council, BSA, Louisville, KY',
					"imageUrl":'/images/board/miguel-min.jpg',
					"bio": "Miguel is the Hispanic Emphasis Director for the Lincoln Heritage Council of the Boy Scouts of America.  Miguel is also involved in many different aspects of the community including the Hispanic Latino Coalition, the Hispanic Latino Business Coalition, the Hombres Unidos, and the Louisville Human Relations Commission of Louisville Metro Government. Miguel additionally assists with many different Youth Development programs including 4-H, Boy Scouts, Boys & Girls Club and the YMCA."
				},
				{
					"name": "Doug Morris",
					"title": '',
					"job": 'Director, Deming, Malone, Livesay & Ostroff (DMLO), Louisville, KY',
					"imageUrl":'/images/board/doug-min.jpg',
					"bio": "At DMLO, Doug is the Co-Chair of the Construction, Manufacturing and Distribution Niches.  Doug has over twenty-five years of experience practicing public accounting in Louisville. He works with clients of all sizes and stages, which includes construction, manufacturing & distribution, equine & horse racing, country club industries, and non-profits. As well as being licensed to practice as a CPA, Doug is approved by the Kentucky Department of Insurance Financial Standards & Examination Division to perform captive insurance audits for closely held businesses. Professional memberships include the American Institute and Kentucky Society of Certified Public Accountants.  Doug is also a member of the Construction Financial Management Association and the Kentucky Captive Association. Doug serves as Treasurer for Fern Creek Christian Church and is on the Board of Harbor House of Louisville. He volunteers with Eastern High School Marching Band and Fern Creek Babe Ruth League."
				},
				{
					"name": "Mike O’Connell",
					"title": 'Non-Voting Ex-Officio Member',
					"job": 'Jefferson County Attorney, Louisville, KY',
					"imageUrl":'/images/board/mikeOConnell-min.jpg',
					"bio": 'Prior to his appointment as Jefferson County Attorney in August 2008, Mike O’Connell has devoted his 33-year career to legal and public service. From 1980 through 1990, Mike presided as district judge in Division 6 of Jefferson District Court and as Jefferson Circuit Court Judge in Division 14. Mike was appointed as Jefferson County Attorney by Mayor Jerry Abramson in August 2008. He has been elected twice to full terms as County Attorney, the latest in November 2014. As Jefferson County Attorney, Mike has been instrumental in the creation of the Restorative Justice Program and the Veterans Treatment Court. Mike is a Louisville native and graduate of Xavier University and the University of Notre Dame Law School. He serves as Chair of the Advisory Board for The Little Sisters of the Poor, President of Kentucky Children’s Home Corporation, and was elected to three terms on the Kentucky Bar Association Board of Governors.'
				}, 
				{
					"name": "Brantley Shumaker",
					"title": '',
					"job": 'Attorney, Middleton Reutlinger, Louisville, Kentucky',
					"imageUrl":'/images/board/brantleyShumaker-min.jpg',
					"bio": "Brantley practices in the Intellectual Property Practice Group at Middleton Reutlinger.  Previously, Brantley practiced intellectual property prosecution, litigation, and counseling at two law firms in Portland, Oregon, mostly in the areas of software, hardware and telecommunications.  While in Oregon Brantley served as a member of a Conflicts and Ethics Committee of one law firm and as vice chair of the Oregon State Bar Pro Bono Committee.  From 2009-2011 Brantley was an Adjunct Professor at the University of Oregon teaching The Licensing of Intellectual Property.  Brantley is the current chair of the Louisville Bar Association Intellectual Property Law Committee. Brantley grew up in Louisville and is an Eagle Scout. "
				},
				{
					"name": "Daniel Waddell",
					"title": '',
					"job": "Senior Counsel, Papa John's International, Inc., Louisville, KY",
					"imageUrl":'/images/board/danielWaddel-min.jpg',
					"bio": "Daniel has served as Papa John’s Senior Counsel since 1996.  Prior to this appointment, Daniel was an attorney with Greenebaum, Doll & McDonald (Louisville, Kentucky 1990 – 1996). Daniel has served on the Restorative Justice By-Laws Committee.  He is also a member of the Louisville East Lions’ Club, an affiliate of Lions’ International.  The Lions support many charitable causes and efforts, with a particular emphasis on aid and service to the blind and visually impaired, with focus on those who are indigent."
				},
				{
					"name": "Thomas M. Williams",
					"title": 'Non-Voting Emeritus Member',
					"job": 'Member, Stoll Keenon Ogden Law Firm, Louisville, KY',
					"imageUrl":'/images/board/thomasWilliams-min.jpg',
					"bio": "In his legal practice, Tom focused in management-side labor and employment law.  He has served as President of the Louisville Bar Association and Board Chair of Leadership Louisville being recognized by that organization as one of Louisville’s “Connectors”.  Tom was instrumental in having a marker dedicated to Martin Luther King’s “I Have a Dream” speech at the Lincoln Memorial.  He advanced a similar resolution naming Thomas Merton Square in Louisville. Tom served on the Steering Committee for the recent visit of His Holiness the Dalai Lama to Louisville.  He now serves as co-host of the Partnership for a Compassionate Louisville.  For that work, he received the Jack Olive International Heart of Compassion award from the Charter for Compassion International organization."
				},
				{
					"name": "Price Foster",
					"title": '',
					"job": 'Professor Emeritus (Retired)',
					"imageUrl":'/images/board/price-min.jpg',
					"bio": "Dr. Foster has been a Professor of Justice Administration at the University of Louisville  (UL) since 1981.  Prior to coming to UL, Dr. Foster was with the U.S. Dept. of Justice as Director of the Office of Criminal Justice Education and Training. Dr. Foster was a charter member and served ten years on the National Advisory Committee for State and Local Training of the Law Enforcement Training Center, U.S. Department of Treasury. He has served on several other national boards, including ten years on the Board of Directors of the National Criminal Justice Association.  Locally, Dr. Foster has served on the Board of Directors for Leadership Louisville, Metro United Way, the Presbyterian Community Center and Goodwill Industries of Kentucky. Dr. Foster also chaired the Public Safety Transition Committee and the Transition Committee for Corrections for Louisville’s Mayors.  Additionally, Dr. Foster is the current Board Chair of the Florida State University College Alumni and Friends of Criminology. Dr. Foster regularly teaches courses on criminal justice, and Restorative Justice has been a part of every course he has taught for over 20 years."
				},
				{
					"name": "David James",
					"title": '',
					"job": 'Councilman Louisville Metro Council',
					"imageUrl":'/images/board/david-min.jpg',
					"bio": "In addition to serving the University, David James has served as Louisville Metro Council’s Sixth District’s Councilman since 2010.  As Councilman, David represents the neighborhoods of Old Louisville, California, and Russell.  Prior to David’s service at the University of Louisville, he worked for the Louisville Police Department as a detective, undercover officer, S.W.A.T. team member, and Public Information Officer. David continues to serve on the Louisville Fraternal Order of Police Board of Trustees. He has also served as Commissioner of the Kentucky Bureau of Investigation, the investigative arm of the Kentucky Attorney General’s Office. The Councilman has been actively involved in many different community organizations including Citizens Advocacy, Elder Serve Board of Directors, Special Olympics of Kentucky, Perverted Justice Board of Directors and the Fraternal Order of Police. "
				},
			];
		});
	}]);

	app.controller('BoardController',['$scope','$location', '$sce','$http', function($scope, $location, $sce, $http) {

		
	}])
})();
