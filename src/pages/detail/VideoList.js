import React, { useState, useEffect, useRef } from 'react';


import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {

    const { category } = useParams();
    const [video, setIVideo] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const response = await tmdbApi.getVideos(category, props.id);
            setIVideo(response.results.slice(0, 5))
            console.log(response)
        }
        getList();
    }, [category, props.id])

    return (
        <>
            {
                video.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    )
}

const Video = props => {
    const item = props.item;

    const iframRef = useRef(null);

    useEffect(() => {
        const height = iframRef.current.offsetWidth * 9 / 16 + 'px';
        iframRef.current.setAttribute('height', height);
    })
    return (
        <div className='video'>
            <div className='video__title'>
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframRef}
                width='100%'
                title='video'
                className='ifram'
            ></iframe>
        </div>
    )
}

export default VideoList;