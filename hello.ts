console.log('Hello world');
console.log('Hello one');
let filePath = 'index.html';
async function show() {
    for await(const line of <any>readLine()) {
        console.log(line);
        
    }   
}
async function readLine(){
    return new Promise(function(resolve: any,reject: any){
        resolve('hello world');
;    });
}
show();