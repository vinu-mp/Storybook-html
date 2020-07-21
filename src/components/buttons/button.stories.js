import markdown from './markdown.md'
//Specifies section title
export default { 
  title: 'Button' 
}

export const withText = () => '<button class="btn">Hello World</button>';
//Add notes for the story
withText.story = {
  parameters: { notes: markdown },
};

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
