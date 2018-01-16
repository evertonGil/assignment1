
var lista = [];

  var parseExcel = function(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
       // console.log(e.target);

      var data = e.target.result;
    

      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);

        XL_row_object.forEach(function(currentValue, currentIndex, listObj){
            var pontuacao = 0;
            //console.log(currentValue);

            for(var propt in currentValue){

                if(propt = "está empregado"){
                }{
                    pontuacao = pontuacao + parseInt(currentValue[propt]);
                }

            }

            currentValue.pontuacao = pontuacao;

            console.log(currentValue["id"], currentValue.pontuacao);
            lista.push({id: currentValue["id"], grupo: 2});

           

        })
        

      });

      lista.forEach(function(currentValue){

        $("table tbody").append("<tr><td>"+currentValue.id+"</td> <td>"+currentValue.grupo+"</td></tr>");

      });

    };

    reader.onerror = function(ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  };


function filtra(event){
    event.preventDefault();

    console.log(event);
}

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    var filename = event.target.file.files[0];
    
    console.log('teste', event.target.file.files);

    parseExcel(filename);


});






