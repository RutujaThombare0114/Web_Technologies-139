
        let currentOperand = '';
        let previousOperand = '';
        let operation = undefined;

        function appendNumber(number) {
            if (number === '.' && currentOperand.includes('.')) return;
            currentOperand += number;
            updateDisplay();
        }

        function chooseOperation(op) {
            if (currentOperand === '') return;
            if (previousOperand !== '') compute();
            operation = op;
            previousOperand = currentOperand;
            currentOperand = '';
            updateDisplay();
        }

        function compute() {
            let computation;
            const prev = parseFloat(previousOperand);
            const current = parseFloat(currentOperand);
            if (isNaN(prev) || isNaN(current)) return;
            switch (operation) {
                case '+': computation = prev + current; break;
                case '-': computation = prev - current; break;
                case '*': computation = prev * current; break;
                case '/': computation = prev / current; break;
                case '%': computation = prev % current; break;
                case '^': computation = Math.pow(prev, current); break;
                default: return;
            }
            currentOperand = computation;
            previousOperand = '';
            operation = undefined;
            updateDisplay();
        }

        function deleteLast() {
            currentOperand = currentOperand.toString().slice(0, -1);
            updateDisplay();
        }

        function clearDisplay() {
            currentOperand = '';
            previousOperand = '';
            operation = undefined;
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').value = previousOperand + (operation ? ' ' + operation + ' ' : '') + currentOperand;

        }

        document.addEventListener('keydown', function(event) {
            if (!isNaN(event.key) || event.key === '.') appendNumber(event.key);
            if (['+', '-', '*', '/', '%','^'].includes(event.key)) chooseOperation(event.key);
            if (event.key === 'Enter') compute();
            if (event.key === 'Backspace') deleteLast();
            if (event.key === 'Escape') clearDisplay();
        });
    