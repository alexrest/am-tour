// Hero images and article text are deliberately separate collections.
// Add an entry to either collection to create another selector button.
const images = [
  { id: 'energy', name: 'Energy', alt: 'An illustrated landscape of energy sources including wind turbines and solar panels.' },
  { id: 'study', name: 'Study', alt: 'A young man reading his Bible, with scenes of daily life behind him.' },
  { id: 'deaf', name: 'Deaf', alt: 'Two women communicating in sign language at a café.' },
  { id: 'diet', name: 'Diet', alt: 'A colorful selection of vegetables, spices, and cooking ingredients.' },
];
// Original demonstration copy, not a reproduction of the published articles.
const articles = [
  { id: 'energy', name: 'Energy article', description: 'Our planet · A hopeful future', title: 'Meeting Mankind’s Energy Needs—What the Bible Says', paragraphs: ['Energy powers so much of daily life—from lighting our homes to connecting communities. But meeting the world’s needs brings difficult questions about resources, access, and the environment.', 'How can everyone benefit from reliable energy while protecting our planet? This article explores those questions from a Bible-based perspective.'], heading: 'Looking toward a better future', body: 'Different energy sources offer different possibilities. Wind, sunlight, and flowing water illustrate the abundance of the earth’s natural resources. Thinking about these resources can help us reflect on the future we hope to see.', closing: 'The Bible’s message of hope invites readers to consider a future in which people and the natural world can thrive together.' },
  { id: 'study', name: 'Study article', description: 'Bible reading · Personal growth', title: 'Make Your Bible Study Meaningful', paragraphs: ['A few quiet minutes with an open Bible can become a meaningful part of your day. Where could you begin, and what would you like to learn?', 'Choose a subject that interests you. Read at a comfortable pace and give yourself time to think about the people and events in the account.'], heading: 'Make room for discovery', body: 'Imagine the setting. What might the people have seen or heard? Write down a question you would like to explore. A map, a picture, or a related passage can help you build a clearer understanding.', closing: 'You do not need to cover many pages at once. A thoughtful moment with one passage can give you something to reflect on throughout the day.' },
  { id: 'deaf', name: 'Deaf article', description: 'Sign language · Connection', title: 'A Message of Hope in Sign Language', paragraphs: ['Being understood helps people feel welcome. For someone who uses sign language, seeing a message in their own language can make a personal connection possible.', 'A conversation involves more than words. Facial expressions, movement, and careful attention all help people share ideas and feelings.'], heading: 'Creating opportunities to connect', body: 'Imagine two friends exploring a Bible question together in sign language. They can pause, ask questions, and share what a passage means to them. The conversation moves at their own pace.', closing: 'Making room for different ways of communicating helps create an environment where each person can participate and feel valued.' },
  { id: 'diet', name: 'Diet article', description: 'Everyday life · Food and family', title: 'Food, Family, and Everyday Choices', paragraphs: ['A table filled with colorful ingredients can be the beginning of a shared experience. Preparing a meal gives us a chance to slow down and spend time with the people we care about.', 'Every household has its own preferences, traditions, and routines. What makes mealtimes meaningful in yours?'], heading: 'More than a meal', body: 'Think of a favorite family recipe. Perhaps its story includes a relative, a special occasion, or a place you once lived. Preparing it together can turn an ordinary evening into a chance to listen and learn.', closing: 'Simple moments—setting the table, sharing a story, or thanking the cook—can help make everyday meals a welcoming part of family life.' },
];
const state = { image: 'energy', article: 'energy' };
const hero = document.querySelector('#hero');
const content = document.querySelector('#article-content');
for (const item of images) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'image-option';
  button.dataset.image = item.id;
  button.setAttribute('aria-label', `${item.name} hero image`);
  button.innerHTML = `<img src="assets/${item.id}.jpg" alt=""><span class="image-name">${item.name}</span><span class="check" aria-hidden="true">✓</span>`;
  button.addEventListener('click', () => { state.image = item.id; render(); });
  document.querySelector('#image-options').append(button);
}
for (const item of articles) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'text-option';
  button.dataset.article = item.id;
  button.innerHTML = `<span class="radio" aria-hidden="true"></span><span><strong>${item.name}</strong><small>${item.description}</small></span>`;
  button.addEventListener('click', () => { state.article = item.id; render(); });
  document.querySelector('#text-options').append(button);
}
function render() {
  const picture = images.find(item => item.id === state.image);
  const article = articles.find(item => item.id === state.article);
  hero.src = `assets/${picture.id}.jpg`;
  hero.alt = picture.alt;
  // Only local predefined content is rendered; no user-supplied HTML.
  content.innerHTML = `<h1>${article.title}</h1>${article.paragraphs.map(p => `<p>${p}</p>`).join('')}<h2>${article.heading}</h2><p>${article.body}</p><p>${article.closing}</p>`;
  document.querySelectorAll('[data-image]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.image === state.image)));
  document.querySelectorAll('[data-article]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.article === state.article)));
  document.querySelector('#preview-status').textContent = `${picture.name} image + ${article.name.toLowerCase()} · Sample content`;
}
document.querySelector('#reset').addEventListener('click', () => { state.image = 'energy'; state.article = 'energy'; render(); });
render();
