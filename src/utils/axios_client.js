import Axios from "axios";
import { setupCache as SetupCache } from "axios-cache-adapter";

import Config from "../config";

const AxiosClient = Axios.create();
AxiosClient.defaults.timeout = 360000; // 360seconds
AxiosClient.defaults.baseURL = `http://192.168.24.66:8080/obelix-engine/api/v1`;
// eslint-disable-next-line quotes
Axios.defaults.headers.common['Accept-Encoding'] = 'gzip,deflate';
let api;
let startTime;
let endTime;
AxiosClient.interceptors.request.use( request => {
	startTime = new Date();
	api = `http://192.168.24.66:8080/obelix-engine/api/v1${request.url}`;
	return request;
} );
AxiosClient.interceptors.response.use( response => {
	endTime = new Date();
	console.log( "*********", `${api} - ${endTime - startTime}ms`, "*********" );
	return response;
} );
Axios.defaults.maxContentLength =  100 * 1024 * 1024; 
const cache = SetupCache( {
	maxAge: 5 * 60 * 1000
} );

// Cached Axios Client

const CachedAxiosClient = Axios.create( {
	adapter: cache.adapter
} );
CachedAxiosClient.interceptors.request.use( request => {
	startTime = new Date();
	api = `${request.baseURL}${request.url}`;
	return request;
} );
CachedAxiosClient.interceptors.response.use( response => {
	endTime = new Date();
	console.log( "*********", `${api}- ${endTime - startTime}ms`, "*********" );
	return response;
} );
CachedAxiosClient.defaults.timeout = 360000; //360seconds
CachedAxiosClient.defaults.baseURL = `http://192.168.24.66:8080/obelix-engine/api/v1`;

// Publisher Axios Client

const PublisherAxiosClient = Axios.create();
PublisherAxiosClient.defaults.timeout = 360000; // 360seconds
PublisherAxiosClient.defaults.baseURL = `http://192.168.24.66:8080/obelix-engine/api/v1`;

export {
	CachedAxiosClient,
	PublisherAxiosClient
};


export default AxiosClient;
