(function(Global){
    const calculatorStructureData = Global.App.data;
    const mainContainer = document.getElementById('mainContainer');
    let calculatorButtonsContainer = null;
    let calculatorScreen = null;

    const operands = {
        addOperands: null,
        subtractOperands: null,
        multiplyOperands: null,
        divideOperands: null
    };

    function init(){
        if(!calculatorStructureData.length) {
            return;
        }

        addCalculatorScreen();
        addCalculatorButtonsContainer();
        addCalculatorButtons();
    }

    function addCalculatorScreen() {
      const screen = document.createElement('div');
      screen.setAttribute('id', 'calculatorScreen');
      //Todo: set attributes here!

      calculatorScreen = screen;
      mainContainer.appendChild(screen);
    }

    function addCalculatorButtonsContainer() {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('id', 'calculatorButtonsContainer');
        //Todo: set attributes here!

        calculatorButtonsContainer = buttonsContainer;
        mainContainer.appendChild(buttonsContainer);
    }

    function addCalculatorButtons() {

        for (const group of calculatorStructureData) {
            const groupContainer = document.createElement('div');
            //Todo: set attributes here!

            for (const groupButton of group) {
                const button = document.createElement('button');
                button.innerText = groupButton.description;
                //Todo: set attributes here!

                button.addEventListener('click', () => {
                    getValuesForCalculation({
                        value: groupButton.value
                    });
                });

                groupContainer.appendChild(button);
            }

            calculatorButtonsContainer.appendChild(groupContainer);
        }
    }

    function getValuesForCalculation({value}){

        if(value === 'AC') {
            calculatorScreen.innerText = '';
            return;
        }

        if(value !== '=') {
            calculatorScreen.innerText += value;
        }

        if(value === '='){
            buildCalculation({
                formula: calculatorScreen.innerText
            });
        }
    }

    function buildCalculation({formula}) {
        const calculationFormula = formula;

        console.log(formula);

    }

    init();
}(window));
