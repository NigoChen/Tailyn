const url_Server: string = 'http://localhost:3000';

export const Urls = {
    login: {
        login:`${url_Server}/api/login`,
        email:`${url_Server}/api/login/email`,
        update:`${url_Server}/api/login/update`,
    },
    employee: {
        read:`${url_Server}/api/employee/read`,
        create:`${url_Server}/api/employee/create`,
        update:`${url_Server}/api/employee/update`,
        delete:`${url_Server}/api/employee/delete`,
    },
    workHours: {
        read:`${url_Server}/api/workHours/read`,
        create:`${url_Server}/api/workHours/create`,
        update:`${url_Server}/api/workHours/update`,
        delete:`${url_Server}/api/workHours/delete`,
    },
    repair: {
        read:`${url_Server}/api/repair/read`,
        create:`${url_Server}/api/repair/create`,
        update:`${url_Server}/api/repair/update`,
        delete:`${url_Server}/api/repair/delete`,
    },
    client: {
        read:`${url_Server}/api/client/read`,
        create:`${url_Server}/api/client/create`,
        update:`${url_Server}/api/client/update`,
        delete:`${url_Server}/api/client/delete`,
    },
    ip: 'http://api.ipify.org/?format=json'
};