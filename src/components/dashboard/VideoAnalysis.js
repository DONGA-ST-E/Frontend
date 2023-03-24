import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css'

ChartJS.register(ArcElement, Tooltip, Legend);


//진료과별
export const dataDepartment = {

  labels: ['피부과', '내과', '성형외과','외과', '이비인후과', '기타'],
  datasets: [
    {
      label:' ',
      data: [30,22,20,14,10,4],
      backgroundColor: [
        'rgba(51, 97, 255, 1.0)',
        'rgba(51, 97, 255, 0.8)',
        'rgba(51, 97, 255, 0.6)',
        'rgba(51, 97, 255, 0.4)',
        'rgba(51, 97, 255, 0.2)',
        'rgba(107,122,153, 0.9)'
      ],
      borderColor: [
        'rgba(51, 97, 255, 1.0)',
        'rgba(51, 97, 255, 0.8)',
        'rgba(51, 97, 255, 0.6)',
        'rgba(51, 97, 255, 0.4)',
        'rgba(51, 97, 255, 0.2)',
        'rgba(107,122,153, 0.9)'
      ],
      borderWidth: 1
    },
  ],
};

//질환별 
export const dataDisease = {
  labels: ['피부과', '내과', '성형외과','외과', '이비인후과', '기타'],
  datasets: [
    {
      label:' ',
      data: [30,22,20,14,10,4],
      backgroundColor: [
        'rgba(51, 97, 255, 1.0)',
        'rgba(51, 97, 255, 0.8)',
        'rgba(51, 97, 255, 0.6)',
        'rgba(51, 97, 255, 0.4)',
        'rgba(51, 97, 255, 0.2)',
        'rgba(107,122,153, 0.9)'
      ],
      borderColor: [
        'rgba(51, 97, 255, 1.0)',
        'rgba(51, 97, 255, 0.8)',
        'rgba(51, 97, 255, 0.6)',
        'rgba(51, 97, 255, 0.4)',
        'rgba(51, 97, 255, 0.2)',
        'rgba(107,122,153, 0.9)'
      ],
      borderWidth: 1
    },
  ],
};



const VideoAnalysis = () => {

  const [selected, setSelected] = useState(false);
  const [btn,setBtn] = useState(1);
    const handleSelect = (e) => {

      if(e.target.value === 'true'){
        setSelected(true)
      }else{
        setSelected(false)
      }
  };

  const selectButton = (num) =>{
    setBtn(num)
  }


  return (
    <div className='video-analysis'>
      <div className='title'>
        <div className='analysis-title'>
        조회수 분석
        </div>
        {selected?"":<div className='chartDough-button'>
          <button style={{width:'83px'}} className={btn===1?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(1)}>진료과별</button>
          <button style={{width:'63px'}} className={btn===2?'chart-button selectBtn':'chart-button'} onClick={()=>selectButton(2)}>질환별</button>
        </div>}
        <Dropdown className='video-dropdown'
            placeholder="Select an option"
            options={['진료', '비진료']}
            value={'진료'}
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
            onOpen={() => console.log('open!')}
          />
      </div>

      <div className='doughnut'>
        <Doughnut className='chartDough'
            data={dataDepartment}
            options = {{
              layout: {
                padding: {
                  bottom: 0
                },
                
              },
              responsive:true,
              maintainAspectRatio:true,
              plugins: {
                legend: {
                  display: true,
                  position: 'right',
                  rtl: false, 
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                  }
                },

              }
            }
      
            } />
      </div>
    </div>

  )
}

export default VideoAnalysis