import React from 'react'
import "./MetamaskModal.scss"

import close from "../../assets/img/modal_close.png"
import MM_Icon from "../../assets/img/MM-Icon.png"

export default function MetamaskModal({ setshowModal, setshowAlert }) {

    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        console.log('Install MetaMask please!')
    }

    /*
     // This function detects most providers injected at window.ethereum
    import detectEthereumProvider from '@metamask/detect-provider';
    
    const provider = await detectEthereumProvider();
    
    if (provider) {
      // From now on, this should always be true:
      // provider === window.ethereum
      startApp(provider); // initialize your app
    } else {
      console.log('Please install MetaMask!');
    }
    */

    // const addresses: string[] = await window.ethereum.request({method: 'eth_requestAccounts'});



    async function addresses_f() {
        const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' })
        // const addresses: string[] = await window.ethereum.request({method: 'eth_requestAccounts'});
        return addresses;
    }

    function get_address_from_cookie() {
        var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)wallet\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        if (cookieValue) {
            let substring = cookieValue.substring(6, cookieValue.length - 6)
            let cookieValue_arr = cookieValue.split(substring)
            cookieValue = cookieValue_arr[0] + "..." + cookieValue_arr[1]
            //console.log(cookieValue_arr)

            return cookieValue
        }
    }

    let cookie_val = get_address_from_cookie()

    if (cookie_val) {
        document.querySelector('.white_paper span').textContent = cookie_val
    }



    return (
        <div className="modal_window">
            <div className="modal_close" onClick={() => setshowModal(false)}>
                <img src={close} alt=""/>
            </div>

            <h3>Choose wallet</h3>
            <div className="modal_metamask" onClick={() => {
                if (typeof window.ethereum !== 'undefined') {
                    console.log('MetaMask is installed!');
                    let user_address = addresses_f();
                    console.log(user_address)
                    user_address.then(function (value) {
                        console.log(`Из промиса получены данные: ${value}`);
                        document.cookie = "wallet=" + value + ";" + "max-age=60";
                        document.querySelector('.white_paper span').textContent = get_address_from_cookie()
                        console.log(get_address_from_cookie())
                    })
                } else {
                    console.log('Install MetaMask please!')
                    setshowAlert(true)
                    setTimeout(() => {
                        setshowAlert(false)
                    }, 2000);
                    // fail
                }
                
            }}>
                <div className="modal_metamask_img">
                    <img src={MM_Icon} alt=""/>
                </div>
                <span className="modal_metamask_text">Connect Metamask</span>
            </div>
        </div>
    )
}
