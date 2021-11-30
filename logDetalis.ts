import { platform } from "os";

type Uid = number | string | undefined

function logDetails(uid: Uid, item: string){ // um item pode ser tipado com dois tipos no typestript
    console.log(`A product with ${uid} has a title as ${item}`);
};
function logInfo(uid: Uid, user: string){ // um item pode ser tipado com dois tipos no typestript
    console.log(`A product with ${uid} has a title as ${user}`);
};

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform(platform: Platform){
    return platform
};

renderPlatform('ios');

logDetails(123, "sapato");
logDetails('123', "sapato");

logDetails(123, "sara");
logDetails('123', "sara");