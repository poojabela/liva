import { useState } from "react";
import axios from "axios";

const Input = () => {

 const [longUrl, setLongUrl] = useState('');
 const [shortUrl, setShortUrl] = useState('');

 const onSubmit = async (e) => {
  e.preventDefault();
  const res = await axios(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
  setShortUrl(res.data.result.full_short_link);
  console.log(res)
 }

    return ( 
        <div className="input">
        <form>
            <input 
            type="text"
            id="input-url"
            placeholder="Enter the url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            />
            <button onClick={onSubmit}>Click</button>
      </form> 
      <h4>{shortUrl}</h4>
        </div>
     );
}
 
export default Input;