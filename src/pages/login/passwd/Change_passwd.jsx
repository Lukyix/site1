import React, { useState } from 'react'
import Error from '../../../components/Error';

const Change = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

const handleEmailSubmit= ()=>{};

  return (
    <div className="body">
    <form onSubmit={handleEmailSubmit} className="signin_card" action="">
      <h2 className="signin_title">Zabudnuté heslo</h2>

      <div className="signin_info">
        <div className="signin_inputs">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="password"
          type="password"
        />
                <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="password"
          type="password"
        />
</div>
        <button className="signin_btn" type="submit" disabled={loading}>
          Poslať mail
        </button>

        {error && <Error error={error} />}
      </div>
    </form>
    </div>  
    )
}

export default Change