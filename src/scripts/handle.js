// imports

const handleFunc = (function () {

  class Handle {

    getDates() {
      let persianNumbers = [
          /۰/g,
          /۱/g,
          /۲/g,
          /۳/g,
          /۴/g,
          /۵/g,
          /۶/g,
          /۷/g,
          /۸/g,
          /۹/g
        ],
        arabicNumbers = [
          /٠/g,
          /١/g,
          /٢/g,
          /٣/g,
          /٤/g,
          /٥/g,
          /٦/g,
          /٧/g,
          /٨/g,
          /٩/g
        ],
        fixNumbers = function (str) {
          if (typeof str === "string") {
            for (var i = 0; i < 10; i++) {
              str = str
                .replace(persianNumbers[i], i)
                .replace(arabicNumbers[i], i);
            }
          }
          return str;
        };

      // get max year
      const now = new Date().toLocaleDateString('fa-IR');
      let nowMax = now.slice(0, 4);
      let max = fixNumbers(nowMax);

      // min year
      let min = max - 20;

      // access to the select tag
      const selectYear = document.querySelector('.year-select');

      // create loop for making option tag
      for (let i = max; i >= min; i--) {
        // create option
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        // append option to the selectYear
        selectYear.appendChild(option);
      }

    }

    getYearDefference(yer) {
      let persianNumbers = [
          /۰/g,
          /۱/g,
          /۲/g,
          /۳/g,
          /۴/g,
          /۵/g,
          /۶/g,
          /۷/g,
          /۸/g,
          /۹/g
        ],
        arabicNumbers = [
          /٠/g,
          /١/g,
          /٢/g,
          /٣/g,
          /٤/g,
          /٥/g,
          /٦/g,
          /٧/g,
          /٨/g,
          /٩/g
        ],
        fixNumbers = function (str) {
          if (typeof str === "string") {
            for (var i = 0; i < 10; i++) {
              str = str
                .replace(persianNumbers[i], i)
                .replace(arabicNumbers[i], i);
            }
          }
          return str;
        };
      // get max year
      const now = new Date().toLocaleDateString('fa-IR');
      let nowMax = now.slice(0, 4);
      let max = fixNumbers(nowMax);
      let years = max - yer;

      return years;
    }

    caculatePrice(type, year) {
      // base & price
      let price;
      let base = 2000000;

      // base on car type
      switch (type) {
        case '0':
          price = base * 1.15;
          break;
        case '1':
          price = base * 1.3;
          break;
        case '2':
          price = base * 1.8;
          break;
        case '3':
          price = base * 2;
          break;
        case '4':
          price = base * 2.3;
          break;
      }

      // base on year
      let diffrence = this.getYearDefference(year);

      // 3% cheaper for each year
      price = price - ((diffrence * 3) / 100) * price;

      // show price on tag
      return price;

    }

    calculateInsType(insType, price) {
      // based on insurance type
      switch (insType) {
        case 'شخص ثالث':
          price = price * 1.3;
          break;
        case 'کامل':
          price = price * 1.5;
          break;
      }

      return price;
    }


  }

  // instance
  let handle = new Handle();

  // return methods
  return { // object to return methods in this class.
    getDates: function () {
      return handle.getDates();
    },
    caculatePrice: function (type, year) {
      return handle.caculatePrice(type, year);
    },
    calculateInsType: function (insType, price) {
      return handle.calculateInsType(insType, price);
    }
  }

})()

export default handleFunc; // export main function to use return object.