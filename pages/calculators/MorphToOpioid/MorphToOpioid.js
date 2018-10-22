var theForm = document.forms["Opioid-Morphine-convert"];

var OMconversionrates= new Array();
OMconversionrates["None"]=0;
OMconversionrates["Hydromorphone"]=0.2;
OMconversionrates["Oxycodone"]=0.666;
OMconversionrates["Codeine"]=8;
OMconversionrates["Tapentadol"]=3;  
OMconversionrates["Tramadol"]=2;

function getOpioidConversionFactor()
{
    var OMComversionFactor=0;
    var theForm = document.forms["Opioid-Morphine-convert"];
    var OralOpioidSelected = theForm.elements["OralOpioid"];

    OMconversionfactor = OMconversionrates[OralOpioidSelected.value];

    //finally we return cakeFillingPrice
    return OMconversionfactor;
}

function getDose()
{
    //Assume form with id="theform"
    var theForm = document.forms["Opioid-Morphine-convert"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["O-M-dose"];
    var dose =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        dose = parseInt(quantity.value);
    }
return dose;
}

function calculateDose()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ConvertedDose = getOpioidConversionFactor() * getDose();
    var RoundedConvertedDose = ConvertedDose.toPrecision(5);

    if(OMconversionfactor>0) {
        //display the result
        document.getElementById('ConvertedDose').innerHTML =
                                         "The input dose of oral opioid is equal to " + RoundedConvertedDose +"mg of morphine";
} else {
        document.getElementById('ConvertedDose').innerHTML = "";
    }



}
