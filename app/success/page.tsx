'use client';
import { useEffect, useState } from 'react';

const Success = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  // useEffect(() => {
  //   console.log('Router query:', router.query);
  //   const { session_id } = router.query;
  //   if (session_id) {
  //     setSessionId(session_id as string);
  //   }
  // }, [router.query]);
  
  // useEffect(() => {
    
    // Get the session_id from query params (success_url?session_id=cs_test_12345)
    // const { session_id } = router.query;
    
    // if (session_id) {
      // setSessionId(session_id as string);
    // }
  // }, [router.query]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Successful</h1>
      <p>Thank you for your payment.</p>
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
