import axios, { AxiosResponse } from "axios";
import { APIError } from "./types";

export const InternalError = {
    message: 'Internal errror during request',
    code: -500
};

export const getExceptionPayload = (ex: unknown): APIError => {
    if (typeof ex !== 'object' || !ex) {
        return InternalError;
    }

    const typedException = ex as APIError;
    if (ex.hasOwnProperty('message') && typeof typedException.message === 'string'
        && ex.hasOwnProperty('code') && typeof typedException.code === 'number') {
        return {
            message: typedException.message,
            code: typedException.code
        }
    }

    return {
        message: '',
        code: 0
    }
}

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (error: any): any => Promise.reject(InternalError);

export const publicRequest = axios.create({
    baseURL: 'data'
});

publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse);
