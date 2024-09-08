'use client';
import { useEffect, useState } from 'react';

const Success = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  console.log(sessionId);
  useEffect(() => {
    const url = new URL(window.location.href);
    console.log(url  ,   "================================")
    const params = new URLSearchParams(url.search);
    setSessionId(params.get('session_id'));
  }, [sessionId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment UnSuccessfull.</h1>
      <p>Oops! Something went wrong. Please retry.</p>
      {sessionId ? (
        <p>Your session ID: <strong>{sessionId}</strong></p>
      ) : (
        <p>Loading your session details...</p>
      )}
      <button >Go to Homepage</button>
    </div>
  );
};

export default Success;
