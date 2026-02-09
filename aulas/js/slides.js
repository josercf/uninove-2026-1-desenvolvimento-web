/**
 * UNINOVE - Desenvolvimento Web
 * Script de navegação para slides HTML v2.0
 * Inclui: navegação, quiz interativo, timebox
 */

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Criar barra de progresso
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    // Criar controles de navegação
    const navControls = document.createElement('div');
    navControls.className = 'nav-controls';
    navControls.innerHTML = `
        <button id="prevBtn" title="Slide anterior (←)">◀</button>
        <button id="nextBtn" title="Próximo slide (→)">▶</button>
    `;
    document.body.appendChild(navControls);

    // Adicionar número do slide e rodapé em cada slide
    slides.forEach((slide, index) => {
        // Número do slide
        const slideNum = document.createElement('div');
        slideNum.className = 'slide-number';
        slideNum.textContent = `${index + 1} / ${totalSlides}`;
        slide.appendChild(slideNum);

        // Decoração superior direita
        if (!slide.querySelector('.slide-decor-tr')) {
            const decor = document.createElement('div');
            decor.className = 'slide-decor-tr';
            slide.appendChild(decor);
        }

        // Barra lateral
        if (!slide.querySelector('.slide-bar-left')) {
            const bar = document.createElement('div');
            bar.className = 'slide-bar-left';
            slide.appendChild(bar);
        }

        // Rodapé com logo (exceto slide de capa)
        if (!slide.classList.contains('slide-cover') && !slide.querySelector('.slide-footer')) {
            const footer = document.createElement('div');
            footer.className = 'slide-footer';
            footer.innerHTML = `
                <img src="img/uninove-logo.png" alt="UNINOVE" onerror="this.style.display='none'">
                <span class="footer-text">Desenvolvimento Web<br>UNINOVE 2026.1</span>
            `;
            slide.appendChild(footer);
        }
    });

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            updateProgress();
        }
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    function updateProgress() {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = progress + '%';
    }

    // Event listeners
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                nextSlide();
                break;
            case ' ':
                // Só avança com espaço se não estiver num quiz
                if (!e.target.closest('.quiz-container') && !e.target.closest('.quiz-option')) {
                    e.preventDefault();
                    nextSlide();
                }
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                showSlide(0);
                break;
            case 'End':
                e.preventDefault();
                showSlide(totalSlides - 1);
                break;
        }
    });

    // Navegação por clique (área esquerda/direita)
    // Ignora cliques em elementos interativos (quiz, botões, links)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.nav-controls')) return;
        if (e.target.closest('.quiz-container')) return;
        if (e.target.closest('.quiz-option')) return;
        if (e.target.closest('button')) return;
        if (e.target.closest('a')) return;
        if (e.target.closest('input')) return;
        if (e.target.closest('select')) return;

        const x = e.clientX;
        const width = window.innerWidth;
        if (x > width * 0.7) {
            nextSlide();
        } else if (x < width * 0.3) {
            prevSlide();
        }
    });

    // ============================================
    // QUIZ INTERATIVO
    // ============================================

    function initQuizzes() {
        document.querySelectorAll('.quiz-container').forEach(function(quiz) {
            const options = quiz.querySelectorAll('.quiz-option');
            const feedback = quiz.querySelector('.quiz-feedback');
            const correctAnswer = quiz.dataset.answer; // data-answer="b"

            options.forEach(function(option) {
                option.addEventListener('click', function() {
                    // Desabilitar todas as opções
                    options.forEach(function(opt) {
                        opt.disabled = true;
                    });

                    const selected = this.dataset.option; // data-option="a"

                    if (selected === correctAnswer) {
                        this.classList.add('correct');
                        if (feedback) {
                            feedback.classList.add('correct', 'show');
                        }
                    } else {
                        this.classList.add('incorrect');
                        // Destacar a resposta correta
                        options.forEach(function(opt) {
                            if (opt.dataset.option === correctAnswer) {
                                opt.classList.add('correct');
                            }
                        });
                        if (feedback) {
                            feedback.classList.add('incorrect', 'show');
                        }
                    }
                });
            });
        });
    }

    initQuizzes();

    // Inicializar
    showSlide(0);
});
