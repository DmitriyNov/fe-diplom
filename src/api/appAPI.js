import createRequest from "./createRequest";

export function getCities (value, callback) {
    if (!value) {
        return;
    }
    createRequest({
        url: "https://students.netoservices.ru/fe-diplom/routes/cities?name=" + value,
        data: {
            method: "GET",
        },
        callback: callback,
    });
}

export function getRoutes (options, callback) {
    const optionNames = Object.keys(options);
    let url = "https://students.netoservices.ru/fe-diplom/routes?";
    for (const optionName of optionNames) {
        url = url + optionName + "=" + options[optionName] + "&";
    }
    url = url.slice(0, -1);
    createRequest({
        url: url,
        data: {
            method: "GET",
        },
        callback: callback,
    });
}

export function lastRoutes (callback) {
    createRequest({
        url: "https://students.netoservices.ru/fe-diplom/routes/last",
        data: {
            method: "GET",
        },
        callback: callback,
    });
}

export function getSeats (id, options, callback) {
    const optionNames = Object.keys(options);
    let url = "https://students.netoservices.ru/fe-diplom/routes/" + id + "/seats?";
    for (const optionName of optionNames) {
        url = url + optionName + "=" + options[optionName] + "&";
    }
    url = url.slice(0, -1);
    createRequest({
        url: url,
        data: {
            method: "GET",
        },
        callback: callback,
    });
}

export function order (data, callback) {
    createRequest({
        url: "https://students.netoservices.ru/fe-diplom/order",
        data: {
            method: "POST",
            body: data,
        },
        callback: callback,
    });
}