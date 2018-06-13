import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Layout from './hoc/Layout/layout';
import Home from './components/Home/home';
import NewsArticles from './components/Articles/News/Post/index';
import VideoArticles from './components/Articles/Videos/video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';

class Routes extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/articles/:id" exact component={NewsArticles} />
                    <Route path="/videos/:id" exact component={VideoArticles} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route path="/videos" exact component={VideosMain} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;