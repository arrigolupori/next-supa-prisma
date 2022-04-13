export default async function handler(req, res) {
	// Upload image to Supabase
	if (req.method === 'POST') {
		// TODO
	}
	// HTTP method not supported!
	else {
		res.setHeader('Allow', ['POST'])
		res
			.status(405)
			.json({ message: `HTTP method ${req.method} is not supported.` })
	}
}
