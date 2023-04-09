import axios from "axios";


export class SparqlClient {
    constructor(endpoint, user, password) {
        this.user = user ?? 'dba'
        this.password = password ?? 'dba'
        this.endpoint = endpoint ?? `http://localhost:8890/sparql`
    }

    async query(sparql) {
        // Build the request handler
        const handler = axios.create({
            baseURL: this.endpoint,
            auth: {
                username: this.user,
                password: this.password
            }
        })

        const params = new URLSearchParams();
        params.append("query", sparql);
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/sparql-results+json,text/turtle",
            },
        };
        const response = await handler.post("", params, config);
        return response;
    }
    
}
