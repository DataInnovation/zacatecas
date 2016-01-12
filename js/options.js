(function () {
	'use strict';
	
	var teslaThemes = {

		init: function () {
			this.module();
		},

		module: function () {
			//this.datePickerInit();
			this.tabsInit();
			// this.isotopeInit();
			this.owlCarouselInit();
			this.inputHasValue();
			this.accordionToggles();
			this.progressBars();
			this.knobInit();
			this.projectPopup();
			this.mobileNav();
			this.contactForm();
		},

		// Template Custom Functions
		//datePickerInit: function () {
		//	jQuery('.datepicker').datepicker({
				//onSelect: function () {
					//jQuery('body').addClass('calendar-popup-visible');
				//}
		//	});

			// Close Calendar Popup
		//	jQuery('.calendar-popup').on('click', function (e) {
		//		var target = e.target;

		//		if (jQuery('body').hasClass('calendar-popup-visible')) {
		//			if (!jQuery(target).is('.popup-wrapper') && !jQuery(target).is('.popup-wrapper *')) {
		//				jQuery('body').removeClass('calendar-popup-visible');	
		//			}
		//		}
		//	});
		//},

		tabsInit: function () {
			// Active Tab Indicator 
			var tabIndicator = jQuery('.tabs .heading .active-tab-indicator');

			// Set Active Tab Indicator Dimensions
			jQuery(window).on('load resize', function () {
				tabIndicator.css('width', jQuery('.tabs .heading ul li').width() - 20);
				tabIndicator.css('height', jQuery('.tabs .heading ul li').outerHeight(true) + 20);
			});

			// Tabs Init Function
			jQuery('.tabs').tabs({
				show: {
		            opacity:'toggle',
		            duration: 300
		       	},
		       	activate: function(event, ui) {
		    		var activeTab = jQuery('.tabs .heading ul li.ui-state-active'),
		    			activeTabPosition = activeTab.position();

		    		tabIndicator.css('left', activeTabPosition.left + 10);
		    	}
		    });
		},

		// isotopeInit: function () {
		// 	var isotopeContainer = jQuery('.works-wrapper .row'),
		// 		defaultSelection = jQuery('.works-wrapper').attr('data-default-selection');
			
		// 	isotopeContainer.imagesLoaded(function () {
		// 		isotopeContainer.isotope({
		// 			filter: defaultSelection,
		// 			itemSelector: '.item'
		// 		});
		// 	});

		// 	jQuery('.filters a').on('click', function () {
		// 		jQuery('.filters .current').removeClass('current');
		// 		jQuery(this).addClass('current');

		// 		var selector = jQuery(this).attr('data-filter');
		// 			isotopeContainer.isotope({
		// 				filter: selector,
		// 				animationOptions: {
		// 				    duration: 750,
		// 				    easing: 'linear',
		// 				    queue: false
		// 				}
		// 			});
		// 		return false;
		// 	});

		// 	var isotopeSidebarContainer = jQuery('.sidebar .sidebar-widgets');
			
			
		// 	isotopeSidebarContainer.imagesLoaded(function () {
		// 		isotopeSidebarContainer.isotope({
		// 			itemSelector: '.widget-wrapper'
		// 		});
		// 	});
		// },
	 
		owlCarouselInit: function () {
			// Testimonials Slider
			jQuery('.testimonials-list').owlCarousel({
				singleItem: true,
				navigation: true,
				pagination: true,
				mouseDrag: false,
				navigationText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				]
			});

			// Blog post cover slider
			jQuery('.post-cover.slider ul').owlCarousel({
				singleItem: true,
				navigation: true,
				mouseDrag: false,
				pagination: false,
				transitionStyle: 'fade',
				navigationText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				]
			});
		},


		inputHasValue: function () {
			jQuery('.js-input').focusout(function () {
				var text_val = jQuery(this).val();
				if (text_val === "") {
					jQuery(this).removeClass('has-value');
				} else {
					jQuery(this).addClass('has-value');
				}
			});
		},

		accordionToggles: function () {
			var simpleAccordion = jQuery('.simple-accordion');

			function toggleActiveClass () {
				var simpleAccordionPanel = simpleAccordion.find('.panel');

				simpleAccordionPanel.each(function (index) {
					var panel = jQuery(this),
						panelCollapse = panel.find('.panel-collapse');

					if (panelCollapse.hasClass('in')) {
						panel.find('.panel-title').addClass('active');
					} else {
						panel.find('.panel-title').removeClass('active');
					}
				});
			}

			jQuery(window).on('load', function () {
				toggleActiveClass();
			});

			jQuery(document).on("hide.bs.collapse show.bs.collapse", ".collapse", function (event) {
			    jQuery(this).prev().find(".panel-title").toggleClass("active");
			    event.stopPropagation();
			});
		},

		progressBars: function () {
			jQuery('.progress-bar-skill').each(function () {
				var visible = false,
					element = jQuery(this);

				function progressBarsInit() {
					if (element.visible() && !visible) {
						visible = true;
						
						var progressInPercent = Number(element.find('.progress-bar-wrapper').attr('data-progress')),
							actualProgress = element.find('.actual-progress'),
							percentageHolder = element.find('span');

						actualProgress.css({
							'width' : progressInPercent + '%'
						});

						percentageHolder.css({
							'left' : progressInPercent + '%'
						});

						jQuery({countNum: 1}).animate({countNum: progressInPercent + 1}, {
							duration: 3000,
							easing: 'linear',
							step: function () {
								percentageHolder.text(Math.floor(this.countNum) + '%');
							}
						});;
					}
				}

				// First Init 
				progressBarsInit();

				// Init On scroll
				jQuery(window).on('scroll', function () {
					progressBarsInit();
				});
			});
		},

		knobInit: function () {
			jQuery('.dial').knob({
				readOnly: true,
				'thickness': '.1',
				'fgColor': '#feda51',
				'bgColor': '#f9f9f9',
			});

			jQuery('.dial').each(function () {
				var visible = false,
					dial = jQuery(this);

				function startKnob() {
					if (dial.visible() && !visible) {
						visible = true;

						var k = 1;

						var timer = setInterval(function () {
							dial.val(k);
							dial.trigger('change');
							k ++;
							if (k > dial.attr('data-value')) {
								clearInterval(timer);
							}
						}, 50);
					}
				}

				// First Init
				startKnob();

				// On Scroll Init
				jQuery(window).on('scroll', function (){
					startKnob();
				});
			});
		},

		projectPopup: function () {
			jQuery('.work-item .hover a').on('click', function () {
				jQuery('body').addClass('popup-visible');
				jQuery('.project-popup').addClass('visible');
			});

			jQuery('.project-popup .close-project').on('click', function () {
				jQuery('.project-popup').removeClass('visible');

				setTimeout(function () {
					jQuery('body').removeClass('popup-visible');
				}, 800);
			});
		},

		mobileNav: function () {
			jQuery(".responsive-menu-trigger").on("click", function () {
				jQuery("header nav ul").toggleClass("visible");
			});
		},

		contactForm: function () {
			jQuery('.contact-form').each(function () {
				var t = jQuery(this);
				var t_result = jQuery(this).find('.form-send');
				var t_result_init_val = t_result.val();
				var validate_email = function validateEmail(email) {
				    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				    return re.test(email);
				};
				var t_timeout;
				/*t.submit(function (event) {
				    event.preventDefault();
				    var t_values = {};
				    var t_values_items = t.find('input[name],textarea[name]');
				    t_values_items.each(function () {
				        t_values[this.name] = jQuery(this).val();
				    });
				    if (t_values['contact-name'] === '' || t_values['contact-email'] === '' || t_values['contact-message'] === '') {
				        t_result.val('Please fill in all the required fields.');
				    } else
				    if (!validate_email(t_values['contact-email']))
				        t_result.val('Please provide a valid e-mail.');
				    else
				        jQuery.post("php/contacts.php", t.serialize(), function (result) {
				            t_result.val(result);
				        });
				    clearTimeout(t_timeout);
				    t_timeout = setTimeout(function () {
				        t_result.val(t_result_init_val);
				    }, 3000);
				});
				*/

			});
		}
	};

	jQuery(document).ready(function(){
		teslaThemes.init();

		setTimeout(function(){
			jQuery('body').addClass('domready');
		}, 300);
	});
}());