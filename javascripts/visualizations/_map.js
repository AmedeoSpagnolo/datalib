;class Map extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      // 'gap':                10,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
         {
            "Latitude":"22.3179957",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1679394",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Pottinger Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3218995",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1622952",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.31704701",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.17315062",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2774433",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1708277",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.275416",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1797246",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2854106",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.148344",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4116622",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2101924",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3179061",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1738466",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4116651",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2101371",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3011761",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.173941",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.301199",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1740474",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2976207",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1719888",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2858149",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1476554",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2862264",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1470048",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3205571",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1628391",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.3066927",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2250609",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2885156",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455629",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.320426",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1631178",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.274797",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1794825",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3131791",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.0449448",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3012013",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1750402",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.278065",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1707874",
            "Deal":"Zhuhai Chimelong Ocean Kingdom"
         },
         {
            "Latitude":"22.31283",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.045193333333",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3264851",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1531494",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3127616666667",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.045201666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3128",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.045165",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3127933333333",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.045201666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2976328",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1738615",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2835927",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1539701",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Le Meridien Cyberport",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2808715",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.18192543",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.28021411",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.182664",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2850233",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1545252",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2841837",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1662948",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2778079",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1592752",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2787833333333",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.16671",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2777003",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1603311",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2471974",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1746362",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.24743683",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.17471189",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2999068",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1679946",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.271333",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1500222",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31315596",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.04491123",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.28671888",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.16006574",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.24580842",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.17605171",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2779416",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1665548",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.4585188",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0032704",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4585188",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0032704",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2700206",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1498342",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2769477",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1803586",
            "Deal":"Lemon King - Liquorice Tangerine"
         },
         {
            "Latitude":"22.2970646",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1666653",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3042286",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1696201",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2991984",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1794959",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"22.24942764",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"113.94213017",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2955205",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1723139",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.4571808",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0028986",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4584019",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0040137",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3171437",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1734286",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2949796",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1751935",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.3077539",
            "Hotel":"HKG - Noble Park Hotel",
            "Longitude":"114.1718881",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3077421",
            "Hotel":"HKG - Noble Park Hotel",
            "Longitude":"114.1718998",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.284685",
            "Hotel":"HKG - The Mercer Hong Kong",
            "Longitude":"114.151688333333",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2979282",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1738269",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2994883333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.168698333333",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2749281",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1800974",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2778484",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1708771",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2749281",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1800974",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2778671",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1708972",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Pottinger Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3218721",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1625218",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2982081",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.174159",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.278344",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1719194",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2773594",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1801905",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2998559",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.168041",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2776144",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1807476",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2975533",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1734138",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3691173",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1204375",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2975492",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1734339",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2951656",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1690709",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.3010836",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1739265",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.297447",
            "Hotel":"HKG - Hotel Panorama by Rhombus",
            "Longitude":"114.1747384",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"22.2976207",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1719888",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2821505",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1845336",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2821582",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1845264",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2742496",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1785937",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3013747",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1744504",
            "Deal":"Ma Pak Leung - Viga-Pro Pill"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2999068",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1679946",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2848461",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"114.1919131",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2721898",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1786002",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2885005",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1421239",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2885005",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1421239",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2884496",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1421704",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2842528",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1533405",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3066432",
            "Hotel":"HKG - Hotel Madera Hong Kong",
            "Longitude":"114.1719682",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.411554",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.2101171",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3683372",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1214077",
            "Deal":"Thomas Earnshaw Bauer_(Mechanical Skeleton) ES-8049-06"
         },
         {
            "Latitude":"22.2977766",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1732638",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2754342",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1797539",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3029938",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1695329",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2978845",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1689204",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2846857",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1923776",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.27476",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1795211",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2747312",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1795495",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2817117",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1840916",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.2786394",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1869541",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.3240717",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1731007",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2817481",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1841042",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.32113",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1617",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2764922",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1805009",
            "Deal":"Ocean Park Hong Kong E-ticket"
         },
         {
            "Latitude":"22.321115",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.16216",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.321435",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162166666667",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.28893908",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.15073787",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.313605",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.04538",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2979956",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733204",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2979975",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733867",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3050294",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1717604",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.4137774",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2123847",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2775808",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1713386",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.4137752",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2124356",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3000418",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1855682",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3000503",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1855635",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Hotel Pravo Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3073906",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1719657",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3012014",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1730247",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2951643",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1701219",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.24752673",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.17464589",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2786719",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1818131",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1927027",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2848297",
            "Hotel":"HKG - The Mercer Hong Kong",
            "Longitude":"114.1515992",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2968766666667",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.168711666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2713924",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1499745",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2712796",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1498885",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2713307",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1499669",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2707516666667",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.15027",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3223917",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1643866",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.288512",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1470021",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2984508",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1769584",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2769096",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1805176",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.277366",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1700049",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.296132",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1691413",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3013621",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1850396",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2976233",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1736406",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3083487",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2240924",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3067056",
            "Hotel":"HKG - Hotel Madera Hong Kong",
            "Longitude":"114.171924",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3067321",
            "Hotel":"HKG - Hotel Madera Hong Kong",
            "Longitude":"114.1719199",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3124964",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1708277",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2978022",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.172221",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2792071",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.1884019",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.4117271",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.211415",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3690263",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1202484",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Hotel Pravo Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2980104",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1776792",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Hotel Pravo Hong Kong",
            "Longitude":"0",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2970193",
            "Hotel":"HKG - Citadines Ashley Hong Kong",
            "Longitude":"114.170549",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3239079",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1739395",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2975647",
            "Hotel":"HKG - Citadines Ashley Hong Kong",
            "Longitude":"114.170131",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4125385",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2109705",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3175657",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1729642",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"22.2986333333333",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.177695",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2780798",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1707425",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2957528",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1724997",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"0",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2855053",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1477294",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3048103",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1692486",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2775018",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1704562",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3213082",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1619088",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2844055",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1926451",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2842598",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1930425",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2974442",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1711176",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4568317",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0028986",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2985449",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1771905",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3239998",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1730185",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2774114",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1700051",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3014472",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1745433",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3237447",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.172671",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2774286",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.17004",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3210726",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1619015",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3210541",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1617139",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3073994",
            "Hotel":"HKG - Noble Park Hotel",
            "Longitude":"114.1721203",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3075209",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712572",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2769454",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1803807",
            "Deal":"Lemon King - Liquorice Olives"
         },
         {
            "Latitude":"22.3071402",
            "Hotel":"HKG - Hotel Madera Hong Kong",
            "Longitude":"114.1714854",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2714013",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1499271",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2714159",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1498342",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.27099322",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.14960053",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3217692",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1700846",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Le Meridien Cyberport",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.24732886",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.17478852",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3023866",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1727319",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Perkin Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.29038",
            "Hotel":"HKG - City Garden Hotel",
            "Longitude":"114.1938637",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Harbour Bay Hotel",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2992216",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.18015",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.298186",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733822",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.298186",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733822",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2980716666667",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.177906666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3395196",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.04016879",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.284382",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1539124",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2997941",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1686807",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Le Meridien Cyberport",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Kowloon Food Safari"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3211066666667",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162301666667",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2987678",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1774782",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.4583738",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0036719",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2976579",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1736323",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2841164",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1929624",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3046143",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1691092",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3031511",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1714779",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2988166666667",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.18008",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2982849",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.17351",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3041777",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1696666",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3708814",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.1298577",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.370888",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.1298558",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2882823",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1424026",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2855821",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1476385",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2775202",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1808597",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2851942",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1924704",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2775202",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1808597",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3040396",
            "Hotel":"HKG - BP International",
            "Longitude":"114.169713",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.299981",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.185504",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2749361",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1792319",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2819849",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1843429",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2485983333333",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.173755",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2482566666667",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.173673333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2771583333333",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.160248333333",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3704353",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.1295708",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3704533",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.1295712",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2996029",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1856898",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.40801554",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.06006521",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3236624",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1727319",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3236624",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1727319",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2475783333333",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.17464",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.278572",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1530361",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2864757",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"114.2125703",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.246776",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1745433",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3265563",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1529926",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3042592",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.160168",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3008032",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1738618",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3007947",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1739032",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.277635",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.186171666667",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.27841",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.18546",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2770774",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1857958",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4541358",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0043344",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.298179",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1731499",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2999437",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1674837",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.297796",
            "Hotel":"HKG - Hotel Panorama by Rhombus",
            "Longitude":"114.1748155",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.3271306",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1706357",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2778733333333",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.179993333333",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3236624",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1727319",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2940814",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1725926",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2940814",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1725926",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2975107",
            "Hotel":"HKG - Hotel Panorama by Rhombus",
            "Longitude":"114.1742099",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4584019",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0040137",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2743485",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1796339",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2792267",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.1882906",
            "Deal":"Ma Pak Leung - Hou Cho Powder (Pack of 6)"
         },
         {
            "Latitude":"22.3075687",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1713719",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3076244",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712627",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3205571",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1628495",
            "Deal":"Lemon King - Pickled Limes"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2851885",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1919858",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.31866",
            "Hotel":"HKG - H1 Hotel Hong Kong",
            "Longitude":"114.168275",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3041777",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1696666",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.4571141",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0047107",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2974614",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1682625",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2974743",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1687564",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2884204",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1423562",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.32195",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162171666667",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3029141",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1699392",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2835726",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1540754",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2978828",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1736956",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31365",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.045666666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3136866666667",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.045783333333",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3084847",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.171385",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2476233333333",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.174763333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.3096634",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1699917",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2957076",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1738931",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2777557",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1710365",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3096634",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1699917",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3095763",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1699917",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"22.3095763",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1699917",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.24757572",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1746255",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3087447",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2271126",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.317245",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.217188333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3233166666667",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.188095",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2993159",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1803074",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3224016666667",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.161741666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2788026",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1869783",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.285192",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1481453",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.3004533",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1720952",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2994372",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1581254",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31954373",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.17499083",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31954996",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.17569613",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.32035603",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1752352",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.29487903",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.16734909",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2987766",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1779337",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2951586",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1683043",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.2988275",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778873",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2987766",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1779337",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2785101",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1865502",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2785342",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1865529",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2951857",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1727784",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2982618",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1740814",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2995674",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1731814",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2982618",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1740814",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2980147",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1687766",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3073818",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1713976",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3077711",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712903",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2986851",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.174949",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3077366",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712887",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2853111",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1920703",
            "Deal":"Big Bus Tour Single Route Ticket"
         },
         {
            "Latitude":"22.4112156",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2130375",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3214272",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1622887",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4139354",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2105531",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.41208564",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.21171509",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.299105",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1743858",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.288525",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455278",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2884657",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455054",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2844322",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1649291",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3147968",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1671483",
            "Deal":"Ma Pak Leung - Lok Mee Pill (Pack of 12)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3147968",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1671483",
            "Deal":"Ma Pak Leung - Viga-Pro Pill"
         },
         {
            "Latitude":"22.2848734",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1531736",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2983062",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1734957",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2780104",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1704486",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2779829",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1704522",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.285296",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1923776",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.277965",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1704482",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.4552585",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0062439",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2747284",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.179544",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1927027",
            "Deal":"AJ Hackett Macau Tower"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2947321",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1729919",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3690649",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1206645",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3240623",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1683979",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.295285",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.171553333333",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2848787",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1575261",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3013893",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1743575",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2984285",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1774666",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2947378",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1729904",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2947264",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1729907",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2774081",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1701745",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2955116",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1737537",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3076146",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712985",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.287475",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"114.1929349",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2864188",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.147159",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3016083",
            "Hotel":"HKG - The Perkin Hotel",
            "Longitude":"114.1735215",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - QA5 Testing",
            "Longitude":"114.1927027",
            "Deal":"Kowloon Food Safari"
         },
         {
            "Latitude":"22.4121221",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2117521",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2800197",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1684505",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Development",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3797114",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.1880119",
            "Deal":"Ma Pak Leung - On Kung Pill (Pack of 10)"
         },
         {
            "Latitude":"22.2945503",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1690628",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2981648",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1731739",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2993879",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1804588",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3077155",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.17128",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2986597",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1749174",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2986761",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1748962",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.283606",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1541189",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2785509",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1698819",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2782042",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1714339",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3198586",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1755651",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3198586",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1755651",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2988275",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778873",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2988275",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778873",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2988275",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778873",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3076549",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712781",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2984802",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1745969",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2983564",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1775256",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2995616",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1793555",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2840016666667",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.193431666667",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2884859",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1422168",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2854656",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1919492",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"22.2854871",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1919686",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"22.2854292",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1921425",
            "Deal":"MingCha - Tea Pot Set (with Jasmine Blossoms Tea)"
         },
         {
            "Latitude":"22.2885036",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455182",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.323931",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1730362",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2994413",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1802422",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4492294",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"113.9994561",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2750839",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1794989",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.2984885",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1749628",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2783679",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1823889",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2958743",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1742181",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2951424",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1724997",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2789588",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.1861925",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2986992",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1749164",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2753038",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1795933",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.24758968",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.17463346",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2997773",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1856898",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2778324",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1591967",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2862659",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1489938",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2782646",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1777944",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2870353",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1927469",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"22.2825746",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1524497",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2870317",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1927386",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"22.2749309",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1798836",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2749079",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1798882",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.30004068",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.17204732",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.287475",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.1929349",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2996675",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1675766",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2996675",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1675766",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2778253",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.17069982",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2860172",
            "Hotel":"HKG - Events counter",
            "Longitude":"114.1482085",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869812",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.1927491",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2822852",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1821601",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2775603",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1700846",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2748502",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1796359",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"22.2748677",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1789009",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3238584",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1728713",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3010017",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1732626",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2850408",
            "Hotel":"HKG - One96",
            "Longitude":"114.1523967",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2770181",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1792059",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2884764",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455224",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.288485",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.14552",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2842797",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1916345",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2741743",
            "Hotel":"HKG - Cosmo Hotel Hong Kong",
            "Longitude":"114.1784243",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3075845",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1711677",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2900599",
            "Hotel":"HKG - City Garden Hotel",
            "Longitude":"114.1942353",
            "Deal":"Ma Pak Leung - Hou Cho Powder (Pack of 6)"
         },
         {
            "Latitude":"22.2850709",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"114.1922836",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2994182",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1760759",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"22.2850713",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"114.1922929",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.321023",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.162096",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.321023",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.162096",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2728489",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.179964",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2850471",
            "Hotel":"HKG - The Jervois",
            "Longitude":"114.1508274",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.312537",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"114.170249",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3018666",
            "Hotel":"HKG - Popway Hotel",
            "Longitude":"114.1763082",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.298621",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1737539",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3010309",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1699917",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.307635",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1711878",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3234028",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.161587",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3204141",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1626855",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2856887",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1920989",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3080825",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1724857",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.275148",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1797404",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2776513",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.180581",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2776513",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.180581",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Express Causeway Bay Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2776513",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.180581",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2749672",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1801034",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.27903",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.184203333333",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2483914",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.174559",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3132016666667",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.04435",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2778122",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1803966",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.287475",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1929349",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3710525",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"114.1190613",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2996815",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1791926",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2982644",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1748883",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2992116666667",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.176468333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3800308",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.1881977",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2830872",
            "Hotel":"HKG - Madera Hollywood",
            "Longitude":"114.1532279",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3008158",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1738466",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3193681",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1762992",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2768299",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1804303",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2768463",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1804276",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3205125",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1624787",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3205223",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1624649",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2749903",
            "Hotel":"HKG - Hotel Indigo Hong Kong Island",
            "Longitude":"114.1733399",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3011776",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1750936",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.299775",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.179125",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2778996",
            "Hotel":"HKG - The Charterhouse Causeway Bay Hong Kong",
            "Longitude":"114.1789969",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2817379",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.18425",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2836012",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.154099",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3019075",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1846215",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.27438",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.178356666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3258461",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1614818",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2773496",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1700299",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2985397",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1751158",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2948954",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1724068",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3076455",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712609",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3082768",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2241217",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3797751",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.1889872",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3692947",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.1289873",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2976609",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1738139",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3168578",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1604252",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2958743",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1742181",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.3230723",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1739859",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.29954",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.176491666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"Lingy - East Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.29995691",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.1793011",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3019833333333",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.180711666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.29947815",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.17895456",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.29939956",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.17886279",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2789282",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1871433",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3241382",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1731987",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3241484",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1732005",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2870344",
            "Hotel":"SGP - InterContinental Singapore",
            "Longitude":"114.1927374",
            "Deal":"Istanbul by Night: Turkish Dinner and Show"
         },
         {
            "Latitude":"22.2870271",
            "Hotel":"SGP - InterContinental Singapore",
            "Longitude":"114.1927362",
            "Deal":"Istanbul by Night: Turkish Dinner and Show"
         },
         {
            "Latitude":"22.2796213",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"114.18634",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.321395",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162431666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2871269",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1923776",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2999963",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1778181",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"22.2999963",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1778181",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"22.2984922",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1749921",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2985566",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1750568",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Citadines Harbourview Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2985404",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1750305",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.247365",
            "Hotel":"HKG - Madera Hollywood",
            "Longitude":"114.174801666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2847196",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1531204",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2779923",
            "Hotel":"HKG - The Charterhouse Causeway Bay Hong Kong",
            "Longitude":"114.1790347",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Citadines Harbourview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Kowloon Food Safari"
         },
         {
            "Latitude":"22.2793527",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.1861077",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.26973361",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.15007222",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.269791",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1501169",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3225033333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162345",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2713429",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1499536",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3027335",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1766133",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3027335",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1766133",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.29914",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.177923333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2823553",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1844823",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2781939",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1709605",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3709841",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"114.119123",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2781867",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1710386",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2784953",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1713733",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2784471",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1713165",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.285074",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1918841",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3244263",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1720353",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.28517",
            "Hotel":"HKG - The Mercer Hong Kong",
            "Longitude":"114.151898333333",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3203147",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1621097",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.280555",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1622746",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2998716666667",
            "Hotel":"HKG - M1-Hotel",
            "Longitude":"114.173091666667",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2750313",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1798117",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Citadines Harbourview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Citadines Harbourview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3012442",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1741717",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2714159",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1498342",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2986148",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1738133",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3114133333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.039591666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2997011",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1796785",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.33162048",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"114.02898583",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31324808",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"114.04492585",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.24767842",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"114.17473227",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2808445",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1627927",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.27969524",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.16068915",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2816601",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1833938",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3133866666667",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.044983333333",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2852633333333",
            "Hotel":"HKG - The Mercer Hong Kong",
            "Longitude":"114.152233333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Development",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2866101",
            "Hotel":"HKG - Events counter",
            "Longitude":"114.193167",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3007266666667",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.174351666667",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2773853",
            "Hotel":"HKG - Kew Green Hotel",
            "Longitude":"114.1706419",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2855772",
            "Hotel":"HKG - 99Bonham",
            "Longitude":"114.1509334",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2808653",
            "Hotel":"HKG - Hotel LKF by Rhombus",
            "Longitude":"114.1552824",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2903068",
            "Hotel":"HKG - City Garden Hotel",
            "Longitude":"114.1943281",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3015368",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1744342",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2944003",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1733357",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2790167",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1856134",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2788732",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1871677",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2851198",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1918677",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2863209",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1489484",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Day Trip to Macau from Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Day Trip to Macau from Hong Kong"
         },
         {
            "Latitude":"22.3128643",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"114.1713992",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2817816666667",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.183985",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.277465",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.170967",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2475716666667",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.174781666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Day Trip to Macau from Hong Kong"
         },
         {
            "Latitude":"22.3218785",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1625066",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2979556",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778873",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.308585",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.224198333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31336309",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.04488925",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.31346285",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.04449839",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3132257",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.044449",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3123666",
            "Hotel":"HKG - M1-Hotel",
            "Longitude":"114.1699917",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"22.2853107",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1922847",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2781843",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1707555",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2782321",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.170741",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3184255",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1682848",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3691451",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1204323",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2786513",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1531783",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2787279",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1531534",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2994218",
            "Hotel":"HKG - Prince Hotel Hong Kong",
            "Longitude":"114.1681252",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.28618",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1491",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2779308",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1703712",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2779287",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1704161",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3691088",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1203858",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3006029",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1749235",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2976747",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1735969",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2864325",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1492713",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2956948",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1723139",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2864436",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1492695",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2956948",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1723139",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2956948",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1723139",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2985997",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1675408",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3688166",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1216864",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2968072",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"114.1728839",
            "Deal":"Big Bus Hong Kong Open-Top Night Tour"
         },
         {
            "Latitude":"22.3691732",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1213613",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3687307",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1205716",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3804658",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.188755",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3804658",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.188755",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2821452",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1838784",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3804658",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.188755",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2821452",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1838784",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3797477",
            "Hotel":"HKG - Royal Park Hotel",
            "Longitude":"114.1880584",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3227069",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1607799",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.31301534",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.04468482",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2962466666667",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.17672",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3003672",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.17331",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3005541",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"114.1674837",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3017392",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1655031",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3212683333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162336666667",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2782728",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1865026",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"22.4124731",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2113104",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2801205",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1839299",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.298579",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1751096",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2985622",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1751094",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3011646",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1738466",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3006632",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1751484",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"22.2896767",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1435173",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"22.2755187",
            "Hotel":"HKG - Cosmo Hotel Hong Kong",
            "Longitude":"114.1769495",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2987489",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"114.1737455",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3019075",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1846215",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2783999",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1701854",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3236973",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1738931",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2784725",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1700005",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4568317",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0028986",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.31927252",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.17128616",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2773527",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1699071",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.369021",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1209432",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2981007",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.178073",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3011863",
            "Hotel":"HKG - The Perkin Hotel",
            "Longitude":"114.1739859",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3011863",
            "Hotel":"HKG - The Perkin Hotel",
            "Longitude":"114.1739859",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2984501",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1775157",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3085413",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1714165",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3015491",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1744504",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3085822",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1714399",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.29813909",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.17226908",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.29813909",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.17226908",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2899148",
            "Hotel":"HKG - City Garden Hotel",
            "Longitude":"114.1940495",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.30136",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1745433",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2840946",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1924143",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2841056",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1924966",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2862526",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1490742",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2986392",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1774228",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.32125",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162281666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3126266666667",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.04134",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2480627",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.17468275",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3030938",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1707348",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2750724",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1793075",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2789589",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.1883323",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2810644",
            "Hotel":"HKG - Hotel LKF by Rhombus",
            "Longitude":"114.1548621",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2809722",
            "Hotel":"HKG - Hotel LKF by Rhombus",
            "Longitude":"114.1548026",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2782899",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1708798",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2999963",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1721356",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2761094",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1795936",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2780903",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1863164",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2780922",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1863087",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.3040911",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1691092",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2985635",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1751127",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3146283",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"114.1714484",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2783791",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1702027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3236987",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1727784",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2784656",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.186758",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2788685",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.187175",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2887325",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1664154",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.27877173",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1536957",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2993045",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1793917",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3167183",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1605183",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869086",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1926562",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2768848",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1804127",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2978733",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1735324",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2978713",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1735322",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2862009",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1475025",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.28097",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.187385",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2870624",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1927319",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2870493",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1926063",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869812",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1927491",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1927027",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2860883",
            "Hotel":"HKG - QA2 Testing",
            "Longitude":"114.1920524",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2784391",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.154804",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1927027",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1927027",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869449",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1927027",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Xi Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Xi Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2748141",
            "Hotel":"HKG - Cosmo Hotel Hong Kong",
            "Longitude":"114.1784527",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2863028",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1474185",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"22.2994955",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1773979",
            "Deal":"Hong Kong and Macau Attractions Pass"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Private Departure Transfer: Hotel to Airport"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2981361",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778648",
            "Deal":"Big Bus Hong Kong Open-Top Night Tour"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3083745",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1723603",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2790976",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"114.1887341",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2870181",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.192551",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.296745",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.175606666667",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Under Bridge Spicy Crab For 2 or 4"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2862577",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1472467",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2847366",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"114.1923311",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tour Single Route Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3078621",
            "Hotel":"HKG - Noble Park Hotel",
            "Longitude":"114.1719294",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2852897",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1921857",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2958743",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1742181",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3000753",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1855272",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3171583",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1733357",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3171583",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1733357",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2982967",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1750292",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2983593",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1730953",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.274736",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1795672",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3263527",
            "Hotel":"HKG - The Olympian",
            "Longitude":"114.1533941",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2870732",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1946532",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2880154",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1454877",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2475461",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1746362",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2991771",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1728866",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2772421",
            "Hotel":"HKG - The Vela Hong Kong Causeway Bay Hotel",
            "Longitude":"114.1723056",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.23474",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.172296666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.28692124",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.16004196",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3135715",
            "Hotel":"HKG - Xi Hotel",
            "Longitude":"114.042099",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2774531",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1772893",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2774817",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1772798",
            "Deal":"Skip the Line: Hong Kong Pub Crawl"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2747519",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1795487",
            "Deal":"Hong Kong Airport Shuttle Bus"
         },
         {
            "Latitude":"22.28011847",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.18544816",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2982433",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778807",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2982252",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1779062",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2883948",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455395",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.288417",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455268",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2951427",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1682852",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4519398",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0095891",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4545033",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0043854",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3124002",
            "Hotel":"HKG - M1-Hotel",
            "Longitude":"114.1701367",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2860174",
            "Hotel":"HKG - 99Bonham",
            "Longitude":"114.1508577",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2987001",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.177295",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.285455",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.148346666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2819303",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1836691",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3011077",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1737568",
            "Deal":"MingCha - Jasmine Blossoms"
         },
         {
            "Latitude":"22.2987864",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.174914",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2797983333333",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.185385",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2990033",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.1792575",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2990277",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.1792152",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3083625",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1718023",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2983036",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1748024",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2884204",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1423562",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3316593",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1689457",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2347283333333",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.171611666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2978566",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1736048",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3044505",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1721619",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.305675",
            "Hotel":"HKG - M1-Hotel",
            "Longitude":"114.178371666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2845045",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1538874",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2815127",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1842965",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.295127",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.16826",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2986847",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1772878",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.322",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.16172",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2809786",
            "Hotel":"HKG - Hotel LKF by Rhombus",
            "Longitude":"114.154865",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.32306807",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.17216297",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3069155",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1771905",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3693845",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1208503",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.263375",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.082348333333",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2774677",
            "Hotel":"HKG - Kew Green Hotel",
            "Longitude":"114.1705634",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.297935",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.178123333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3181439",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1684874",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2783317",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1529926",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3014619",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1744504",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tour Single Route Ticket"
         },
         {
            "Latitude":"22.28144",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.183826666667",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2796305",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1723815",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3180651",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1685123",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2971882",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1760826",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3165187",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1735215",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2812925",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1716352",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4125551",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2110911",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3131791",
            "Hotel":"HKG - BP International",
            "Longitude":"114.0449448",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2748606",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1789547",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3131933333333",
            "Hotel":"HKG - Prince Hotel Hong Kong",
            "Longitude":"114.044526666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3083175",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1718812",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.192842",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Customer Support Training",
            "Longitude":"0",
            "Deal":"The House of Dancing Water"
         },
         {
            "Latitude":"22.2720604",
            "Hotel":"HKG - M1-Hotel",
            "Longitude":"114.1526674",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.192842",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2986967",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1772831",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2885466666667",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.145201666667",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3079183",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2255736",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3081182",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2245089",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - CHI Residences 314",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3218706",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162401",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2990858",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1689252",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.32151",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162486666667",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3240468",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1733357",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.29805",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.177561666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2980084",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1689411",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.298179",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1782662",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2790186",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"114.18898",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.32152",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162388333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2985413",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.173526",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3216066666667",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162456666667",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.285485",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.149288333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3061733333333",
            "Hotel":"HKG - Hotel Madera Hong Kong",
            "Longitude":"114.171768333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3041374",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1715316",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2774383",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1699937",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2975479",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1730907",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3044732",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1715098",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2985821",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.174954",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2767215",
            "Hotel":"HKG - Cosmo Hotel Hong Kong",
            "Longitude":"114.1793866",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2947814",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1732972",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3134916666667",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.045303333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2751639",
            "Hotel":"HKG - Hotel Indigo Hong Kong Island",
            "Longitude":"114.1734155",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.2818621",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.1837392",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3011151",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1849467",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.28425",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.184373333333",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.318512",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1684622",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2982273",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1748118",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2982063",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1748272",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.298214",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1748219",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3127291",
            "Hotel":"HKG - Popway Hotel",
            "Longitude":"114.0400202",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3236471",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1727851",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3236694",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1729642",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3237712",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1728713",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2981659",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778827",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2990858",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1689252",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3690713",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1214542",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3083367",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1718011",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3083453",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1717692",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2837997",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1926561",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3704173",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"114.129066",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2981545",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1779006",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.295116",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1682347",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2884204",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1423562",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.24794382",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.17456959",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2852183333333",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.149378333333",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3076385",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1712085",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Le Meridien Cyberport",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.274946",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1796446",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2435391",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1631543",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.281934",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1843894",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.24758972",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.17452341",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3352381",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1570544",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2831426",
            "Hotel":"HKG - Madera Hollywood",
            "Longitude":"114.1533536",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3043276",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1723816",
            "Deal":"Ma Pak Leung - On Kung Pill (Pack of 10)"
         },
         {
            "Latitude":"22.27794893",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.17078422",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.3293976",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1593093",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2811551",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1630123",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2742391",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.17861",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2781687",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1658296",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2977132",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1689655",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3078698",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1728058",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3237852",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1733357",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2948883333333",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.171628333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4120569",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2111905",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3689923",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1205716",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.31328438",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.04511716",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3016194",
            "Hotel":"HKG - The Perkin Hotel",
            "Longitude":"114.1735019",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2894057",
            "Hotel":"HKG - City Garden Hotel",
            "Longitude":"114.1945139",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2712134",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1503187",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2985799",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1749509",
            "Deal":"Day Trip to Macau from Hong Kong"
         },
         {
            "Latitude":"22.2778502",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1592754",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3237566",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1729642",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2996944",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1794631",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2749224",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1796815",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4110423",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.212554",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2837821",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1926271",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2885948",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1423562",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3204483333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162465",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3214509",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1622031",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.30293383",
            "Hotel":"HKG - BP International",
            "Longitude":"114.16993347",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3206901",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1608884",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.31927",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1761273",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2786033333333",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.18623",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3245281",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1719424",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3046835",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.1606366",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2810469",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.1589788",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3373882",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"114.1486538",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2846166666667",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.152965",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3002178",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1750002",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.3166714",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1733822",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3131133333333",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.044886666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3012008",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1752994",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2779524",
            "Hotel":"HKG - Kew Green Hotel",
            "Longitude":"114.1703633",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2971212",
            "Hotel":"HKG - Hotel Panorama by Rhombus",
            "Longitude":"114.1740725",
            "Deal":"Symphony of Lights Hong Kong Harbour Night Cruise"
         },
         {
            "Latitude":"22.2979556",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1778873",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2983466666667",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.177431666667",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.27159434",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.14988473",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2797328",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1553223",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3483809",
            "Hotel":"HKG - Hotel Indigo Hong Kong Island",
            "Longitude":"114.1260062",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2793424",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.1884308",
            "Deal":"Lemon King - Liquorice Tangerine"
         },
         {
            "Latitude":"22.304475",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.171708333333",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2779497",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1593616",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3013768",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1845214",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2815433333333",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.184115",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3192784",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"114.1761217",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2780179",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1706673",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2780925",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1534694",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3216333333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162356666667",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3076497",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1711976",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2844186",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1531592",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2842348",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.1530836",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3019075",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1846215",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2998938",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.185504",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2998938",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.185504",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3167453",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1723603",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2783639",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.1702791",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3004748",
            "Hotel":"HKG - Prince Hotel Hong Kong",
            "Longitude":"114.1689536",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3004748",
            "Hotel":"HKG - Prince Hotel Hong Kong",
            "Longitude":"114.1689536",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.4117018",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2113254",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.32141",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1620366",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3691088",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1203858",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2956044",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1689367",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"22.2853832",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1923776",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.24745852",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.17479776",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2870117",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1927131",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2870997",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1925449",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3077132",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1724068",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2975857",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1734994",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2974952",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733409",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.297513",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733277",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2975603",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1734067",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3041267",
            "Hotel":"HKG - BP International",
            "Longitude":"114.169713",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2848121",
            "Hotel":"HKG - The Jervois",
            "Longitude":"114.150634",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3238461",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.172763",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2487444",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1745719",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Skip the Line: Hong Kong Pub Crawl"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Lantau Island and Giant Buddha Day Trip from Hong Kong"
         },
         {
            "Latitude":"22.31340628",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.04563908",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.28643234",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.15221047",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Citadines Harbourview Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.192842",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2870183",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1925619",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2869856",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1925631",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3001035",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1675766",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2870001",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1925429",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2985449",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1771905",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.29771",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.178095",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2981083333333",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.17792",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3020938",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1745897",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2940235",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1724068",
            "Deal":"Tesla Hong Kong Airport Transfers (Up to 3 pax)"
         },
         {
            "Latitude":"22.2986138",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1751382",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2847143",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"114.1927491",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2854746",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1918605",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3003616666667",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.17365",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Airport Shuttle Bus"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2961702",
            "Hotel":"HKG - Marco Polo Hongkong Hotel",
            "Longitude":"114.1690869",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2882823",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1424026",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3155928",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1642465",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3072669",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1749612",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3069128",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1794199",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3045859",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1809061",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3009844",
            "Hotel":"HKG - Prince Hotel Hong Kong",
            "Longitude":"114.16834",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2884204",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1423562",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2884068",
            "Hotel":"HKG - Citadines Harbourview Hong Kong",
            "Longitude":"114.1433093",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.192842",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.192842",
            "Deal":"MingCha - Jasmine Blossoms"
         },
         {
            "Latitude":"22.3496026",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"114.1252939",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2838846",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1923952",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.192842",
            "Deal":"Skip the Line: Hong Kong Pub Crawl"
         },
         {
            "Latitude":"22.3219454",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1622624",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.297573",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1733899",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2870236",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1926876",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2475933333333",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.174403333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2870339",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1926334",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2869859",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1928157",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.247405",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.174776666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2870337",
            "Hotel":"HKG - Design Demo",
            "Longitude":"114.1928601",
            "Deal":"Symphony of Lights Hong Kong Harbour Night Cruise"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.331507",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.0287772",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.331507",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.0287772",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.285432",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.153158",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.274515",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.179068333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Design Demo",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.3041395",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.171307",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3041136",
            "Hotel":"HKG - Prudential Hotel",
            "Longitude":"114.1713207",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3137307",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"114.1718557",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2842733333333",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.153208333333",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2984849",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1747563",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2984515",
            "Hotel":"HKG - Butterfly on Prat Tsim Sha Tsui",
            "Longitude":"114.1746888",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2863803",
            "Hotel":"HKG - Sohotel Hong Kong",
            "Longitude":"114.1492221",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2988448",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1770795",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2754233333333",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.178988333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2883261",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1421239",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2883261",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1421239",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2786171",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1533079",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2999447",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1854576",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2777587",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1703067",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.27874215",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.17096277",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2777729",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1702677",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2777221",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1702745",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.322653",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.2132847",
            "Deal":"MingCha - Jasmine Blossoms"
         },
         {
            "Latitude":"22.3226631",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.2132967",
            "Deal":"MingCha - Jasmine Blossoms"
         },
         {
            "Latitude":"22.2969729",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1730571",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2593466",
            "Hotel":"HKG - The T Hotel",
            "Longitude":"114.1355566",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2471866666667",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.174521666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3317033333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.02891",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2865154",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1519707",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.2998603",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1856993",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.319747",
            "Hotel":"HKG - City Garden Hotel",
            "Longitude":"114.1718495",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.24758874",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"114.17457595",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2332524",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1706288",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Symphony of Lights Hong Kong Harbour Night Cruise"
         },
         {
            "Latitude":"22.3020246",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1838784",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2711943",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1503686",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3081785",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.172221",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3362231",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2055201",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2973243",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1743737",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2748366",
            "Hotel":"HKG - Cosmo Hotel Hong Kong",
            "Longitude":"114.1784374",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3005841",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1731034",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3073843",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1719786",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.306434",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2253198",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.298158",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1739973",
            "Deal":"Day Trip to Macau from Hong Kong"
         },
         {
            "Latitude":"22.2973169",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1743815",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2880791",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.142031",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2973033",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1743993",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.298158",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1739973",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2985449",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1771905",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2985449",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1771905",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2982178",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1773299",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.4117799",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2112328",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.4572187",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0042502",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2749956",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1801314",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2972716",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1742709",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2972564",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1744085",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2842129",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1930039",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2995956",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.1794532",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3075216",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1714587",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3076114",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1714872",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2479666666667",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.17438",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3201932",
            "Hotel":"HKG - Rosedale Hotel Kowloon",
            "Longitude":"114.1620633",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2782739",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1706552",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2884204",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1423562",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2817454",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1838135",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2751162",
            "Hotel":"HKG - The Burlington Hotel",
            "Longitude":"114.1797914",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3044533333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.170765",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2857033333333",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.148146666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.315188",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.045406",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3214916666667",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162405",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"0",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3074536",
            "Hotel":"HKG - Evergreen Hotel (Hong Kong)",
            "Longitude":"114.1707348",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3074536",
            "Hotel":"HKG - Evergreen Hotel (Hong Kong)",
            "Longitude":"114.1707348",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3074536",
            "Hotel":"HKG - Evergreen Hotel (Hong Kong)",
            "Longitude":"114.1707348",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3030815",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1699028",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3046729",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.160576",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2883134",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1422779",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3046729",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.160576",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.411074",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2110369",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.4110979",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2110122",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3011474",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1698059",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.4110837",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2110172",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2883164",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1422929",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2851676",
            "Hotel":"HKG - Empire Hotel Causeway Bay",
            "Longitude":"114.1919938",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Holiday Inn Golden Mile Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3001768",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.173475",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.30186319",
            "Hotel":"HKG - BP International",
            "Longitude":"114.16947991",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.286209",
            "Hotel":"HKG - Butterfly on Hollywood Central",
            "Longitude":"114.1475163",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.2978884",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1734236",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3075857",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1724276",
            "Deal":"MingCha - Jasmine Blossoms"
         },
         {
            "Latitude":"22.3075936",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1724039",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Hotel Wanchai",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.302085",
            "Hotel":"HKG - Residence G Hong Kong",
            "Longitude":"114.176268333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3600573",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1034939",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - TUVE Hotel",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2797907",
            "Hotel":"HKG - Hotel Pennington by Rhombus",
            "Longitude":"114.18335298",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2815426",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.1835534",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2999447",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1854576",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3211533333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162266666667",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3004886",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.167623",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"22.2769024",
            "Hotel":"HKG - The T Hotel",
            "Longitude":"114.1307441",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2739667",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1793379",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"22.3244543",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.1711756",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"22.3244543",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.1711756",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2977166",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1686285",
            "Deal":"Magical World Disney Themed 4D Museum"
         },
         {
            "Latitude":"22.3142816666667",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.042488333333",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2778813",
            "Hotel":"HKG - Hotel LKF by Rhombus",
            "Longitude":"114.1592817",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2781748",
            "Hotel":"HKG - Hotel LKF by Rhombus",
            "Longitude":"114.1596411",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2998358",
            "Hotel":"HKG - The Olympian",
            "Longitude":"114.1772044",
            "Deal":"Hong Kong and Macau Attractions Pass"
         },
         {
            "Latitude":"22.2775034",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1621667",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2739859",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.1793324",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3206106",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.1624111",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2883124",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1422894",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2817209",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.1724038",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2785069",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1534377",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"22.2999366666667",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.180078333333",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3000183333333",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.179915",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2786633333333",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.185876666667",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3054201",
            "Hotel":"HKG - BP International",
            "Longitude":"114.1698059",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2747178",
            "Hotel":"HKG - Cosmo Hotel Hong Kong",
            "Longitude":"114.178533",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3103248",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.17051099",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3159864",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1749612",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3053475",
            "Hotel":"HKG - BP International",
            "Longitude":"114.169713",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3053475",
            "Hotel":"HKG - BP International",
            "Longitude":"114.169713",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2973571",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1744393",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2973161",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1738082",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3177845",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1599595",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3266288",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1530855",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3045063",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.1603059",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Sky100 Hong Kong Observation Deck"
         },
         {
            "Latitude":"22.2875822",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.1523837",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2997324",
            "Hotel":"HKG - Royal Pacific Hotel and Towers",
            "Longitude":"114.1679946",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"22.2955141",
            "Hotel":"HKG - Kowloon Harbourfront Hotel",
            "Longitude":"114.1715244",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"22.2980856",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1694887",
            "Deal":"Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Macau Tower Admission and 360\u00b0 Caf\u00e9 Buffet"
         },
         {
            "Latitude":"22.2980245",
            "Hotel":"HKG - Gateway Hong Kong",
            "Longitude":"114.1690366",
            "Deal":"Big Bus Hong Kong Open-Top Night Tour"
         },
         {
            "Latitude":"22.2820516666667",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.184151666667",
            "Deal":"360 Lantau Land and Sea Guided Tour"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3030246",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1668289",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - InterContinental Grand Stanford Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2850002",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.1916",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.24753737",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.17459891",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2747216666667",
            "Hotel":"HKG - Dorsett Wan Chai Hong Kong",
            "Longitude":"114.17931",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3182425",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.168534",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Lemon King - Pickled Limes"
         },
         {
            "Latitude":"22.2803766666667",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.162865",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.30051",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.179868333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3000683333333",
            "Hotel":"HKG - New World Millennium Hong Kong Hotel",
            "Longitude":"114.180066666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2783201",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1865379",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2981677",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1729397",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2839049",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1593621",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.3077183333333",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.224515",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2901302",
            "Hotel":"HKG - EAST Hotel",
            "Longitude":"114.224267",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2785495",
            "Hotel":"HKG - Bishop Lei International House",
            "Longitude":"114.1532712",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2835237",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1541762",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3041555",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.1602638",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2790549",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.1860613",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2790549",
            "Hotel":"HKG - J Plus",
            "Longitude":"114.1860613",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3079586",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1719448",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3079601",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1718741",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3102939",
            "Hotel":"HKG - CHI Residences 279",
            "Longitude":"114.1699537",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2982618",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1770513",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3714043",
            "Hotel":"HKG - Silka Far East Hong Kong",
            "Longitude":"114.1196117",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Le Petit Rosedale Hotel Hong Kong",
            "Longitude":"0",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3011704",
            "Hotel":"HKG - Empire Hotel Tsim Sha Tsui",
            "Longitude":"114.1751935",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.2841696",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.1929521",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3211683333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.16235",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2854117",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.192394",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.3230653",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.1737537",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3078908",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1720605",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.295528",
            "Hotel":"HKG - Hullett House",
            "Longitude":"114.1719888",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2984367",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1777152",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3692043",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1205623",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3094744",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1700846",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3094744",
            "Hotel":"HKG - Silka Seaview Hong Kong",
            "Longitude":"114.1700846",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.306179",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.1667034",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2544455",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1703251",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2939726",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1724533",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.313143",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.0448854",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.31324697",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"114.04495143",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2544455",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1703251",
            "Deal":"Ocean Park Admission Plus Ocean FasTrack Combo (API)"
         },
         {
            "Latitude":"22.2785958",
            "Hotel":"HKG - The Wharney Guang Dong Hotel Hong Kong",
            "Longitude":"114.1715055",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2544455",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.1703251",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.313675",
            "Hotel":"HKG - Butterfly on Victoria Causeway Bay",
            "Longitude":"114.044631666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3020353",
            "Hotel":"HKG - Stanford Hillview Hotel",
            "Longitude":"114.1749612",
            "Deal":"Madame Tussauds x HK Observation Wheel 2-in-1 combo"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.192842",
            "Deal":"Big Bus Tours Hong Kong"
         },
         {
            "Latitude":"22.3170483",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"114.1695312",
            "Deal":"TurboJET"
         },
         {
            "Latitude":"22.2853675",
            "Hotel":"HKG - Empire Prestige",
            "Longitude":"114.192395",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2775348",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1807668",
            "Deal":"Hong Kong Airport Shuttle Bus"
         },
         {
            "Latitude":"22.2867922",
            "Hotel":"GBR - London - Demo with ticketing",
            "Longitude":"114.192842",
            "Deal":"ZSL London Zoo (GT)"
         },
         {
            "Latitude":"22.32151",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162366666667",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.27718",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.180253333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2867922",
            "Hotel":"GBR - London - Demo with ticketing",
            "Longitude":"114.192842",
            "Deal":"The Coca-Cola London Eye - Standard Ticket (GT)"
         },
         {
            "Latitude":"22.3152183333333",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.045433333333",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.314085",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.048806666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3494866",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1254026",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3494866",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1254026",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2867922",
            "Hotel":"GBR - London - Demo with ticketing",
            "Longitude":"114.192842",
            "Deal":"The Coca-Cola London Eye - Standard Ticket (GT)"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.192842",
            "Deal":"Peak Tram Combo Tour (Fast Track)"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"GBR - London - Demo with ticketing",
            "Longitude":"114.192842",
            "Deal":"The Coca-Cola London Eye - Standard Ticket (GT)"
         },
         {
            "Latitude":"22.2869665",
            "Hotel":"HKG - Grand Hyatt",
            "Longitude":"114.192842",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2867922",
            "Hotel":"GBR - London - Demo with ticketing",
            "Longitude":"114.192842",
            "Deal":"The Coca-Cola London Eye - Standard Ticket (GT)"
         },
         {
            "Latitude":"22.2882603",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1422287",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3006778",
            "Hotel":"HKG - The Luxe Manor",
            "Longitude":"114.1738931",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2821802",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.1571167",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.276925",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.180541666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3076119",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.1711713",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.27773",
            "Hotel":"HKG - Hotel Stage",
            "Longitude":"114.1595879",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2982471",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1771442",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3784087",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.10371",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2802335",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.184668",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2951698",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1739859",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2776066",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.1799752",
            "Deal":"Hong Kong Airport Shuttle Bus"
         },
         {
            "Latitude":"22.27781288",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.15980203",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2987357",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1773554",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2817313",
            "Hotel":"HKG - The Excelsior Hong Kong",
            "Longitude":"114.183797",
            "Deal":"Hong Kong Airport Shuttle Bus"
         },
         {
            "Latitude":"22.2965107",
            "Hotel":"HKG - Hotel Pravo Hong Kong",
            "Longitude":"114.1704562",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2965158",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1723603",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.2965158",
            "Hotel":"HKG - Sheraton Hong Kong Hotel & Towers",
            "Longitude":"114.1723603",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.3169986",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1732428",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2780508",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1813811",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2785154",
            "Hotel":"HKG - South Pacific Hotel",
            "Longitude":"114.1810138",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.2985449",
            "Hotel":"HKG - The Royal Garden",
            "Longitude":"114.1771905",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2793139",
            "Hotel":"HKG - Rosedale Hotel Hong Kong",
            "Longitude":"114.1882906",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3076035",
            "Hotel":"HKG - Dorsett Kwun Tong Hong Kong",
            "Longitude":"114.2238395",
            "Deal":"Hong Kong Disneyland"
         },
         {
            "Latitude":"22.3078998",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"114.1720613",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.304465",
            "Hotel":"HKG - Noble Park Hotel",
            "Longitude":"114.1708517",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.4588319",
            "Hotel":"HKG - Harbour Plaza Resort City",
            "Longitude":"114.0026664",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2981324",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Tsim Sha Tsui",
            "Longitude":"114.1739486",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2775833333333",
            "Hotel":"HKG - Lanson Place",
            "Longitude":"114.185535",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.32116",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162246666667",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2831088",
            "Hotel":"HKG - Madera Hollywood",
            "Longitude":"114.1533136",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.2957377",
            "Hotel":"HKG - Butterfly on Morrison Causeway Bay",
            "Longitude":"114.170801",
            "Deal":"Hong Kong Airport Shuttle Bus"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Somerset Victoria Park Hong Kong",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.27782893",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"114.15947832",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Eaton Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.3046412",
            "Hotel":"HKG - W Hong Kong",
            "Longitude":"114.1605185",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3217666666667",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162216666667",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3317316666667",
            "Hotel":"HKG - Lan Kwai Fong Hotel",
            "Longitude":"114.028926666667",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.3219883333333",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.162358333333",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"22.32127",
            "Hotel":"HKG - Dorsett Mongkok Hong Kong",
            "Longitude":"114.161855",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.32088401",
            "Hotel":"HKG - Silka West Kowloon Hotel",
            "Longitude":"114.16329364",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"22.317159",
            "Hotel":"HKG - Stanford Hotel Hong Kong",
            "Longitude":"114.1727784",
            "Deal":"Madame Tussauds Hong Kong"
         },
         {
            "Latitude":"22.2885298",
            "Hotel":"HKG - Island Pacific Hotel",
            "Longitude":"114.1419381",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2839577",
            "Hotel":"HKG - Butterfly on Wellington Central",
            "Longitude":"114.1538341",
            "Deal":"Airport Express"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Metropark Kowloon",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.3172203",
            "Hotel":"HKG - Panda Hotel",
            "Longitude":"114.1701775",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.27789149",
            "Hotel":"HKG - Royal Plaza Hotel",
            "Longitude":"114.15941018",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.2884407",
            "Hotel":"HKG - Butterfly on Waterfront Sheung Wan",
            "Longitude":"114.1455045",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"22.4125837",
            "Hotel":"HKG - Hyatt Regency Hong Kong, Sha Tin",
            "Longitude":"114.2113639",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"22.2867922",
            "Hotel":"GBR - Park Grand London Lancaster Gate",
            "Longitude":"114.192842",
            "Deal":"ZSL London Zoo (GT)"
         },
         {
            "Latitude":"22.3079696",
            "Hotel":"HKG - Nathan Hotel Hong Kong",
            "Longitude":"114.171898",
            "Deal":"Hong Kong Disneyland BMG"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - The Cityview Hong Kong Hotel",
            "Longitude":"0",
            "Deal":"Peak Tram E-Ticket"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Cordis, Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Ocean Park API"
         },
         {
            "Latitude":"0",
            "Hotel":"HKG - Dorsett Tsuen Wan Hong Kong",
            "Longitude":"0",
            "Deal":"Hong Kong Disneyland"
         }
      ]
    }
  }

  // visaulization
  draw_visualization (size, vm) {
    var svg       = vm.wrap,
        dataset   = vm.data,
        width     = size[0],
        height    = size[1];

    function resize() {
        width = parseInt(d3.select("#viz").style("width")),
        width = width - margin.left - margin.right,
        height = width * mapRatio,
        projection.translate([width / 2, height / 2]).center(hongKongCenter).scale(width * [mapRatio + mapRatioAdjuster]),
        svg.style("width", width + "px").style("height", height + "px"),
        svg.selectAll("path").attr("d", path)
    }

    function zoomed() {
        // features.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")")
    }

    var margin = {
            top: 10,
            left: 10,
            bottom: 10,
            right: 10
        },
        width = parseInt(d3.select("#container_map").style("width")),
        width = width - margin.left - margin.right,
        mapRatio = .5,
        height = width * mapRatio,
        mapRatioAdjuster = 40,
        hongKongCenter = [114.15, 22.33];
    var projection = d3.geo.mercator().center(hongKongCenter).translate([width / 2, height / 2]).scale(width * [mapRatio + mapRatioAdjuster]),
        zoom = d3.behavior.zoom().translate([0, 0]).scale(1).scaleExtent([1, 20]).on("zoom", zoomed);

    d3.select(window).on("resize", resize);
    var svg = d3.select("#container_map").append("svg").attr("width", width).attr("height", height).call(zoom),
        path = d3.geo.path().projection(projection),

    features = svg.append("g");

    d3.json("../hk.json", function(t, e) {
        if (t) return console.error(t);
        topojson.feature(e, e.objects.HKG_adm1_1);
        features.selectAll("path")
                .data(topojson.feature(e, e.objects.HKG_adm1_1).features).enter()
                .append("path").attr("d", path)
                .attr("fill", "#e8d8c3")
                .attr("stroke", "#404040")
                .attr("stroke-width", .2);

        var connections_temp = {}
        var connections = []

        _.each(vm.data, function(d){
          if (connections_temp[d.device_user_id]){
            connections_temp[d.device_user_id].push({"x":d.Longitude, "y":d.Latitude})
          } else {
            connections_temp[d.device_user_id] = []
            connections_temp[d.device_user_id].push({"x":d.Longitude, "y":d.Latitude})
          }
        })

        for (var conn in connections_temp){
          connections.push(connections_temp[conn])
        }

        features.selectAll("polygon")
            .data(connections)
          .enter().append("polygon")
            .attr("points",function(d) {
                return d.map(function(d) { return projection([d.x,d.y]).join(","); }).join(" ");})
            .attr("stroke","black")
            .attr("fill", "transparent")
            .attr("stroke-width",1)
            .style("opacity", .1);


    // features.append("g").attr("class", "dots").selectAll("circle")
    //             .data(connections).enter()
    //             .append("circle")
    //             .attr("cx", function(d){
    //               if (d.Latitude > 0 && d.Longitude > 0) {
    //                 var temp = [d.Longitude, d.Latitude]
    //                 return projection(temp)[0]}
    //               }
    //             )
    //             .attr("cy", function(d){
    //               if (d.Latitude > 0 && d.Longitude > 0) {
    //                 var temp = [d.Longitude, d.Latitude]
    //                 return projection(temp)[1]}
    //               }
    //             )
    //             .attr("r", 1)
    //             .style("opacity", ".3")
    //             .style("fill", "red");
    });

  }

}
