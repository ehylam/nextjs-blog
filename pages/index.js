import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Test from '../components/Test'

const Index = ({ title, description, ...props}) => {
	return (
		<Layout pageTitle={title}>
      <Hero title="Lorem Ipsum"/>
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