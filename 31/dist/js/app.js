'use strict';

var countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'People \'s Republic of China', 'Republic of China', 'Christmas Island', 'Cocos(Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea - Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nagorno - Karabakh', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Turkish Republic of Northern Cyprus', 'Northern Mariana', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Barthelemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'Somaliland', 'South Africa', 'South Ossetia', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor - Leste', 'Togo', 'Tokelau', 'Tonga', 'Transnistria Pridnestrovie', 'Trinidad and Tobago', 'Tristan da Cunha', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'British Virgin Islands', 'Isle of Man', 'US Virgin Islands', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

window.onload = function () {
  $('.webinar-digital .contact-form form').each(function () {
    $(this).validate({
      errorClass: 'has-error',
      validClass: 'has-success',
      showErrors: function showErrors(errorMap) {
        if (errorMap['attach']) Notify(uploadErrorMessage, notifyDelay);
        this.defaultShowErrors();
      },
      highlight: function highlight(elem, errorClass, validClass) {
        $(elem).parent().addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function unhighlight(elem, errorClass, validClass) {
        $(elem).parent().removeClass(errorClass).addClass(validClass);
      },
      rules: {
        name: {
          required: true,
          maxlength: 255
        },
        last_name: {
          required: true,
          maxlength: 255
        },
        phone: {
          required: true,
          number: true,
          maxlength: 255,
          minlength: 5
        },
        company: {
          required: true,
          maxlength: 255
        },
        position: {
          required: true,
          maxlength: 255
        },
        country: {
          required: true
        },
        size: {
          required: true
        },
        email: {
          required: {
            depends: function depends() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          email: true,
          maxlength: 255
        }
      },
      messages: false,
      submitHandler: function submitHandler(form, event) {
        event.preventDefault();
        var rowData = new FormData(form);
        var url = form.getAttribute('data-url');
        var successMessage = document.querySelector('.webinar-digital .contact-form .success-message');
        var successHeading = document.querySelector('.webinar-digital .contact-form .form-header');

        window.handleFormSubmit(url, rowData, {
          type: 'ContactForm'
        }).then(function (res) {
          if (res.data.status) {
            window.dataLayer.push({ 'event': 'WebinarWebFormSubmit' });
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // const firstName = document.getElementById("firstName").value;
            // const lastName = document.getElementById("lastName").value;
            // const email = document.getElementById("email").value;
            //
            // submitForm(firstName, lastName, email);

            var buttonModal = document.querySelector('.webinar-digital .contact-form form .main-btn');
            var modalWindow = document.querySelector('.modal-video');
            if (buttonModal && modalWindow) {
              var closeModal = function closeModal() {
                modalWindow.innerHTML = '';
                modalWindow.style.display = 'none';
              };

              if (modalWindow) {
                var videoId = modalWindow.dataset['videoid'];
                var iframe = '<div class="container">\n                                <div class="modal-video__iframe-container">\n                                    <iframe class="modal-video__iframe" src="https://www.youtube.com/embed/' + videoId + '/rel=0&showinfo=0&autoplay=0&loop=0&egm=0&showsearch=0&controls=0&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>\n                                </div>\n                            </div>';
                modalWindow.innerHTML = iframe;
                modalWindow.style.display = 'block';
              }

              modalWindow.addEventListener('click', function (e) {
                closeModal();
              });
              $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                  closeModal();
                }
              });
            }
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    });
  });

  var pinnedForm = function pinnedForm() {
    var form = document.getElementById('pined-form');
    var mainHeader = document.querySelector('.main-header');
    var mainContent = document.querySelector('.main-content');
    var formRect = form.getBoundingClientRect();

    window.addEventListener('scroll', function (e) {
      var mainHeaderRect = mainHeader.getBoundingClientRect();
      var mainContentRect = mainContent.getBoundingClientRect();
      if (mainHeaderRect.top + 50 < 0 && mainContentRect.bottom - formRect.height - 130 > 0) {
        form.classList.add('fixed-form');
      } else {
        form.classList.remove('fixed-form');
      }
      if (mainHeaderRect.top + 50 && mainContentRect.bottom - formRect.height - 130 < 0) {
        form.classList.add('stop-form');
      } else {
        form.classList.remove('stop-form');
      }
    });
  };

  pinnedForm();

  var appendCounties = function appendCounties() {
    var countrySelect = document.getElementById('countries');
    var countryNodes = countries.map(function (value) {
      return '<option value=' + value + '>' + value + '</option>';
    });

    countrySelect.innerHTML = '<option disabled selected>Country</option>' + countryNodes.join('');
  };

  var countDown = function countDown() {
    var countDownDate = new Date(2020, 5, 4, 11, 0, 0).getTime();

    var x = setInterval(function () {
      var now = new Date();

      now.setTime(now.getTime() + now.getTimezoneOffset() * 60 * 1000 - 5 * 3600 * 1000);

      var distance = countDownDate - now.getTime();

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);
      if (distance < 0) {
        clearInterval(x);
      } else {
        document.getElementById('countdown').innerHTML = '<div class="timer-block">' + days + '<span>days</span></div> :\n                <div class="timer-block">' + hours + '<span>hours</span></div> :\n                <div class="timer-block">' + minutes + '<span>minutes</span></div> :\n                <div class="timer-block">' + seconds + '<span>seconds</span></div>';
      }
    }, 1000);
  };

  appendCounties();
  countDown();
};

;
(function ($) {

  $(document).ready(function () {

    $(function () {
      $('.matchHeight').matchHeight(options);
    });

    $(".values__content--item").hover(function () {
      var value = $(this).html();
      $(".values__content--center").html(value);
    });
  });

  $(window).resize(function () {});
})(jQuery);