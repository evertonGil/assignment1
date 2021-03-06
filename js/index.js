var listaFinal = [];
    var frontEnd = {
        html: 1,
        css: 1,
        javascript: 1,
        bootstrap: 1,
        sass: 1,
        less: 1,
        angular: 2
    }

    var backEnd = {
        php: 1,	
        ruby: 1,	
        java: 1,	
        python: 1,	
        csharp: 1,	
        nodejs: 1,	
        objectivec: 1,	
        swift: 1
    }

    var mobile = {
        android: 1,
        ionic: 1,
        xamarin:1
    }
    var infra = {
        servidores_linux: 1,
        servidores_windows: 1,
        aws: 1,
        azure: 1,
        sql: 1,
        nosql: 1,
        git: 1
    }

    var verticais = ["frontEnd", "backEnd", "mobile", "infra"];

    var grupos = [1, 2, 3, 4];



    var parseExcel = function(file) {
        var reader = new FileReader();

        reader.onload = function(e) {

        var data = e.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });

        workbook.SheetNames.forEach(function(sheetName) {
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            var json_object = JSON.stringify(XL_row_object);

            var newList = XL_row_object.map(function(currentValue, currentIndex, listObj){

                var obj = {};
                obj.id = currentValue.id;
                
                    verticais.forEach(function(vertical, i, arr){
                        nomeVertical = vertical;
                        vertical =  eval(vertical);

                        obj[nomeVertical] = 0;

                        for(var propt in currentValue){
                            for(var multiplicador in vertical){

                                if(multiplicador == propt){
                                   
                                    obj[nomeVertical] = obj[nomeVertical] + (vertical[multiplicador] * parseFloat(currentValue[propt]));
                                }
                            }
                        }
                    });
                return obj;
            });

        
           for( var i = 0; i < 9; i++){

                verticais.forEach(function(vertical, index, arr){

                    for( var e = 0; e < 1; e++){

                        nomeVertical = vertical;

                        newList.sort(function(a, b){
                            if (a[vertical] > b[vertical]) {
                                return -1;
                            }
                            if (a[vertical] < b[vertical]) {
                                return 1;
                            }
                            return 0;
                        });
                        
                        grupos.forEach(function(grupo, indexGrupo){

                            if(newList.length){
                                var aluno = newList.shift();
                                aluno.grupo = grupo;

                                listaFinal.push(aluno);
                            }
                        });
                    }
                });
           }
          

            
        });

        listaFinal.sort(function(a,b){
            if (a.grupo > b.grupo) {
                return 1;
            }
            if (a.grupo < b.grupo) {
                return -1;
            }
            return 0;  
        })
        .forEach(function(currentValue){
                $("table tbody").append("<tr><td>"+currentValue.id+"</td> <td>"+currentValue.grupo+"</td> </tr>");
        });

        //console.log(listaFinal);

        };

        reader.onerror = function(ex) {
        console.log(ex);
        };

        reader.readAsBinaryString(file);
    };


    document.querySelector('.form').addEventListener('submit', function(event){
        event.preventDefault();
        var filename = event.target.file.files[0];
        
        console.log('teste', event.target.file.files);

        parseExcel(filename);
    });