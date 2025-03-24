anychart.onDocumentReady(function() {
    // adding data
    let data1 = [
        {
            x: "A",
            value: 100,
            name: "one"
        },
        {
            x: "B",
            value: 100,
            name: 'two'
        },
        {x: ['A', 'B'],
            value: 50,
            name: "three"

        }

    ];
    let data2 = [
        {
            x: "A",
            value: 100,
            name: "data 2"
        },
        {
            x: "B",
            value: 50,
            name: 'data 2'
        },
        {x: ['A', 'B'],
            value: 50,
            name: "data 2"

        }

    ];
    // creating a venn diagram with the data
    let chart = anychart.venn(data1);
    // setting the labels
    chart.labels().format("{%Name}");
    // setting the chart title
    chart.title("TITLE");
    // setting the container id
    chart.container("container");
    // drawing the diagram
    chart.draw();

    compare.addEventListener("click", myFunction);

    function myFunction() {
        let option_val = document.getElementById("compare-select").value;
        console.log(option_val);
        if (option_val == 1){
            chart.dispose();
            chart = anychart.venn(data1);
            console.log("yes");

            //chart = anychart.venn(data2);
            //chart.labels().format("{%Name}");
            // setting the chart title
            chart.title("Tolkien Venn Diagram");
            // setting the container id
            chart.container("container");
            chart.draw();
        }
        else if (option_val == 2){
            chart.dispose();
            chart = anychart.venn(data2);
            console.log("yesyes");

            //chart = anychart.venn(data2);
            //chart.labels().format("{%Name}");
            // setting the chart title
            chart.title("Tolkien Venn Diagram");
            // setting the container id
            chart.container("container");
            chart.draw();
        }


    }
});