import React, { useState } from 'react'
import PhoneEmail from './PhoneEmail/PhoneEmail'
import OtpVerify from './OtpVerify/OtpVerify'



const Authenticate = () => {
  const steps = {
    1: PhoneEmail,
    2: OtpVerify,
};
  const [step, setStep] = useState(1);
  const Comp = steps[step];

  function onNext() {
      setStep(step + 1);
  }

  return <Comp onNext={onNext} />;
}

export default Authenticate