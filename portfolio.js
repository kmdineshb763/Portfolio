window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.circular-progress').forEach(progress => {
        const circle = progress.querySelector('circle:last-child');
        const span = progress.querySelector('span');
        const percentage = progress.getAttribute('data-percentage');

        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDashoffset = offset;

        let current = 90;
        const step = () => {
            if(current < percentage){
                current++;
                span.textContent = current + '%';
                requestAnimationFrame(step);
            } else {
                span.textContent = percentage + '%';
            }
        };
        step();
    });
});
