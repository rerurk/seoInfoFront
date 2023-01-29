//export const Domen = "http://192.168.1.95:3004"
//export const Domen = "https://192.168.1.103"
export const Domen = ""

enum req {
    TestServerLink = "/testserverlink",
    GetAuthStatus = "/getauthstatus",
    Authorization = "/authorization",
    Uploadfile = "/upload_file",
    GetClientDir = "/getClientDir",
    StartSeoSetInfo="/startSeoSetInfo",
    GetDataFile="/getDataFile"
}


type RequestT = {
    TestServerLink: string;
    GetAuthStatus: string
    Authorization: string,
    Uploadfile: string
    GetClientDir: string
    StartSeoSetInfo:string
    GetDataFile:string
}

export const Requests: RequestT = {
    TestServerLink: Domen + req.TestServerLink,
    GetAuthStatus: Domen + req.GetAuthStatus,
    Authorization: Domen + req.Authorization,
    Uploadfile: Domen + req.Uploadfile,
    GetClientDir:Domen+req.GetClientDir,
    StartSeoSetInfo:Domen+req.StartSeoSetInfo,
    GetDataFile:Domen+req.GetDataFile
}
