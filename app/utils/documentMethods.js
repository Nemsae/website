export const copyToClipboard = (text) => {
  console.log('text: ', text);

  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.top = 0;
  input.style.left = '-5rem'; //  NOTE: push to left of page

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  input.style.width = '2em';
  input.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  input.style.padding = 0;

  // Clean up any borders.
  input.style.border = 'none';
  input.style.outline = 'none';
  input.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  input.style.background = 'transparent';
  // input.setAttribute('value', text);
  input.value = text;

  document.body.appendChild(input);
  input.select();
  const result = document.execCommand('copy');
  document.body.removeChild(input);

  try {
    if (result) {
      console.log('Copied Successfully! Do whatever you want next');
    } else {
      throw ('Unable to copy');
    }
  } catch (err) {
    console.warn('Oops, Something went wrong ', err);
  }
};

export default {
  copyToClipboard,
};
