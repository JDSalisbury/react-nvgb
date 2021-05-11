
const goodResponses = [200, 201, 204];

export default class Service {

    static async create() { }


    static async readList(dispatch, url, queryParams, types) {
        if (queryParams.init && queryParams.success && queryParams.error) {
            types = queryParams;
            queryParams = {};
        }
        this.serviceFetch(dispatch, 'GET', url, types, queryParams)
    }

    static async readOne() { }

    static async update() { }

    static async delete() { }

    static async serviceFetch(dispatch, method, url, types, body) {
        let data = ''
        dispatch({ type: types.init })
        if (method === "GET") {
            data = await this.handleResponse(await fetch(url))
            console.log(data.data)
        }


        data.error ? dispatch({ type: types.error, error: data.error }) : dispatch({ type: types.success, data: data.data })
    }

    static async handleResponse(data) {
        console.log(data.status)
        if (goodResponses.includes(data.status)) {
            try {
                return { data: await data.json() };
            } catch (error) {
                return { data: await data };
            }
        } else {
            try {
                return { error: await data.json() };
            } catch (error) {
                return { error: await data };
            }
        }
    }

}