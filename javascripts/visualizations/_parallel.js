;class Parallel extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      // 'link_distance':      20,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
         {
            "Consumer Price+Rent":"142.21",
            "City":"Trondheim, Norway",
            "Consumer Price":"188.91",
            "Local Purch. Power":"67.01",
            "Groceries":"193.94",
            "Rent":"59.16",
            "Restaurant Price":"160.23"
         },
         {
            "Consumer Price+Rent":"137.76",
            "City":"Stavanger, Norway",
            "Consumer Price":"171.32",
            "Local Purch. Power":"78.50",
            "Groceries":"147.74",
            "Rent":"78.08",
            "Restaurant Price":"201.16"
         },
         {
            "Consumer Price+Rent":"124.67",
            "City":"Zurich, Switzerland",
            "Consumer Price":"152.84",
            "Local Purch. Power":"142.77",
            "Groceries":"143.70",
            "Rent":"74.58",
            "Restaurant Price":"138.79"
         },
         {
            "Consumer Price+Rent":"117.97",
            "City":"Oslo, Norway",
            "Consumer Price":"152.03",
            "Local Purch. Power":"99.31",
            "Groceries":"139.22",
            "Rent":"57.40",
            "Restaurant Price":"155.75"
         },
         {
            "Consumer Price+Rent":"122.06",
            "City":"Geneva, Switzerland",
            "Consumer Price":"146.24",
            "Local Purch. Power":"115.54",
            "Groceries":"138.95",
            "Rent":"79.05",
            "Restaurant Price":"135.25"
         },
         {
            "Consumer Price+Rent":"111.85",
            "City":"Bern, Switzerland",
            "Consumer Price":"142.44",
            "Local Purch. Power":"149.28",
            "Groceries":"126.78",
            "Rent":"57.44",
            "Restaurant Price":"103.59"
         },
         {
            "Consumer Price+Rent":"115.65",
            "City":"Lucerne, Switzerland",
            "Consumer Price":"139.94",
            "Local Purch. Power":"105.65",
            "Groceries":"146.52",
            "Rent":"72.45",
            "Restaurant Price":"95.72"
         },
         {
            "Consumer Price+Rent":"105.13",
            "City":"Perth, Australia",
            "Consumer Price":"139.63",
            "Local Purch. Power":"125.08",
            "Groceries":"113.13",
            "Rent":"43.76",
            "Restaurant Price":"131.61"
         },
         {
            "Consumer Price+Rent":"108.98",
            "City":"Bergen, Norway",
            "Consumer Price":"138.79",
            "Local Purch. Power":"97.02",
            "Groceries":"135.46",
            "Rent":"55.98",
            "Restaurant Price":"130.23"
         },
         {
            "Consumer Price+Rent":"120.91",
            "City":"Tokyo, Japan",
            "Consumer Price":"135.23",
            "Local Purch. Power":"90.14",
            "Groceries":"120.42",
            "Rent":"95.43",
            "Restaurant Price":"91.68"
         },
         {
            "Consumer Price+Rent":"115.79",
            "City":"Sydney, Australia",
            "Consumer Price":"132.39",
            "Local Purch. Power":"97.23",
            "Groceries":"121.11",
            "Rent":"86.25",
            "Restaurant Price":"110.98"
         },
         {
            "Consumer Price+Rent":"99.98",
            "City":"Adelaide, Australia",
            "Consumer Price":"129.60",
            "Local Purch. Power":"112.19",
            "Groceries":"120.68",
            "Rent":"47.30",
            "Restaurant Price":"121.44"
         },
         {
            "Consumer Price+Rent":"144.32",
            "City":"Monaco, Monaco",
            "Consumer Price":"128.15",
            "Local Purch. Power":"62.30",
            "Groceries":"89.80",
            "Rent":"173.08",
            "Restaurant Price":"138.14"
         },
         {
            "Consumer Price+Rent":"96.77",
            "City":"Copenhagen, Denmark",
            "Consumer Price":"123.82",
            "Local Purch. Power":"97.43",
            "Groceries":"104.25",
            "Rent":"48.65",
            "Restaurant Price":"139.11"
         },
         {
            "Consumer Price+Rent":"92.18",
            "City":"Edinburgh, United Kingdom",
            "Consumer Price":"122.52",
            "Local Purch. Power":"95.08",
            "Groceries":"92.92",
            "Rent":"38.21",
            "Restaurant Price":"143.02"
         },
         {
            "Consumer Price+Rent":"100.96",
            "City":"Melbourne, Australia",
            "Consumer Price":"121.53",
            "Local Purch. Power":"87.81",
            "Groceries":"112.50",
            "Rent":"64.37",
            "Restaurant Price":"102.37"
         },
         {
            "Consumer Price+Rent":"93.91",
            "City":"Dublin, Ireland",
            "Consumer Price":"119.56",
            "Local Purch. Power":"93.54",
            "Groceries":"109.96",
            "Rent":"48.30",
            "Restaurant Price":"113.19"
         },
         {
            "Consumer Price+Rent":"107.30",
            "City":"London, United Kingdom",
            "Consumer Price":"118.52",
            "Local Purch. Power":"88.58",
            "Groceries":"92.59",
            "Rent":"87.34",
            "Restaurant Price":"117.54"
         },
         {
            "Consumer Price+Rent":"97.94",
            "City":"Arhus, Denmark",
            "Consumer Price":"115.96",
            "Local Purch. Power":"73.97",
            "Groceries":"94.68",
            "Rent":"65.90",
            "Restaurant Price":"132.05"
         },
         {
            "Consumer Price+Rent":"93.45",
            "City":"Canberra, Australia",
            "Consumer Price":"115.89",
            "Local Purch. Power":"115.91",
            "Groceries":"106.77",
            "Rent":"53.55",
            "Restaurant Price":"94.30"
         },
         {
            "Consumer Price+Rent":"94.00",
            "City":"Brisbane, Australia",
            "Consumer Price":"114.70",
            "Local Purch. Power":"100.49",
            "Groceries":"113.64",
            "Rent":"57.19",
            "Restaurant Price":"101.33"
         },
         {
            "Consumer Price+Rent":"95.73",
            "City":"Paris, France",
            "Consumer Price":"113.88",
            "Local Purch. Power":"82.49",
            "Groceries":"95.93",
            "Rent":"63.47",
            "Restaurant Price":"112.89"
         },
         {
            "Consumer Price+Rent":"86.10",
            "City":"Malmo, Sweden",
            "Consumer Price":"112.89",
            "Local Purch. Power":"96.70",
            "Groceries":"92.55",
            "Rent":"38.45",
            "Restaurant Price":"129.79"
         },
         {
            "Consumer Price+Rent":"82.63",
            "City":"Toulouse, France",
            "Consumer Price":"112.28",
            "Local Purch. Power":"82.70",
            "Groceries":"89.10",
            "Rent":"29.90",
            "Restaurant Price":"105.33"
         },
         {
            "Consumer Price+Rent":"78.87",
            "City":"Riyadh, Saudi Arabia",
            "Consumer Price":"112.03",
            "Local Purch. Power":"70.51",
            "Groceries":"138.45",
            "Rent":"19.91",
            "Restaurant Price":"41.65"
         },
         {
            "Consumer Price+Rent":"94.16",
            "City":"Amsterdam, Netherlands",
            "Consumer Price":"110.78",
            "Local Purch. Power":"88.83",
            "Groceries":"69.93",
            "Rent":"64.61",
            "Restaurant Price":"114.88"
         },
         {
            "Consumer Price+Rent":"90.98",
            "City":"Darwin, Australia",
            "Consumer Price":"110.41",
            "Local Purch. Power":"121.91",
            "Groceries":"92.67",
            "Rent":"56.44",
            "Restaurant Price":"111.09"
         },
         {
            "Consumer Price+Rent":"83.89",
            "City":"Auckland, New Zealand",
            "Consumer Price":"110.36",
            "Local Purch. Power":"97.68",
            "Groceries":"98.74",
            "Rent":"36.80",
            "Restaurant Price":"88.77"
         },
         {
            "Consumer Price+Rent":"83.04",
            "City":"Gent, Belgium",
            "Consumer Price":"109.27",
            "Local Purch. Power":"83.02",
            "Groceries":"81.58",
            "Rent":"36.38",
            "Restaurant Price":"109.49"
         },
         {
            "Consumer Price+Rent":"83.45",
            "City":"Stockholm, Sweden",
            "Consumer Price":"109.14",
            "Local Purch. Power":"85.65",
            "Groceries":"87.42",
            "Rent":"37.75",
            "Restaurant Price":"117.66"
         },
         {
            "Consumer Price+Rent":"84.46",
            "City":"Brussels, Belgium",
            "Consumer Price":"109.10",
            "Local Purch. Power":"85.76",
            "Groceries":"91.44",
            "Rent":"40.63",
            "Restaurant Price":"109.75"
         },
         {
            "Consumer Price+Rent":"84.95",
            "City":"Aberdeen, United Kingdom",
            "Consumer Price":"109.08",
            "Local Purch. Power":"119.20",
            "Groceries":"103.80",
            "Rent":"42.04",
            "Restaurant Price":"110.60"
         },
         {
            "Consumer Price+Rent":"93.43",
            "City":"Boston, MA, United States",
            "Consumer Price":"106.80",
            "Local Purch. Power":"109.87",
            "Groceries":"113.24",
            "Rent":"69.66",
            "Restaurant Price":"86.06"
         },
         {
            "Consumer Price+Rent":"77.45",
            "City":"Dusseldorf, Germany",
            "Consumer Price":"106.51",
            "Local Purch. Power":"157.89",
            "Groceries":"77.03",
            "Rent":"25.77",
            "Restaurant Price":"119.73"
         },
         {
            "Consumer Price+Rent":"81.19",
            "City":"Wellington, New Zealand",
            "Consumer Price":"106.02",
            "Local Purch. Power":"90.61",
            "Groceries":"104.20",
            "Rent":"37.02",
            "Restaurant Price":"93.89"
         },
         {
            "Consumer Price+Rent":"82.12",
            "City":"Turin, Italy",
            "Consumer Price":"105.68",
            "Local Purch. Power":"46.42",
            "Groceries":"86.86",
            "Rent":"40.22",
            "Restaurant Price":"107.47"
         },
         {
            "Consumer Price+Rent":"89.20",
            "City":"Rome, Italy",
            "Consumer Price":"105.60",
            "Local Purch. Power":"57.49",
            "Groceries":"87.02",
            "Rent":"60.03",
            "Restaurant Price":"113.68"
         },
         {
            "Consumer Price+Rent":"89.17",
            "City":"Vancouver, Canada",
            "Consumer Price":"105.29",
            "Local Purch. Power":"98.12",
            "Groceries":"103.55",
            "Rent":"60.49",
            "Restaurant Price":"92.54"
         },
         {
            "Consumer Price+Rent":"81.40",
            "City":"Edmonton, Canada",
            "Consumer Price":"105.28",
            "Local Purch. Power":"86.09",
            "Groceries":"104.56",
            "Rent":"38.95",
            "Restaurant Price":"86.97"
         },
         {
            "Consumer Price+Rent":"86.62",
            "City":"Brighton, United Kingdom",
            "Consumer Price":"104.73",
            "Local Purch. Power":"128.05",
            "Groceries":"80.84",
            "Rent":"54.42",
            "Restaurant Price":"87.34"
         },
         {
            "Consumer Price+Rent":"82.39",
            "City":"Birmingham, United Kingdom",
            "Consumer Price":"104.57",
            "Local Purch. Power":"71.95",
            "Groceries":"94.22",
            "Rent":"42.93",
            "Restaurant Price":"90.62"
         },
         {
            "Consumer Price+Rent":"85.77",
            "City":"Toronto, Canada",
            "Consumer Price":"104.53",
            "Local Purch. Power":"104.11",
            "Groceries":"96.13",
            "Rent":"52.42",
            "Restaurant Price":"86.13"
         },
         {
            "Consumer Price+Rent":"86.98",
            "City":"Helsinki, Finland",
            "Consumer Price":"104.08",
            "Local Purch. Power":"96.15",
            "Groceries":"81.00",
            "Rent":"56.58",
            "Restaurant Price":"101.69"
         },
         {
            "Consumer Price+Rent":"77.56",
            "City":"Venice, Italy",
            "Consumer Price":"103.56",
            "Local Purch. Power":"76.23",
            "Groceries":"70.18",
            "Rent":"31.33",
            "Restaurant Price":"89.87"
         },
         {
            "Consumer Price+Rent":"87.47",
            "City":"Honolulu, HI, United States",
            "Consumer Price":"103.46",
            "Local Purch. Power":"90.60",
            "Groceries":"103.67",
            "Rent":"59.01",
            "Restaurant Price":"78.28"
         },
         {
            "Consumer Price+Rent":"80.91",
            "City":"Calgary, Canada",
            "Consumer Price":"103.38",
            "Local Purch. Power":"124.17",
            "Groceries":"99.95",
            "Rent":"40.93",
            "Restaurant Price":"81.08"
         },
         {
            "Consumer Price+Rent":"78.72",
            "City":"Sao Paolo, Brazil",
            "Consumer Price":"102.96",
            "Local Purch. Power":"46.26",
            "Groceries":"62.93",
            "Rent":"35.60",
            "Restaurant Price":"73.58"
         },
         {
            "Consumer Price+Rent":"76.65",
            "City":"Tampere, Finland",
            "Consumer Price":"102.68",
            "Local Purch. Power":"93.84",
            "Groceries":"100.74",
            "Rent":"30.37",
            "Restaurant Price":"98.33"
         },
         {
            "Consumer Price+Rent":"98.03",
            "City":"San Francisco, CA, United States",
            "Consumer Price":"102.52",
            "Local Purch. Power":"89.35",
            "Groceries":"97.84",
            "Rent":"90.04",
            "Restaurant Price":"83.21"
         },
         {
            "Consumer Price+Rent":"75.76",
            "City":"Cagliari, Italy",
            "Consumer Price":"101.88",
            "Local Purch. Power":"66.47",
            "Groceries":"72.93",
            "Rent":"29.29",
            "Restaurant Price":"114.90"
         },
         {
            "Consumer Price+Rent":"75.29",
            "City":"Hanover, Germany",
            "Consumer Price":"101.82",
            "Local Purch. Power":"90.76",
            "Groceries":"82.62",
            "Rent":"28.11",
            "Restaurant Price":"79.95"
         },
         {
            "Consumer Price+Rent":"73.25",
            "City":"Belfast, United Kingdom",
            "Consumer Price":"101.74",
            "Local Purch. Power":"69.18",
            "Groceries":"88.98",
            "Rent":"22.58",
            "Restaurant Price":"113.28"
         },
         {
            "Consumer Price+Rent":"81.82",
            "City":"Vienna, Austria",
            "Consumer Price":"101.47",
            "Local Purch. Power":"99.19",
            "Groceries":"82.49",
            "Rent":"46.87",
            "Restaurant Price":"80.97"
         },
         {
            "Consumer Price+Rent":"82.01",
            "City":"Seattle, WA, United States",
            "Consumer Price":"101.04",
            "Local Purch. Power":"107.23",
            "Groceries":"100.90",
            "Rent":"48.15",
            "Restaurant Price":"82.89"
         },
         {
            "Consumer Price+Rent":"76.09",
            "City":"Strasbourg, France",
            "Consumer Price":"100.86",
            "Local Purch. Power":"79.49",
            "Groceries":"76.03",
            "Rent":"32.03",
            "Restaurant Price":"126.38"
         },
         {
            "Consumer Price+Rent":"79.18",
            "City":"Florence, Italy",
            "Consumer Price":"100.43",
            "Local Purch. Power":"66.66",
            "Groceries":"72.16",
            "Rent":"41.39",
            "Restaurant Price":"94.28"
         },
         {
            "Consumer Price+Rent":"71.08",
            "City":"Thessaloniki, Greece",
            "Consumer Price":"100.39",
            "Local Purch. Power":"42.30",
            "Groceries":"69.76",
            "Rent":"18.96",
            "Restaurant Price":"95.91"
         },
         {
            "Consumer Price+Rent":"76.16",
            "City":"Erlangen, Germany",
            "Consumer Price":"100.39",
            "Local Purch. Power":"28.69",
            "Groceries":"92.92",
            "Rent":"33.07",
            "Restaurant Price":"80.27"
         },
         {
            "Consumer Price+Rent":"77.57",
            "City":"Hamburg, Germany",
            "Consumer Price":"100.18",
            "Local Purch. Power":"90.42",
            "Groceries":"92.62",
            "Rent":"37.35",
            "Restaurant Price":"76.50"
         },
         {
            "Consumer Price+Rent":"73.63",
            "City":"Haifa, Israel",
            "Consumer Price":"100.12",
            "Local Purch. Power":"74.63",
            "Groceries":"78.81",
            "Rent":"26.52",
            "Restaurant Price":"94.18"
         },
         {
            "Consumer Price+Rent":"75.53",
            "City":"Reykjavik, Iceland",
            "Consumer Price":"100.11",
            "Local Purch. Power":"81.22",
            "Groceries":"95.54",
            "Rent":"31.82",
            "Restaurant Price":"90.64"
         },
         {
            "Consumer Price+Rent":"100.00",
            "City":"New York, NY, United States",
            "Consumer Price":"100.00",
            "Local Purch. Power":"100.00",
            "Groceries":"100.00",
            "Rent":"100.00",
            "Restaurant Price":"100.00"
         },
         {
            "Consumer Price+Rent":"75.85",
            "City":"Leeds, United Kingdom",
            "Consumer Price":"98.85",
            "Local Purch. Power":"85.65",
            "Groceries":"81.88",
            "Rent":"34.95",
            "Restaurant Price":"107.45"
         },
         {
            "Consumer Price+Rent":"74.88",
            "City":"Phoenix, AZ, United States",
            "Consumer Price":"98.57",
            "Local Purch. Power":"97.47",
            "Groceries":"85.05",
            "Rent":"32.76",
            "Restaurant Price":"72.83"
         },
         {
            "Consumer Price+Rent":"87.81",
            "City":"Washington, DC, United States",
            "Consumer Price":"98.19",
            "Local Purch. Power":"97.37",
            "Groceries":"89.39",
            "Rent":"69.37",
            "Restaurant Price":"81.26"
         },
         {
            "Consumer Price+Rent":"72.46",
            "City":"Linkoping, Sweden",
            "Consumer Price":"98.06",
            "Local Purch. Power":"114.78",
            "Groceries":"90.51",
            "Rent":"26.92",
            "Restaurant Price":"102.37"
         },
         {
            "Consumer Price+Rent":"76.16",
            "City":"Montreal, Canada",
            "Consumer Price":"97.86",
            "Local Purch. Power":"109.41",
            "Groceries":"94.88",
            "Rent":"37.57",
            "Restaurant Price":"92.23"
         },
         {
            "Consumer Price+Rent":"76.31",
            "City":"Bologna, Italy",
            "Consumer Price":"97.82",
            "Local Purch. Power":"84.84",
            "Groceries":"92.02",
            "Rent":"38.03",
            "Restaurant Price":"89.53"
         },
         {
            "Consumer Price+Rent":"74.60",
            "City":"Nice, France",
            "Consumer Price":"96.89",
            "Local Purch. Power":"85.58",
            "Groceries":"81.58",
            "Rent":"34.95",
            "Restaurant Price":"85.89"
         },
         {
            "Consumer Price+Rent":"79.73",
            "City":"Milan, Italy",
            "Consumer Price":"96.88",
            "Local Purch. Power":"74.06",
            "Groceries":"74.25",
            "Rent":"49.22",
            "Restaurant Price":"106.38"
         },
         {
            "Consumer Price+Rent":"73.63",
            "City":"Winnipeg, Canada",
            "Consumer Price":"96.64",
            "Local Purch. Power":"97.96",
            "Groceries":"96.90",
            "Rent":"32.72",
            "Restaurant Price":"74.52"
         },
         {
            "Consumer Price+Rent":"69.25",
            "City":"Athens, Greece",
            "Consumer Price":"96.49",
            "Local Purch. Power":"48.42",
            "Groceries":"71.85",
            "Rent":"20.82",
            "Restaurant Price":"97.63"
         },
         {
            "Consumer Price+Rent":"94.14",
            "City":"Singapore, Singapore",
            "Consumer Price":"96.08",
            "Local Purch. Power":"93.29",
            "Groceries":"82.76",
            "Rent":"90.69",
            "Restaurant Price":"65.10"
         },
         {
            "Consumer Price+Rent":"78.00",
            "City":"Munich, Germany",
            "Consumer Price":"95.95",
            "Local Purch. Power":"112.58",
            "Groceries":"82.22",
            "Rent":"46.08",
            "Restaurant Price":"87.02"
         },
         {
            "Consumer Price+Rent":"71.34",
            "City":"Bordeaux, France",
            "Consumer Price":"95.92",
            "Local Purch. Power":"67.43",
            "Groceries":"78.45",
            "Rent":"27.63",
            "Restaurant Price":"93.93"
         },
         {
            "Consumer Price+Rent":"73.46",
            "City":"Genoa, Italy",
            "Consumer Price":"95.06",
            "Local Purch. Power":"115.78",
            "Groceries":"82.91",
            "Rent":"35.04",
            "Restaurant Price":"98.27"
         },
         {
            "Consumer Price+Rent":"73.90",
            "City":"Manchester, United Kingdom",
            "Consumer Price":"94.96",
            "Local Purch. Power":"95.97",
            "Groceries":"79.54",
            "Rent":"36.44",
            "Restaurant Price":"90.48"
         },
         {
            "Consumer Price+Rent":"70.47",
            "City":"Christchurch, New Zealand",
            "Consumer Price":"94.35",
            "Local Purch. Power":"82.57",
            "Groceries":"88.50",
            "Rent":"28.00",
            "Restaurant Price":"77.65"
         },
         {
            "Consumer Price+Rent":"72.64",
            "City":"Halifax, Canada",
            "Consumer Price":"94.30",
            "Local Purch. Power":"119.94",
            "Groceries":"95.04",
            "Rent":"34.13",
            "Restaurant Price":"79.02"
         },
         {
            "Consumer Price+Rent":"86.64",
            "City":"San Jose, CA, United States",
            "Consumer Price":"94.11",
            "Local Purch. Power":"113.13",
            "Groceries":"82.33",
            "Rent":"73.36",
            "Restaurant Price":"82.04"
         },
         {
            "Consumer Price+Rent":"67.54",
            "City":"Columbus, OH, United States",
            "Consumer Price":"94.03",
            "Local Purch. Power":"112.75",
            "Groceries":"86.75",
            "Rent":"20.43",
            "Restaurant Price":"75.11"
         },
         {
            "Consumer Price+Rent":"72.12",
            "City":"Stuttgart, Germany",
            "Consumer Price":"94.01",
            "Local Purch. Power":"119.70",
            "Groceries":"68.14",
            "Rent":"33.18",
            "Restaurant Price":"81.10"
         },
         {
            "Consumer Price+Rent":"71.18",
            "City":"Marbella, Spain",
            "Consumer Price":"93.95",
            "Local Purch. Power":"107.63",
            "Groceries":"69.65",
            "Rent":"30.68",
            "Restaurant Price":"99.73"
         },
         {
            "Consumer Price+Rent":"66.50",
            "City":"Chania, Greece",
            "Consumer Price":"93.77",
            "Local Purch. Power":"46.87",
            "Groceries":"69.52",
            "Rent":"18.01",
            "Restaurant Price":"88.97"
         },
         {
            "Consumer Price+Rent":"73.29",
            "City":"Ottawa, Canada",
            "Consumer Price":"93.76",
            "Local Purch. Power":"116.01",
            "Groceries":"96.84",
            "Rent":"36.87",
            "Restaurant Price":"83.34"
         },
         {
            "Consumer Price+Rent":"71.81",
            "City":"Brasilia, Brazil",
            "Consumer Price":"93.08",
            "Local Purch. Power":"32.70",
            "Groceries":"65.89",
            "Rent":"33.99",
            "Restaurant Price":"69.44"
         },
         {
            "Consumer Price+Rent":"76.59",
            "City":"Hartford, CT, United States",
            "Consumer Price":"92.90",
            "Local Purch. Power":"109.10",
            "Groceries":"108.41",
            "Rent":"47.57",
            "Restaurant Price":"72.13"
         },
         {
            "Consumer Price+Rent":"70.72",
            "City":"Indianapolis, IN, United States",
            "Consumer Price":"92.50",
            "Local Purch. Power":"281.77",
            "Groceries":"72.01",
            "Rent":"31.99",
            "Restaurant Price":"69.91"
         },
         {
            "Consumer Price+Rent":"70.28",
            "City":"Marseille, France",
            "Consumer Price":"92.13",
            "Local Purch. Power":"102.35",
            "Groceries":"88.65",
            "Rent":"31.44",
            "Restaurant Price":"82.98"
         },
         {
            "Consumer Price+Rent":"71.41",
            "City":"Frankfurt, Germany",
            "Consumer Price":"92.02",
            "Local Purch. Power":"115.22",
            "Groceries":"65.96",
            "Rent":"34.75",
            "Restaurant Price":"80.00"
         },
         {
            "Consumer Price+Rent":"73.05",
            "City":"Rio De Janeiro, Brazil",
            "Consumer Price":"91.85",
            "Local Purch. Power":"42.76",
            "Groceries":"59.80",
            "Rent":"39.61",
            "Restaurant Price":"69.92"
         },
         {
            "Consumer Price+Rent":"68.00",
            "City":"Nicosia, Cyprus",
            "Consumer Price":"91.80",
            "Local Purch. Power":"65.24",
            "Groceries":"76.36",
            "Rent":"25.66",
            "Restaurant Price":"100.08"
         },
         {
            "Consumer Price+Rent":"70.96",
            "City":"London, Canada",
            "Consumer Price":"91.51",
            "Local Purch. Power":"94.75",
            "Groceries":"78.95",
            "Rent":"34.41",
            "Restaurant Price":"80.36"
         },
         {
            "Consumer Price+Rent":"70.73",
            "City":"Lyon, France",
            "Consumer Price":"91.14",
            "Local Purch. Power":"83.91",
            "Groceries":"82.18",
            "Rent":"34.41",
            "Restaurant Price":"92.00"
         },
         {
            "Consumer Price+Rent":"79.11",
            "City":"San Diego, CA, United States",
            "Consumer Price":"91.05",
            "Local Purch. Power":"109.84",
            "Groceries":"81.09",
            "Rent":"57.88",
            "Restaurant Price":"84.34"
         },
         {
            "Consumer Price+Rent":"81.19",
            "City":"Los Angeles, CA, United States",
            "Consumer Price":"90.87",
            "Local Purch. Power":"122.29",
            "Groceries":"73.58",
            "Rent":"63.97",
            "Restaurant Price":"70.46"
         },
         {
            "Consumer Price+Rent":"69.32",
            "City":"San Juan, Puerto Rico",
            "Consumer Price":"90.78",
            "Local Purch. Power":"30.49",
            "Groceries":"69.25",
            "Rent":"31.15",
            "Restaurant Price":"73.68"
         },
         {
            "Consumer Price+Rent":"68.72",
            "City":"Cologne, Germany",
            "Consumer Price":"90.73",
            "Local Purch. Power":"114.48",
            "Groceries":"74.64",
            "Rent":"29.58",
            "Restaurant Price":"82.78"
         },
         {
            "Consumer Price+Rent":"70.29",
            "City":"Minneapolis, MN, United States",
            "Consumer Price":"90.26",
            "Local Purch. Power":"108.19",
            "Groceries":"72.84",
            "Rent":"34.78",
            "Restaurant Price":"77.16"
         },
         {
            "Consumer Price+Rent":"69.25",
            "City":"Tampa, FL, United States",
            "Consumer Price":"89.97",
            "Local Purch. Power":"90.85",
            "Groceries":"64.01",
            "Rent":"32.39",
            "Restaurant Price":"62.16"
         },
         {
            "Consumer Price+Rent":"67.02",
            "City":"Sliema, Malta",
            "Consumer Price":"89.88",
            "Local Purch. Power":"80.50",
            "Groceries":"70.55",
            "Rent":"26.35",
            "Restaurant Price":"89.05"
         },
         {
            "Consumer Price+Rent":"69.91",
            "City":"Berlin, Germany",
            "Consumer Price":"89.09",
            "Local Purch. Power":"133.19",
            "Groceries":"75.36",
            "Rent":"35.80",
            "Restaurant Price":"71.71"
         },
         {
            "Consumer Price+Rent":"67.67",
            "City":"Waterloo, Canada",
            "Consumer Price":"89.02",
            "Local Purch. Power":"101.67",
            "Groceries":"87.06",
            "Rent":"29.71",
            "Restaurant Price":"67.85"
         },
         {
            "Consumer Price+Rent":"76.44",
            "City":"Baltimore, MD, United States",
            "Consumer Price":"88.99",
            "Local Purch. Power":"118.83",
            "Groceries":"101.95",
            "Rent":"54.12",
            "Restaurant Price":"78.13"
         },
         {
            "Consumer Price+Rent":"63.70",
            "City":"Sevilla, Spain",
            "Consumer Price":"88.96",
            "Local Purch. Power":"73.40",
            "Groceries":"64.69",
            "Rent":"18.79",
            "Restaurant Price":"81.85"
         },
         {
            "Consumer Price+Rent":"70.25",
            "City":"Beirut, Lebanon",
            "Consumer Price":"88.92",
            "Local Purch. Power":"25.73",
            "Groceries":"44.54",
            "Rent":"37.05",
            "Restaurant Price":"76.19"
         },
         {
            "Consumer Price+Rent":"69.06",
            "City":"Barcelona, Spain",
            "Consumer Price":"88.82",
            "Local Purch. Power":"86.59",
            "Groceries":"65.26",
            "Rent":"33.92",
            "Restaurant Price":"88.14"
         },
         {
            "Consumer Price+Rent":"77.74",
            "City":"Philadelphia, PA, United States",
            "Consumer Price":"88.36",
            "Local Purch. Power":"98.96",
            "Groceries":"83.39",
            "Rent":"58.85",
            "Restaurant Price":"78.50"
         },
         {
            "Consumer Price+Rent":"94.64",
            "City":"Hong Kong, Hong Kong",
            "Consumer Price":"88.13",
            "Local Purch. Power":"91.77",
            "Groceries":"85.25",
            "Rent":"106.22",
            "Restaurant Price":"79.06"
         },
         {
            "Consumer Price+Rent":"70.52",
            "City":"Madrid, Spain",
            "Consumer Price":"87.93",
            "Local Purch. Power":"93.96",
            "Groceries":"60.85",
            "Rent":"39.57",
            "Restaurant Price":"88.31"
         },
         {
            "Consumer Price+Rent":"68.82",
            "City":"Graz, Austria",
            "Consumer Price":"87.76",
            "Local Purch. Power":"101.91",
            "Groceries":"77.79",
            "Rent":"35.14",
            "Restaurant Price":"72.87"
         },
         {
            "Consumer Price+Rent":"69.95",
            "City":"Dallas, TX, United States",
            "Consumer Price":"87.62",
            "Local Purch. Power":"113.86",
            "Groceries":"67.93",
            "Rent":"38.51",
            "Restaurant Price":"72.85"
         },
         {
            "Consumer Price+Rent":"66.84",
            "City":"Nuremberg, Germany",
            "Consumer Price":"87.54",
            "Local Purch. Power":"107.62",
            "Groceries":"69.56",
            "Rent":"30.04",
            "Restaurant Price":"78.79"
         },
         {
            "Consumer Price+Rent":"68.98",
            "City":"Jerusalem, Israel",
            "Consumer Price":"87.54",
            "Local Purch. Power":"68.10",
            "Groceries":"70.06",
            "Rent":"35.97",
            "Restaurant Price":"77.82"
         },
         {
            "Consumer Price+Rent":"69.96",
            "City":"Houston, TX, United States",
            "Consumer Price":"86.97",
            "Local Purch. Power":"137.32",
            "Groceries":"74.96",
            "Rent":"39.70",
            "Restaurant Price":"68.89"
         },
         {
            "Consumer Price+Rent":"69.01",
            "City":"Bilbao, Spain",
            "Consumer Price":"86.62",
            "Local Purch. Power":"94.48",
            "Groceries":"60.47",
            "Rent":"37.70",
            "Restaurant Price":"93.40"
         },
         {
            "Consumer Price+Rent":"65.15",
            "City":"Leicester, United Kingdom",
            "Consumer Price":"86.15",
            "Local Purch. Power":"103.13",
            "Groceries":"82.09",
            "Rent":"27.80",
            "Restaurant Price":"67.83"
         },
         {
            "Consumer Price+Rent":"63.56",
            "City":"Campinas, Brazil",
            "Consumer Price":"85.98",
            "Local Purch. Power":"75.34",
            "Groceries":"54.81",
            "Rent":"23.70",
            "Restaurant Price":"66.22"
         },
         {
            "Consumer Price+Rent":"84.04",
            "City":"Abu Dhabi, United Arab Emirates",
            "Consumer Price":"85.84",
            "Local Purch. Power":"134.56",
            "Groceries":"72.59",
            "Rent":"80.82",
            "Restaurant Price":"92.39"
         },
         {
            "Consumer Price+Rent":"72.65",
            "City":"Chicago, IL, United States",
            "Consumer Price":"85.41",
            "Local Purch. Power":"119.92",
            "Groceries":"72.28",
            "Rent":"49.96",
            "Restaurant Price":"74.80"
         },
         {
            "Consumer Price+Rent":"62.71",
            "City":"Saint Louis, MO, United States",
            "Consumer Price":"84.91",
            "Local Purch. Power":"140.12",
            "Groceries":"84.75",
            "Rent":"23.22",
            "Restaurant Price":"64.89"
         },
         {
            "Consumer Price+Rent":"77.09",
            "City":"Doha, Qatar",
            "Consumer Price":"84.73",
            "Local Purch. Power":"153.01",
            "Groceries":"81.63",
            "Rent":"63.50",
            "Restaurant Price":"70.84"
         },
         {
            "Consumer Price+Rent":"63.58",
            "City":"Florianopolis, Brazil",
            "Consumer Price":"83.88",
            "Local Purch. Power":"37.89",
            "Groceries":"69.26",
            "Rent":"27.46",
            "Restaurant Price":"48.84"
         },
         {
            "Consumer Price+Rent":"61.71",
            "City":"Pittsburgh, PA, United States",
            "Consumer Price":"83.72",
            "Local Purch. Power":"135.19",
            "Groceries":"69.83",
            "Rent":"22.56",
            "Restaurant Price":"56.65"
         },
         {
            "Consumer Price+Rent":"62.93",
            "City":"Montevideo, Uruguay",
            "Consumer Price":"83.56",
            "Local Purch. Power":"30.20",
            "Groceries":"66.73",
            "Rent":"26.22",
            "Restaurant Price":"68.83"
         },
         {
            "Consumer Price+Rent":"77.80",
            "City":"Dubai, United Arab Emirates",
            "Consumer Price":"83.39",
            "Local Purch. Power":"149.89",
            "Groceries":"66.31",
            "Rent":"67.87",
            "Restaurant Price":"78.57"
         },
         {
            "Consumer Price+Rent":"61.23",
            "City":"Bremen, Germany",
            "Consumer Price":"82.85",
            "Local Purch. Power":"88.11",
            "Groceries":"70.65",
            "Rent":"22.77",
            "Restaurant Price":"65.58"
         },
         {
            "Consumer Price+Rent":"61.25",
            "City":"Porto Alegre, Brazil",
            "Consumer Price":"82.33",
            "Local Purch. Power":"50.42",
            "Groceries":"50.02",
            "Rent":"23.75",
            "Restaurant Price":"51.01"
         },
         {
            "Consumer Price+Rent":"63.08",
            "City":"Cincinnati, OH, United States",
            "Consumer Price":"82.18",
            "Local Purch. Power":"103.60",
            "Groceries":"72.09",
            "Rent":"29.11",
            "Restaurant Price":"61.97"
         },
         {
            "Consumer Price+Rent":"59.46",
            "City":"Valencia, Spain",
            "Consumer Price":"81.87",
            "Local Purch. Power":"84.53",
            "Groceries":"57.18",
            "Rent":"19.60",
            "Restaurant Price":"73.68"
         },
         {
            "Consumer Price+Rent":"58.71",
            "City":"Patras, Greece",
            "Consumer Price":"81.84",
            "Local Purch. Power":"45.64",
            "Groceries":"63.73",
            "Rent":"17.58",
            "Restaurant Price":"76.59"
         },
         {
            "Consumer Price+Rent":"60.05",
            "City":"Curitiba, Brazil",
            "Consumer Price":"81.10",
            "Local Purch. Power":"48.94",
            "Groceries":"57.17",
            "Rent":"22.60",
            "Restaurant Price":"45.90"
         },
         {
            "Consumer Price+Rent":"62.02",
            "City":"Detroit, MI, United States",
            "Consumer Price":"79.72",
            "Local Purch. Power":"92.61",
            "Groceries":"75.82",
            "Rent":"30.54",
            "Restaurant Price":"67.24"
         },
         {
            "Consumer Price+Rent":"68.25",
            "City":"Denver, CO, United States",
            "Consumer Price":"79.39",
            "Local Purch. Power":"126.10",
            "Groceries":"69.23",
            "Rent":"48.43",
            "Restaurant Price":"64.57"
         },
         {
            "Consumer Price+Rent":"66.91",
            "City":"Austin, TX, United States",
            "Consumer Price":"78.92",
            "Local Purch. Power":"131.95",
            "Groceries":"80.38",
            "Rent":"45.55",
            "Restaurant Price":"64.96"
         },
         {
            "Consumer Price+Rent":"61.59",
            "City":"Portland, OR, United States",
            "Consumer Price":"77.22",
            "Local Purch. Power":"123.02",
            "Groceries":"67.34",
            "Rent":"33.80",
            "Restaurant Price":"68.36"
         },
         {
            "Consumer Price+Rent":"57.51",
            "City":"Londrina, Brazil",
            "Consumer Price":"76.68",
            "Local Purch. Power":"30.91",
            "Groceries":"49.26",
            "Rent":"23.42",
            "Restaurant Price":"54.52"
         },
         {
            "Consumer Price+Rent":"59.47",
            "City":"Lisbon, Portugal",
            "Consumer Price":"76.33",
            "Local Purch. Power":"62.83",
            "Groceries":"58.65",
            "Rent":"29.49",
            "Restaurant Price":"62.75"
         },
         {
            "Consumer Price+Rent":"54.18",
            "City":"Coimbra, Portugal",
            "Consumer Price":"75.74",
            "Local Purch. Power":"53.72",
            "Groceries":"68.50",
            "Rent":"15.84",
            "Restaurant Price":"48.93"
         },
         {
            "Consumer Price+Rent":"54.05",
            "City":"Split, Croatia",
            "Consumer Price":"75.60",
            "Local Purch. Power":"51.15",
            "Groceries":"59.97",
            "Rent":"15.73",
            "Restaurant Price":"59.67"
         },
         {
            "Consumer Price+Rent":"55.44",
            "City":"Salvador, Brazil",
            "Consumer Price":"75.53",
            "Local Purch. Power":"33.97",
            "Groceries":"49.95",
            "Rent":"19.72",
            "Restaurant Price":"45.98"
         },
         {
            "Consumer Price+Rent":"61.46",
            "City":"Casablanca, Morocco",
            "Consumer Price":"75.49",
            "Local Purch. Power":"15.00",
            "Groceries":"74.49",
            "Rent":"36.51",
            "Restaurant Price":"54.77"
         },
         {
            "Consumer Price+Rent":"58.80",
            "City":"Des Moines, IA, United States",
            "Consumer Price":"75.45",
            "Local Purch. Power":"104.04",
            "Groceries":"68.64",
            "Rent":"29.18",
            "Restaurant Price":"54.51"
         },
         {
            "Consumer Price+Rent":"58.56",
            "City":"Ljubljana, Slovenia",
            "Consumer Price":"75.42",
            "Local Purch. Power":"56.95",
            "Groceries":"62.73",
            "Rent":"28.59",
            "Restaurant Price":"61.98"
         },
         {
            "Consumer Price+Rent":"58.23",
            "City":"Maribor, Slovenia",
            "Consumer Price":"75.17",
            "Local Purch. Power":"52.19",
            "Groceries":"55.86",
            "Rent":"28.11",
            "Restaurant Price":"56.85"
         },
         {
            "Consumer Price+Rent":"56.29",
            "City":"Istanbul, Turkey",
            "Consumer Price":"74.89",
            "Local Purch. Power":"57.60",
            "Groceries":"55.95",
            "Rent":"23.21",
            "Restaurant Price":"55.29"
         },
         {
            "Consumer Price+Rent":"60.80",
            "City":"Astana, Kazakhstan",
            "Consumer Price":"74.58",
            "Local Purch. Power":"32.01",
            "Groceries":"50.62",
            "Rent":"36.29",
            "Restaurant Price":"38.83"
         },
         {
            "Consumer Price+Rent":"61.31",
            "City":"Johannesburg, South Africa",
            "Consumer Price":"74.23",
            "Local Purch. Power":"89.43",
            "Groceries":"59.72",
            "Rent":"38.34",
            "Restaurant Price":"55.42"
         },
         {
            "Consumer Price+Rent":"54.21",
            "City":"Balneario Camboriu, Brazil",
            "Consumer Price":"74.02",
            "Local Purch. Power":"25.21",
            "Groceries":"48.29",
            "Rent":"18.98",
            "Restaurant Price":"52.10"
         },
         {
            "Consumer Price+Rent":"60.31",
            "City":"Las Vegas, NV, United States",
            "Consumer Price":"73.98",
            "Local Purch. Power":"138.32",
            "Groceries":"66.83",
            "Rent":"36.00",
            "Restaurant Price":"70.80"
         },
         {
            "Consumer Price+Rent":"63.00",
            "City":"Manama, Bahrain",
            "Consumer Price":"71.86",
            "Local Purch. Power":"64.67",
            "Groceries":"63.60",
            "Rent":"47.24",
            "Restaurant Price":"80.96"
         },
         {
            "Consumer Price+Rent":"53.36",
            "City":"Zagreb, Croatia",
            "Consumer Price":"71.49",
            "Local Purch. Power":"54.58",
            "Groceries":"57.85",
            "Rent":"21.12",
            "Restaurant Price":"60.09"
         },
         {
            "Consumer Price+Rent":"60.37",
            "City":"Baku, Azerbaijan",
            "Consumer Price":"71.24",
            "Local Purch. Power":"26.38",
            "Groceries":"53.20",
            "Rent":"41.03",
            "Restaurant Price":"68.17"
         },
         {
            "Consumer Price+Rent":"54.90",
            "City":"San Jose, Costa Rica",
            "Consumer Price":"71.17",
            "Local Purch. Power":"38.83",
            "Groceries":"78.60",
            "Rent":"25.95",
            "Restaurant Price":"52.85"
         },
         {
            "Consumer Price+Rent":"50.74",
            "City":"Riga, Latvia",
            "Consumer Price":"70.75",
            "Local Purch. Power":"34.70",
            "Groceries":"52.59",
            "Rent":"15.16",
            "Restaurant Price":"66.61"
         },
         {
            "Consumer Price+Rent":"58.50",
            "City":"Seoul, South Korea",
            "Consumer Price":"70.53",
            "Local Purch. Power":"121.54",
            "Groceries":"71.05",
            "Rent":"37.10",
            "Restaurant Price":"50.57"
         },
         {
            "Consumer Price+Rent":"52.54",
            "City":"Fortaleza, Brazil",
            "Consumer Price":"70.30",
            "Local Purch. Power":"59.92",
            "Groceries":"51.92",
            "Rent":"20.94",
            "Restaurant Price":"47.81"
         },
         {
            "Consumer Price+Rent":"55.27",
            "City":"Bratislava, Slovakia",
            "Consumer Price":"69.94",
            "Local Purch. Power":"48.64",
            "Groceries":"55.22",
            "Rent":"29.17",
            "Restaurant Price":"50.61"
         },
         {
            "Consumer Price+Rent":"52.16",
            "City":"Santiago, Chile",
            "Consumer Price":"69.89",
            "Local Purch. Power":"44.98",
            "Groceries":"53.54",
            "Rent":"20.62",
            "Restaurant Price":"58.73"
         },
         {
            "Consumer Price+Rent":"52.36",
            "City":"Bogota, Colombia",
            "Consumer Price":"69.50",
            "Local Purch. Power":"26.24",
            "Groceries":"64.95",
            "Rent":"21.86",
            "Restaurant Price":"41.91"
         },
         {
            "Consumer Price+Rent":"52.01",
            "City":"Belo Horizonte, Brazil",
            "Consumer Price":"69.08",
            "Local Purch. Power":"55.99",
            "Groceries":"46.67",
            "Rent":"21.66",
            "Restaurant Price":"60.15"
         },
         {
            "Consumer Price+Rent":"51.51",
            "City":"Porto, Portugal",
            "Consumer Price":"69.05",
            "Local Purch. Power":"52.55",
            "Groceries":"52.65",
            "Rent":"20.32",
            "Restaurant Price":"47.06"
         },
         {
            "Consumer Price+Rent":"52.31",
            "City":"Santa Cruz De Tenerife, Spain",
            "Consumer Price":"68.98",
            "Local Purch. Power":"71.41",
            "Groceries":"54.01",
            "Rent":"22.67",
            "Restaurant Price":"56.80"
         },
         {
            "Consumer Price+Rent":"53.19",
            "City":"Novosibirsk, Russia",
            "Consumer Price":"67.96",
            "Local Purch. Power":"38.33",
            "Groceries":"46.04",
            "Rent":"26.92",
            "Restaurant Price":"77.27"
         },
         {
            "Consumer Price+Rent":"54.49",
            "City":"Saint Petersburg, Russia",
            "Consumer Price":"67.58",
            "Local Purch. Power":"40.98",
            "Groceries":"49.09",
            "Rent":"31.20",
            "Restaurant Price":"73.42"
         },
         {
            "Consumer Price+Rent":"49.26",
            "City":"Kaunas, Lithuania",
            "Consumer Price":"67.44",
            "Local Purch. Power":"31.72",
            "Groceries":"52.66",
            "Rent":"16.93",
            "Restaurant Price":"65.17"
         },
         {
            "Consumer Price+Rent":"48.55",
            "City":"Tallinn, Estonia",
            "Consumer Price":"66.95",
            "Local Purch. Power":"49.68",
            "Groceries":"52.25",
            "Rent":"15.82",
            "Restaurant Price":"60.70"
         },
         {
            "Consumer Price+Rent":"49.15",
            "City":"Perm, Russia",
            "Consumer Price":"66.64",
            "Local Purch. Power":"30.50",
            "Groceries":"59.01",
            "Rent":"18.04",
            "Restaurant Price":"56.54"
         },
         {
            "Consumer Price+Rent":"49.29",
            "City":"Budva, Montenegro",
            "Consumer Price":"66.16",
            "Local Purch. Power":"33.57",
            "Groceries":"53.35",
            "Rent":"19.29",
            "Restaurant Price":"57.43"
         },
         {
            "Consumer Price+Rent":"47.44",
            "City":"Amman, Jordan",
            "Consumer Price":"65.95",
            "Local Purch. Power":"37.85",
            "Groceries":"60.72",
            "Rent":"14.51",
            "Restaurant Price":"51.73"
         },
         {
            "Consumer Price+Rent":"49.97",
            "City":"Buenos Aires, Argentina",
            "Consumer Price":"65.93",
            "Local Purch. Power":"40.33",
            "Groceries":"55.69",
            "Rent":"21.58",
            "Restaurant Price":"57.34"
         },
         {
            "Consumer Price+Rent":"50.36",
            "City":"Taipei, Taiwan",
            "Consumer Price":"65.66",
            "Local Purch. Power":"75.97",
            "Groceries":"82.38",
            "Rent":"23.16",
            "Restaurant Price":"33.92"
         },
         {
            "Consumer Price+Rent":"51.21",
            "City":"Jakarta, Indonesia",
            "Consumer Price":"64.11",
            "Local Purch. Power":"25.60",
            "Groceries":"69.89",
            "Rent":"28.25",
            "Restaurant Price":"39.67"
         },
         {
            "Consumer Price+Rent":"46.47",
            "City":"Vilnius, Lithuania",
            "Consumer Price":"63.84",
            "Local Purch. Power":"34.61",
            "Groceries":"52.08",
            "Rent":"15.58",
            "Restaurant Price":"40.18"
         },
         {
            "Consumer Price+Rent":"45.64",
            "City":"Budapest, Hungary",
            "Consumer Price":"63.41",
            "Local Purch. Power":"37.44",
            "Groceries":"46.92",
            "Rent":"14.03",
            "Restaurant Price":"46.75"
         },
         {
            "Consumer Price+Rent":"49.89",
            "City":"Yerevan, Armenia",
            "Consumer Price":"63.39",
            "Local Purch. Power":"19.61",
            "Groceries":"37.69",
            "Rent":"25.89",
            "Restaurant Price":"57.59"
         },
         {
            "Consumer Price+Rent":"48.12",
            "City":"Yekaterinburg, Russia",
            "Consumer Price":"63.22",
            "Local Purch. Power":"45.59",
            "Groceries":"51.07",
            "Rent":"21.27",
            "Restaurant Price":"72.49"
         },
         {
            "Consumer Price+Rent":"50.20",
            "City":"Prague, Czech Republic",
            "Consumer Price":"62.91",
            "Local Purch. Power":"58.44",
            "Groceries":"49.50",
            "Rent":"27.59",
            "Restaurant Price":"43.30"
         },
         {
            "Consumer Price+Rent":"44.49",
            "City":"Debrecen, Hungary",
            "Consumer Price":"62.47",
            "Local Purch. Power":"43.11",
            "Groceries":"51.07",
            "Rent":"12.52",
            "Restaurant Price":"48.93"
         },
         {
            "Consumer Price+Rent":"51.11",
            "City":"Tehran, Iran",
            "Consumer Price":"62.43",
            "Local Purch. Power":"45.70",
            "Groceries":"56.64",
            "Rent":"30.99",
            "Restaurant Price":"49.01"
         },
         {
            "Consumer Price+Rent":"47.28",
            "City":"Brno, Czech Republic",
            "Consumer Price":"62.35",
            "Local Purch. Power":"68.36",
            "Groceries":"48.46",
            "Rent":"20.49",
            "Restaurant Price":"43.52"
         },
         {
            "Consumer Price+Rent":"45.00",
            "City":"Izmir, Turkey",
            "Consumer Price":"62.12",
            "Local Purch. Power":"46.25",
            "Groceries":"51.08",
            "Rent":"14.54",
            "Restaurant Price":"42.39"
         },
         {
            "Consumer Price+Rent":"45.80",
            "City":"Podgorica, Montenegro",
            "Consumer Price":"61.72",
            "Local Purch. Power":"42.01",
            "Groceries":"44.70",
            "Rent":"17.49",
            "Restaurant Price":"62.72"
         },
         {
            "Consumer Price+Rent":"44.82",
            "City":"Medellin, Colombia",
            "Consumer Price":"61.43",
            "Local Purch. Power":"18.61",
            "Groceries":"45.49",
            "Rent":"15.28",
            "Restaurant Price":"42.01"
         },
         {
            "Consumer Price+Rent":"42.74",
            "City":"Antalya, Turkey",
            "Consumer Price":"61.00",
            "Local Purch. Power":"39.81",
            "Groceries":"44.91",
            "Rent":"10.27",
            "Restaurant Price":"42.74"
         },
         {
            "Consumer Price+Rent":"46.58",
            "City":"Kosice, Slovakia",
            "Consumer Price":"60.86",
            "Local Purch. Power":"54.82",
            "Groceries":"47.90",
            "Rent":"21.19",
            "Restaurant Price":"42.65"
         },
         {
            "Consumer Price+Rent":"44.25",
            "City":"Ankara, Turkey",
            "Consumer Price":"60.73",
            "Local Purch. Power":"58.15",
            "Groceries":"43.66",
            "Rent":"14.95",
            "Restaurant Price":"46.31"
         },
         {
            "Consumer Price+Rent":"49.73",
            "City":"Kiev, Ukraine",
            "Consumer Price":"59.87",
            "Local Purch. Power":"27.80",
            "Groceries":"41.78",
            "Rent":"31.70",
            "Restaurant Price":"61.94"
         },
         {
            "Consumer Price+Rent":"46.56",
            "City":"Mexico City, Mexico",
            "Consumer Price":"59.68",
            "Local Purch. Power":"42.69",
            "Groceries":"53.86",
            "Rent":"23.22",
            "Restaurant Price":"47.77"
         },
         {
            "Consumer Price+Rent":"45.26",
            "City":"Lima, Peru",
            "Consumer Price":"59.52",
            "Local Purch. Power":"34.80",
            "Groceries":"51.37",
            "Rent":"19.90",
            "Restaurant Price":"43.29"
         },
         {
            "Consumer Price+Rent":"42.79",
            "City":"Osijek, Croatia",
            "Consumer Price":"59.50",
            "Local Purch. Power":"45.81",
            "Groceries":"52.02",
            "Rent":"13.07",
            "Restaurant Price":"39.77"
         },
         {
            "Consumer Price+Rent":"42.19",
            "City":"Sarajevo, Bosnia And Herzegovina",
            "Consumer Price":"58.59",
            "Local Purch. Power":"35.81",
            "Groceries":"43.89",
            "Rent":"13.01",
            "Restaurant Price":"44.13"
         },
         {
            "Consumer Price+Rent":"43.94",
            "City":"Cordoba, Argentina",
            "Consumer Price":"57.81",
            "Local Purch. Power":"42.17",
            "Groceries":"52.43",
            "Rent":"19.29",
            "Restaurant Price":"51.76"
         },
         {
            "Consumer Price+Rent":"42.51",
            "City":"Tula, Russia",
            "Consumer Price":"57.72",
            "Local Purch. Power":"51.89",
            "Groceries":"48.96",
            "Rent":"15.46",
            "Restaurant Price":"44.94"
         },
         {
            "Consumer Price+Rent":"40.61",
            "City":"Guadalajara, Mexico",
            "Consumer Price":"57.67",
            "Local Purch. Power":"69.13",
            "Groceries":"47.54",
            "Rent":"10.28",
            "Restaurant Price":"44.78"
         },
         {
            "Consumer Price+Rent":"42.37",
            "City":"Tbilisi, Georgia",
            "Consumer Price":"57.32",
            "Local Purch. Power":"28.71",
            "Groceries":"40.89",
            "Rent":"15.77",
            "Restaurant Price":"52.50"
         },
         {
            "Consumer Price+Rent":"44.70",
            "City":"Monterrey, Mexico",
            "Consumer Price":"56.60",
            "Local Purch. Power":"65.26",
            "Groceries":"49.88",
            "Rent":"23.53",
            "Restaurant Price":"53.05"
         },
         {
            "Consumer Price+Rent":"42.15",
            "City":"Belgrade, Serbia",
            "Consumer Price":"56.21",
            "Local Purch. Power":"30.66",
            "Groceries":"39.73",
            "Rent":"17.13",
            "Restaurant Price":"45.39"
         },
         {
            "Consumer Price+Rent":"41.44",
            "City":"Sofia, Bulgaria",
            "Consumer Price":"55.62",
            "Local Purch. Power":"36.55",
            "Groceries":"45.83",
            "Rent":"16.24",
            "Restaurant Price":"37.78"
         },
         {
            "Consumer Price+Rent":"41.93",
            "City":"Kuala Lumpur, Malaysia",
            "Consumer Price":"55.55",
            "Local Purch. Power":"77.70",
            "Groceries":"55.09",
            "Rent":"17.71",
            "Restaurant Price":"32.09"
         },
         {
            "Consumer Price+Rent":"40.65",
            "City":"Damascus, Syria",
            "Consumer Price":"55.50",
            "Local Purch. Power":"20.52",
            "Groceries":"41.91",
            "Rent":"14.22",
            "Restaurant Price":"41.08"
         },
         {
            "Consumer Price+Rent":"38.13",
            "City":"Johor Baharu, Malaysia",
            "Consumer Price":"55.32",
            "Local Purch. Power":"38.85",
            "Groceries":"47.53",
            "Rent":"7.56",
            "Restaurant Price":"33.04"
         },
         {
            "Consumer Price+Rent":"42.07",
            "City":"Wroclaw, Poland",
            "Consumer Price":"54.85",
            "Local Purch. Power":"58.27",
            "Groceries":"42.05",
            "Rent":"19.34",
            "Restaurant Price":"42.99"
         },
         {
            "Consumer Price+Rent":"38.70",
            "City":"Guayaquil, Ecuador",
            "Consumer Price":"54.76",
            "Local Purch. Power":"25.86",
            "Groceries":"44.89",
            "Rent":"10.14",
            "Restaurant Price":"40.14"
         },
         {
            "Consumer Price+Rent":"45.14",
            "City":"Beijing, China",
            "Consumer Price":"54.38",
            "Local Purch. Power":"36.42",
            "Groceries":"61.66",
            "Rent":"28.71",
            "Restaurant Price":"37.49"
         },
         {
            "Consumer Price+Rent":"45.44",
            "City":"Shanghai, China",
            "Consumer Price":"54.20",
            "Local Purch. Power":"47.04",
            "Groceries":"51.64",
            "Rent":"29.86",
            "Restaurant Price":"42.60"
         },
         {
            "Consumer Price+Rent":"43.12",
            "City":"Ulaanbaatar, Mongolia",
            "Consumer Price":"53.86",
            "Local Purch. Power":"22.57",
            "Groceries":"57.94",
            "Rent":"24.01",
            "Restaurant Price":"37.81"
         },
         {
            "Consumer Price+Rent":"38.56",
            "City":"Quito, Ecuador",
            "Consumer Price":"53.69",
            "Local Purch. Power":"23.85",
            "Groceries":"47.42",
            "Rent":"11.66",
            "Restaurant Price":"39.26"
         },
         {
            "Consumer Price+Rent":"42.55",
            "City":"Warsaw, Poland",
            "Consumer Price":"53.64",
            "Local Purch. Power":"64.83",
            "Groceries":"42.07",
            "Rent":"22.81",
            "Restaurant Price":"45.74"
         },
         {
            "Consumer Price+Rent":"40.42",
            "City":"Cairo, Egypt",
            "Consumer Price":"53.40",
            "Local Purch. Power":"20.64",
            "Groceries":"45.39",
            "Rent":"17.34",
            "Restaurant Price":"48.99"
         },
         {
            "Consumer Price+Rent":"39.07",
            "City":"Poznan, Poland",
            "Consumer Price":"53.20",
            "Local Purch. Power":"58.48",
            "Groceries":"42.48",
            "Rent":"13.93",
            "Restaurant Price":"41.12"
         },
         {
            "Consumer Price+Rent":"37.52",
            "City":"Novi Sad, Serbia",
            "Consumer Price":"52.70",
            "Local Purch. Power":"35.95",
            "Groceries":"36.62",
            "Rent":"10.53",
            "Restaurant Price":"50.99"
         },
         {
            "Consumer Price+Rent":"38.48",
            "City":"Iasi, Romania",
            "Consumer Price":"52.66",
            "Local Purch. Power":"31.37",
            "Groceries":"43.50",
            "Rent":"13.28",
            "Restaurant Price":"34.27"
         },
         {
            "Consumer Price+Rent":"43.18",
            "City":"Bangkok, Thailand",
            "Consumer Price":"52.61",
            "Local Purch. Power":"29.50",
            "Groceries":"63.49",
            "Rent":"26.42",
            "Restaurant Price":"29.65"
         },
         {
            "Consumer Price+Rent":"39.77",
            "City":"Guangzhou, China",
            "Consumer Price":"52.44",
            "Local Purch. Power":"25.60",
            "Groceries":"70.42",
            "Rent":"17.25",
            "Restaurant Price":"30.76"
         },
         {
            "Consumer Price+Rent":"37.51",
            "City":"Varna, Bulgaria",
            "Consumer Price":"52.13",
            "Local Purch. Power":"34.13",
            "Groceries":"45.17",
            "Rent":"11.51",
            "Restaurant Price":"38.79"
         },
         {
            "Consumer Price+Rent":"40.21",
            "City":"Katowice, Poland",
            "Consumer Price":"51.87",
            "Local Purch. Power":"57.95",
            "Groceries":"43.11",
            "Rent":"19.49",
            "Restaurant Price":"41.41"
         },
         {
            "Consumer Price+Rent":"40.37",
            "City":"Gdansk, Poland",
            "Consumer Price":"51.64",
            "Local Purch. Power":"64.99",
            "Groceries":"40.86",
            "Rent":"20.34",
            "Restaurant Price":"43.63"
         },
         {
            "Consumer Price+Rent":"36.81",
            "City":"Cluj-napoca, Romania",
            "Consumer Price":"51.35",
            "Local Purch. Power":"38.79",
            "Groceries":"45.02",
            "Rent":"10.94",
            "Restaurant Price":"36.15"
         },
         {
            "Consumer Price+Rent":"38.12",
            "City":"Bucharest, Romania",
            "Consumer Price":"50.97",
            "Local Purch. Power":"36.15",
            "Groceries":"39.77",
            "Rent":"15.28",
            "Restaurant Price":"41.79"
         },
         {
            "Consumer Price+Rent":"36.18",
            "City":"Banja Luka, Bosnia And Herzegovina",
            "Consumer Price":"50.12",
            "Local Purch. Power":"43.60",
            "Groceries":"40.89",
            "Rent":"11.38",
            "Restaurant Price":"45.75"
         },
         {
            "Consumer Price+Rent":"35.29",
            "City":"Brasov, Romania",
            "Consumer Price":"50.05",
            "Local Purch. Power":"33.48",
            "Groceries":"39.77",
            "Rent":"9.04",
            "Restaurant Price":"35.41"
         },
         {
            "Consumer Price+Rent":"37.14",
            "City":"Constanta, Romania",
            "Consumer Price":"49.97",
            "Local Purch. Power":"37.55",
            "Groceries":"36.51",
            "Rent":"14.32",
            "Restaurant Price":"36.55"
         },
         {
            "Consumer Price+Rent":"35.78",
            "City":"Timisoara, Romania",
            "Consumer Price":"49.90",
            "Local Purch. Power":"38.57",
            "Groceries":"44.77",
            "Rent":"10.66",
            "Restaurant Price":"32.78"
         },
         {
            "Consumer Price+Rent":"35.13",
            "City":"Plovdiv, Bulgaria",
            "Consumer Price":"49.05",
            "Local Purch. Power":"31.18",
            "Groceries":"39.39",
            "Rent":"10.38",
            "Restaurant Price":"32.68"
         },
         {
            "Consumer Price+Rent":"36.24",
            "City":"Quezon City, Philippines",
            "Consumer Price":"48.83",
            "Local Purch. Power":"28.25",
            "Groceries":"50.04",
            "Rent":"13.86",
            "Restaurant Price":"28.11"
         },
         {
            "Consumer Price+Rent":"38.14",
            "City":"Krakow, Poland",
            "Consumer Price":"48.63",
            "Local Purch. Power":"61.36",
            "Groceries":"38.02",
            "Rent":"19.48",
            "Restaurant Price":"34.91"
         },
         {
            "Consumer Price+Rent":"35.73",
            "City":"Szczecin, Poland",
            "Consumer Price":"48.59",
            "Local Purch. Power":"53.60",
            "Groceries":"38.88",
            "Rent":"12.85",
            "Restaurant Price":"41.24"
         },
         {
            "Consumer Price+Rent":"45.34",
            "City":"Hanoi, Vietnam",
            "Consumer Price":"47.83",
            "Local Purch. Power":"20.82",
            "Groceries":"50.12",
            "Rent":"40.93",
            "Restaurant Price":"31.48"
         },
         {
            "Consumer Price+Rent":"35.05",
            "City":"Chisinau, Moldova",
            "Consumer Price":"47.81",
            "Local Purch. Power":"27.56",
            "Groceries":"38.59",
            "Rent":"12.35",
            "Restaurant Price":"40.27"
         },
         {
            "Consumer Price+Rent":"33.41",
            "City":"Cebu, Philippines",
            "Consumer Price":"47.61",
            "Local Purch. Power":"35.28",
            "Groceries":"47.26",
            "Rent":"8.16",
            "Restaurant Price":"21.60"
         },
         {
            "Consumer Price+Rent":"35.89",
            "City":"Minsk, Belarus",
            "Consumer Price":"47.40",
            "Local Purch. Power":"22.16",
            "Groceries":"35.32",
            "Rent":"15.41",
            "Restaurant Price":"53.72"
         },
         {
            "Consumer Price+Rent":"35.15",
            "City":"Manila, Philippines",
            "Consumer Price":"47.34",
            "Local Purch. Power":"27.02",
            "Groceries":"48.24",
            "Rent":"13.47",
            "Restaurant Price":"23.02"
         },
         {
            "Consumer Price+Rent":"40.43",
            "City":"Makati, Philippines",
            "Consumer Price":"47.17",
            "Local Purch. Power":"20.06",
            "Groceries":"40.15",
            "Rent":"28.45",
            "Restaurant Price":"34.74"
         },
         {
            "Consumer Price+Rent":"33.80",
            "City":"Managua, Nicaragua",
            "Consumer Price":"46.57",
            "Local Purch. Power":"41.13",
            "Groceries":"45.10",
            "Rent":"11.08",
            "Restaurant Price":"31.34"
         },
         {
            "Consumer Price+Rent":"33.99",
            "City":"Skopje, Macedonia",
            "Consumer Price":"46.51",
            "Local Purch. Power":"34.39",
            "Groceries":"35.19",
            "Rent":"11.74",
            "Restaurant Price":"35.78"
         },
         {
            "Consumer Price+Rent":"36.22",
            "City":"Esfahan, Iran",
            "Consumer Price":"45.56",
            "Local Purch. Power":"49.90",
            "Groceries":"47.53",
            "Rent":"19.60",
            "Restaurant Price":"34.47"
         },
         {
            "Consumer Price+Rent":"32.68",
            "City":"Nis, Serbia",
            "Consumer Price":"44.85",
            "Local Purch. Power":"28.62",
            "Groceries":"31.88",
            "Rent":"11.02",
            "Restaurant Price":"37.15"
         },
         {
            "Consumer Price+Rent":"32.17",
            "City":"Lublin, Poland",
            "Consumer Price":"42.40",
            "Local Purch. Power":"60.48",
            "Groceries":"34.50",
            "Rent":"13.98",
            "Restaurant Price":"32.67"
         },
         {
            "Consumer Price+Rent":"31.07",
            "City":"Gurgaon, India",
            "Consumer Price":"41.64",
            "Local Purch. Power":"63.86",
            "Groceries":"36.11",
            "Rent":"12.26",
            "Restaurant Price":"26.13"
         },
         {
            "Consumer Price+Rent":"36.97",
            "City":"Ho Chi Minh City, Vietnam",
            "Consumer Price":"41.09",
            "Local Purch. Power":"45.15",
            "Groceries":"48.66",
            "Rent":"29.65",
            "Restaurant Price":"24.37"
         },
         {
            "Consumer Price+Rent":"30.75",
            "City":"Algiers, Algeria",
            "Consumer Price":"40.60",
            "Local Purch. Power":"23.70",
            "Groceries":"42.50",
            "Rent":"13.23",
            "Restaurant Price":"31.32"
         },
         {
            "Consumer Price+Rent":"28.45",
            "City":"Lahore, Pakistan",
            "Consumer Price":"40.09",
            "Local Purch. Power":"23.46",
            "Groceries":"37.26",
            "Rent":"7.75",
            "Restaurant Price":"31.69"
         },
         {
            "Consumer Price+Rent":"28.63",
            "City":"Delhi, India",
            "Consumer Price":"37.93",
            "Local Purch. Power":"62.71",
            "Groceries":"35.23",
            "Rent":"12.08",
            "Restaurant Price":"26.57"
         },
         {
            "Consumer Price+Rent":"28.15",
            "City":"Davao, Philippines",
            "Consumer Price":"37.59",
            "Local Purch. Power":"44.20",
            "Groceries":"39.78",
            "Rent":"11.36",
            "Restaurant Price":"21.57"
         },
         {
            "Consumer Price+Rent":"31.18",
            "City":"Mumbai, India",
            "Consumer Price":"36.62",
            "Local Purch. Power":"57.91",
            "Groceries":"35.97",
            "Rent":"21.51",
            "Restaurant Price":"26.86"
         },
         {
            "Consumer Price+Rent":"25.87",
            "City":"Bangalore, India",
            "Consumer Price":"34.92",
            "Local Purch. Power":"65.65",
            "Groceries":"35.32",
            "Rent":"9.80",
            "Restaurant Price":"19.80"
         },
         {
            "Consumer Price+Rent":"24.38",
            "City":"Indore, India",
            "Consumer Price":"34.85",
            "Local Purch. Power":"89.92",
            "Groceries":"32.90",
            "Rent":"5.75",
            "Restaurant Price":"16.09"
         },
         {
            "Consumer Price+Rent":"24.24",
            "City":"Chandigarh, India",
            "Consumer Price":"33.95",
            "Local Purch. Power":"52.41",
            "Groceries":"31.63",
            "Rent":"6.98",
            "Restaurant Price":"21.68"
         },
         {
            "Consumer Price+Rent":"23.53",
            "City":"Ahmedabad, India",
            "Consumer Price":"33.12",
            "Local Purch. Power":"50.67",
            "Groceries":"29.26",
            "Rent":"6.47",
            "Restaurant Price":"24.03"
         },
         {
            "Consumer Price+Rent":"23.52",
            "City":"Hyderabad, India",
            "Consumer Price":"32.67",
            "Local Purch. Power":"72.32",
            "Groceries":"32.57",
            "Rent":"7.26",
            "Restaurant Price":"20.06"
         },
         {
            "Consumer Price+Rent":"22.55",
            "City":"Madurai, India",
            "Consumer Price":"32.05",
            "Local Purch. Power":"25.02",
            "Groceries":"29.99",
            "Rent":"5.65",
            "Restaurant Price":"13.11"
         },
         {
            "Consumer Price+Rent":"23.63",
            "City":"Kolkata, India",
            "Consumer Price":"31.97",
            "Local Purch. Power":"49.26",
            "Groceries":"35.06",
            "Rent":"8.81",
            "Restaurant Price":"21.02"
         },
         {
            "Consumer Price+Rent":"23.78",
            "City":"Pune, India",
            "Consumer Price":"31.90",
            "Local Purch. Power":"55.50",
            "Groceries":"32.74",
            "Rent":"9.34",
            "Restaurant Price":"20.62"
         },
         {
            "Consumer Price+Rent":"23.21",
            "City":"Chennai, India",
            "Consumer Price":"31.09",
            "Local Purch. Power":"59.10",
            "Groceries":"32.57",
            "Rent":"9.19",
            "Restaurant Price":"17.17"
         },
         {
            "Consumer Price+Rent":"21.79",
            "City":"Kochi, India",
            "Consumer Price":"31.07",
            "Local Purch. Power":"44.85",
            "Groceries":"34.43",
            "Rent":"5.28",
            "Restaurant Price":"16.52"
         },
         {
            "Consumer Price+Rent":"21.23",
            "City":"Thiruvananthapuram, India",
            "Consumer Price":"30.30",
            "Local Purch. Power":"56.05",
            "Groceries":"35.64",
            "Rent":"5.09",
            "Restaurant Price":"17.20"
         },
         {
            "Consumer Price+Rent":"22.17",
            "City":"Ludhiana, India",
            "Consumer Price":"30.20",
            "Local Purch. Power":"55.74",
            "Groceries":"31.27",
            "Rent":"7.89",
            "Restaurant Price":"21.88"
         }
      ]
    }
  }

  // visaulization
  draw_visualization (size, vm) {

    var m = [vm.margin_top, vm.margin_right, vm.margin_bottom, vm.margin_left],
        w = vm.width - m[1] - m[3],
        h = vm.height - m[0] - m[2];

    var x = d3.scale.ordinal().rangePoints([0, w], .5),
        y = {};

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

    var svg = vm.wrap

    var dimensions = []

    for (var key in vm.data[0]){
      dimensions.push(key)
    }

    var cities = vm.data

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(cities[0]).filter(function(d) {
      return d != "City" && (y[d] = d3.scale.linear()
          .domain(d3.extent(cities, function(p) { return +p[d]; }))
          .range([h, 0]));
    }));

    // Add grey background lines for context.
    background = vm.wrap

    background.selectAll("path")
        .data(cities)
      .enter().append("path")
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", "white")
        .style("stroke-opacity", .4)
        .style("shape-rendering", "crispEdges");

    // Add blue foreground lines for focus.
    foreground = svg.append("g")
        .attr("class", "foreground")
      .selectAll("path")
        .data(cities)
      .enter().append("path")
        .attr("d", path)
        .style("fill", 'none')
        .style("stroke", 'steelblue')
        .style("stroke-opacity", .7);


    // Add a group element for each dimension.
    var g = svg.selectAll(".dimension")
        .data(dimensions)
      .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

    // Add an axis and title.
    g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
        .style("fill", "none")
        .style("stroke", "steelblue")
        .style("stroke-opacity", .7)
      .append("text")
        .attr("text-anchor", "middle")
        .attr("y", -9)
        .text(String);

    // Add and store a brush for each axis.
    g.append("g")
        .attr("class", "brush")
        .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
      .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);

    // Returns the path for a given data point.
    function path(d) {
      return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
    }

    // Handles a brush event, toggling the display of foreground lines.
    function brush() {
      var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
          extents = actives.map(function(p) { return y[p].brush.extent(); });
      foreground.style("display", function(d) {
        return actives.every(function(p, i) {
          return extents[i][0] <= d[p] && d[p] <= extents[i][1];
        }) ? null : "none";
      });
    }


  }

}
