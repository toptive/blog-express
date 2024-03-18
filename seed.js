const { posts } = require('./models');

const seedPosts = async () => {
  await posts.bulkCreate([
    { title: 'How to create a blog', content: 'In this tutorial we are going to create a blog' },
    { title: 'How to create a website', content: 'In this tutorial we are going to create a website' },
    { title: 'Build a webpage by yourself', content: 'In this tutorial we are going to create a webpage' },
    { title: 'Python tutorial', content: 'python tutorial content' },
    { title: 'Java tutorial', content: 'java tutorial content' },
    { title: 'Ruby tutorial', content: 'ruby tutorial content' }
  ]);

  console.log('Database seeded!');
};

seedPosts().catch(console.error);
