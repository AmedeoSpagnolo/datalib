;class Streamgraph extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      'height':      400,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
        {
          "key": "Hong Kong Disneyland",
          "value": 0.62,
          "date": "02/01/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.07,
          "date": "02/01/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.02,
          "date": "02/01/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.07,
          "date": "02/01/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.02,
          "date": "02/01/2017"
        },
        {
          "key": "Zhuhai Chimelong Ocean Kingdom",
          "value": 0.01,
          "date": "02/01/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/01/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.08,
          "date": "02/01/2017"
        },
        {
          "key": "Ocean Park Hong Kong E-ticket",
          "value": 0.13,
          "date": "02/01/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.03,
          "date": "02/01/2017"
        },
        {
          "key": "Lemon King - Liquorice Tangerine",
          "value": 0.01,
          "date": "02/01/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.01,
          "date": "02/01/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/01/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.41,
          "date": "02/02/2017"
        },
        {
          "key": "Ma Pak Leung - Viga-Pro Pill",
          "value": 0.01,
          "date": "02/02/2017"
        },
        {
          "key": "Ocean Park Hong Kong E-ticket",
          "value": 0.09,
          "date": "02/02/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.08,
          "date": "02/02/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.06,
          "date": "02/02/2017"
        },
        {
          "key": "Thomas Earnshaw Bauer",
          "value": 0.01,
          "date": "(Mechanical Skeleton) ES-8049-06"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.09,
          "date": "02/02/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.05,
          "date": "02/02/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.05,
          "date": "02/02/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.03,
          "date": "02/02/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.01,
          "date": "02/02/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.08,
          "date": "02/02/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/02/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.24,
          "date": "02/03/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.26,
          "date": "02/03/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/03/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.05,
          "date": "02/03/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.09,
          "date": "02/03/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.01,
          "date": "02/03/2017"
        },
        {
          "key": "Lemon King - Liquorice Olives",
          "value": 0.01,
          "date": "02/03/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.04,
          "date": "02/03/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/03/2017"
        },
        {
          "key": "Kowloon Food Safari",
          "value": 0.01,
          "date": "02/03/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/03/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.07,
          "date": "02/04/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.15,
          "date": "02/04/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.04,
          "date": "02/04/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.23,
          "date": "02/04/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/04/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.06,
          "date": "02/04/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.04,
          "date": "02/04/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/04/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.01,
          "date": "02/04/2017"
        },
        {
          "key": "Ma Pak Leung - Hou Cho Powder (Pack of 6)",
          "value": 0.01,
          "date": "02/04/2017"
        },
        {
          "key": "Lemon King - Pickled Limes",
          "value": 0.01,
          "date": "02/04/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.19,
          "date": "02/05/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/05/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.25,
          "date": "02/05/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/05/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/05/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.01,
          "date": "02/05/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/05/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/05/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.03,
          "date": "02/05/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/05/2017"
        },
        {
          "key": "Big Bus Tour Single Route Ticket",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.15,
          "date": "02/06/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.02,
          "date": "02/06/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.37,
          "date": "02/06/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/06/2017"
        },
        {
          "key": "Ma Pak Leung - Lok Mee Pill (Pack of 12)",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Ma Pak Leung - Viga-Pro Pill",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.03,
          "date": "02/06/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.04,
          "date": "02/06/2017"
        },
        {
          "key": "AJ Hackett Macau Tower",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Kowloon Food Safari",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.07,
          "date": "02/06/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Ma Pak Leung - On Kung Pill (Pack of 10)",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.02,
          "date": "02/06/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.01,
          "date": "02/06/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.22,
          "date": "02/07/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.04,
          "date": "02/07/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.04,
          "date": "02/07/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.02,
          "date": "02/07/2017"
        },
        {
          "key": "MingCha - Tea Pot Set (with Jasmine Blossoms Tea)",
          "value": 0.01,
          "date": "02/07/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.18,
          "date": "02/07/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/07/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/07/2017"
        },
        {
          "key": "Magical World Disney Themed 4D Museum",
          "value": 0.03,
          "date": "02/07/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.02,
          "date": "02/07/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/07/2017"
        },
        {
          "key": "Lantau Island and Giant Buddha Day Trip from Hong Kong",
          "value": 0.01,
          "date": "02/07/2017"
        },
        {
          "key": "Ma Pak Leung - Hou Cho Powder (Pack of 6)",
          "value": 0.01,
          "date": "02/08/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.32,
          "date": "02/08/2017"
        },
        {
          "key": "Magical World Disney Themed 4D Museum",
          "value": 0.01,
          "date": "02/08/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/08/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.02,
          "date": "02/08/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/08/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.06,
          "date": "02/08/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.2,
          "date": "02/08/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.02,
          "date": "02/08/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.02,
          "date": "02/08/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/08/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.03,
          "date": "02/08/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/08/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.09,
          "date": "02/09/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.03,
          "date": "02/09/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.14,
          "date": "02/09/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.07,
          "date": "02/09/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.13,
          "date": "02/09/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.02,
          "date": "02/09/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.02,
          "date": "02/09/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.04,
          "date": "02/09/2017"
        },
        {
          "key": "Istanbul by Night: Turkish Dinner and Show",
          "value": 0.02,
          "date": "02/09/2017"
        },
        {
          "key": "Magical World Disney Themed 4D Museum",
          "value": 0.02,
          "date": "02/09/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.01,
          "date": "02/09/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.02,
          "date": "02/09/2017"
        },
        {
          "key": "Kowloon Food Safari",
          "value": 0.01,
          "date": "02/09/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/09/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.13,
          "date": "02/10/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.12,
          "date": "02/10/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.02,
          "date": "02/10/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/10/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.05,
          "date": "02/10/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/10/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.03,
          "date": "02/10/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/10/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/10/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.03,
          "date": "02/10/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.01,
          "date": "02/10/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/10/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.07,
          "date": "02/11/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.11,
          "date": "02/11/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.04,
          "date": "02/11/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.12,
          "date": "02/11/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/11/2017"
        },
        {
          "key": "Day Trip to Macau from Hong Kong",
          "value": 0.03,
          "date": "02/11/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.02,
          "date": "02/11/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.01,
          "date": "02/11/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.02,
          "date": "02/11/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/11/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.07,
          "date": "02/12/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.06,
          "date": "02/12/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.14,
          "date": "02/12/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/12/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.07,
          "date": "02/12/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.1,
          "date": "02/12/2017"
        },
        {
          "key": "Big Bus Hong Kong Open-Top Night Tour",
          "value": 0.01,
          "date": "02/12/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.03,
          "date": "02/12/2017"
        },
        {
          "key": "Lantau Island and Giant Buddha Day Trip from Hong Kong",
          "value": 0.02,
          "date": "02/12/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.22,
          "date": "02/13/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.08,
          "date": "02/13/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.08,
          "date": "02/13/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/13/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.04,
          "date": "02/13/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.02,
          "date": "02/13/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.03,
          "date": "02/13/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.04,
          "date": "02/13/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/13/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/13/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.18,
          "date": "02/14/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.1,
          "date": "02/14/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.23,
          "date": "02/14/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.03,
          "date": "02/14/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.05,
          "date": "02/14/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.07,
          "date": "02/14/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.03,
          "date": "02/14/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Hong Kong and Macau Attractions Pass",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Hong Kong Private Departure Transfer: Hotel to Airport",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Big Bus Hong Kong Open-Top Night Tour",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Under Bridge Spicy Crab For 2 or 4",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Big Bus Tour Single Route Ticket",
          "value": 0.01,
          "date": "02/14/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.25,
          "date": "02/15/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.11,
          "date": "02/15/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.22,
          "date": "02/15/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.02,
          "date": "02/15/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Skip the Line: Hong Kong Pub Crawl",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Hong Kong Airport Shuttle Bus",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.02,
          "date": "02/15/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Lantau Island and Giant Buddha Day Trip from Hong Kong",
          "value": 0.01,
          "date": "02/15/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.1,
          "date": "02/16/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.22,
          "date": "02/16/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.06,
          "date": "02/16/2017"
        },
        {
          "key": "Lantau Island and Giant Buddha Day Trip from Hong Kong",
          "value": 0.01,
          "date": "02/16/2017"
        },
        {
          "key": "MingCha - Jasmine Blossoms",
          "value": 0.01,
          "date": "02/16/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.04,
          "date": "02/16/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.02,
          "date": "02/16/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.05,
          "date": "02/16/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.03,
          "date": "02/16/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.12,
          "date": "02/17/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.03,
          "date": "02/17/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.09,
          "date": "02/17/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.02,
          "date": "02/17/2017"
        },
        {
          "key": "Big Bus Tour Single Route Ticket",
          "value": 0.01,
          "date": "02/17/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.01,
          "date": "02/17/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/17/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.06,
          "date": "02/17/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/17/2017"
        },
        {
          "key": "The House of Dancing Water",
          "value": 0.01,
          "date": "02/17/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.02,
          "date": "02/17/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.02,
          "date": "02/17/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.03,
          "date": "02/18/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.07,
          "date": "02/18/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.2,
          "date": "02/18/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.05,
          "date": "02/18/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.02,
          "date": "02/18/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/18/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.03,
          "date": "02/18/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/18/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.01,
          "date": "02/18/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.05,
          "date": "02/19/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.2,
          "date": "02/19/2017"
        },
        {
          "key": "Lantau Island and Giant Buddha Day Trip from Hong Kong",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.02,
          "date": "02/19/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.09,
          "date": "02/19/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.04,
          "date": "02/19/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.03,
          "date": "02/19/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "Ma Pak Leung - On Kung Pill (Pack of 10)",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.02,
          "date": "02/19/2017"
        },
        {
          "key": "Day Trip to Macau from Hong Kong",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/19/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.17,
          "date": "02/20/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.11,
          "date": "02/20/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/20/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.02,
          "date": "02/20/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.02,
          "date": "02/20/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.05,
          "date": "02/20/2017"
        },
        {
          "key": "Symphony of Lights Hong Kong Harbour Night Cruise",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "Lemon King - Liquorice Tangerine",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/20/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.14,
          "date": "02/21/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.1,
          "date": "02/21/2017"
        },
        {
          "key": "Lantau Island and Giant Buddha Day Trip from Hong Kong",
          "value": 0.02,
          "date": "02/21/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.12,
          "date": "02/21/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.02,
          "date": "02/21/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.02,
          "date": "02/21/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.06,
          "date": "02/21/2017"
        },
        {
          "key": "Skip the Line: Hong Kong Pub Crawl",
          "value": 0.01,
          "date": "02/21/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.01,
          "date": "02/21/2017"
        },
        {
          "key": "Tesla Hong Kong Airport Transfers (Up to 3 pax)",
          "value": 0.01,
          "date": "02/21/2017"
        },
        {
          "key": "Hong Kong Airport Shuttle Bus",
          "value": 0.01,
          "date": "02/21/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/22/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.08,
          "date": "02/22/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/22/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.12,
          "date": "02/22/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/22/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.02,
          "date": "02/22/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.08,
          "date": "02/22/2017"
        },
        {
          "key": "MingCha - Jasmine Blossoms",
          "value": 0.01,
          "date": "02/22/2017"
        },
        {
          "key": "Skip the Line: Hong Kong Pub Crawl",
          "value": 0.01,
          "date": "02/22/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.03,
          "date": "02/22/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.04,
          "date": "02/22/2017"
        },
        {
          "key": "Symphony of Lights Hong Kong Harbour Night Cruise",
          "value": 0.01,
          "date": "02/22/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/22/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.02,
          "date": "02/22/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.1,
          "date": "02/23/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.03,
          "date": "02/23/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.02,
          "date": "02/23/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.12,
          "date": "02/23/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "MingCha - Jasmine Blossoms",
          "value": 0.02,
          "date": "02/23/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.05,
          "date": "02/23/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Symphony of Lights Hong Kong Harbour Night Cruise",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Day Trip to Macau from Hong Kong",
          "value": 0.01,
          "date": "02/23/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.04,
          "date": "02/24/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.12,
          "date": "02/24/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.04,
          "date": "02/24/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.02,
          "date": "02/24/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.04,
          "date": "02/24/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.13,
          "date": "02/24/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/24/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.02,
          "date": "02/24/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/24/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/24/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.1,
          "date": "02/25/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.08,
          "date": "02/25/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.01,
          "date": "02/25/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.01,
          "date": "02/25/2017"
        },
        {
          "key": "MingCha - Jasmine Blossoms",
          "value": 0.01,
          "date": "02/25/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.05,
          "date": "02/25/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.02,
          "date": "02/25/2017"
        },
        {
          "key": "Magical World Disney Themed 4D Museum",
          "value": 0.02,
          "date": "02/25/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/25/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.01,
          "date": "02/25/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.02,
          "date": "02/25/2017"
        },
        {
          "key": "Hong Kong and Macau Attractions Pass",
          "value": 0.01,
          "date": "02/25/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.08,
          "date": "02/26/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.03,
          "date": "02/26/2017"
        },
        {
          "key": "360 Lantau Land and Sea Guided Tour",
          "value": 0.03,
          "date": "02/26/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.03,
          "date": "02/26/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.14,
          "date": "02/26/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.05,
          "date": "02/26/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.01,
          "date": "02/26/2017"
        },
        {
          "key": "Sky100 Hong Kong Observation Deck",
          "value": 0.01,
          "date": "02/26/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.02,
          "date": "02/26/2017"
        },
        {
          "key": "Hong Kong TramOramic Sightseeing Tour plus 2-Day Tramways",
          "value": 0.02,
          "date": "02/26/2017"
        },
        {
          "key": "Macau Tower Admission and 360° Café Buffet",
          "value": 0.01,
          "date": "02/26/2017"
        },
        {
          "key": "Big Bus Hong Kong Open-Top Night Tour",
          "value": 0.01,
          "date": "02/26/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.02,
          "date": "02/26/2017"
        },
        {
          "key": "Lemon King - Pickled Limes",
          "value": 0.01,
          "date": "02/26/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.18,
          "date": "02/27/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.05,
          "date": "02/27/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.12,
          "date": "02/27/2017"
        },
        {
          "key": "Big Bus Tours Hong Kong",
          "value": 0.05,
          "date": "02/27/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.06,
          "date": "02/27/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/27/2017"
        },
        {
          "key": "Ocean Park Admission Plus Ocean FasTrack Combo (API)",
          "value": 0.01,
          "date": "02/27/2017"
        },
        {
          "key": "Madame Tussauds x HK Observation Wheel 2-in-1 combo",
          "value": 0.01,
          "date": "02/27/2017"
        },
        {
          "key": "TurboJET",
          "value": 0.01,
          "date": "02/27/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.11,
          "date": "02/27/2017"
        },
        {
          "key": "Hong Kong Airport Shuttle Bus",
          "value": 0.03,
          "date": "02/27/2017"
        },
        {
          "key": "ZSL London Zoo (GT)",
          "value": 0.01,
          "date": "02/27/2017"
        },
        {
          "key": "The Coca-Cola London Eye - Standard Ticket (GT)",
          "value": 0.04,
          "date": "02/27/2017"
        },
        {
          "key": "Peak Tram Combo Tour (Fast Track)",
          "value": 0.01,
          "date": "02/27/2017"
        },
        {
          "key": "Airport Express",
          "value": 0.05,
          "date": "02/28/2017"
        },
        {
          "key": "Hong Kong Disneyland",
          "value": 0.05,
          "date": "02/28/2017"
        },
        {
          "key": "Hong Kong Disneyland BMG",
          "value": 0.11,
          "date": "02/28/2017"
        },
        {
          "key": "Peak Tram E-Ticket",
          "value": 0.09,
          "date": "02/28/2017"
        },
        {
          "key": "Hong Kong Ocean Park API",
          "value": 0.08,
          "date": "02/28/2017"
        },
        {
          "key": "Hong Kong Airport Shuttle Bus",
          "value": 0.01,
          "date": "02/28/2017"
        },
        {
          "key": "Madame Tussauds Hong Kong",
          "value": 0.01,
          "date": "02/28/2017"
        },
        {
          "key": "ZSL London Zoo (GT)",
          "value": 0.01,
          "date": "02/28/2017"
        }
      ]
    }
  }

  // visaulization
  draw_visualization (size, vm) {
    chart(vm.data, "orange");

    var datearray = [];
    var colorrange = [];

    function chart(csvpath, color) {

      if (color == "blue") {
        colorrange = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"];
      }
      else if (color == "pink") {
        colorrange = ["#980043", "#DD1C77", "#DF65B0", "#C994C7", "#D4B9DA", "#F1EEF6"];
      }
      else if (color == "orange") {
        colorrange = ["#B30000", "#E34A33", "#FC8D59", "#FDBB84", "#FDD49E", "#FEF0D9"];
      }
      var strokecolor = colorrange[0];

      var format = d3.time.format("%m/%d/%y");

      var margin = { "top": vm.margin_top, "right": vm.margin_right, "bottom": vm.margin_bottom, "left": vm.margin_left }
      var width = vm.width - margin.left - margin.right;
      var height = vm.height - margin.top - margin.bottom;

      var tooltip = d3.select("body")
          .append("div")
          .attr("class", "remove")
          .style("position", "absolute")
          .style("z-index", "20")
          .style("visibility", "hidden")
          .style("top", "30px")
          .style("left", "55px");

      var x = d3.time.scale()
          .range([0, width]);

      var y = d3.scale.linear()
          .range([height-10, 0]);

      var z = d3.scale.ordinal()
          .range(colorrange);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .ticks(d3.time.weeks);

      var yAxis = d3.svg.axis()
          .scale(y);

      var yAxisr = d3.svg.axis()
          .scale(y);

      var stack = d3.layout.stack()
          .offset("silhouette")
          .values(function(d) { return d.values; })
          .x(function(d) { return d.date; })
          .y(function(d) { return d.value; });

      var nest = d3.nest()
          .key(function(d) { return d.key; });

      var area = d3.svg.area()
          .interpolate("cardinal")
          .x(function(d) { return x(d.date); })
          .y0(function(d) { return y(d.y0); })
          .y1(function(d) { return y(d.y0 + d.y); });

      var svg = vm.wrap

      var data = vm.data
      data.forEach(function(d) {
        d.date = format.parse(d.date);
        d.value = +d.value;
      });

      var layers = stack(nest.entries(data));

      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

      svg.selectAll(".layer")
          .data(layers)
        .enter().append("path")
          .attr("class", "layer")
          .attr("d", function(d) { return area(d.values); })
          // .style("fill", function(d, i) { return z(i); });


      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(" + width + ", 0)")
          .call(yAxis.orient("right"));

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis.orient("left"));

      svg.selectAll(".layer")
        .attr("opacity", 1)
        .on("mouseover", function(d, i) {
          svg.selectAll(".layer").transition()
          .duration(250)
          .attr("opacity", function(d, j) {
            return j != i ? 0.6 : 1;
        })})
      //
      //   .on("mousemove", function(d, i) {
      //     mousex = d3.mouse(this);
      //     mousex = mousex[0];
      //     var invertedx = x.invert(mousex);
      //     invertedx = invertedx.getMonth() + invertedx.getDate();
      //     var selected = (d.values);
      //     for (var k = 0; k < selected.length; k++) {
      //       datearray[k] = selected[k].date
      //       datearray[k] = datearray[k].getMonth() + datearray[k].getDate();
      //     }
      //
      //     mousedate = datearray.indexOf(invertedx);
      //     pro = d.values[mousedate].value;
      //
      //     d3.select(this)
      //     .classed("hover", true)
      //     .attr("stroke", strokecolor)
      //     .attr("stroke-width", "0.5px"),
      //     tooltip.html( "<p>" + d.key + "<br>" + pro + "</p>" ).style("visibility", "visible");
      //
      // //   })
      //   .on("mouseout", function(d, i) {
      //    svg.selectAll(".layer")
      //     .transition()
      //     .duration(250)
      //     .attr("opacity", "1");
      //     d3.select(this)
      //     .classed("hover", false)
      //     .attr("stroke-width", "0px"), tooltip.html( "<p>" + d.key + "<br>" + pro + "</p>" ).style("visibility", "hidden");
      // })

      var vertical = d3.select(".chart")
            .append("div")
            .attr("class", "remove")
            .style("position", "absolute")
            .style("z-index", "19")
            .style("width", "1px")
            .style("height", "380px")
            .style("top", "10px")
            .style("bottom", "30px")
            .style("left", "0px")
            .style("background", "#fff");

      d3.select(".chart")
          .on("mousemove", function(){
             mousex = d3.mouse(this);
             mousex = mousex[0] + 5;
             vertical.style("left", mousex + "px" )})
          .on("mouseover", function(){
             mousex = d3.mouse(this);
             mousex = mousex[0] + 5;
             vertical.style("left", mousex + "px")});
    }
  }

}
