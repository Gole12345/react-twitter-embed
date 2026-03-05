import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton 
} from 'react-twitter-embed';
import { Search, Twitter } from '@mui/icons-material';
import React from 'react';
import "./Widgets.css";

function Widgets() {
  return (
    <div className='Widgets'>
        <div className='widgets_input'>
            <Search className='widgets_searchIcon' />
            <input placeholder='キーワード検索' type='text' />
        </div>
        <div className='widgets_widgetContainer'>
            <h2>今どうしてる?</h2>
           <TwitterTweetEmbed tweetId={'1716358192198975961'} />

           <TwitterTweetEmbed sourceType='profile' screenName='ariyoshihiroiki' options={{height:400}} />
           <TwitterShareButton url={"https://twitter.com/ariyoshihiroiki/"}
           options={{ text: "#React.js勉強中", via:"ariyoshihiroiki"}}/>
        </div>
    </div>                                
  )
}

export default Widgets                                                                                                                                                                                                                                                          



