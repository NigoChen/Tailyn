const url_Server: string = 'http://localhost:3000';
// const url: string = 'http://localhost:3000';

export const Urls = {
    employee: {
        read:`${url_Server}/api/employee/read`,
        login:`${url_Server}/api/employee/login`,
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
    inventory: {
        read:`${url_Server}/api/inventory/read`,
        findOne:`${url_Server}/api/inventory/find/one`,
        findLike:`${url_Server}/api/inventory/find/like`,
        create:`${url_Server}/api/inventory/create`,
        update:`${url_Server}/api/inventory/update`,
        delete:`${url_Server}/api/inventory/delete`,
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
};