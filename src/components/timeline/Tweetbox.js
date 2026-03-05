import { Avatar, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import "./Tweetbox.css";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from "../../firebase";

const TweetBox=() => {

    const [ tweetMessage, setTweetMessage ] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("");
    const [error, setError] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError("ファイルサイズは5MB以下にしてください");
                return;
            }
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
            setError("");
        }
    };
    const convertToBase64 = (file) => {
        return new Promise ((resolve, reject ) => {
            const reader = new FileReader();
            reader.readerAsDataURL(file);
            reader.onload= () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    
    // const [ tweetImage, setTweetImage ] = useState("");
    
    const sendTweet = async (e) =>{
        e.preventDefault();
        if(!tweetMessage && !imageFile) {
            setError("テキストか画象を入力してください");
            return;
        }

        setLoading(true);
        try {
            let base64Image = "";
            if (imageFile) {
                if (imageFile.size > 5 * 1024 * 1024) {
                    setError("ファイルサイズは5MB以下にしてください");
                    setLoading(false);
                    return;
                }
                base64Image = await convertToBase64(imageFile);
            }
        await addDoc(collection(db, "posts"),{
            displayName: "Nissho Code",
            userName: "nissho Code",
            Verified: true,
            Text: tweetMessage,
            avatar: "https://yosshyjungle.sakura.ne.jp/oa_works/smile_man.png",
            image: base64Image,
            timestamp: serverTimestamp(),
        }
    );

    setTweetMessage("");
    setImageFile(null);
    setPreview("");
    setError("");

    } catch (err) {
        setError('投稿に失敗しました。再度お試しください。');
        console.error(err);
    } finally {
        setLoading(false);
    }
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                <Avatar />
                <input
                value={tweetMessage} 
                placeholder='いまどうしてる?' type='text'
                onChange={(e)=> setTweetMessage(e.target.value)}
                required
                />
                </div>
                <div className='tweetBox_imageInputContainer'>
                    <input
                    className='tweetBox_imageInput'
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    />
                </div>
                {preview && (
                    <div className='tweetBox_preview'>
                        <img
                        src={preview}
                        alt='preview'
                        style={{maxWidth: "100%", maxHeight: "200px"}} />
                    </div>
                )}
                {error && <p className='tweetBox_error'>{error}</p>}
                <Button
                className='tweetBox_tweetButton'
                type='submit'
                onClick={sendTweet}
                disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> :"postする"}
                </Button>
            </form>
        </div>
    )
}

export default TweetBox