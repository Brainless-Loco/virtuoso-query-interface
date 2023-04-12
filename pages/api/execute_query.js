import SparqlClient from "./sparql_client/SparqlClient"

const handler = async (req, res) => {
    const { query } = req.query
    let q = decodeURIComponent(query)
    const client = new SparqlClient()
    const result = await client.query(q)


    return res.status(200).json({
        message: 'Success',
        data: result.data
    })
}

export default handler