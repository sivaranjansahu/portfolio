$(document).ready(function () {
 
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();


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




	var profilePicTween = TweenMax.staggerFrom('#profile-pic-holder>div', 1, {
		scale: 0,
		opacity:0,
		ease: Elastic.easeOut.config(0.6, 0.3),
		delay:1,
		onComplete:loadNav
	}, 0.2);

function loadNav(){
	TweenMax.to('.fixednav',0.2,{left:0,ease:Linear.easeOut})
}
	new ScrollMagic.Scene({
			triggerElement: '.page-hero',
			offset: '0px',

		})
		//.setClassToggle('#profile-pic-holder', 'show')
		//.addIndicators()
		.setTween(profilePicTween)
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


	new ScrollMagic.Scene({
			triggerElement: '.page-hero'
		})
		.setClassToggle('.page-hero', 'show')

		.addTo(controller);

	$('.profile-pic').mouseenter(function () {
			$(this).addClass('rotating');
		})
		.mouseleave(function () {
			$(this).removeClass('rotating');
		})
	//$('.profile-pic:nth-child(3)').delay(5000).removeClass('rotating')
	setTimeout(function () {
		$('.profile-pic:nth-child(3)').removeClass('rotating')
	}, 5000);

	// Tweens
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

	//Dev section animations


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



	var devIconsTween2 = TweenMax.staggerFrom('.skill-icons li', 1, {
		scale: 0,
		opacity: 1,
		ease: Elastic.easeOut.config(1, 0.3)
	}, 0.1);
	new ScrollMagic.Scene({
			triggerElement: '#things-good-at'
		})
		.setTween(devIconsTween2)
		.addTo(controller);


	//design section
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

	//Horizontal scroll
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
	//2nd slide


	var showcaseTween21 = TweenMax.to(".red-item__showcase.second img:first-child", 0.5, {
		left: "-20vw",
		opacity: 1
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase2',
			offset: '50vw'
		})
		// .setPin(".red-item__showcase img:first-child")
		.setTween(showcaseTween21)
		.addTo(controller_h);

	var showcaseTween22 = TweenMax.to(".red-item__showcase.second img:last-child", 0.5, {
		right: "-20vw",
		opacity: 1
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase2',
			offset: '50vw'
		})
		.setTween(showcaseTween22)
		.addTo(controller_h);


	//3rd slide


	var showcaseTween21 = TweenMax.to(".red-item__showcase.third img:first-child", 0.5, {
		left: "-20vw",
		opacity: 1
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase3',
			offset: '50vw'
		})
		// .setPin(".red-item__showcase img:first-child")
		.setTween(showcaseTween21)
		.addTo(controller_h);

	var showcaseTween22 = TweenMax.to(".red-item__showcase.third img:last-child", 0.5, {
		opacity: 1
	});
	new ScrollMagic.Scene({
			triggerElement: '#showcase3',
			offset: '50vw'
		})
		.setTween(showcaseTween22)
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

var controller2 = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: '#resume-block'})
    .on('start',skillBars)
    .addTo(controller);
	
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


controller.scrollTo(function(target,element) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target -100, // scroll position of the target along y axis
      autoKill : true, // allows user to kill scroll action smoothly
	  offset:-140
    },
    ease : Linear.easeInOut
  });

});

//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href"); // grab the href attribute value

  if($(id).length > 0) {
    // prevents default behavior of links.
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id,$(this));
  }
});


$('[data-toggle=tooltip]').tooltip();

});
// $(document).ready(function(){
    
// });