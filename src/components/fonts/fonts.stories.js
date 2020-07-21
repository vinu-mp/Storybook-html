export default { title: 'Fonts and Families' }
import markdown from './markdown.md';

export const font = () => '<button class="btn">Hello World</button>';
font.story = {
  parameters: {
    notes: { markdown },
  }
};