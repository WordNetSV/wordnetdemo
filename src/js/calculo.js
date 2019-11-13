function CalculoIva(monto, iva, total) {

    montoParse = parseFloat(monto.value);
    
    if (typeof montoParse === 'number' && !isNaN(montoParse)) {
    
    var ivaCalc   = montoParse * 0.13;
    var totalCalc = montoParse + ivaCalc;
    
    iva.value   = ivaCalc.toFixed(2).replace('.', ',');
    total.value = totalCalc.toFixed(2).replace('.', ',');
    
    } else {
    
    iva.value   = '';
    total.value = '';
    monto.value = '';
    console.log('Introduce un numero válido');
    }
    }
    
    var monto = document.getElementById('Monto');
    var iva   = document.getElementById('Iva');
    var total = document.getElementById('Total');
    
    
    monto.onchange = function(){ CalculoIva(monto, iva, total); }