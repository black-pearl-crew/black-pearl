const lambdaAxios = require('../util/lambdaAxios');
const backendAxios = require('../util/backendAxios');

module.exports = {
    status,
    pickup,
    drop,
    sell,
    init,
    move,
    wiseExplorer,
    addRoom,
    updateRoom,
    getRoom,
    getGraph
}

/*
    LAMBDA'S BACKEND ENDPOINTS
*/

function status() {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/status/`, {
        name
    });
}

function pickup(name) {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/pickup/`, {
        name
    });
}

function drop(name) {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/drop/`, {
        name
    });
}

function sell(name) {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/sell/`, {
        name
    });
}

function init() {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/init/`);
}

function move(direction) {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/move/`, {
        direction
    });
}

function wiseExplorer(direction, next_room_id) {
    return lambdaAxios.post(`${process.env.LAMBDA}/adv/move/`, {
        direction,
        next_room_id
    });
}

/*
    OUR BACKEND ENDPOINTS
*/
function addRoom(roomData) {
    return backendAxios.post(`${process.env.SERVER}/api/add-room`, roomData);
}

function updateRoom(roomData) {
    return backendAxios.put(`${process.env.SERVER}/api/update-room`, roomData);
}

function getRoom(roomId) {
    return backendAxios.get(`${process.env.SERVER}/api/get-room/${roomId}`);
}

function getGraph() {
    return backendAxios.get(`${process.env.SERVER}/api/get-graph`);
}