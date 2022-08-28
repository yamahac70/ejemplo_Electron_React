//este archivo se encargara de hacer de comunicacion entre las dos aplicaciones 
const {ipcRenderer, contextBridge} =require("electron")
//pivote 
//con ipcRender podemos enviar dentro de la app de electron 
//con contextr exponemos 
let screenId
/* 

ipcRenderer.on('SET_SOURCE_ID', async (event,sourceId)=>{
    console.log(sourceId)
    screenId=sourceId
}) */
contextBridge.exposeInMainWorld('electronAPI',{
    getScreenId:()=>screenId
})
contextBridge.exposeInMainWorld('electronAPI2',{
    getScreenId:(callback)=> ipcRenderer.on('SET_SOURCE_ID',callback),
    getUsers:()=>{
        return [
            {
                id:1,
                nombre:"mauro"
            }
        ]
    }
})