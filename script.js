$(document).ready(function () {
    let cellcontainer = $(".input-container")
    for (let i = 1; i < 100; i++) {
        let str = "";
        let n = i;
        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                str = "Z" + str;
                n = Math.floor(n / 26);
            }
            else {
                str = String.fromCharCode(rem - 1 + 65) + str;
                n = Math.floor(n / 26);
            }
        } let newCol = `<div class="name">${str}</div>`

        $(".col-name-container").append($(newCol));
        let newrow = `<div class="name1">${i}</div>`
        $(".row-name-container").append($(newrow));
    }
    for (let i = 1; i <= 100; i++) {
        let cellrow = $(`<div class="cellrow"></div>`)
        for (let j = 1; j <= 100; j++) {
            let cell = $(`<div class="input-cells" id="row-${i}-col-${j}" contenteditable="true"></div>`)
            cellrow.append(cell);
        }
        $(".input-container").append(cellrow)
    }
    $(".input-cells").click(function (e) {
        let [rowid, colid] = getRowCol(e.target);
        if (e.shiftKey) {
            console.log([rowid,colid])
            console.log("Shift pressed");
            $(`#row-${rowid}-col-${colid}`).addClass("selected");
            console.log("cell "+$(`#row-${rowid}-col-${colid}`))
            if (rowid > 1) {
                let topcellselected = $(`#row-${rowid - 1}-col-${colid}`).hasClass("selected");
                if (topcellselected) {
                    $(this).addClass("top-cell-selected")
                    $(`#row-${rowid-1}-col-${colid}`).addClass("bottom-cell-selected");
                }
            }
            if (rowid < 100) {
                let bottomcellselected = $(`#row-${rowid + 1}-col-${colid}`).hasClass("selected");
                if (bottomcellselected) {
                    $(this).addClass("bottom-cell-selected");
                    $(`#row-${rowid+1}-col-${colid}`).addClass("top-cell-selected");
                }
            }
        
        if (colid > 0) {
            let leftcellselected = $(`#row-${rowid}-col-${colid - 1}`).hasClass("selected");

            if (leftcellselected) {
                $(this).addClass("left-cell-selected");
                $(`#row-${rowid}-col-${colid-1}`).addClass("right-cell-selected");
            }

        }
        if (colid < 100) {
            let rightcellselected = $(`#row-${rowid}-col-${colid + 1}`).hasClass("selected");

            if (rightcellselected) {
                $(this).addClass("right-cell-selected");
                $(`#row-${rowid}-col-${colid+1}`).addClass("left-cell-selected ");
            }
        }
    }
    });

    $(".input-container").scroll(function () {
        $(".col-name-container").scrollLeft(this.scrollLeft);
        $(".row-name-container").scrollTop(this.scrollTop);
    })
    function getRowCol(ele) {
        let arrayid = $(ele).attr("id").split("-");
       
        let rowid = parseInt(arrayid[1]);
        let colid = parseInt(arrayid[3]);
        return [rowid, colid];
    }
    function updatecell(property,value)
    {
        
        $("input-cell.selected").each(function(){
        $(this).css(property,value);
    })
}


    $("icon.bold").function(click)
    {
if($(this).hasclass("selected"))
{
    updatecell("font-weight","")
    }
    else{
        updatecell("font-weight,bold");
    }
}
})



