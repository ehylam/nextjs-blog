import Layout from '../components/Layout'

const Index = ({ title, description, ...props}) => {
	return (
		<Layout pageTitle={title}>
			<p className="description">
				{description}
			</p>

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