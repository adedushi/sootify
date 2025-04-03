export default function testVercel(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Test API is working' })
    } else {
        res.status(405).json({ message: 'Error' })
    }
}
