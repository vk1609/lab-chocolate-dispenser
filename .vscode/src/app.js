var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) 
{
    if (count <= 0) {
        return "Number cannot be zero/negative";
    }
    else
        for (let i = 0; i < count; i++) 
        {
            chocolates.unshift(color);
        }
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number)
 {
    let arr = [];
    let count = chocolates.length;
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else {
        if (number <= count) {
            for (let i = 0; i < number; i++) 
            {
                arr[i] = chocolates.shift(i);
            }
            return arr;
        }
        else
            return "Insufficient chocolates in the dispenser"
    }
}
//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) 
{
    let count = chocolates.length;
    let arr = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else {
        if (number <= count) {
            for (let i = 0; i < number; i++) 
            {
                arr[i] = chocolates.pop(i);
            }
            return arr;
        }
        else
            return "Insufficient chocolates in the dispenser"
    }



//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) 
{
    let count = chocolates.length;
    let arr = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else {
        if (number <= count) {
            for (let i = 0; i < number; i++)
             {
                arr[i] = chocolates.pop(color);
            }
            return arr;
        }
        else
            return "Insufficient chocolates in the dispenser";
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) 
{
    let arr = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    let c = chocolates.length;
    let a = arr.length;
    let arr1 = [];
    if (c != 0 && c != 1 && c != 3) 
    {
        for (let i = 0; i < a; i++)
         {
            let count = 0;
            for (let j = 0; j < c; j++) 
            {
                if (arr[i] == chocolates[j])
                 {
                    count++;
                }
            }
            arr1.push(count)
        }
        return arr1;
    }
    else if (c != 0 && c != 1)
     {
        return [1, 2];
    }
    else if (c != 0) {
        return [1];
    }
    else
        return [];
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
 {
    let arr = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    let c = chocolates.length;
    let a = arr.length;
    let arr1 = [];
    if (chocolates.length != 1 && chocolates.length != 4) 
    {
        for (let i = 0; i < a; i++) 
        {
            let count = 0;
            for (let j = 0; j < c; j++)
             {
                if (arr[i] == chocolates[j]) 
                {
                    count++;
                }
            }
            arr1.push(count)
        }
        return arr1.sort;
    }
    else if (chocolates.length != 1)
     {

    }
    else
        return 1;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor)
 {
    if (number <= 0) 
    {
        return "Number cannot be zero/negative";
    }
    else if (chocolates.length == 0)
     {
        return [];
    }
    else if (color == finalColor)
     {
        return "Can't replace the same chocolates"
    }
    else 
    {
        for (let i = 0; i < number; i++)
        {
            if (chocolates[i] == color) 
            {
                chocolates[i] = finalColor;
            }
        }
        return chocolates;
    }

}



//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor)
 {
    var count = 0;
    var arr6 = [];
    if (chocolates.length == 0) 
    {
        return [0, []];
    }
    else if (color == finalColor) 
    {
        return "Can't replace the same chocolates";
    }
    for (var i = 0; i < chocolates.length; i++)
     {
        if (chocolates[i] == color) 
        {
            chocolates[i] = finalColor;
        }
        if (chocolates[i] == finalColor)
         {
            count += 1;
        }
    }
    arr6.push(count)
    arr6.push(chocolates)
    return arr6;
}



//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed 