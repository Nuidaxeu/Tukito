    
    document.getElementById('internetTest').addEventListener('submit', function(event) {
        event.preventDefault();

        let total = 0;
        const form = event.target;
        const resultDiv = document.getElementById('result');

        for (let i = 1; i <= 10; i++) {
            const selected = form['q' + i].value;
            total += parseInt(selected);
        }

        let resultText = "";
        if (total >= 17) {
            resultText = "🌐 ¡Sos 100% digital! Sin Internet, entrás en crisis en pocas horas.";
        } else if (total >= 10) {
            resultText = "📶 Dependés bastante, pero te podrías adaptar... con esfuerzo.";
        } else {
            resultText = "📻 Podés vivir sin Internet. Sos del tipo que sobrevive incluso sin luz eléctrica.";
        }

        resultDiv.innerHTML = `<p><strong>Resultado:</strong> ${resultText}</p><button onclick="location.reload()">Reiniciar test</button>`;
        resultDiv.classList.remove('hidden');
        form.classList.add('hidden');
    });

