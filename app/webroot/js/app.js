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
			var showNum = $('<span>(502)-574-6869</span>');
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
					"name": "Angela McCormick Bisig",
					"imageUrl": '/images/board/angela.jpg',
					"bio": "Judge Bisig has presided over criminal felony cases and civil cases since being elected as Circuit Court judge in 2012.  Previously she served as District Court Judge for 10 years, reviewing civil and criminal dockets.  During her tenure Judge Bisig established a pilot project to review domestic violence cases. Judge Bisig also served as a prosecutor for 7 years, specializing in the prosecution of domestic violence and sex offense cases. Judge Bisig is a member of the Board of the World Affairs Council of Kentucky and Southern Indiana; the American Red Cross; the University of Louisville Overseers; and Sister Cities of Louisville.  She also is a member of the Chief Justice’s Racial Fairness Task Force, and the Disproportionate Minority Confinement Committee of the Jefferson Juvenile Court."
				},
				{
					"name": "Khalilah V. Collins",
					"imageUrl":'/images/board/collins.jpg',
					"bio": "At the Center, Khalilah leads the PACT In Action project working to prevent Teen Dating Violence in the 40210 neighborhoods.  In addition to Khalilah’s role at the Center, she serves as an Adjunct Professor at both the Kent School of Social Work-University of Louisville and Jefferson Community & Technical College.  In addition to RJL, Khalilah is on the Affordable Housing Trust Fund Board and has served on several community organization and non-profit boards in the past.  Khalilah is a member of the National Association of Social Workers, the Social Welfare Action Alliance, and the National Organizers Alliance. "
				},
				{
					"name": "Susan H. Duncan",
					"imageUrl":'/images/board/susan.jpg',
					"bio": "Prior to Susan’s appointment as Interim Dean, she served as a professor at the University of Louisville, Spalding University and the Cecil C. Humphreys School of Law at the University of Memphis.  In addition to serving in key law school positions for almost 20 years Susan has authored, edited or reviewed over 36 law journals or publications. Susan has served in key positions for the Legal Writing Institute; the AALS Section on Legal Research, Writing and Analysis; the Kentucky Bar Association; and the Louisville Bar Association. Susan was the Co-Chair of Citizens of Louisville Organized and United Together (CLOUT) Healthcare Research Planning Committee (2007-2008) that addressed children’s healthcare issues. She has also served extensively with St. Agnes Catholic Church and School. "
				}, 
				{
					"name": "Alecia Dimar",
					"imageUrl":'/images/board/alecia.jpg',
					"bio": "At YUM! Alecia is focused on leading social responsibility and sustainability efforts that drive the organization’s vision of being a company with a huge heart.  Alecia joined the Yum! family in 2011, where she was part of the Global System Communications team for two years before being selected for the inaugural Public Affairs development program, which subsequently led to her current role.  Prior to YUM! Alecia worked for Lions Club International Foundation in Illinois driving strategic communication and programming to elevate the organization’s philanthropic efforts.  Alecia served on Ignite Louisville in 2013 and was introduced to RJL.  She also volunteers with Boys & Girls Club, My Dog Eats First and Special Olympics. "
				},
				{
					"name": "Price Foster",
					"imageUrl":'/images/board/price.jpg',
					"bio": "Dr. Foster has been a Professor of Justice Administration at the University of Louisville  (UL) since 1981.  Prior to coming to UL, Dr. Foster was with the U.S. Dept. of Justice as Director of the Office of Criminal Justice Education and Training. Dr. Foster was a charter member and served ten years on the National Advisory Committee for State and Local Training of the Law Enforcement Training Center, U.S. Department of Treasury. He has served on several other national boards, including ten years on the Board of Directors of the National Criminal Justice Association.  Locally, Dr. Foster has served on the Board of Directors for Leadership Louisville, Metro United Way, the Presbyterian Community Center and Goodwill Industries of Kentucky. Dr. Foster also chaired the Public Safety Transition Committee and the Transition Committee for Corrections for Louisville’s Mayors.  Additionally, Dr. Foster is the current Board Chair of the Florida State University College Alumni and Friends of Criminology. Dr. Foster regularly teaches courses on criminal justice, and Restorative Justice has been a part of every course he has taught for over 20 years."
				},
				{
					"name": "David James",
					"imageUrl":'/images/board/david.jpg',
					"bio": "In addition to serving the University, David James has served as Louisville Metro Council’s Sixth District’s Councilman since 2010.  As Councilman, David represents the neighborhoods of Old Louisville, California, and Russell.  Prior to David’s service at the University of Louisville, he worked for the Louisville Police Department as a detective, undercover officer, S.W.A.T. team member, and Public Information Officer. David continues to serve on the Louisville Fraternal Order of Police Board of Trustees. He has also served as Commissioner of the Kentucky Bureau of Investigation, the investigative arm of the Kentucky Attorney General’s Office. The Councilman has been actively involved in many different community organizations including Citizens Advocacy, Elder Serve Board of Directors, Special Olympics of Kentucky, Perverted Justice Board of Directors and the Fraternal Order of Police. "
				},
				{
					"name": "Benjamin J. Lewis",
					"imageUrl":'/images/board/ben.jpg',
					"bio": "Ben’s legal practice focuses on business litigation, and trust and estate litigation.  Ben was recently named a 2015 Rising Star by the Kentucky Super Lawyers publication.  Ben was drawn to the work of RJL through his interest in local business and politics, and the advancement of the City of Louisville and its citizens.  Ben is a huge fan of Louisville, his adopted hometown, and convinced that the sustained work of RJL will help to reduce some of the unfortunate inequalities that exist amongst its citizens. Ben is married to another local attorney, Danielle J. Lewis.  They recently welcomed their first son, Samuel, into the world.  Beyond the practice of law, Ben enjoys time with his family, riding motorcycles, and performing home improvement projects (poorly)."
				},
				{
					"name": "Steve Mershon",
					"imageUrl":'/images/board/steve.jpg',
					"bio": "Judge Mershon has 25 years of judicial experience and, now retired, continues to mediate many different types of disputes working with the court system.  In 2004, Judge Mershon was elected Chief Judge of the Jefferson Circuit Term; prior to that he had served a general court docket which included several high profile and death penalty cases.  In his early years on the bench, he was a volunteer for Kentucky's First Family Court, presiding over cases dealing with divorce, child custody, and abuse. Judge Mershon has served the community as a member of the Board of the YWCA Spouse Abuse Center, the Home of the Innocents, the New Directions Housing Corporation, Day Spring, and MB Care.  He was the founding president of the Board of Children First and former treasurer of the Louisville Chapter of the Lawyers Alliance for Nuclear Arms Control."
				},
				{
					"name": "Miguel Mireles",
					"imageUrl":'/images/board/miguel.jpg',
					"bio": "Miguel is the Hispanic Emphasis Director for the Lincoln Heritage Council of the Boy Scouts of America.  Miguel is also involved in many different aspects of the community including the Hispanic Latino Coalition, the Hispanic Latino Business Coalition, the Hombres Unidos, and the Louisville Human Relations Commission of Louisville Metro Government. Miguel additionally assists with many different Youth Development programs including 4-H, Boy Scouts, Boys & Girls Club and the YMCA."
				},
				{
					"name": "Doug Morris",
					"imageUrl":'/images/board/doug.jpg',
					"bio": "At DMLO, Doug is the Co-Chair of the Construction, Manufacturing and Distribution Niches.  Doug has over twenty-five years of experience practicing public accounting in Louisville. He works with clients of all sizes and stages, which includes construction, manufacturing & distribution, equine & horse racing, country club industries, and non-profits. As well as being licensed to practice as a CPA, Doug is approved by the Kentucky Department of Insurance Financial Standards & Examination Division to perform captive insurance audits for closely held businesses. Professional memberships include the American Institute and Kentucky Society of Certified Public Accountants.  Doug is also a member of the Construction Financial Management Association and the Kentucky Captive Association. Doug serves as Treasurer for Fern Creek Christian Church and is on the Board of Harbor House of Louisville. He volunteers with Eastern High School Marching Band and Fern Creek Babe Ruth League."
				},
				{
					"name": "John M. Mulder",
					"imageUrl":'/images/board/johnMulder.jpg',
					"bio": "John is an award-winning writer, teacher and Presbyterian minister.  He was President and Professor of Historical Theology at Louisville Presbyterian Theological Seminary from 1981-2002.  He also taught American church history at Princeton Theological Seminary from 1974-1981.  John served as Vice President for Development and Communications at The Healing Place, Kentucky’s largest alcohol recovery center, from 2004-2008. John is the author or editor of more than 25 books and more than 100 essays on American history and religion in American culture.  During his tenure at the seminary and The Healing Place, John led successful multi-million dollar fund-raising campaigns. John has served on the Boards of Leadership Louisville and the Louisville Chamber of Commerce.  In 1987, John was instrumental in bringing the Presbyterian Headquarters to Louisville."
				}, 
				{
					"name": "Mike O’Connell",
					"imageUrl":'/images/board/mikeOConnell.jpg',
					"bio": "Mike has been a public servant for over 35 years.  As County Attorney since 2008, Mike has also served as District and Circuit Court Judge.  Mike is a partner with the law firm Parker & O'Connell, PLLC.  Mike served as Bar Governor for the 4th Supreme Court District, Kentucky Bar Association, 2002 – 2008.Mike has served the Louisville community in lead positions as Chairman or President in numerous organizations:  the Advisory Board of Little Sisters of the Poor, St. Joseph’s Home for the Aged ; Jefferson County Police Chief Search Committee;  Advisory Board of Catholic Charities for Archdiocese of Louisville, KY;  and Jefferson County Juvenile Justice Commission."
				}, 
				{
					"name": "Brantley Shumaker",
					"imageUrl":'/images/board/brantleyShumaker.jpg',
					"bio": "Brantley practices in the Intellectual Property Practice Group at Middleton Reutlinger.  Previously, Brantley practiced intellectual property prosecution, litigation, and counseling at two law firms in Portland, Oregon, mostly in the areas of software, hardware and telecommunications.  While in Oregon Brantley served as a member of a Conflicts and Ethics Committee of one law firm and as vice chair of the Oregon State Bar Pro Bono Committee.  From 2009-2011 Brantley was an Adjunct Professor at the University of Oregon teaching The Licensing of Intellectual Property.  Brantley is the current chair of the Louisville Bar Association Intellectual Property Law Committee. Brantley grew up in Louisville and is an Eagle Scout. "
				}, 
				{
					"name": "Michelle Tupper Butler",
					"imageUrl":'/images/board/michelleButler.jpg',
					"bio": "Over the last 9 years Michelle has served in a Litigation role, defending claims in complex civil and criminal cases in federal and state courts.  Prior to Dinsmore & Shohl, she served at Dickstein & Shapiro, LLP in Washington D.C.   In 2006 Michelle served as a Law Clerk for the United States District Court of Columbia, Washington, D.C. While in Washington, Michelle was a Board and Founding Member of the D.C. Lawyers for Youth.  This non-profit organization advocated for D.C. youth and provided oversight for projects to improve the juvenile justice system.   As a student, Michelle also served in the Georgetown Juvenile Justice Clinic, representing indigent juveniles. "
				}, 
				{
					"name": "Daniel Waddell",
					"imageUrl":'/images/board/danielWaddel.jpg',
					"bio": "Daniel has served as Papa John’s Senior Counsel since 1996.  Prior to this appointment, Daniel was an attorney with Greenebaum, Doll & McDonald (Louisville, Kentucky 1990 – 1996). Daniel has served on the Restorative Justice By-Laws Committee.  He is also a member of the Louisville East Lions’ Club, an affiliate of Lions’ International.  The Lions support many charitable causes and efforts, with a particular emphasis on aid and service to the blind and visually impaired, with focus on those who are indigent."
				},
				{
					"name": "Thomas M. Williams",
					"imageUrl":'/images/board/thomasWilliams.jpg',
					"bio": "In his legal practice, Tom focused in management-side labor and employment law.  He has served as President of the Louisville Bar Association and Board Chair of Leadership Louisville being recognized by that organization as one of Louisville’s “Connectors”.  Tom was instrumental in having a marker dedicated to Martin Luther King’s “I Have a Dream” speech at the Lincoln Memorial.  He advanced a similar resolution naming Thomas Merton Square in Louisville. Tom served on the Steering Committee for the recent visit of His Holiness the Dalai Lama to Louisville.  He now serves as co-host of the Partnership for a Compassionate Louisville.  For that work, he received the Jack Olive International Heart of Compassion award from the Charter for Compassion International organization."
				}
			];
		});
	}]);

	app.controller('BoardController',['$scope','$location', '$sce','$http', function($scope, $location, $sce, $http) {

		
	}])
})();
