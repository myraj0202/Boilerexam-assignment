const questionCards = document.querySelectorAll('.question-card');

questionCards.forEach(card => {
    const optionButtons = card.querySelectorAll('.option-btn');

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                this.classList.add('correct');
            } else {
                this.classList.add('incorrect');

                // Highlight the correct answer in THIS question only
                optionButtons.forEach(btn => {
                    if (btn.getAttribute('data-correct') === 'true') {
                        btn.classList.add('correct');
                    }
                });
            }

            optionButtons.forEach(btn => btn.disabled = true);
        });
    });
});