        const container = document.getElementById("container");
        const root = document.documentElement;
        const clearButton = document.querySelector('.clear-button');
        const colorButton = document.querySelector('.color-button');
        const blackButton = document.querySelector('.black-button');
        const colorPicker = document.querySelector('#color-picker');
        const slider = document.querySelector('#slider');
        const sliderInfo = document.querySelector('.slider-info');
        let gridSize = 16;

        function makeGrid(userInput) {
            root.style.setProperty('--gridSize', userInput);
            for (let i = 0; i < userInput * userInput; i++) {
                const div = document.createElement('div');
                container.appendChild(div).classList.add('cell');
                div.addEventListener('mouseover', hoverBgColor)
            }
        };

        function rainbowColor() {
            return Math.floor(Math.random()*16777215).toString(16);
        }

        /*Buttons*/

        clearButton.addEventListener('click', clear);

        blackButton.addEventListener('click', function() {
            const gridItems = document.querySelectorAll('.cell')
            gridItems.forEach(function (item) {
                item.addEventListener('mouseover', function(event) {
                    event.target.style.backgroundColor = 'black'
                });
            });
        });

        colorButton.addEventListener('click', function() {
            const gridItems = document.querySelectorAll('.cell')
            gridItems.forEach(function (item) {
                item.addEventListener('mouseover', function(event) {
                    event.target.style.backgroundColor = '#' + rainbowColor();
                });
            });
        });

        colorPicker.addEventListener('input', function() {
            const gridItems = document.querySelectorAll('.cell')
            gridItems.forEach(function (item) {
                item.addEventListener('mouseover', function(event) {
                    event.target.style.backgroundColor = colorPicker.value;
                });
            });
        });

        function hoverBgColor(event) {
            event.target.style.backgroundColor = 'black';
        }

        slider.addEventListener('input', function () {
            gridSize = slider.value;
            deleteGrid()
            update()
        })

        function deleteGrid() {
            container.innerHTML = '';
            makeGrid(gridSize);
        }

        function clear() {
            const gridItems = document.querySelectorAll('.cell')
            gridItems.forEach(item => {
                item.style.backgroundColor = 'white';
            });
        }

        function update() {
            const sliderDiv = document.createElement('div');
            sliderInfo.innerHTML = '';
            sliderDiv.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
            sliderInfo.appendChild(sliderDiv);
        }
        
        makeGrid(gridSize);
        update();