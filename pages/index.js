import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TextBlock from '../components/TextBlock'
import Test from '../components/Test'

const Index = ({ title, description, ...props}) => {
	return (
		<Layout pageTitle={title}>
      <Hero title="Lorem Ipsum"/>
      <TextBlock title="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <Test title="Test module"/>
		</Layout>
	)
}

export default Index;


export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`);

    return {
      // Setup the props.
      props: {
        title: configData.default.title,
        description: configData.default.description,
      },
    }
}