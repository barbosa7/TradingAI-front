async function load_graph(){
    res = await get_data()
    basic_info = await get_basic_data
    price= basic_info[0];
    btc_balance= basic_info[1];
    usdt_balane= basic_info[2];
    document.getElementById('price').innerHTML = price
    document.getElementById('btc_balance').innerHTML = btc_balance
    document.getElementById('usdt_balance').innerHTML = usdt_balane
    let xAxis = [];
    let yAxis = [];
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
    return obj
}


async function get_basic_data() {
  let obj;
  const res = await fetch('https://back-end-schmup-ai.herokuapp.com/basic-info');
  obj = await res.json()
  return obj
}

load_graph()
