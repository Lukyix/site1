import React, { useState } from 'react'
import Error from '../../../components/Error';

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

const handleEmailSubmit= ()=>{};

  return (
    <div className="body">
    <form onSubmit={handleEmailSubmit} className="signin_card" action="">
      <h2 className="signin_title">Zabudnuté heslo</h2>

      <div className="signin_info forgot">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
        />

        <button className="signin_btn" type="submit" disabled={loading}>
          Poslať mail
        </button>

        {error && <Error error={error} />}
      </div>
    </form>
    </div>  
    )
}

export default Forgot