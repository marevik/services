export class LoggingServices{
    logStatusChange(status:string){
        console.log('A server status changed, new status: ' + status);
    }
    LoggingServices(status:string){
        console.log( status);
    }
}

// export class LoggingNewServices{
//     logStatusChange(stNewStatusatus:string){
//         console.log( NewStatus);
//     }
// }