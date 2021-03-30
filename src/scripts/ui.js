// imports

const uiFunc = (function () {

    class Ui {
        constructor() {
            this.select_type = document.querySelector('#select-type');
            this.select_year = document.querySelector('#select-year');
            this.simple_input = document.querySelector('#simple');
            this.perfect_input = document.querySelector('#perfect');
            this.factor_div = document.querySelector('#factor');
            this.spinner_img = document.querySelector('#factor .spinner-img');
            this.message_area = document.querySelector('#message');
        }

        showResult(type, year, insType, price) {
            if (document.querySelector('.inner')) {
                document.querySelector('.inner').remove();
            }
            // change year values to valid data
            switch (type) {
                case '0':
                    type = 'پراید';
                    break;
                case '1':
                    type = 'پژو';
                    break;
                case '2':
                    type = 'زانتیا';
                    break;
                case '3':
                    type = 'اپتیما';
                    break;
                case '4':
                    type = 'پورشه';
                    break;
            }

            // create inner div for factor information
            let div = document.createElement('div');
            div.classList = 'inner';
            div.innerHTML = `
                <ul>
                    <li class="car-type">مدل ماشین: ${type}</li>
                    <li class="made-year">سال ساخت: ${year}</li>
                    <li class="ins-type">نوع بیمه: ${insType}</li>
                    <li>قیمت نهایی: <span id="price">${price}</span></li>
                </ul>
            `
            // show spinner
            this.spinner_img.style.display = 'block';

            // set timeout for images
            setTimeout(() => {
                this.spinner_img.style.display = 'none';
                // append card to factor div
                if (!document.querySelector('.inner')) {
                    this.factor_div.appendChild(div);
                }
            }, 2500);
        }

        showMessage(text, color) {
            // create alert div
            let div = document.createElement('div');
            div.textContent = text;
            div.classList = `alert alert-${color} mt-4`;

            // append alert tag into message tag
            if (!document.querySelector('.alert')) {
                this.message_area.appendChild(div);
            }

            // remove alert in certain time
            setTimeout(() => {
                this.removeAert();
            }, 2000);
        }

        removeAert() {
            let alert = document.querySelector('.alert');

            // if there is tag with alert class remove it
            if (alert) {
                alert.remove();
            }
        }

    }

    // instance
    let ui = new Ui();
    return ui;
    // return methods
    return {
        showFactor: function (type, year, insType) {
            return ui.showFactor(type, year, insType);
        },
        showMessage: function () {
            return ui.showMessage();
        }
    }

})()

export default uiFunc; // export main function to use return object.