$(document).ready(function () {
	var md = new MobileDetect(window.navigator.userAgent);
	console.log(md);
	// Init ScrollMagic



	var controller = new ScrollMagic.Controller();
	console.log(md.tablet())
	if (!md.phone() && !md.tablet()) {

		new ScrollMagic.Scene({
				triggerElement: '#keep-happy'
			})
			.setClassToggle('#bigsquare1', 'rotated-positive')
			//.addIndicators()
			.addTo(controller);

		new ScrollMagic.Scene({
				triggerElement: '#keep-happy',
				duration: 900
			})
			.setClassToggle('#bigsquare2', 'rotated-negative')
			//.addIndicators()
			.addTo(controller);
	} else {
		$('#bigsquare1').addClass('rotated-positive');
	}



	if (!md.phone() && !md.tablet()) {

		var profilePicTween = TweenMax.staggerFrom('#profile-pic-holder>div', 1, {
			scale: 0,
			opacity: 0,
			ease: Elastic.easeOut.config(0.6, 0.3),
			delay: 1,
			onComplete: loadNav
		}, 0.2);

		function loadNav() {
			TweenMax.to('.fixednav', 0.2, {
				left: 0,
				ease: Linear.easeOut
			})
		}
		new ScrollMagic.Scene({
				triggerElement: '.page-hero',
				offset: '0px',

			})
			//.setClassToggle('#profile-pic-holder', 'show')
			//.addIndicators()
			.setTween(profilePicTween)
			.addTo(controller);
	} else {
		$('#profile-pic-holder>div').css({
			opacity: 1
		})
	}


	if (true || !md.phone() && !md.tablet()) {

		new ScrollMagic.Scene({
				triggerElement: '.page-hero'
			})
			.setClassToggle('.page-hero', 'show')

			.addTo(controller);

		var SkillsTween = TweenMax.staggerFrom('.skills>div', 0.5, {
			opacity: 0,
			bottom: "-30px",
			ease: Linear.easeOut
		}, 0.1);
		new ScrollMagic.Scene({
				triggerElement: '#keep-happy'
			})
			.setTween(SkillsTween)
			.addTo(controller);
	} else {
		$('.page-hero').css({
			opacity: 1
		})
	}


	//Fun animation on profile pic 

	$('.profile-pic').mouseenter(function () {
			$(this).addClass('rotating');
		})
		.mouseleave(function () {
			$(this).removeClass('rotating');
		})

	setTimeout(function () {
		$('.profile-pic:nth-child(3)').removeClass('rotating')
	}, 5000);




	// Tweens

	if (true || !md.phone() && !md.tablet()) {
		var pointersTween = TweenMax.staggerFrom('.pin', 1, {
			scale: 0,
			delay: 1,
			opacity: 1,
			ease: Elastic.easeOut.config(2, 0.3)
		}, 0.2);
		new ScrollMagic.Scene({
				triggerElement: '#things-good-at-dev'
			})
			.setTween(pointersTween)
			.addTo(controller);
		var wireframeTween = TweenMax.from('.imagemap', 1, {
			opacity: 0
		});
		new ScrollMagic.Scene({
				triggerElement: '#things-good-at-dev'
			})
			.setTween(wireframeTween)
			.addTo(controller);
	} else {
		$('.pin', '.imagemap').css({
			opacity: 1
		})
	}



	//Dev section animations

	if (true || !md.phone() && !md.tablet()) {
		var devSkillsTween = TweenMax.staggerFrom('.dev-skills>div', 0.5, {
			opacity: 0,
			bottom: "-30px",
			ease: Linear.easeOut
		}, 0.1);
		new ScrollMagic.Scene({
				triggerElement: '#section3 h1'
			})
			.setTween(devSkillsTween)
			.addTo(controller);



		var devIconsTween2 = TweenMax.staggerFrom('.skill-icons.skill-large li', 1, {
			scale: 0,
			opacity: 1,
			ease: Elastic.easeOut.config(1, 0.3)
		}, 0.1);
		new ScrollMagic.Scene({
				triggerElement: '#things-good-at'
			})
			.setTween(devIconsTween2)
			.addTo(controller);
	} else {
		$('.dev-skills>div', '.skill-icons li').css({
			opacity: 1
		})
	}




	//design section

	if (true || !md.phone() && !md.tablet()) {
		var designSkillsTween = TweenMax.staggerFrom('.design-skills>div', 0.5, {
			opacity: 0,
			bottom: "-30px",
			ease: Linear.easeOut
		}, 0.1);
		new ScrollMagic.Scene({
				triggerElement: '#section4 h1'
			})
			.setTween(designSkillsTween)
			.addTo(controller);
	} else {
		$('.design-skills>div').css({
			opacity: 1
		})
	}

	if (md.phone() || md.tablet()) {
		$('#slideContainer').wrapInner(document.createElement("div"));
	}
	//Horizontal scroll

	if (!md.phone() && !md.tablet()) {
		var controller_h = new ScrollMagic.Controller({
			vertical: false
		});

		var wipeAnimation = new TimelineMax()
			.to("#slideContainer", 1, {
				x: "-=100%",
				ease: Linear.easeOut,
				autoKill: true
			});
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "600%",
				// offset:'-30%'

			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addTo(controller);

		//TimelineMax().to("#slideContainer",1,{x: "-=100%"})
		//var redBlockTween=TweenMax.from('#pinContainer .red',1,{x:200,ease:Elastic.easeOut});
		var redBlockTween = TweenMax.from('#slideContainer .red', 1, {
			left: '90vw'
		});
		new ScrollMagic.Scene({
				triggerElement: '#slideContainer'
			})
			.setTween(redBlockTween)
			.addTo(controller);


		//animate caksha desktop image

		var cakshaImageTween = TweenMax.from('img.caksha', 0.5, {
			bottom: '-10px',
			scale: 0.6,
			opacity: 0
		});
		new ScrollMagic.Scene({
				triggerElement: '#pinContainer'
			})
			.setTween(cakshaImageTween)
			.addTo(controller);
	} else {

	}


	//Showcase section - red

	if (!md.phone() && !md.tablet()) {
		var showcaseTween1 = TweenMax.from(".red-item__showcase.first img:first-child", 0.5, {
			left: "0",
			opacity: 0
		});
		new ScrollMagic.Scene({
				triggerElement: '#showcase1',
				offset: '50vw'
			})
			// .setPin(".red-item__showcase img:first-child")
			.setTween(showcaseTween1)
			.addTo(controller_h);

		var showcaseTween2 = TweenMax.from(".red-item__showcase.first img:last-child", 0.5, {
			right: "0",
			opacity: 0
		});
		new ScrollMagic.Scene({
				triggerElement: '#showcase1',
				offset: '50vw'
			})
			.setTween(showcaseTween2)
			.addTo(controller_h);
	} else {
		$('.red-item__showcase.first img:first-child', '.red-item__showcase.first img:last-child').css({
			opacity: 1
		})
	}


	//2nd slide


	var showcaseTween21 = TweenMax.from(".red-item__showcase.second img:first-child", 0.5, {
		left: "-20vw",
		opacity: 0
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase2',
			offset: '50vw'
		})
		// .setPin(".red-item__showcase img:first-child")
		.setTween(showcaseTween21)
		.addTo(controller_h);

	var showcaseTween22 = TweenMax.from(".red-item__showcase.second img:last-child", 0.5, {
		right: "-20vw",
		opacity: 0
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase2',
			offset: '50vw'
		})
		.setTween(showcaseTween22)
		.addTo(controller_h);







	//3rd slide


	var showcaseTween31 = TweenMax.from(".red-item__showcase.third img:first-child", 0.5, {
		left: "-20vw",
		opacity: 0
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase3',
			offset: '50vw'
		})
		// .setPin(".red-item__showcase img:first-child")
		.setTween(showcaseTween31)
		.addTo(controller_h);

	var showcaseTween32 = TweenMax.from(".red-item__showcase.third img:last-child", 0.5, {
		opacity: 0,
		right: "-20vw",
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase3',
			offset: '50vw'
		})
		.setTween(showcaseTween32)
		.addTo(controller_h);


	//4th slide


	var showcaseTween41 = TweenMax.from(".red-item__showcase.fourth img:first-child", 0.5, {
		left: "-20vw",
		opacity: 0
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase4',
			offset: '50vw'
		})
		// .setPin(".red-item__showcase img:first-child")
		.setTween(showcaseTween41)
		.addTo(controller_h);

	var showcaseTween42 = TweenMax.from(".red-item__showcase.fourth img:last-child", 0.5, {
		opacity: 0,
		right: "-20vw",
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase4',
			offset: '50vw'
		})
		.setTween(showcaseTween42)
		.addTo(controller_h);

	//5th slide


	var showcaseTween51 = TweenMax.from(".red-item__showcase.fifth img:first-child", 0.5, {
		left: "-20vw",
		opacity: 0
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase5',
			offset: '50vw'
		})
		// .setPin(".red-item__showcase img:first-child")
		.setTween(showcaseTween51)
		.addTo(controller_h);

	var showcaseTween52 = TweenMax.from(".red-item__showcase.fifth img:last-child", 0.5, {
		opacity: 0,
		right: "-20vw",
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase5',
			offset: '50vw'
		})
		.setTween(showcaseTween52)
		.addTo(controller_h);





	//Resume animations


	var resumeTween = TweenMax.from('.resume', 1, {
		x: 200
	});
	new ScrollMagic.Scene({
			triggerElement: '#resume-block',
			offset: 0
		})
		.setTween(resumeTween)
		.addTo(controller_h);



	//Render Skills bars
	var skillsBarsConainer = $('#skills-bars');
	var skillsData = [{
			skill: 'AngularJS',
			rating: 5
		},
		{
			skill: 'JavaScript',
			rating: 6
		},
		{
			skill: 'Ionic Framework',
			rating: 6
		},
		{
			skill: 'HTML5',
			rating: 7
		},
		{
			skill: 'CSS3',
			rating: 6
		},
		{
			skill: 'D3JS',
			rating: 4
		},
		{
			skill: 'Firebase',
			rating: 7
		},
	]

	//Contact page animations


	var contactFaceTween = TweenMax.from('.face-holder', 1, {
		bottom: '-600vw',
		opacity: 0,
		ease: Power1.easeOut
	});
	new ScrollMagic.Scene({
			triggerElement: '#contact-block'
		})
		.setTween(contactFaceTween)
		.addTo(controller);


	var controller2 = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
			triggerElement: '#resume-block'
		})
		.on('start', skillBars)
		.addTo(controller);


	var socialIcons = TweenMax.staggerFrom('.social-icons li', 2, {
		scale: 0,
		opacity: 1,
		ease: Elastic.easeOut.config(1, 0.6)
	}, 0.1);
	new ScrollMagic.Scene({
			triggerElement: '#resume-block h1'
		})
		.setTween(socialIcons)
		.addTo(controller);

	//scroll mouse icon
	var scrollMouseTween = TweenMax.to('.scroll-indicator', 1, {
		opacity: 0
	});

	new ScrollMagic.Scene({
			triggerElement: '#keep-happy'
		})
		.setTween(scrollMouseTween)
		.addTo(controller);

	//Resume /skills graph
	skillsData.forEach(function (d, index) {
		var ID = 'bar' + index.toString();
		var progressWidth = (d.rating * 10).toString() + '%';
		var skillTitle = document.createElement('div');
		skillTitle.className = 'col-md-3';
		skillTitle.innerHTML = '<h4>' + d.skill + '</h4> <div class="bar-container"><div class="pg" id=' + ID + ' ></div></div>';
		skillsBarsConainer.append(skillTitle);

	})

	function skillBars() {

		skillsData.forEach(function (d, index) {
			var ID = 'bar' + index.toString();
			var progressWidth = (d.rating * 10).toString() + '%';
			var skillTitle = document.createElement('div');
			skillTitle.className = 'col-md-3';

			TweenMax.to('#' + ID, 1, {
				width: progressWidth,
				transformOrigin: '0% 0%',
				ease: Power3.easeOut
			})
		})
	}


	//Circle bar animation

	if (true || !md.phone() && !md.tablet()) {
		var circleBarTween = TweenMax.to('#circle-bar', 0.5, {
			x: -200,
			transformOrigin: "50% 50%",
			ease: Power4.easeOut,
			onComplete: function () {
				TweenLite.to('#circle-bar', 1, {
					rotation: function () {
						return 90 - 32.727272727272 * i - 16.35
					},
					transformOrigin: "50% 50%",
					ease: Power4.easeOut,
					onComplete: function () {
						TweenLite.to(['#dsline'], 1, {
							opacity: 1,
							left: "50%"
						});
						TweenLite.to(['#ds'], 1, {
							opacity: 1,
							left: "57%"
						});
						$('#ds h3').text('Firebase');
						$('#ds p').text('I have used Firebase/AngularFire in both Web and Mobile projects to build build realtime functionalities. Have used GeoFire to build geolocation apps.');
					}
				})
			}
		});
		new ScrollMagic.Scene({
				triggerElement: '#resume-block h3:first-child'
			})
			.setTween(circleBarTween)
			.addTo(controller);


		var showNamesCircle = TweenMax.staggerFrom('#circle-bar .names', 0.5, {
			opacity: 0,
			scale: 0,
			ease: Bounce.easeOut,
			transformOrigin: '50% 50%',
			onComplete: function () {
				//highlight Data visualization
				$('#circle-bar .names:nth-child(2)').css({
					color: '#ff9900'
				})
			}

		}, 0.2);
		new ScrollMagic.Scene({
				triggerElement: '#circle-bar'
			})
			.setTween(showNames)
			.addTo(controller);
	} else {
		$('.design-skills>div').css({
			opacity: 1
		})
	}

	//Spider chart animation

	if (true || !md.phone() && !md.tablet()) {
		var spiderChartTween = TweenMax.to('#spider-chart', 0.5, {
			x: -200,
			transformOrigin: "50% 50%",
			ease: Power4.easeOut,
			onComplete: function () {
				TweenLite.to('#spider-chart', 1, {

					transformOrigin: "50% 50%",
					ease: Power4.easeOut,
					onComplete: function () {
						TweenLite.to(['#spider-line'], 1, {
							opacity: 1,
							left: "50%"
						});
						TweenLite.to(['#spider-infobox'], 1, {
							opacity: 1,
							left: "57%"
						});
						$('#spider-infobox h3').text('Firebase');
						$('#spider-infobox p').text('I have used Firebase/AngularFire in both Web and Mobile projects to build build realtime functionalities. Have used GeoFire to build geolocation apps.');
					}
				})
			}
		});
		new ScrollMagic.Scene({
				triggerElement: '#spider-title'
			})
			.setTween(spiderChartTween)
			.addTo(controller);

		var showNames = TweenMax.staggerFrom('#spider-chart .names', 0.5, {
			opacity: 0,
			scale: 0,
			ease: Bounce.easeOut,
			transformOrigin: '50% 50%',
			onComplete: function () {
				//highlight Data visualization
				$('#spider-chart .names:nth-child(2)').css({
					color: '#ff9900'
				})
			}

		}, 0.2);
		new ScrollMagic.Scene({
				triggerElement: '#spider-chart'
			})
			.setTween(showNames)
			.addTo(controller);
	} else {
		$('.design-skills>div').css({
			opacity: 1
		})
	}





	controller.scrollTo(function (target, element) {

		TweenMax.to(window, 0.5, {
			scrollTo: {
				y: target, // scroll position of the target along y axis
				autoKill: true, // allows user to kill scroll action smoothly
				// offset: -40
			},
			ease: Linear.easeInOut
		});

	});

	//  Bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href"); // grab the href attribute value

		if ($(id).length > 0) {
			// prevents default behavior of links.
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id, $(this));
		}
	});


	$('[data-toggle=tooltip]').tooltip();



	//Career timeline animation


	new ScrollMagic.Scene({
			triggerElement: '#career-timeline'
		})
		.setTween(
			TweenMax.staggerFrom('.career-timeline > li', 0.5, {
				opacity: 0,
				// delay: 1,

				ease: Linear.easeOut,
				transformOrigin: 'left,50%',
				onComplete: function () {
					console.log(this);
					if (this.target.className == 'microsoft2') {
						$('.microsoft2 >div').tooltip('show');
						setTimeout(function () {
							$('.microsoft2 >div').tooltip('hide');
						}, 2000);
					}

				}

			}, 0.2)
		)
		.addTo(controller);

});