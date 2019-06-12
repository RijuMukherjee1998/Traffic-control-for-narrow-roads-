var http= require('http');
var fhandler=require('fs');
var formhandler = require('formidable');
var sys   = require('sys');
var spawn = require('child_process').spawn;
var dummy  = spawn('python', ['FirstDetection.py']);
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var myscript='s1.py';
const {PythonShell} = require("python-shell");



var opt={
  mode:'text',
  encoding:'utf8',
  scriptPath:'./',
  pythonPath:'C:/Users/Riju Mukherjee/Anaconda3/python.exe',
};

var output='';

//html Server
var server=http.createServer(function(request,response){
   //var myWriteStream=fhandler.createWriteStream(__dirname+'/t1.txt');


    console.log('Request was made:'+request.url);
    console.log('<<<<<==============================>>>>>');
    var form = new formhandler.IncomingForm();
    form.type='multipart';
    form.keepExtensions = true;
    form.parse(request, function (err, fields, files){
      var file_name=files.image.name;;
      var oldpath=files.image.path;
      var newpath = "C:/Users/Riju Mukherjee/Desktop/Node/image1.jpg"
      console.log(oldpath);
      console.log(newpath);


       fhandler.rename(oldpath, newpath, function (err) {
         if (err) throw err;
         console.log('File uploaded');

         var test=new PythonShell('FirstDetection1.py',opt);
         test.on('message',function(message,err){
           if(err) throw err;
           console.log(message);
         });


         sleep(10000).then(() => {
  //do stuff


         var formResponse=fhandler.createReadStream(__dirname+'/t2.txt');
         response.writeHead(200,{'Content-Type':'text/html'});
         formResponse.pipe(response);
         console.log("responded");
       });
     });
  });

});




console.log('@@@###############################################################@@@');
console.log('Server is starting.....');
console.log('listening to port 6000...');
server.listen(6000,'192.168.43.58');
