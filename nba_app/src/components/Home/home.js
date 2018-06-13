import React from 'react';
//component
import SliderNews from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newsList';
import VideosList from '../Widgets/VideosList/videosList';

const Home = () => {
    return (
        <div>
            <SliderNews  type="featured"
                         start={0}
                         end={3}
                         settings={{dots:false}} />

            <NewsList type="card"
                      loadmore={true}
                      start={3}
                      amount={3} />

            <VideosList type="card"
                        title ={true}
                        loadmore = {true}
                        start = {0}
                        amount= {3}
             />

        </div>
    )
}

export default Home;