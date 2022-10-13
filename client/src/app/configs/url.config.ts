const url_Server: string = 'http://localhost:3000';
// const url: string = 'http://localhost:3000';

export const Urls = {
    login: {
        login:`${url_Server}/api/login`,
        email:`${url_Server}/api/login/email`,
        update:`${url_Server}/api/login/update`,
    },
    employee: {
        read:`${url_Server}/api/employee/read`,
        findOne:`${url_Server}/api/employee/find/one`,
        findLike:`${url_Server}/api/employee/find/like`,
        create:`${url_Server}/api/employee/create`,
        update:`${url_Server}/api/employee/update`,
        updatePassword:`${url_Server}/api/employee/update/password`,
        concat:`${url_Server}/api/employee/concat`,
        replace:`${url_Server}/api/employee/replace`,
        delete:`${url_Server}/api/employee/delete`,
        email:`${url_Server}/api/employee/email`,
    },
    workHours: {
        read:`${url_Server}/api/workHours/read`,
        findOne:`${url_Server}/api/workHours/find/one`,
        findLike:`${url_Server}/api/workHours/find/like`,
        create:`${url_Server}/api/workHours/create`,
        update:`${url_Server}/api/workHours/update`,
        delete:`${url_Server}/api/workHours/delete`,
    },
    repair: {
        read:`${url_Server}/api/repair/read`,
        findOne:`${url_Server}/api/repair/find/one`,
        findLike:`${url_Server}/api/repair/find/like`,
        create:`${url_Server}/api/repair/create`,
        update:`${url_Server}/api/repair/update`,
        delete:`${url_Server}/api/repair/delete`,
    },
    stand: {
        read:`${url_Server}/api/stand/read`,
        create:`${url_Server}/api/stand/create`,
        update:`${url_Server}/api/stand/update`,
        delete:`${url_Server}/api/stand/delete`,
    },
    rma: {
        read:`${url_Server}/api/rma/read`,
        findOne:`${url_Server}/api/rma/find/one`,
        findLike:`${url_Server}/api/rma/find/like`,
        create:`${url_Server}/api/rma/create`,
        update:`${url_Server}/api/rma/update`,
        delete:`${url_Server}/api/rma/delete`,
    },
    recycle: {
        read:`${url_Server}/api/recycle/read`,
        create:`${url_Server}/api/recycle/create`,
        delete:`${url_Server}/api/recycle/delete`,
    },
    ip: 'http://api.ipify.org/?format=json'
};