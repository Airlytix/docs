import nextra from 'nextra'

const withNextra = nextra({
	staticImage: true
})

const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	images: {
		unoptimized: true
	}
}

export default withNextra(nextConfig)
