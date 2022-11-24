(function(Global){
    const calculatorStructureData = Global.App.data;
    const mainContainer = document.getElementById('mainContainer');
    let calculatorButtonsContainer = null;
    let calculatorScreen = null;

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
      screen.setAttribute('class',
          'u-height-20-px u-box-shadow-bottom-2px u-font-size-20-px u-text-align-right u-padding-10px u-margin-bottom-20px');
      //Todo: set attributes here!

      calculatorScreen = screen;
      mainContainer.appendChild(screen);
    }

    function addCalculatorButtonsContainer() {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('id', 'calculatorButtonsContainer');
        buttonsContainer.setAttribute('class', 'u-padding-10px u-margin-bottom-10px');
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
                button.setAttribute('class', `button-class-${groupButton.name} u-button`);
                button.innerText = groupButton.description;
                //Todo: set attributes here!

                button.addEventListener('click', () => {
                    computeCalculation({
                        value: groupButton.value
                    });
                });

                groupContainer.appendChild(button);
            }

            calculatorButtonsContainer.appendChild(groupContainer);
        }
    }

    function computeCalculation({value}){

        if(value.toString() === 'ac') {
            calculatorScreen.innerHTML = '';
            return;
        }

        if(value.toString() !== '=') {
            calculatorScreen.innerHTML += value;
            return;
        }

        if(value.toString() === '=' ) {
            const formula = calculatorScreen.innerHTML;
            if(!formula){
                return;
            }
            calculatorScreen.innerHTML = eval(formula);
        }
    }


    init();
}(window));
