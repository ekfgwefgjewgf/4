function convertTemperature() {
            var celsiusInput = document.getElementById("celsius").value;
            var celsius = parseFloat(celsiusInput);
            if (!isNaN(celsius)) {
                var fahrenheit = (celsius * 9/5) + 32;
                document.getElementById("result").innerText = "華氏溫度為: " + fahrenheit.toFixed(2);
            } else {
                document.getElementById("result").innerText = "請輸入有效的數字";
            }
        }