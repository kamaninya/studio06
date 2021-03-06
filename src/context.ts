// context.ts。元context.tsのリネーム
export default class Context{
    private _gl: WebGLRenderingContext;
    constructor(canvas: HTMLCanvasElement){
        const gl = canvas.getContext('webgl') as WebGLRenderingContext;

        if(gl == null){
            alert('Failed to initialize WebGL.');
        }
    
        this._gl = gl;
    }
    
    get gl(){
        return this._gl;
    }
}
