import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const validation = () => {
  // eslint-disable-next-line no-console
  console.log('validation');

  const personalEmails = [
    'gmail.com',
    'free.fr',
    'outlook.fr',
    'protonmail.com',
    'outlook.com',
    'yahoo.com',
  ];

  const competitorEmails = [
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
  ];

  const forms = queryElements<HTMLFormElement>('form');
  forms.forEach((form) => {
    const email = queryElement<HTMLInputElement>('[type="email"]', form);
    const submit = queryElement<HTMLButtonElement>('[data-form="submit"]', form);
    if (!email || !submit) return;

    submit.addEventListener('click', (event) => {
      event.preventDefault();

      // Clear previous custom validity messages
      email.setCustomValidity('');

      // Check the browser's built-in form validity
      const formIsValid = form.checkValidity();
      console.log(`Form valid: ${formIsValid}`);

      if (!formIsValid) {
        // Display validation messages
        form.reportValidity();
        return;
      }

      console.log(`Email: ${email.value}`);

      // Check if the email is personal
      const emailDomain = email.value.split('@')[1]?.toLowerCase() || '';
      console.log(`Email domain: ${emailDomain}`);

      if (personalEmails.includes(emailDomain)) {
        email.setCustomValidity('Please use your professional email address.');
        email.reportValidity();
        return;
      }

      // Check if the email is from a competitor
      if (competitorEmails.includes(emailDomain)) {
        email.setCustomValidity("We're sorry, but we can't accept your application.");
        email.reportValidity();
        return;
      }

      // If all validations pass, clear any custom validity messages and submit the form
      email.setCustomValidity('');
      form.requestSubmit();
    });
  });
};
