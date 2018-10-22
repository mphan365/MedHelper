function getWeight() {
    var theForm = document.forms["Daily-Requirements-Calculator"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["patient-weight"];
    var dose =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        PatientWeight = parseInt(quantity.value);
    }
    return PatientWeight;
}

function CalculateDailyRequirements() {
    var weight = getWeight();

/* Infusion Rate Calculation */
    if(weight<=10){
        var DailyInfusionRate = weight * 4 * 24 * 0.001;
    } else if(weight<=20){
        var DailyInfusionRate = 0.96 + (weight-10) * 2 * 24 * 0.001;
    } else if(weight>20){
        var DailyInfusionRate = 1.44 + (weight-20) * 24 * 0.001;
    }

    var DailyInfusionRateRounded = DailyInfusionRate.toPrecision(4);

/* Soidium Requirement Calculation */

    var SodiumRequirement = weight;

/* Potassium Requirement Calculation */

    var PotassiumRequirement = 0.5 * weight;
    var PotassiumRequirementRounded = PotassiumRequirement.toPrecision(4);

/* Output requirements */
    if(weight!= "") {
        document.getElementById('InfusionRate').innerHTML = "Daily Infusion Rate = "+DailyInfusionRateRounded+" L/day";
        document.getElementById('SodiumRequirements').innerHTML = "Daily Sodium Requirement = " + SodiumRequirement + " to "+ SodiumRequirement*2+" mmol/day";
        document.getElementById('PotassiumRequirements').innerHTML = "Daily Potassium Requirement = " +PotassiumRequirementRounded+ " to " + weight+ " mmol/day";
        document.getElementById('GlucoseRequirements').innerHTML = "Glucose Requirements = 50 to 100 g/day";




    } else {
        document.getElementById('InfusionRate').innerHTML = "";
        document.getElementById('SodiumRequirements').innerHTML = "";
        document.getElementById('PotassiumRequirements').innerHTML = "";
        document.getElementById('GlucoseRequirements').innerHTML = "";

    }


}
