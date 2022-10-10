import { ErrorHandler } from './error-handler'
import * as toastr from 'toastr'

export class HttpClient {
    async get(url) {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json"
            }
        })
        if (response.ok) {
            toastr.success('Success!')
            return response.json()
        }
        else {
            ErrorHandler.handle(response)
        }
    }
}