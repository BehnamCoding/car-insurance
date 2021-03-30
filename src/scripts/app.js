// imports
import handle from './handle';
import ui from './ui';


// variables
let btn_claculate = document.querySelector('#btn-calculate');
let select_type = document.querySelector('#select-type');
let select_year = document.querySelector('#select-year');
let simple_input = document.querySelector('#simple');
let perfect_input = document.querySelector('#perfect');

// loadAllEvents
loadAllEvents();

function loadAllEvents() {

    document.addEventListener('DOMContentLoaded', loadFunc);

    btn_claculate.addEventListener('click', calcFunc);

}


// functions

// loadFunc
function loadFunc() {
    handle.getDates();
}

// calcFunc
function calcFunc() {
    let carType = select_type.value;
    let madeYear = select_year.value;
    let insType = '';

    // show insType
    if (simple_input.checked) {
        insType = 'شخص ثالث';
    } else if (perfect_input.checked) {
        insType = 'کامل';
    }

    if (carType == '' || madeYear == '') {
        ui.showMessage('لطفا تمامی فیلدها را پر کنید.', 'danger');
        if(document.querySelector('.inner')) {
            document.querySelector('.inner').remove();
        }
    } else {
        let price = handle.caculatePrice(carType, madeYear);
        let calculateInsType = handle.calculateInsType(insType, price);
        ui.showResult(carType, madeYear, insType, calculateInsType);
    }
}