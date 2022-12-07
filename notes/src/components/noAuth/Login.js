import { loginWithGoogle } from '../../lib/authWithGoogle.js'

export default function Login(props) {
    return (
        <div className='font'> Welcome to
            <img src="https://i.postimg.cc/Y9S7rgg4/NOTES1.png" alt="" />
            <img className="google-logo" src="https://i.postimg.cc/c1Trf3qD/btn-google-signin-light-normal-web.png" alt="" onClick={() =>
                loginWithGoogle()
                    .then(user => console.log(user))
                    .catch(error => console.log(error))} />
        </div>
    )

};