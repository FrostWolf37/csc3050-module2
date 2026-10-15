// 1. Find all the toggle switches on the page
const toggleButtons = document.querySelectorAll('.toggle-btn');

// 2. Wire up each button individually
toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Locate the specific card body containing this clicked button
    const cardBody = button.closest('.card-body');
    const content = cardBody.querySelector('.expandable-content');

    // Check if the switch is currently on or off
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // 3. Flip the accessibility state
    button.setAttribute('aria-expanded', !isExpanded);

    // 4. Reveal or hide the room (toggle the HTML hidden attribute)
    content.hidden = isExpanded;

    // 5. Change the label on the switch
    button.textContent = isExpanded ? 'Show More' : 'Show Less';
  });
});