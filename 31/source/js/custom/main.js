const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'The Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'People \'s Republic of China',
  'Republic of China',
  'Christmas Island',
  'Cocos(Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote d\'Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'Gabon',
  'The Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea - Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'North Korea',
  'South Korea',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Nagorno - Karabakh',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Turkish Republic of Northern Cyprus',
  'Northern Mariana',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Barthelemy',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'Somaliland',
  'South Africa',
  'South Ossetia',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor - Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Transnistria Pridnestrovie',
  'Trinidad and Tobago',
  'Tristan da Cunha',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'British Virgin Islands',
  'Isle of Man',
  'US Virgin Islands',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

window.onload = () => {
  $('.webinar-digital .contact-form form').each(function () {
    $(this).validate({
      errorClass: 'has-error',
      validClass: 'has-success',
      showErrors: function (errorMap) {
        if (errorMap['attach']) Notify(uploadErrorMessage, notifyDelay);
        this.defaultShowErrors()
      },
      highlight: function (elem, errorClass, validClass) {
        $(elem)
            .parent()
            .addClass(errorClass)
            .removeClass(validClass)
      },
      unhighlight: function (elem, errorClass, validClass) {
        $(elem)
            .parent()
            .removeClass(errorClass)
            .addClass(validClass)
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
            depends: function () {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          email: true,
          maxlength: 255
        }
      },
      messages: false,
      submitHandler: function (form, event) {
        event.preventDefault();
        const rowData = new FormData(form);
        const url = form.getAttribute('data-url');
        const successMessage = document.querySelector('.webinar-digital .contact-form .success-message');
        const successHeading = document.querySelector('.webinar-digital .contact-form .form-header');

        window.handleFormSubmit(url, rowData, {
          type: 'ContactForm'
        }).then(res => {
          if (res.data.status) {
            window.dataLayer.push({'event': 'WebinarWebFormSubmit'});
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // const firstName = document.getElementById("firstName").value;
            // const lastName = document.getElementById("lastName").value;
            // const email = document.getElementById("email").value;
            //
            // submitForm(firstName, lastName, email);

            const buttonModal = document.querySelector('.webinar-digital .contact-form form .main-btn');
            const modalWindow = document.querySelector('.modal-video');
            if(buttonModal && modalWindow) {

              if (modalWindow) {
                const videoId = modalWindow.dataset['videoid'];
                const iframe = `<div class="container">
                                <div class="modal-video__iframe-container">
                                    <iframe class="modal-video__iframe" src="https://www.youtube.com/embed/${videoId}/rel=0&showinfo=0&autoplay=0&loop=0&egm=0&showsearch=0&controls=0&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>`
                modalWindow.innerHTML = iframe;
                modalWindow.style.display = 'block'

              }

              modalWindow.addEventListener('click', e => {
                closeModal();
              })
              $(document).keyup(e => {
                if(e.keyCode === 27){
                  closeModal();
                }
              })

              function closeModal() {
                modalWindow.innerHTML = '';
                modalWindow.style.display = 'none';
              }
            }

          }
        }).catch(error => {
          console.log(error);
        })
      }
    })
  });

  const pinnedForm = () => {
    const form = document.getElementById('pined-form');
    const mainHeader = document.querySelector('.main-header');
    const mainContent = document.querySelector('.main-content');
    const formRect = form.getBoundingClientRect();

    window.addEventListener('scroll', e => {
      const mainHeaderRect = mainHeader.getBoundingClientRect();
      const mainContentRect = mainContent.getBoundingClientRect();
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
    })
  };

  pinnedForm();

  const appendCounties = () => {
    const countrySelect = document.getElementById('countries');
    const countryNodes = countries.map(value => `<option value=${value}>${value}</option>`);

    countrySelect.innerHTML = `<option disabled selected>Country</option>${countryNodes.join('')}`;
  };

  const countDown = () => {
    const countDownDate = new Date(2020, 5, 4, 11, 0, 0).getTime();

    const x = setInterval(() => {
      const now = new Date();

      now.setTime(now.getTime() + now.getTimezoneOffset() * 60 * 1000 - 5 * 3600 * 1000);

      const distance = countDownDate - now.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(x);
      } else {
        document.getElementById('countdown').innerHTML = (
            `<div class="timer-block">${days}<span>days</span></div> :
                <div class="timer-block">${hours}<span>hours</span></div> :
                <div class="timer-block">${minutes}<span>minutes</span></div> :
                <div class="timer-block">${seconds}<span>seconds</span></div>`
        );
      }
    }, 1000);
  };

  appendCounties();
  countDown();
};

;
(function ($) {
  function onResize() {
    if ($(window).width() < 768) {
      $('.footer__menu .has-dropdown').on('click', function () {
        $(this).toggleClass('arrow-down');
        $('.arrow-down .toggle-menu').slideToggle('slow');
      });

      $('.footer__menu .has-dropdown').on('click', function (e) {
        e.preventDefault();

        var $this = $(this).find('.sub-menu');

        if ($this.hasClass('show')) {
          $this.removeClass('show');
        } else {
          $this.parent().find('.sub-menu').removeClass('show');
          $this.toggleClass('show');
        }
      });
    } else {
      $('.footer__menu .has-dropdown').off('click');
      $('.footer__menu .has-dropdown').off('click');
    }
  }


  $(document).ready(function () {

    onResize();
  });

  $(window).resize(function () {
    onResize();
  });
}(jQuery));

function refreshToken(cb, firstName, lastName, email) {
  const refreshToken = 'eyJhbGciOiJIUzUxMiIsInYiOiIyLjAiLCJraWQiOiJmMTY3ZTY2NC1lYjM0LTRkZmEtOTljNC0zNGNjNjE2YmY1YjYifQ.eyJ2ZXIiOiI2IiwiY2xpZW50SWQiOiJ1N2hkZFUyM1RUbXlvakZBcjV3UDJBIiwiY29kZSI6IjFGT0tIZHU4NnlfTkpnaG9weWxRdDZpLTJIQWhqWjE4USIsImlzcyI6InVybjp6b29tOmNvbm5lY3Q6Y2xpZW50aWQ6dTdoZGRVMjNUVG15b2pGQXI1d1AyQSIsImF1dGhlbnRpY2F0aW9uSWQiOiJlNzc5YmNmM2U5MmYwYmI0MWMzYjdjOTU0YjRkMGZkNSIsInVzZXJJZCI6Ik5KZ2hvcHlsUXQ2aS0ySEFoaloxOFEiLCJncm91cE51bWJlciI6MCwiYXVkIjoiaHR0cHM6Ly9vYXV0aC56b29tLnVzIiwiYWNjb3VudElkIjoibUxDNEJUT2dRUkdOamFRZjZPRzcxUSIsIm5iZiI6MTU5MDEzNzI3OSwiZXhwIjoyMDYzMTc3Mjc5LCJ0b2tlblR5cGUiOiJyZWZyZXNoX3Rva2VuIiwiaWF0IjoxNTkwMTM3Mjc5LCJqdGkiOiI4MGNmZGEzMy1mZjgxLTQ5MDUtODkyNS1iOWIyNTg1ZDFmMTciLCJ0b2xlcmFuY2VJZCI6MH0.HmGewDtpqthaRCV82M6Sr1J4eTAaehC6UZJntdCOAZautIyAQPD5izLGdlj8nrLQ_8JTXFCs5cVr5tr6FSot-Q';
  const url = 'https://api.zoom.us/v2/webinars/92245157641/registrants';

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InBGeGdfYWdzUUZlUEtiYXZkUFJoeVEiLCJleHAiOjE1OTA3NDE2MzAsImlhdCI6MTU5MDEzNjgzMX0.R85ZWKY1u65hFe4UxCVxrZ0oOrE1tphJMzP2i9ubefA");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");


  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", refreshToken);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  fetch(url, requestOptions)
      .then(function (result) {
        return result.json();
      })
      .then(function (response) {
        const at = response["access_token"];
        cb(at, firstName, lastName, email);
      })
      .catch(error => console.log('error', error));
}

function addWebinarMember(at, firstName, lastName, email) {

  const user = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
  };

  var myHeaders = new Headers();
  myHeaders.append("Authorization", at);
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(user),
    redirect: 'follow',
  };

  fetch("https://api.zoom.us/v2/webinars/92245157641/registrants", requestOptions)
      .then(response => response.text())
      .catch(error => console.log('error', error));
}

function submitForm(firstName, lastName, email) {
  refreshToken(addWebinarMember, firstName,lastName,email);
}