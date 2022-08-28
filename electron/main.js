const {app,BrowserWindow,desktopCapturer} =require("electron")
const path=require("path")
const createWindows=()=>{
const     mainWindows=new BrowserWindow({
        show:false,
        width:800,
        height:600,
        webPreferences:{
            preload:path.join(__dirname,'preload.js')
        }
    })
    mainWindows.loadURL('http://localhost:4000/')
    //configuramos la pocicion donde aparece la ventana 
    mainWindows.once('ready-to-show',()=>{
        mainWindows.show();
        mainWindows.setPosition(0,0)

        desktopCapturer.getSources({
            //types:['window','screen']
            types:['screen']
        }).then(sources=>{
            for(const source of sources){
                console.log(source.name)
                if(source.name==='Pantalla 2'){
                    mainWindows.webContents.send('SET_SOURCE_ID',source.id)
                    return
                }
            }
        })

        mainWindows.webContents.openDevTools()
    })
}

app.on('ready',()=>{
    createWindows();
})