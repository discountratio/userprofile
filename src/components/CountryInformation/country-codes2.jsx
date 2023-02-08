const countryCodes = [
    {
      "Country": "Afghanistan",
      "code2": "AF",
      "code3": "AFG",
      "Numeric": 4
    },
    {
      "Country": "Albania",
      "code2": "AL",
      "code3": "ALB",
      "Numeric": 8
    },
    {
      "Country": "Algeria",
      "code2": "DZ",
      "code3": "DZA",
      "Numeric": 12
    },
    {
      "Country": "American Samoa",
      "code2": "AS",
      "code3": "ASM",
      "Numeric": 16
    },
    {
      "Country": "Andorra",
      "code2": "AD",
      "code3": "AND",
      "Numeric": 20
    },
    {
      "Country": "Angola",
      "code2": "AO",
      "code3": "AGO",
      "Numeric": 24
    },
    {
      "Country": "Anguilla",
      "code2": "AI",
      "code3": "AIA",
      "Numeric": 660
    },
    {
      "Country": "Antarctica",
      "code2": "AQ",
      "code3": "ATA",
      "Numeric": 10
    },
    {
      "Country": "Antigua and Barbuda",
      "code2": "AG",
      "code3": "ATG",
      "Numeric": 28
    },
    {
      "Country": "Argentina",
      "code2": "AR",
      "code3": "ARG",
      "Numeric": 32
    },
    {
      "Country": "Armenia",
      "code2": "AM",
      "code3": "ARM",
      "Numeric": 51
    },
    {
      "Country": "Aruba",
      "code2": "AW",
      "code3": "ABW",
      "Numeric": 533
    },
    {
      "Country": "Australia",
      "code2": "AU",
      "code3": "AUS",
      "Numeric": 36
    },
    {
      "Country": "Austria",
      "code2": "AT",
      "code3": "AUT",
      "Numeric": 40
    },
    {
      "Country": "Azerbaijan",
      "code2": "AZ",
      "code3": "AZE",
      "Numeric": 31
    },
    {
      "Country": "Bahamas (the)",
      "code2": "BS",
      "code3": "BHS",
      "Numeric": 44
    },
    {
      "Country": "Bahrain",
      "code2": "BH",
      "code3": "BHR",
      "Numeric": 48
    },
    {
      "Country": "Bangladesh",
      "code2": "BD",
      "code3": "BGD",
      "Numeric": 50
    },
    {
      "Country": "Barbados",
      "code2": "BB",
      "code3": "BRB",
      "Numeric": 52
    },
    {
      "Country": "Belarus",
      "code2": "BY",
      "code3": "BLR",
      "Numeric": 112
    },
    {
      "Country": "Belgium",
      "code2": "BE",
      "code3": "BEL",
      "Numeric": 56
    },
    {
      "Country": "Belize",
      "code2": "BZ",
      "code3": "BLZ",
      "Numeric": 84
    },
    {
      "Country": "Benin",
      "code2": "BJ",
      "code3": "BEN",
      "Numeric": 204
    },
    {
      "Country": "Bermuda",
      "code2": "BM",
      "code3": "BMU",
      "Numeric": 60
    },
    {
      "Country": "Bhutan",
      "code2": "BT",
      "code3": "BTN",
      "Numeric": 64
    },
    {
      "Country": "Bolivia (Plurinational State of)",
      "code2": "BO",
      "code3": "BOL",
      "Numeric": 68
    },
    {
      "Country": "Bonaire, Sint Eustatius and Saba",
      "code2": "BQ",
      "code3": "BES",
      "Numeric": 535
    },
    {
      "Country": "Bosnia and Herzegovina",
      "code2": "BA",
      "code3": "BIH",
      "Numeric": 70
    },
    {
      "Country": "Botswana",
      "code2": "BW",
      "code3": "BWA",
      "Numeric": 72
    },
    {
      "Country": "Bouvet Island",
      "code2": "BV",
      "code3": "BVT",
      "Numeric": 74
    },
    {
      "Country": "Brazil",
      "code2": "BR",
      "code3": "BRA",
      "Numeric": 76
    },
    {
      "Country": "British Indian Ocean Territory (the)",
      "code2": "IO",
      "code3": "IOT",
      "Numeric": 86
    },
    {
      "Country": "Brunei Darussalam",
      "code2": "BN",
      "code3": "BRN",
      "Numeric": 96
    },
    {
      "Country": "Bulgaria",
      "code2": "BG",
      "code3": "BGR",
      "Numeric": 100
    },
    {
      "Country": "Burkina Faso",
      "code2": "BF",
      "code3": "BFA",
      "Numeric": 854
    },
    {
      "Country": "Burundi",
      "code2": "BI",
      "code3": "BDI",
      "Numeric": 108
    },
    {
      "Country": "Cabo Verde",
      "code2": "CV",
      "code3": "CPV",
      "Numeric": 132
    },
    {
      "Country": "Cambodia",
      "code2": "KH",
      "code3": "KHM",
      "Numeric": 116
    },
    {
      "Country": "Cameroon",
      "code2": "CM",
      "code3": "CMR",
      "Numeric": 120
    },
    {
      "Country": "Canada",
      "code2": "CA",
      "code3": "CAN",
      "Numeric": 124
    },
    {
      "Country": "Cayman Islands (the)",
      "code2": "KY",
      "code3": "CYM",
      "Numeric": 136
    },
    {
      "Country": "Central African Republic (the)",
      "code2": "CF",
      "code3": "CAF",
      "Numeric": 140
    },
    {
      "Country": "Chad",
      "code2": "TD",
      "code3": "TCD",
      "Numeric": 148
    },
    {
      "Country": "Chile",
      "code2": "CL",
      "code3": "CHL",
      "Numeric": 152
    },
    {
      "Country": "China",
      "code2": "CN",
      "code3": "CHN",
      "Numeric": 156
    },
    {
      "Country": "Christmas Island",
      "code2": "CX",
      "code3": "CXR",
      "Numeric": 162
    },
    {
      "Country": "Cocos (Keeling) Islands (the)",
      "code2": "CC",
      "code3": "CCK",
      "Numeric": 166
    },
    {
      "Country": "Colombia",
      "code2": "CO",
      "code3": "COL",
      "Numeric": 170
    },
    {
      "Country": "Comoros (the)",
      "code2": "KM",
      "code3": "COM",
      "Numeric": 174
    },
    {
      "Country": "Congo (the Democratic Republic of the)",
      "code2": "CD",
      "code3": "COD",
      "Numeric": 180
    },
    {
      "Country": "Congo (the)",
      "code2": "CG",
      "code3": "COG",
      "Numeric": 178
    },
    {
      "Country": "Cook Islands (the)",
      "code2": "CK",
      "code3": "COK",
      "Numeric": 184
    },
    {
      "Country": "Costa Rica",
      "code2": "CR",
      "code3": "CRI",
      "Numeric": 188
    },
    {
      "Country": "Croatia",
      "code2": "HR",
      "code3": "HRV",
      "Numeric": 191
    },
    {
      "Country": "Cuba",
      "code2": "CU",
      "code3": "CUB",
      "Numeric": 192
    },
    {
      "Country": "Curaçao",
      "code2": "CW",
      "code3": "CUW",
      "Numeric": 531
    },
    {
      "Country": "Cyprus",
      "code2": "CY",
      "code3": "CYP",
      "Numeric": 196
    },
    {
      "Country": "Czechia",
      "code2": "CZ",
      "code3": "CZE",
      "Numeric": 203
    },
    {
      "Country": "Côte d'Ivoire",
      "code2": "CI",
      "code3": "CIV",
      "Numeric": 384
    },
    {
      "Country": "Denmark",
      "code2": "DK",
      "code3": "DNK",
      "Numeric": 208
    },
    {
      "Country": "Djibouti",
      "code2": "DJ",
      "code3": "DJI",
      "Numeric": 262
    },
    {
      "Country": "Dominica",
      "code2": "DM",
      "code3": "DMA",
      "Numeric": 212
    },
    {
      "Country": "Dominican Republic (the)",
      "code2": "DO",
      "code3": "DOM",
      "Numeric": 214
    },
    {
      "Country": "Ecuador",
      "code2": "EC",
      "code3": "ECU",
      "Numeric": 218
    },
    {
      "Country": "Egypt",
      "code2": "EG",
      "code3": "EGY",
      "Numeric": 818
    },
    {
      "Country": "El Salvador",
      "code2": "SV",
      "code3": "SLV",
      "Numeric": 222
    },
    {
      "Country": "Equatorial Guinea",
      "code2": "GQ",
      "code3": "GNQ",
      "Numeric": 226
    },
    {
      "Country": "Eritrea",
      "code2": "ER",
      "code3": "ERI",
      "Numeric": 232
    },
    {
      "Country": "Estonia",
      "code2": "EE",
      "code3": "EST",
      "Numeric": 233
    },
    {
      "Country": "Eswatini",
      "code2": "SZ",
      "code3": "SWZ",
      "Numeric": 748
    },
    {
      "Country": "Ethiopia",
      "code2": "ET",
      "code3": "ETH",
      "Numeric": 231
    },
    {
      "Country": "Falkland Islands (the) [Malvinas]",
      "code2": "FK",
      "code3": "FLK",
      "Numeric": 238
    },
    {
      "Country": "Faroe Islands (the)",
      "code2": "FO",
      "code3": "FRO",
      "Numeric": 234
    },
    {
      "Country": "Fiji",
      "code2": "FJ",
      "code3": "FJI",
      "Numeric": 242
    },
    {
      "Country": "Finland",
      "code2": "FI",
      "code3": "FIN",
      "Numeric": 246
    },
    {
      "Country": "France",
      "code2": "FR",
      "code3": "FRA",
      "Numeric": 250
    },
    {
      "Country": "French Guiana",
      "code2": "GF",
      "code3": "GUF",
      "Numeric": 254
    },
    {
      "Country": "French Polynesia",
      "code2": "PF",
      "code3": "PYF",
      "Numeric": 258
    },
    {
      "Country": "French Southern Territories (the)",
      "code2": "TF",
      "code3": "ATF",
      "Numeric": 260
    },
    {
      "Country": "Gabon",
      "code2": "GA",
      "code3": "GAB",
      "Numeric": 266
    },
    {
      "Country": "Gambia (the)",
      "code2": "GM",
      "code3": "GMB",
      "Numeric": 270
    },
    {
      "Country": "Georgia",
      "code2": "GE",
      "code3": "GEO",
      "Numeric": 268
    },
    {
      "Country": "Germany",
      "code2": "DE",
      "code3": "DEU",
      "Numeric": 276
    },
    {
      "Country": "Ghana",
      "code2": "GH",
      "code3": "GHA",
      "Numeric": 288
    },
    {
      "Country": "Gibraltar",
      "code2": "GI",
      "code3": "GIB",
      "Numeric": 292
    },
    {
      "Country": "Greece",
      "code2": "GR",
      "code3": "GRC",
      "Numeric": 300
    },
    {
      "Country": "Greenland",
      "code2": "GL",
      "code3": "GRL",
      "Numeric": 304
    },
    {
      "Country": "Grenada",
      "code2": "GD",
      "code3": "GRD",
      "Numeric": 308
    },
    {
      "Country": "Guadeloupe",
      "code2": "GP",
      "code3": "GLP",
      "Numeric": 312
    },
    {
      "Country": "Guam",
      "code2": "GU",
      "code3": "GUM",
      "Numeric": 316
    },
    {
      "Country": "Guatemala",
      "code2": "GT",
      "code3": "GTM",
      "Numeric": 320
    },
    {
      "Country": "Guernsey",
      "code2": "GG",
      "code3": "GGY",
      "Numeric": 831
    },
    {
      "Country": "Guinea",
      "code2": "GN",
      "code3": "GIN",
      "Numeric": 324
    },
    {
      "Country": "Guinea-Bissau",
      "code2": "GW",
      "code3": "GNB",
      "Numeric": 624
    },
    {
      "Country": "Guyana",
      "code2": "GY",
      "code3": "GUY",
      "Numeric": 328
    },
    {
      "Country": "Haiti",
      "code2": "HT",
      "code3": "HTI",
      "Numeric": 332
    },
    {
      "Country": "Heard Island and McDonald Islands",
      "code2": "HM",
      "code3": "HMD",
      "Numeric": 334
    },
    {
      "Country": "Holy See (the)",
      "code2": "VA",
      "code3": "VAT",
      "Numeric": 336
    },
    {
      "Country": "Honduras",
      "code2": "HN",
      "code3": "HND",
      "Numeric": 340
    },
    {
      "Country": "Hong Kong",
      "code2": "HK",
      "code3": "HKG",
      "Numeric": 344
    },
    {
      "Country": "Hungary",
      "code2": "HU",
      "code3": "HUN",
      "Numeric": 348
    },
    {
      "Country": "Iceland",
      "code2": "IS",
      "code3": "ISL",
      "Numeric": 352
    },
    {
      "Country": "India",
      "code2": "IN",
      "code3": "IND",
      "Numeric": 356
    },
    {
      "Country": "Indonesia",
      "code2": "ID",
      "code3": "IDN",
      "Numeric": 360
    },
    {
      "Country": "Iran (Islamic Republic of)",
      "code2": "IR",
      "code3": "IRN",
      "Numeric": 364
    },
    {
      "Country": "Iraq",
      "code2": "IQ",
      "code3": "IRQ",
      "Numeric": 368
    },
    {
      "Country": "Ireland",
      "code2": "IE",
      "code3": "IRL",
      "Numeric": 372
    },
    {
      "Country": "Isle of Man",
      "code2": "IM",
      "code3": "IMN",
      "Numeric": 833
    },
    {
      "Country": "Israel",
      "code2": "IL",
      "code3": "ISR",
      "Numeric": 376
    },
    {
      "Country": "Italy",
      "code2": "IT",
      "code3": "ITA",
      "Numeric": 380
    },
    {
      "Country": "Jamaica",
      "code2": "JM",
      "code3": "JAM",
      "Numeric": 388
    },
    {
      "Country": "Japan",
      "code2": "JP",
      "code3": "JPN",
      "Numeric": 392
    },
    {
      "Country": "Jersey",
      "code2": "JE",
      "code3": "JEY",
      "Numeric": 832
    },
    {
      "Country": "Jordan",
      "code2": "JO",
      "code3": "JOR",
      "Numeric": 400
    },
    {
      "Country": "Kazakhstan",
      "code2": "KZ",
      "code3": "KAZ",
      "Numeric": 398
    },
    {
      "Country": "Kenya",
      "code2": "KE",
      "code3": "KEN",
      "Numeric": 404
    },
    {
      "Country": "Kiribati",
      "code2": "KI",
      "code3": "KIR",
      "Numeric": 296
    },
    {
      "Country": "Korea (the Democratic People's Republic of)",
      "code2": "KP",
      "code3": "PRK",
      "Numeric": 408
    },
    {
      "Country": "Korea (the Republic of)",
      "code2": "KR",
      "code3": "KOR",
      "Numeric": 410
    },
    {
      "Country": "Kuwait",
      "code2": "KW",
      "code3": "KWT",
      "Numeric": 414
    },
    {
      "Country": "Kyrgyzstan",
      "code2": "KG",
      "code3": "KGZ",
      "Numeric": 417
    },
    {
      "Country": "Lao People's Democratic Republic (the)",
      "code2": "LA",
      "code3": "LAO",
      "Numeric": 418
    },
    {
      "Country": "Latvia",
      "code2": "LV",
      "code3": "LVA",
      "Numeric": 428
    },
    {
      "Country": "Lebanon",
      "code2": "LB",
      "code3": "LBN",
      "Numeric": 422
    },
    {
      "Country": "Lesotho",
      "code2": "LS",
      "code3": "LSO",
      "Numeric": 426
    },
    {
      "Country": "Liberia",
      "code2": "LR",
      "code3": "LBR",
      "Numeric": 430
    },
    {
      "Country": "Libya",
      "code2": "LY",
      "code3": "LBY",
      "Numeric": 434
    },
    {
      "Country": "Liechtenstein",
      "code2": "LI",
      "code3": "LIE",
      "Numeric": 438
    },
    {
      "Country": "Lithuania",
      "code2": "LT",
      "code3": "LTU",
      "Numeric": 440
    },
    {
      "Country": "Luxembourg",
      "code2": "LU",
      "code3": "LUX",
      "Numeric": 442
    },
    {
      "Country": "Macao",
      "code2": "MO",
      "code3": "MAC",
      "Numeric": 446
    },
    {
      "Country": "Madagascar",
      "code2": "MG",
      "code3": "MDG",
      "Numeric": 450
    },
    {
      "Country": "Malawi",
      "code2": "MW",
      "code3": "MWI",
      "Numeric": 454
    },
    {
      "Country": "Malaysia",
      "code2": "MY",
      "code3": "MYS",
      "Numeric": 458
    },
    {
      "Country": "Maldives",
      "code2": "MV",
      "code3": "MDV",
      "Numeric": 462
    },
    {
      "Country": "Mali",
      "code2": "ML",
      "code3": "MLI",
      "Numeric": 466
    },
    {
      "Country": "Malta",
      "code2": "MT",
      "code3": "MLT",
      "Numeric": 470
    },
    {
      "Country": "Marshall Islands (the)",
      "code2": "MH",
      "code3": "MHL",
      "Numeric": 584
    },
    {
      "Country": "Martinique",
      "code2": "MQ",
      "code3": "MTQ",
      "Numeric": 474
    },
    {
      "Country": "Mauritania",
      "code2": "MR",
      "code3": "MRT",
      "Numeric": 478
    },
    {
      "Country": "Mauritius",
      "code2": "MU",
      "code3": "MUS",
      "Numeric": 480
    },
    {
      "Country": "Mayotte",
      "code2": "YT",
      "code3": "MYT",
      "Numeric": 175
    },
    {
      "Country": "Mexico",
      "code2": "MX",
      "code3": "MEX",
      "Numeric": 484
    },
    {
      "Country": "Micronesia (Federated States of)",
      "code2": "FM",
      "code3": "FSM",
      "Numeric": 583
    },
    {
      "Country": "Moldova (the Republic of)",
      "code2": "MD",
      "code3": "MDA",
      "Numeric": 498
    },
    {
      "Country": "Monaco",
      "code2": "MC",
      "code3": "MCO",
      "Numeric": 492
    },
    {
      "Country": "Mongolia",
      "code2": "MN",
      "code3": "MNG",
      "Numeric": 496
    },
    {
      "Country": "Montenegro",
      "code2": "ME",
      "code3": "MNE",
      "Numeric": 499
    },
    {
      "Country": "Montserrat",
      "code2": "MS",
      "code3": "MSR",
      "Numeric": 500
    },
    {
      "Country": "Morocco",
      "code2": "MA",
      "code3": "MAR",
      "Numeric": 504
    },
    {
      "Country": "Mozambique",
      "code2": "MZ",
      "code3": "MOZ",
      "Numeric": 508
    },
    {
      "Country": "Myanmar",
      "code2": "MM",
      "code3": "MMR",
      "Numeric": 104
    },
    {
      "Country": "Namibia",
      "code2": "NA",
      "code3": "NAM",
      "Numeric": 516
    },
    {
      "Country": "Nauru",
      "code2": "NR",
      "code3": "NRU",
      "Numeric": 520
    },
    {
      "Country": "Nepal",
      "code2": "NP",
      "code3": "NPL",
      "Numeric": 524
    },
    {
      "Country": "Netherlands (the)",
      "code2": "NL",
      "code3": "NLD",
      "Numeric": 528
    },
    {
      "Country": "New Caledonia",
      "code2": "NC",
      "code3": "NCL",
      "Numeric": 540
    },
    {
      "Country": "New Zealand",
      "code2": "NZ",
      "code3": "NZL",
      "Numeric": 554
    },
    {
      "Country": "Nicaragua",
      "code2": "NI",
      "code3": "NIC",
      "Numeric": 558
    },
    {
      "Country": "Niger (the)",
      "code2": "NE",
      "code3": "NER",
      "Numeric": 562
    },
    {
      "Country": "Nigeria",
      "code2": "NG",
      "code3": "NGA",
      "Numeric": 566
    },
    {
      "Country": "Niue",
      "code2": "NU",
      "code3": "NIU",
      "Numeric": 570
    },
    {
      "Country": "Norfolk Island",
      "code2": "NF",
      "code3": "NFK",
      "Numeric": 574
    },
    {
      "Country": "Northern Mariana Islands (the)",
      "code2": "MP",
      "code3": "MNP",
      "Numeric": 580
    },
    {
      "Country": "Norway",
      "code2": "NO",
      "code3": "NOR",
      "Numeric": 578
    },
    {
      "Country": "Oman",
      "code2": "OM",
      "code3": "OMN",
      "Numeric": 512
    },
    {
      "Country": "Pakistan",
      "code2": "PK",
      "code3": "PAK",
      "Numeric": 586
    },
    {
      "Country": "Palau",
      "code2": "PW",
      "code3": "PLW",
      "Numeric": 585
    },
    {
      "Country": "Palestine, State of",
      "code2": "PS",
      "code3": "PSE",
      "Numeric": 275
    },
    {
      "Country": "Panama",
      "code2": "PA",
      "code3": "PAN",
      "Numeric": 591
    },
    {
      "Country": "Papua New Guinea",
      "code2": "PG",
      "code3": "PNG",
      "Numeric": 598
    },
    {
      "Country": "Paraguay",
      "code2": "PY",
      "code3": "PRY",
      "Numeric": 600
    },
    {
      "Country": "Peru",
      "code2": "PE",
      "code3": "PER",
      "Numeric": 604
    },
    {
      "Country": "Philippines (the)",
      "code2": "PH",
      "code3": "PHL",
      "Numeric": 608
    },
    {
      "Country": "Pitcairn",
      "code2": "PN",
      "code3": "PCN",
      "Numeric": 612
    },
    {
      "Country": "Poland",
      "code2": "PL",
      "code3": "POL",
      "Numeric": 616
    },
    {
      "Country": "Portugal",
      "code2": "PT",
      "code3": "PRT",
      "Numeric": 620
    },
    {
      "Country": "Puerto Rico",
      "code2": "PR",
      "code3": "PRI",
      "Numeric": 630
    },
    {
      "Country": "Qatar",
      "code2": "QA",
      "code3": "QAT",
      "Numeric": 634
    },
    {
      "Country": "Republic of North Macedonia",
      "code2": "MK",
      "code3": "MKD",
      "Numeric": 807
    },
    {
      "Country": "Romania",
      "code2": "RO",
      "code3": "ROU",
      "Numeric": 642
    },
    {
      "Country": "Russian Federation (the)",
      "code2": "RU",
      "code3": "RUS",
      "Numeric": 643
    },
    {
      "Country": "Rwanda",
      "code2": "RW",
      "code3": "RWA",
      "Numeric": 646
    },
    {
      "Country": "Réunion",
      "code2": "RE",
      "code3": "REU",
      "Numeric": 638
    },
    {
      "Country": "Saint Barthélemy",
      "code2": "BL",
      "code3": "BLM",
      "Numeric": 652
    },
    {
      "Country": "Saint Helena, Ascension and Tristan da Cunha",
      "code2": "SH",
      "code3": "SHN",
      "Numeric": 654
    },
    {
      "Country": "Saint Kitts and Nevis",
      "code2": "KN",
      "code3": "KNA",
      "Numeric": 659
    },
    {
      "Country": "Saint Lucia",
      "code2": "LC",
      "code3": "LCA",
      "Numeric": 662
    },
    {
      "Country": "Saint Martin (French part)",
      "code2": "MF",
      "code3": "MAF",
      "Numeric": 663
    },
    {
      "Country": "Saint Pierre and Miquelon",
      "code2": "PM",
      "code3": "SPM",
      "Numeric": 666
    },
    {
      "Country": "Saint Vincent and the Grenadines",
      "code2": "VC",
      "code3": "VCT",
      "Numeric": 670
    },
    {
      "Country": "Samoa",
      "code2": "WS",
      "code3": "WSM",
      "Numeric": 882
    },
    {
      "Country": "San Marino",
      "code2": "SM",
      "code3": "SMR",
      "Numeric": 674
    },
    {
      "Country": "Sao Tome and Principe",
      "code2": "ST",
      "code3": "STP",
      "Numeric": 678
    },
    {
      "Country": "Saudi Arabia",
      "code2": "SA",
      "code3": "SAU",
      "Numeric": 682
    },
    {
      "Country": "Senegal",
      "code2": "SN",
      "code3": "SEN",
      "Numeric": 686
    },
    {
      "Country": "Serbia",
      "code2": "RS",
      "code3": "SRB",
      "Numeric": 688
    },
    {
      "Country": "Seychelles",
      "code2": "SC",
      "code3": "SYC",
      "Numeric": 690
    },
    {
      "Country": "Sierra Leone",
      "code2": "SL",
      "code3": "SLE",
      "Numeric": 694
    },
    {
      "Country": "Singapore",
      "code2": "SG",
      "code3": "SGP",
      "Numeric": 702
    },
    {
      "Country": "Sint Maarten (Dutch part)",
      "code2": "SX",
      "code3": "SXM",
      "Numeric": 534
    },
    {
      "Country": "Slovakia",
      "code2": "SK",
      "code3": "SVK",
      "Numeric": 703
    },
    {
      "Country": "Slovenia",
      "code2": "SI",
      "code3": "SVN",
      "Numeric": 705
    },
    {
      "Country": "Solomon Islands",
      "code2": "SB",
      "code3": "SLB",
      "Numeric": 90
    },
    {
      "Country": "Somalia",
      "code2": "SO",
      "code3": "SOM",
      "Numeric": 706
    },
    {
      "Country": "South Africa",
      "code2": "ZA",
      "code3": "ZAF",
      "Numeric": 710
    },
    {
      "Country": "South Georgia and the South Sandwich Islands",
      "code2": "GS",
      "code3": "SGS",
      "Numeric": 239
    },
    {
      "Country": "South Sudan",
      "code2": "SS",
      "code3": "SSD",
      "Numeric": 728
    },
    {
      "Country": "Spain",
      "code2": "ES",
      "code3": "ESP",
      "Numeric": 724
    },
    {
      "Country": "Sri Lanka",
      "code2": "LK",
      "code3": "LKA",
      "Numeric": 144
    },
    {
      "Country": "Sudan (the)",
      "code2": "SD",
      "code3": "SDN",
      "Numeric": 729
    },
    {
      "Country": "Suriname",
      "code2": "SR",
      "code3": "SUR",
      "Numeric": 740
    },
    {
      "Country": "Svalbard and Jan Mayen",
      "code2": "SJ",
      "code3": "SJM",
      "Numeric": 744
    },
    {
      "Country": "Sweden",
      "code2": "SE",
      "code3": "SWE",
      "Numeric": 752
    },
    {
      "Country": "Switzerland",
      "code2": "CH",
      "code3": "CHE",
      "Numeric": 756
    },
    {
      "Country": "Syrian Arab Republic",
      "code2": "SY",
      "code3": "SYR",
      "Numeric": 760
    },
    {
      "Country": "Taiwan (Province of China)",
      "code2": "TW",
      "code3": "TWN",
      "Numeric": 158
    },
    {
      "Country": "Tajikistan",
      "code2": "TJ",
      "code3": "TJK",
      "Numeric": 762
    },
    {
      "Country": "Tanzania, United Republic of",
      "code2": "TZ",
      "code3": "TZA",
      "Numeric": 834
    },
    {
      "Country": "Thailand",
      "code2": "TH",
      "code3": "THA",
      "Numeric": 764
    },
    {
      "Country": "Timor-Leste",
      "code2": "TL",
      "code3": "TLS",
      "Numeric": 626
    },
    {
      "Country": "Togo",
      "code2": "TG",
      "code3": "TGO",
      "Numeric": 768
    },
    {
      "Country": "Tokelau",
      "code2": "TK",
      "code3": "TKL",
      "Numeric": 772
    },
    {
      "Country": "Tonga",
      "code2": "TO",
      "code3": "TON",
      "Numeric": 776
    },
    {
      "Country": "Trinidad and Tobago",
      "code2": "TT",
      "code3": "TTO",
      "Numeric": 780
    },
    {
      "Country": "Tunisia",
      "code2": "TN",
      "code3": "TUN",
      "Numeric": 788
    },
    {
      "Country": "Turkey",
      "code2": "TR",
      "code3": "TUR",
      "Numeric": 792
    },
    {
      "Country": "Turkmenistan",
      "code2": "TM",
      "code3": "TKM",
      "Numeric": 795
    },
    {
      "Country": "Turks and Caicos Islands (the)",
      "code2": "TC",
      "code3": "TCA",
      "Numeric": 796
    },
    {
      "Country": "Tuvalu",
      "code2": "TV",
      "code3": "TUV",
      "Numeric": 798
    },
    {
      "Country": "Uganda",
      "code2": "UG",
      "code3": "UGA",
      "Numeric": 800
    },
    {
      "Country": "Ukraine",
      "code2": "UA",
      "code3": "UKR",
      "Numeric": 804
    },
    {
      "Country": "United Arab Emirates (the)",
      "code2": "AE",
      "code3": "ARE",
      "Numeric": 784
    },
    {
      "Country": "United Kingdom of Great Britain and Northern Ireland (the)",
      "code2": "GB",
      "code3": "GBR",
      "Numeric": 826
    },
    {
      "Country": "United States Minor Outlying Islands (the)",
      "code2": "UM",
      "code3": "UMI",
      "Numeric": 581
    },
    {
      "Country": "United States of America (the)",
      "code2": "US",
      "code3": "USA",
      "Numeric": 840
    },
    {
      "Country": "Uruguay",
      "code2": "UY",
      "code3": "URY",
      "Numeric": 858
    },
    {
      "Country": "Uzbekistan",
      "code2": "UZ",
      "code3": "UZB",
      "Numeric": 860
    },
    {
      "Country": "Vanuatu",
      "code2": "VU",
      "code3": "VUT",
      "Numeric": 548
    },
    {
      "Country": "Venezuela (Bolivarian Republic of)",
      "code2": "VE",
      "code3": "VEN",
      "Numeric": 862
    },
    {
      "Country": "Viet Nam",
      "code2": "VN",
      "code3": "VNM",
      "Numeric": 704
    },
    {
      "Country": "Virgin Islands (British)",
      "code2": "VG",
      "code3": "VGB",
      "Numeric": 92
    },
    {
      "Country": "Virgin Islands (U.S.)",
      "code2": "VI",
      "code3": "VIR",
      "Numeric": 850
    },
    {
      "Country": "Wallis and Futuna",
      "code2": "WF",
      "code3": "WLF",
      "Numeric": 876
    },
    {
      "Country": "Western Sahara",
      "code2": "EH",
      "code3": "ESH",
      "Numeric": 732
    },
    {
      "Country": "Yemen",
      "code2": "YE",
      "code3": "YEM",
      "Numeric": 887
    },
    {
      "Country": "Zambia",
      "code2": "ZM",
      "code3": "ZMB",
      "Numeric": 894
    },
    {
      "Country": "Zimbabwe",
      "code2": "ZW",
      "code3": "ZWE",
      "Numeric": 716
    },
    {
      "Country": "Åland Islands",
      "code2": "AX",
      "code3": "ALA",
      "Numeric": 248
    }
   ]
   export default countryCodes;