let array = [];
let length = 100;
let heightArray = [];
var speed = 10;

function updateHeights()
{
    for(let i = 0; i < 100; i++)
    {
        array[i].style.height = heightArray[i] + "px";
    }
}

var executed = false;

function bubbleSort()
{
    if (!executed) {
        executed = true;
        var swapped = false;

        function bubbleSortPass(i, count)
        {
            if(i <= length) array[i].style.backgroundColor = "#000000";
            if(heightArray[i] > heightArray[i + 1])
            {
                swap(i, i + 1);
                swapped = true;
            }
            if(i < length - 1) array[i+1].style.backgroundColor = "#FF00FF";
            updateHeights();
            
            if(i < length)
            {
                if(i == count - 1) length -= 1;
                setTimeout(function(){
                    bubbleSortPass(i + 1, count);
                }, speed);
            }
            else
            {
                if(swapped){
                    setTimeout(function(){
                        bubbleSort();
                    }, speed);
                }
                executed = false;
            }
        }
        bubbleSortPass(0, length);
    }
}

function swap(a, b)
{
    var temp = heightArray[a];
    heightArray[a] = heightArray[b];
    heightArray[b] = temp;
}

class BlockElement extends HTMLDivElement
{
    constructor()
    {
        super();
    }
};

customElements.define('block-element', BlockElement, { extends: 'div' })

function createBoxes()
{
    executed = false;
    if(array.length > 0)
    {
        for(let i = 0; i < array.length; i++)
        {
            array[i].remove();
        }
    }
    for(let i = 0; i < length; i++)
    {
        const block = document.createElement('div', {is: 'block-element'});
        block.className = "box";

        const container = document.getElementById("border");
        container.appendChild(block);
        array[i] = block;
    }
    generateRandomHeights();
    updateHeights();
}

function generateRandomHeights()
{
    for(let i = 0; i < 100; i++)
    {
        heightArray[i] = Math.round(Math.random() * 500);
    }
}

function changeSpeed()
{
    if(speed == 20)
    {
        speed = 10;
        document.getElementById("speedbutton").textContent = "Normal";
    }
    else if(speed == 10)
    {
        speed = 5;
        document.getElementById("speedbutton").textContent = "Fast";
    }
    else if(speed == 5)
    {
        speed = 1;
        document.getElementById("speedbutton").textContent = "Super Fast!";
    }
    else if(speed == 1)
    {
        speed = 20;
        document.getElementById("speedbutton").textContent = "Slow";
    }
}