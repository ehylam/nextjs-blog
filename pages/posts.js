import matter from 'gray-matter'

import Layout from '../components/Layout';
import PostList from '../components/PostList'


const Post = ({title, posts, ...props}) => {
    return (
      <Layout pageTitle={title}>
        <main>
          <PostList posts={posts}/>
        </main>
      </Layout>
     );
}

export default Post;



// Only avaliable in page files
export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    // key method() returns the key value of each object in an array
    const keys = context.keys()
    // map() method returns a new array populated with the results of the
    // output inside the map() method (ie.. x (parameter) passed through to x * 2 - returns output of that value into an array)
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Sluggify?
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]

      // returns an object containing data (contains heading for example) / content
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    // returns the completed data for each post.
    return data
    // What do you do?! Do you get the data (.md only)
  })(require.context('../public/posts', true, /\.md$/))

  return {
    // Setup the props.
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}