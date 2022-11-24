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
            calculatorScreen.innerHTML = eval(formula);
        }
    }


    init();
}(window));
