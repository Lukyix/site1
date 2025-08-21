import React, { useState } from 'react'
import Error from '../../../components/Error';

const Change_passwd = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

const handleEmailSubmit= ()=>{};

  return (
    <div className="body">
    <form onSubmit={handleEmailSubmit} className="signin_card forgot" action="">
      <h2 className="signin_title">Zmeniť heslo</h2>

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
          Zmeniť heslo
        </button>

        {error && <Error error={error} />}
      </div>
    </form>
    </div>  
    )
}

export default Change_passwd