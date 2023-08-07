import { useDispatch, useSelector } from 'react-redux'
import styles from './subscribe.module.css'
import { useEffect, useState } from 'react'
import { createSubscriber, verifyEmail } from '../../features/subscriberSlice'

const Subscribe = () => {
  const { darkMode } = useSelector((store) => store.general)
  const { codeIsOpen, subscriber } = useSelector((store) => store.subscriber)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  // const [codeIsOpen, setCodeIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createSubscriber({ email }))
    // setCodeIsOpen(true)
  }

  const handleSendCode = (e) => {
    e.preventDefault()
    dispatch(verifyEmail({ verificationCode: code }))
    // setCodeIsOpen(false)
  }

  useEffect(() => {
    if (subscriber?.subscriber.isVerified) {
      setEmail('')
      setCode('')
    }
  }, [subscriber])

  // console.log(subscriber?.subscriber)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>Subscribe to my periodic news letter</h2>
        {!codeIsOpen && (
          <section>
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit'>Subscribe</button>
            </form>
          </section>
        )}
        {codeIsOpen && (
          <div>
            <form onSubmit={handleSendCode}>
              <input
                type='number'
                placeholder='code sent to your email'
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <article>
                <button type='button'>Resend</button>
                <button type='submit'>Verify</button>
              </article>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
export default Subscribe
