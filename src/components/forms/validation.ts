import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const validation = () => {
  // Define sets for personal and competitor email domains for efficient lookups
  const personalEmails = new Set([
    'gmail.com',
    'free.fr',
    'outlook.fr',
    'protonmail.com',
    'outlook.com',
    'yahoo.com',
  ]);

  const competitorEmails = new Set([
    'artefact.com',
    'capgemini.com',
    'fifty-five.com',
    'mckinsey.com',
    'bcg.com',
    'sia-partners.com',
    'analytic-partners.com',
    'analyticpartners.com',
    'bain.com',
    'ey.com',
    'converteo.com',
    'kpmg.com',
    'deloitte.com',
    'pwc.com',
    'criteo.com',
    'kantar.com',
    'nielsen.com',
    'gaintheory.com',
    'dataiku.com',
    'mass-analytics.com',
  ]);

  // Email validation regex pattern (defined once for reuse)
  const emailPattern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z]{2,}$/i;

  // Query all forms on the page
  const forms = queryElements<HTMLFormElement>('form');

  forms.forEach((form) => {
    // Query the email input field within the form
    const emailInput = queryElement<HTMLInputElement>('[type="email"]', form);
    const submitButton = queryElement<HTMLButtonElement>('[data-form="submit"]', form);
    if (!emailInput || !submitButton) return;

    // Define the validation function
    const validateForm = (event) => {
      event.preventDefault(); // Prevent default form submission

      // Clear previous custom validity messages
      emailInput.setCustomValidity('');

      // Check the browser's built-in form validity
      if (!form.checkValidity()) {
        // Display validation messages
        form.reportValidity();
        return;
      }

      // Get and trim the email value
      const emailValue = emailInput.value.trim();

      // Validate the email format using the regex pattern
      if (!emailPattern.test(emailValue)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
        emailInput.reportValidity(); // Display the validation message
        return;
      }

      // Extract the email domain
      const emailDomain = emailValue.split('@')[1]?.toLowerCase() || '';

      // Check if the email domain is in the personal emails set
      if (personalEmails.has(emailDomain)) {
        emailInput.setCustomValidity('Please use your professional email address.');
        emailInput.reportValidity();
        return;
      }

      // Check if the email domain is in the competitor emails set
      if (competitorEmails.has(emailDomain)) {
        emailInput.setCustomValidity("We're sorry, but we can't accept your application.");
        emailInput.reportValidity();
        return;
      }

      // Clear custom validity messages to ensure form can submit
      emailInput.setCustomValidity('');
      // Submit the form programmatically
      form.requestSubmit();
    };

    // Attach the validation function to the submit button's click event
    submitButton.addEventListener('click', validateForm);

    // Attach the validation function to the form's keydown event to detect Enter key
    form.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.keyCode === 13) {
        // Ensure the event target is not a textarea to prevent interfering with multiline inputs
        if (event.target && event.target.tagName !== 'TEXTAREA') {
          validateForm(event);
        }
      }
    });

    form.addEventListener('submit', () => {
      submitButton.disabled = true;
      submitButton.textContent = submitButton.dataset.wait || 'Please wait...';
    });
  });
};
