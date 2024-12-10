import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8000/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeedId) => axios.get(REST_API_BASE_URL + '/' + employeedId); 


export const updateEmployee = (employeedId , employee) => axios.put(REST_API_BASE_URL + '/' + employeedId , employee); 


export const deleteEmployee = (employeedId) => axios.delete(REST_API_BASE_URL + '/' + employeedId);
