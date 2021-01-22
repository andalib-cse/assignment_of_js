// https://github.com/andalib-cse/assignment_of_js

// Problem number 1
function kilometerToMeter(km) {
    // this value is fix
    const meter = 1000; 
    if( km >= 0){
        return meter * km
    }else{
        return "Destance cannot be negative."
    }
}




// Problem number 2
function budgetCalculator(watch, phone, laptop) {
    // these are fix value
    const wPrice = 50;
    const pPrice = 100;
    const lPrice = 500;
    if (watch > 0 && phone > 0 && laptop > 0) {
        var totalWatchPrice = watch * wPrice;
        var totalPhonePrice = phone * pPrice;
        var totalLaptopPrice = laptop * lPrice;
        var allTotalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        return allTotalPrice;
    } else {
        return "Give Valid Number."
    }
}




// Problem number 3
function hotelCost(days) {
    if (days < 0) {
        return "Give valid number of days.";
    }
    else {
        // For first 10 days
        if (days <= 10) {
            totalCost = days * 100;
        }
        // For second 10 days
        else if (days >= 11 && days <= 20) {
            extraDays = days - 10;
            totalCost = (80 * extraDays) + 1000;
        }
        // For remaining days
        else {
            extraDays = days - 20;
            totalCost = (50 * extraDays) + 1800;
        }
        return totalCost;
    }
}





// Problem number 4
function megaFriend(friendsName) {
    if (friendsName == null || friendsName >= 0  ) {
        return "Please insert of valid array."
    } else {
        // for array index number
        var index = 0;
        var max = friendsName[0].length;
        for (var i = 0; i < friendsName.length; i++) {
            var temp = friendsName[i];
            if (temp.length > max) {
                index = i;
                max = temp.length;
            }
        }
        return friendsName[index];
    }
}
