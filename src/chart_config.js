const chart_ = 
{
    options: {
    stroke: {
        curve: 'smooth',
        width: 3
        },
    chart: {
    type: 'area',
    id: 'area-datetime',
    stacked: false,
    height: 500,
    
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  fill: {
    type: 'gradient',
    colors: '#ADD8E6',
    gradient: {
      shadeIntensity: 0.2,
      opacityFrom: 0.5,
      opacityTo: 0.9,
      stops: [10, 100]
    }
  },
  
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style:'hollow'
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left'
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(2);
      },
    },
    title: {
      text: 'Price'
    },
    tooltip: {
        enabled: true
      }
  },
  xaxis: {
    type: 'datetime',
    
  },
}
  };

export default chart_

