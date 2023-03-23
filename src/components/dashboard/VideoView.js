import React from 'react'
import VideoWatching from './VideoWatching'

const VideoView = () => {

  const imgData = {
    thumbnail1: "thumbnail-1.png",
    thumbnail2: "thumbnail-2.png",
    thumbnail3: "thumbnail-3.png",
  }

  return (
    <div className='video-view'>
        <div className='VideoTitle'>
          콘텐츠 조회수 
          <div className='top'>TOP3</div>
        </div>
        <div>
            <VideoWatching thumbnail={imgData.thumbnail1} >

            </VideoWatching>
            

            <VideoWatching thumbnail={imgData.thumbnail2}>

            </VideoWatching>
    

            <VideoWatching thumbnail={imgData.thumbnail3}>

            </VideoWatching>
  
        </div>
    </div>
  )
}

export default VideoView