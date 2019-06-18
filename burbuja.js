
function burbuja(arreglo,n)
{
    for(var i=0;i<n;i++)
    {
        for(var k=0;k<=n;k++)
        {
            if(arreglo[k]>arreglo[k+1])
            {
                var aux;
                aux=arreglo[k];
                arreglo[k]=arreglo[k+1];
                arreglo[k+1]=aux;

            }
        }   
    }

}

function ingresarDatos(arreglo,t)
{
    for(var i=0;i<t;i++)
    {
        
        var datos=parseInt(prompt("INGRESE LOS ELEMENTOS"));
        arreglo[i]=datos;
    }

}

function principal()
{
    var arreglo123=[];
    
    var t = document.getElementById("tam").value;

    ingresarDatos(arreglo123,t);

    burbuja(arreglo123,t);
    console.log(arreglo123);
    
    document.getElementById('resultado').value = arreglo123;
}
