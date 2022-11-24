async function load_graph(){
    res = await get_data()
    let xAxis = [];
    let yAxis = [];
    console.log(res)
    //let input =  JSON.parse(res)
    for (let i = 0; i<res.length; i++){
        parts = res[i].split(' ');
        console.log(parts)
        xAxis.push(parts[0]);
        yAxis.push(parts[1]);
    }

    console.log(xAxis)
    let data = [
        {
        
          x: xAxis,
          y: yAxis,
          type: 'scatter'
        }
      ];
      let layout = {
        title: "Ovewiew",
        showlegend: false,
        plot_bgcolor:"white",
        paper_bgcolor:"#FFFFFF",
    };
      let config = {
        toImageButtonOptions: {
          format: 'svg', // one of png, svg, jpeg, webp
          //filename: 'custom_image',
          height: 500,
          width: 1500,
          scale: 1 
        }
      };
    Plotly.newPlot('graphLoader',data,layout,config)
}

async function get_data() {
    let obj;
    const res = await fetch('https://back-end-schmup-ai.herokuapp.com/');
    obj = await res.json()
    //let res = await response.json()
    //data = await data.json(); 
    //data = await JSON.parse(data)
    return obj
}

console.log('schmup')

load_graph()
